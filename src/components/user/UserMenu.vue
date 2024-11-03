<script setup>
import { ref } from 'vue';

const emit = defineEmits(["changeComponent"]);

// Reactive state to track the currently selected option
const selectedOption = ref('profile-setting');

const menuClicked = option => {
    emit("changeComponent", option);
    selectedOption.value = option; // Update the selected option
};
</script>

<template>
    <div class="col-2">
        <h3 class="py-3">Settings</h3>
        <a @click="menuClicked('profile-setting')"
            :class="['d-block text-decoration-none text-black py-3 ms-3', selectedOption === 'profile-setting' ? 'fw-semibold' : '']" class="cursor-pointer">
            Profile Settings
        </a>
        <a @click="menuClicked('change-password')"
            :class="['d-block text-decoration-none text-black py-3 ms-3', selectedOption === 'change-password' ? 'fw-semibold' : '']" class="cursor-pointer">
            Change Password
        </a>
        <a @click="menuClicked('transaction-history')"
            :class="['d-block text-decoration-none text-black py-3 ms-3', selectedOption === 'transaction-history' ? 'fw-semibold' : '']" class="cursor-pointer">
            Transaction History
        </a>
    </div>
</template>
