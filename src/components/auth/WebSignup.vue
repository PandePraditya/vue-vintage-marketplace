<script setup>
import BaseInput from '../ui/BaseInput.vue';
import BaseButton from '../ui/BaseButton.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const showModal = ref(false);

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
        passDoesNotMatch.value = "block";
        passMatch.value = "none";
    } else {
        await store.dispatch("auth/getRegisterData", signupData.value);
        showModal.value = true;
    }
};

const goToHome = () => {
    router.push("/");
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
                                <base-input type="text" identity="fullname" label="Fullname"
                                    placeholder="Enter your full name" v-model="signupData.fullname">
                                </base-input>
                            </div>
                            <!-- Username -->
                            <div class="mb-3">
                                <base-input type="text" identity="username" label="Username"
                                    placeholder="Enter your username" v-model="signupData.username">
                                </base-input>
                            </div>
                            <!-- Email -->
                            <div class="mb-3">
                                <base-input type="email" identity="email" label="Email" placeholder="Enter your email"
                                    v-model="signupData.email">
                                </base-input>
                            </div>
                            <!-- Password -->
                            <div class="mb-3">
                                <base-input type="password" identity="password" label="Password"
                                    placeholder="Enter your password" v-model="signupData.password"
                                    @keyInput="passwordCheck">
                                </base-input>
                                <p class="text-danger mt-1 fw-semibold" style="font-size: 11px;"
                                    :style="{ display: passwordStatusDisplay }">
                                    The password must be at least 8 characters
                                </p>
                            </div>
                            <!-- Confirmation Password -->
                            <div class="mb-3">
                                <base-input type="password" identity="confirmpassword" label="Confirm Password"
                                    placeholder="Confirm your password" v-model="signupData.confirmPassword"
                                    @keyInput="confirmPasswordCheck">
                                </base-input>
                                <p class="text-danger mt-1 fw-semibold" style="font-size: 11px;"
                                    :style="{ display: passDoesNotMatch }">
                                    The password confirmation does not match
                                </p>
                                <p class="text-success mt-1 fw-semibold" style="font-size: 11px;"
                                    :style="{ display: passMatch }">
                                    The password confirmation does match
                                </p>
                            </div>
                            <!-- Checkbox -->
                            <div class="mb-3 d-flex align-items-baseline">
                                <input type="checkbox" class="me-2">
                                <label for="checkbox">
                                    By Clicking Sign Up, I hereby agree and consent to <a href="#"
                                        class="text-teal text-decoration-none">Terms & Conditions</a> and i confirm that
                                    i have read <a href="#" class="text-teal text-decoration-none"> Privacy Policy</a>
                                </label>
                            </div>
                            <!-- SignUp -->
                            <base-button class="btn btn-teal w-100">Sign Up</base-button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Structure -->
        <div v-if="showModal" class="custom-modal-overlay">
            <div class="custom-modal">
                <div class="p-3 text-center">
                    <!-- Modal content goes here -->
                    <img src="../../assets/images/success-img.png" alt="Success">
                    <h4>You have successfully signed up</h4>
                    <p>Thank you for register at vintage. Start find your favorite pre-loved product here.</p>
                </div>
                <div class="custom-modal-footer justify-content-center">
                    <button type="button" class="teal-btn w-75" @click="goToHome">Go to home page</button>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
/* Overlay to darken the background */
.custom-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

/* Modal box styling */
.custom-modal {
    width: 90%;
    max-width: 500px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.3s ease;
}

.custom-modal-footer {
    padding: 16px;
    display: flex;
    align-items: center;
}

.custom-modal-footer {
    border-top: 1px solid #ddd;
}

/* Button styles */
.teal-btn {
    padding: 8px 16px;
    margin: 4px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    background-color: #099497;
    color: #fff;
}

.teal-btn:hover {
    background-color: #fff;
    border: 1px solid #099497;
    color: #099497;
}


/* Animation for modal */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.95);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>