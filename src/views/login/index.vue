<template>
    <div class="wrapper">
        <div class="main">
            <div class="logo">
                <img src="@/../public/image.png" alt="DChat" />
            </div>
            <div class="title">
                <p>Sign in to DChat</p>
            </div>
            <div class="form">
                <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules">
                    <el-form-item prop="account">
                        <label>Username or email address</label>
                        <el-input v-model="ruleForm.account" type="text" autocomplete="off" clearable />
                    </el-form-item>
                    <el-form-item prop="password">
                        <label>Password</label>
                        <el-input v-model="ruleForm.password" type="password" autocomplete="off" clearable
                            show-password />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm(ruleFormRef)" class="submitBtn">
                            Sign In
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="create_act">
                <p>New to DChat?
                    <router-link to="/register">Create an account.</router-link>
                </p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useLogin } from './composables/useLogin';
const {
    ruleFormRef,
    ruleForm,
    rules,
    submitForm
} = useLogin();
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
