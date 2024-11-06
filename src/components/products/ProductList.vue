<script setup>
// import { computed } from "vue";

defineProps({
    products: Array,
});

// const sortProducts = computed(() => {
//     // Sort product so only 4 show up
//     return props.products && props.products.length > 0 ? props.products.slice(0, 4) : [];
// });
</script>

<template>
    <div class="col-12 d-flex flex-wrap justify-content-center align-items-center">
        <router-link :to="`/product/${product.id}`" class="card me-2 mt-2 text-decoration-none" style="width: 16rem;" v-for="(product, index) in products" :key="index" v-show="index < 4">
            <img :src="product.imageLink" class="card-img-top" :alt="product.name">
            <div class="card-body">
                <h5 class="card-title text-teal fw-bold">Rp. {{ product.price }}</h5>
                <p class="card-text text-secondary" style="min-height: 3em;">{{ product.name }}</p>
                <div class="d-flex justify-content-between align-items-center" style="margin-bottom: -15px;">
                    <p class="text-dark">8 / {{ product.size }}</p>
                    <p class="text-dark">♥ 12</p>
                </div>
            </div>
        </router-link>
        <router-link to="/products" class="card d-none d-md-flex card-see-product me-2 mt-2 text-decoration-none h-100" style="width: 16rem;">
            <div class="card-body d-flex justify-content-center align-items-center">
                <h5 class="text-teal w-50 text-center">See All Product</h5>
            </div>
        </router-link>
    </div>
</template>

<style scoped>
    .card-see-product {
        background-color: #eafeff;
    }
</style>