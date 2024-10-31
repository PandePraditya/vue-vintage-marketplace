<script setup>
    import BaseInput from '../ui/BaseInput.vue';
    import BaseButton from '../ui/BaseButton.vue';
    import { ref } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';

    const store = useStore();
    const router = useRouter();

    const signupData = ref({
        fullname: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        isLogin: false,
    });

    // Confirm Password Check
    const passwordStatusDisplay = ref("none");
    const passwordCheck = () => {
        if (signupData.value.password.length < 8) {
            passwordStatusDisplay.value = "block";
        } else {
            passwordStatusDisplay.value = "none";
        }
    };

    // Confirm Password The same as Password
    const passDoesNotMatch = ref("none");
    const passMatch = ref("none");
    const confirmPasswordCheck = () => {
        if (signupData.value.confirmPassword === "") {
            passDoesNotMatch.value = "none";
            passMatch.value = "none";
        } else if (signupData.value.password !== signupData.value.confirmPassword) {
            passDoesNotMatch.value = "block";
            passMatch.value = "none";
        } else {
            passDoesNotMatch.value = "none";
            passMatch.value = "block";
        }
    };

    const register = async () => {
    if (signupData.value.password !== signupData.value.confirmPassword || signupData.value.password.length < 8) {
        signupData.value.confirmPassword = "";
        signupData.value.password = "";
        passDoesNotMatch.value = "none";
        passMatch.value = "none";
    } else {
        await store.dispatch("auth/getRegisterData", signupData.value);
        router.push("/");
    }
};


</script>

<template>
    <main class="p-5">
        <!-- Login Form -->
        <div class="container-md">
            <div class="row justify-content-center">
                <div class="card w-40 w-md-50 ">
                    <div class="card-body">
                        <h4 class="py-2">Sign Up</h4>
                        <p>Enter your details below</p>
                        <form @submit.prevent="register">
                            <!-- Full Name -->
                            <div class="mb-3">
                                <base-input
                                    type="text" identity="fullname" label="Fullname" placeholder="Enter your full name" v-model="signupData.fullname">
                                </base-input>
                            </div>
                            <!-- Username -->
                            <div class="mb-3">
                                <base-input
                                    type="text" identity="username" label="Username" placeholder="Enter your username" v-model="signupData.username">
                                </base-input>
                            </div>
                            <!-- Email -->
                            <div class="mb-3">
                                <base-input
                                    type="email" identity="email" label="Email" placeholder="Enter your email" v-model="signupData.email">
                                </base-input>
                            </div>
                            <!-- Password -->
                            <div class="mb-3">
                                <base-input
                                    type="password" 
                                    identity="password" 
                                    label="Password" 
                                    placeholder="Enter your password"
                                    v-model="signupData.password" @keyInput="passwordCheck">
                                </base-input>
                                <p class="text-danger mt-1 fw-semibold" style="font-size: 11px;" :style="{ display: passwordStatusDisplay }">
                                    The password must be at least 8 characters
                                </p>
                            </div>
                            <!-- Confirmation Password -->
                            <div class="mb-3">
                                <base-input
                                    type="password" 
                                    identity="confirmpassword" 
                                    label="Confirm Password" 
                                    placeholder="Confirm your password"
                                    v-model="signupData.confirmPassword"
                                    @keyInput="confirmPasswordCheck">
                                </base-input>
                                <p class="text-danger mt-1 fw-semibold" style="font-size: 11px;" :style="{ display: passDoesNotMatch }">
                                    The password confirmation does not match
                                </p>
                                <p class="text-success mt-1 fw-semibold" style="font-size: 11px;" :style="{ display: passMatch }">
                                    The password confirmation does match
                                </p>
                            </div>
                            <!-- Checkbox -->
                            <div class="mb-3 d-flex align-items-baseline">
                                <input type="checkbox" class="me-2"> 
                                <label for="checkbox">
                                    By Clicking Sign Up, I hereby agree and consent to <a href="#" class="text-teal text-decoration-none">Terms & Conditions</a> and i confirm that i have read <a href="#" class="text-teal text-decoration-none"> Privacy Policy</a>
                                </label>
                            </div>
                            <!-- SignUp -->
                            <base-button class="btn btn-teal w-100">Sign Up</base-button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>