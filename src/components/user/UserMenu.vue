<script setup>
const emit = defineEmits(["changeComponent"]);

const menuClicked = option => {
    emit("changeComponent", option);
};
</script>

<template>
    <div class="col-2">
        <h3 class="py-3">Settings</h3>
        <a @click="menuClicked('profile-setting')"
            class="d-block text-decoration-none text-black fw-semibold py-3 ms-3">Profile Settings</a>
        <a @click="menuClicked('change-password')" class="d-block text-decoration-none text-black py-3 ms-3">Change
            Password</a>
        <a @click="menuClicked('transaction-history')"
            class="d-block text-decoration-none text-black py-3 ms-3">Transaction History</a>
    </div>
</template>