<script setup>
defineProps({
    products: Array,
});
</script>

<template>
    <div class="col-12 d-flex flex-wrap justify-content-center align-items-center">
        <router-link to="/product" class="card me-2 mt-2 text-decoration-none" style="width: 16rem;" v-for="(product, index) in products.slice(0, 5)" :key="index">
            <img :src="product.imageLink" class="card-img-top" alt="Black Shirt">
            <div class="card-body">
                <h5 class="card-title text-teal fw-bold">Rp. {{ product.price }}</h5>
                <p class="card-text text-secondary">{{ product.name }}</p>
                <div class="d-flex justify-content-between align-items-center" style="margin-bottom: -15px;">
                    <p class="text-dark">{{ product.size }}</p>
                    <p class="text-dark">♥ 12</p>
                </div>
            </div>
        </router-link>
    </div>
</template>