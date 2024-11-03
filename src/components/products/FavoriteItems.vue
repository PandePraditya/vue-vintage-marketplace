<template>
    <div class="p-4">
        <div class="d-flex justify-content-between border-bottom border-1 pb-3">
            <h4 class="">Favorite Items</h4>
            <p>You dont have any favorite items yet</p>
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center p-3">
            <img src="../../assets/images/folder-favorite.png" alt="favorite">
            <h4>No favorite items yet</h4>
            <p>When add to favorite, it will appear here</p>
            <base-button class="btn btn-teal w-25" @click="goToProducts">Shop Now</base-button>
        </div>
    </div>
</template>

<script setup>
    import BaseButton from '../ui/BaseButton.vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const goToProducts = () => {
        router.push('/products');
    }
</script>