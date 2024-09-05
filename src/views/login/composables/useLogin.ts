// src/composables/useLogin.ts
import { ref, reactive } from 'vue'
import { FormInstance, FormRules, ElMessage } from 'element-plus'
import { login } from '@/api/user/index'
import { loginFailResponse, loginFailResponseItem } from '@/api/user/type'
import { SET_TOKEN } from '@/utils/token' // 根据实际项目路径调整
import { useRouter } from 'vue-router'
import useUserStore from '@/store/modules/user'
const userStore = useUserStore()

export function useLogin() {
  const router = useRouter()

  // 表单引用和数据
  const ruleFormRef = ref<FormInstance>()
  const ruleForm = reactive({
    account: '',
    password: '',
  })

  // 表单验证规则
  const rules = reactive<FormRules<typeof ruleForm>>({
    account: [{ required: true, message: '请输出账号或邮箱', trigger: 'blur' }],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      {
        min: 2,
        max: 12,
        message: '请输入不少于2位不大于12位的密码',
        trigger: 'blur',
      },
    ],
  })

  // 登录表单提交事件
  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) {
      ElMessage.error('请确保输入信息正确')
      return
    }

    formEl.validate(async (valid) => {
      if (valid) {
        const res = await login(ruleForm)
        if (res && res.code === 200) {
          ElMessage.success('登录成功')
          // 存储token并跳转
          SET_TOKEN(res.data.token)

          //检测用户是否有头像，若没有头像，打开头像编辑器上传头像
          if (!res.data.image) {
            //如果没有头像
            userStore.dialogVisibleCorpper(true)
          }

          //跳转路由
          router.push('/home/chat/defaultRoom')
        } else {
          handleLoginFailure(res)
        }
      } else {
        ElMessage.error('请完善填写数据')
      }
    })
  }

  // 处理登录失败的响应
  const handleLoginFailure = (res: loginFailResponse) => {
    if (Array.isArray(res.data)) {
      let message = ''
      res.data.forEach((item: loginFailResponseItem, index: number) => {
        if (index > 0) {
          message += ', '
        }
        message += item.msg
      })
      ElMessage.error(message)
    } else {
      ElMessage.error(res.data)
    }
  }

  return {
    ruleFormRef,
    ruleForm,
    rules,
    submitForm,
  }
}
