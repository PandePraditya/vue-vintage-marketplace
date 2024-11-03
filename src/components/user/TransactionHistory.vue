<template>
    <div class="col-10 w-50 bg-white border rounded-3 p-3">
        <p class="text-secondary">My Order</p>
        <div class="d-flex flex-column justify-content-center align-items-center pb-3">
            <img src="../../assets/images/bag.png" alt="">
            <h4>No orders yet</h4>
            <p>When you buy an item, it will appear here</p>
            <base-button class="btn btn-teal w-50" @click="goToProducts">Shop Now</base-button>
        </div>
    </div>
</template>

<script setup>
    import BaseButton from '../ui/BaseButton.vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const goToProducts = () => {
        router.push('/products');
    };
</script>