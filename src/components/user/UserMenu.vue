<script setup>
import { ref } from 'vue';

const emit = defineEmits(["changeComponent"]);

const selectedOption = ref('profile-setting'); // Default selected option

const menuClicked = option => {
    emit("changeComponent", option);
    selectedOption.value = option; // Update the selected option
};
</script>

<template>
    <div class="col-2">
        <h3 class="py-3">Settings</h3>
        <a @click="menuClicked('profile-setting')"
            :class="['d-block text-decoration-none text-black py-3 ms-3', selectedOption === 'profile-setting' ? 'fw-semibold' : '']" class="cursor-pointer my-2">
            Profile Settings
        </a>
        <a @click="menuClicked('change-password')"
            :class="['d-block text-decoration-none text-black py-3 ms-3', selectedOption === 'change-password' ? 'fw-semibold' : '']" class="cursor-pointer my-2">
            Change Password
        </a>
        <a @click="menuClicked('add-product')"
            :class="['d-block text-decoration-none text-black py-3 ms-3', selectedOption === 'add-product' ? 'fw-semibold' : '']" class="cursor-pointer my-2">
            Add New Products
        </a>
        <a @click="menuClicked('transaction-history')"
            :class="['d-block text-decoration-none text-black py-3 ms-3', selectedOption === 'transaction-history' ? 'fw-semibold' : '']" class="cursor-pointer my-2">
            Transaction History
        </a>
    </div>
</template>
