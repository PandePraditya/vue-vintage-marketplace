<template>
    <div class="col-10 w-50 bg-white border rounded-3 p-3">
        <p class="text-secondary">Change Password</p>
        <form class="py-3" @submit.prevent="changePassword">
            <div class="mb-3">
                <base-input type="password" identity="password" placeholder="Enter your password" label="Old Password"
                    v-model="passwordData.oldPassword" aria-disabled="true">
                </base-input>
            </div>
            <div class="mb-3">
                <base-input type="password" identity="new-password" placeholder="Enter your new password"
                    label="New Password" v-model="passwordData.newPassword" @keyInput="newPasswordCheck">
                </base-input>
                <p class="text-danger mt-1 fw-semibold" style="font-size: 11px;" :style="{ display: newPasswordStatusDisplay }">The password must be at least 8 characters</p>
            </div>
            <div class="mb-3">
                <base-input type="password" identity="confirmPassword" placeholder="Confirm your password"
                    label="Password Confirmation" v-model="passwordData.confirmPassword"
                    @keyInput="confirmNewPasswordCheck">
                </base-input>
                <p class="text-danger mt-1 fw-semibold" style="font-size: 11px;" :style="{ display: newPassDoesNotMatch }">
                    The password confirmation does not match
                </p>
                <p class="text-success mt-1 fw-semibold" style="font-size: 11px;" :style="{ display: newPassMatch }">
                    The password confirmation does match
                </p>
            </div>
            <base-button class="btn btn-teal float-end">Update Profile</base-button>
        </form>
    </div>
</template>

<script setup>
import BaseInput from '../ui/BaseInput.vue';
import BaseButton from '../ui/BaseButton.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';
// import { useRouter } from 'vue-router';

const store = useStore();
// const router = useRouter();

const passwordData = ref({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
});

// Confirm Password Check
const newPasswordStatusDisplay = ref("none");
const newPasswordCheck = () => {
    if (passwordData.value.newPassword.length < 8) {
        newPasswordStatusDisplay.value = "block";
    } else {
        newPasswordStatusDisplay.value = "none";
    }
};

// Confirm Password The same as Password
const newPassDoesNotMatch = ref("none");
const newPassMatch = ref("none");
const confirmNewPasswordCheck = () => {
    if (passwordData.value.confirmPassword === "") {
        newPassDoesNotMatch.value = "none";
        newPassMatch.value = "none";
    } else if (passwordData.value.newPassword !== passwordData.value.confirmPassword) {
        newPassDoesNotMatch.value = "block";
        newPassMatch.value = "none";
    } else {
        newPassDoesNotMatch.value = "none";
        newPassMatch.value = "block";
    }
};

const changePassword = async () => {
    if (passwordData.value.newPassword !== passwordData.value.confirmPassword || passwordData.value.newPassword.length < 8) {
        passwordData.value.confirmPassword = null;
        passwordData.value.newPassword = null;
        newPasswordStatusDisplay.value = "block";
        newPassDoesNotMatch.value = "block";
        newPassMatch.value = "none";
    } else {
        await store.dispatch("auth/updatePassword", passwordData.value);
    }
};
</script>
