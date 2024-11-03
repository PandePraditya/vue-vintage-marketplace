<template>
    <product-menu :products="productMenu"></product-menu>
</template>

<script setup>
    // eslint-disable-next-line no-unused-vars
    import ProductMenu from '../products/ProductMenu.vue';
    import { onMounted, ref } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();
    const productMenuStatus = ref(false);
    const productMenu = ref();

    onMounted( async () => {
        try {
            await store.dispatch("product/getProductData");
            productMenuStatus.value = true;
            productMenu.value = store.state.product.products;
        } catch (err) {
            console.log(err);
        }
    });
</script>