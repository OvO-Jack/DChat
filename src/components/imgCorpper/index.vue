<template>
    <div class="avatar-container" @click="editImage()">
        <el-dialog :title="title" :model-value="dialogVisibleCorpper" width="800px" append-to-body @opened="openDialog"
            :before-close="beforeClose">
            <el-row>
                <el-col :span="12" style="height: 300px">
                    <vue-cropper ref="cropper" :img="options.img" :info="true" :autoCrop="options.autoCrop"
                        :autoCropWidth="options.autoCropWidth" :autoCropHeight="options.autoCropHeight"
                        :fixedBox="options.fixedBox" :outputType="options.outputType" @realTime="realTime"
                        v-if="showCropper" />
                </el-col>
                <el-col :span="12" style="height: 300px">
                    <div class="preview-box">
                        <img v-if="previews.url" :src="previews.url" :style="previews.img" />
                        <span v-else></span>
                    </div>
                </el-col>
            </el-row>
            <el-row style="margin-top: 12px">
                <el-col :span="12">
                    <el-row>
                        <el-col :span="8">
                            <el-upload action="#" :http-request="() => { }" :before-upload="beforeUpload"
                                :show-file-list="false">
                                <el-button>选择</el-button>
                            </el-upload>
                        </el-col>
                        <el-col :span="4">
                            <el-button :icon="Plus" @click="changeScale(1)"></el-button>
                        </el-col>
                        <el-col :span="4">
                            <el-button :icon="Minus" @click="changeScale(-1)"></el-button>
                        </el-col>
                        <el-col :span="4">
                            <el-button :icon="RefreshLeft" @click="rotateLeft()"></el-button>
                        </el-col>
                        <el-col :span="4">
                            <el-button :icon="RefreshRight" @click="rotateRight()"></el-button>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="4" :offset="8" style="margin-left: 22.3%">
                    <el-button type="primary" @click="determine()">提 交</el-button>
                </el-col>
            </el-row>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { Plus, Minus, RefreshLeft, RefreshRight } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import 'vue-cropper/dist/index.css'
import { VueCropper } from 'vue-cropper'
import { ref, reactive, defineProps, defineEmits, getCurrentInstance } from 'vue'
import { headimg, userInfoUpdate } from '@/api/user'
import useUserStore from '@/store/modules/user'
const userStore = useUserStore()

const props = defineProps({
    dialogVisibleCorpper: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        default: '上传图片',
    },
})

const showCropper = ref(false)

const options = reactive({
    img: null,
    autoCropWidth: 200,
    autoCropHeight: 200,
    outputType: 'png',
    autoCrop: true,
    fixedBox: false,
})

const previews = ref({
    url: '',
})

const cropper = ref<VueCropper | null>(null)

const openDialog = () => {
    showCropper.value = true
}

const changeScale = (num: number) => {
    if (cropper.value) {
        cropper.value.changeScale(num)
    }
}

const rotateLeft = () => {
    if (cropper.value) {
        cropper.value.rotateLeft()
    }
}

const rotateRight = () => {
    if (cropper.value) {
        cropper.value.rotateRight()
    }
}

const beforeUpload = (rawFile: File) => {
    if (rawFile.type.indexOf('image/') == -1) {
        ElMessage.error('请上传图片类型文件!')
        return false
    }
    if (rawFile.size / 1024 / 1024 > 50) {
        ElMessage.error('文件大小不能超过50MB!')
        return false
    }
    const reader = new FileReader()
    reader.readAsDataURL(rawFile)
    reader.onload = () => {
        options.img = reader.result as string
    }
}

const realTime = (data: { url: string, img: string }) => {
    previews.value = data
}

const emit = defineEmits(['update:dialogVisibleCorpper', 'confirm'])

const beforeClose = () => {
    options.img = null
    previews.value.url = ''
    emit('update:dialogVisibleCorpper', false)
}

const determine = async () => {
    if (!previews.value.url) {
        ElMessage.error('请先上传图片!')
        return
    }

    // 检查是否为 Blob URL
    if (previews.value.url.startsWith('blob:')) {
        const blob = await fetch(previews.value.url).then(res => res.blob());
        previews.value.url = await blobToDataURL(blob);
    }

    try {
        const formData = new FormData();
        formData.append('headimg', dataURLtoBlob(previews.value.url));

        const res = await headimg(formData)
        console.log(res);

        if (res.code === 200) {
            await userImgUpdate(res.data.filepath)
            emit('confirm', res.data.filepath);
        } else {
            ElMessage.error(res.data.error);
        }
    } catch (error) {
        ElMessage.error('上传失败: ' + error.message);
    }

    // 清空操作
    options.img = null;
    previews.value.url = '';
    emit('confirm');
}

const dataURLtoBlob = (dataURL: string): Blob => {
    const arr = dataURL.split(',');
    if (arr.length !== 2) {
        throw new Error('Invalid data URL');
    }
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}

const blobToDataURL = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result as string);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}
//修改用户头像
const userImgUpdate = async (filepath: string) => {
    try {
        const res = await userInfoUpdate({ image: filepath });
        if (res.code === 200) {
            //手动修改vuex里面的头像 可以不用刷新
            userStore.updateUserInfo({ image: res.data.image })
            ElMessage.success('头像修改成功');
        } else {
            ElMessage.error(res.data.error);
        }
    } catch (error) {
        ElMessage.error('用户头像修改失败: ' + error.message);
    }
}


</script>

<style lang="scss" scoped>
.avatar-container {
    .img-box {
        border-radius: 50%;
        border: 1px solid #ccc;
        width: 10vw;
        height: 10vw;
    }
}

.preview-box {
    position: absolute;
    top: 50%;
    transform: translate(50%, -50%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 1px solid #ccc;
    overflow: hidden;
}
</style>