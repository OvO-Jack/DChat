<template>
    <div class="wrapper">
        <div class="main">
            <div class="logo">
                <img src="@/../public/image.png" alt="DChat" />
            </div>
            <div class="title">
                <p>New to DChat</p>
            </div>
            <div class="form">
                <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules">
                    <el-form-item prop="email">
                        <label>Enter your email</label>
                        <el-input v-model="ruleForm.email" type="text" autocomplete="off" clearable />
                    </el-form-item>
                    <el-form-item prop="username">
                        <label>Enter a username</label>
                        <el-input v-model="ruleForm.username" type="text" autocomplete="off" clearable />
                    </el-form-item>
                    <el-form-item prop="password1">
                        <label>Create a password</label>
                        <el-input v-model="ruleForm.password1" type="password" autocomplete="off" clearable
                            show-password />
                    </el-form-item>
                    <el-form-item prop="password2">
                        <label>Checked password</label>
                        <el-input v-model="ruleForm.password2" type="password" autocomplete="off" clearable
                            show-password />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm(ruleFormRef)" class="submitBtn">
                            Sign Up
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="create_act">
                <p>Sign in to DChat?
                    <router-link to="/login">Sign In.</router-link>
                </p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { FormInstance, FormRules, ElMessage } from 'element-plus'
import { useRouter } from 'vue-router';
let $router = useRouter();
import { registerFailResponseItem, registerFailResponse } from '@/api/user/type'
import { register } from '@/api/user/index'

const ruleFormRef = ref<FormInstance>()


const ruleForm = reactive({
    username: '',
    password1: '',
    password2: '',
    email: ''
})

const rules = reactive<FormRules<typeof ruleForm>>({
    email: [
        { required: true, message: '请输入邮箱', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
    ],
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
    ],
    password1: [{ required: true, message: '请输入密码', trigger: 'blur' },
    { min: 2, max: 12, message: '密码长度应在2到12位之间', trigger: 'blur' }
    ],
    password2: [
        { required: true, message: '请再次输入密码', trigger: 'blur' },
        {
            validator: (_, value: any, callback: any) => {
                if (value !== ruleForm.password1) {
                    callback(new Error('两次输入的密码不一致'))
                } else {
                    callback()
                }
            }, trigger: 'blur'
        }
    ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) {
        ElMessage.error('请确保输入信息正确');
        return
    }
    formEl.validate(async (valid) => {
        if (valid) {
            const res = await register(ruleForm);
            if (res && res.code === 200) {
                ElMessage.success('注册成功');

                $router.push('/login')

            } else {
                handleLoginFailure(res)
            }
        } else {
            ElMessage.error('请完善填写数据');
        }
    })
}
//处理登录失败的响应
const handleLoginFailure = (res: registerFailResponse) => {
    if (Array.isArray(res.data)) {
        let message = '';
        res.data.forEach((item: registerFailResponseItem, index: number) => {
            // 如果不是第一个消息，则添加逗号分隔符
            if (index > 0) {
                message += ', ';
            }
            // 将当前消息拼接到 message 中
            message += item.msg;
        });
        ElMessage.error(message);
    } else {
        ElMessage.error(res.data);
    }
};
</script>
<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    outline: none;
    font-family: 'Open Sans', sans-serif;
}

body {
    font-size: 14px;
    background-color: #f9f9f9;
}

a {
    color: #0366d6;
}

.wrapper {
    height: 100vh;
    padding: 0;
    margin: 0;
    display: flex;
    /* 水平居中 */
    justify-content: center;
    /* 垂直居中 */
    align-items: center;

    .main {
        max-width: 350px;

        label {
            font-size: 16px;
            padding-top: 15px;
        }
    }
}

.wrapper .logo img {
    display: block;
    width: 60px;
    height: 60px;
    margin: 0 auto 25px;
}

.wrapper .title p {
    margin-bottom: 15px;
    font-size: 24px;
    text-align: center;
    color: #333;
}

.wrapper .form {
    margin-bottom: 15px;
    background-color: #fff;
    border: 1px solid #d8dee2;
    border-radius: 5px;
    padding: 20px;
}

.wrapper .create_act {
    border: 1px solid #d8dee2;
    border-radius: 5px;
    padding: 15px 20px;
    text-align: center;
    margin-bottom: 40px;
}

.wrapper .create_act a:hover {
    text-decoration: underline;
}

.submitBtn {
    width: 100%;
    margin-top: 40px;
    height: 35px;
    line-height: 35px;
    font-weight: 600;
    background-color: rgba(243, 104, 58, 0.908);
    border: none;
}
</style>
