<template>
    <product-description></product-description>
    <other-product></other-product>
</template>

<script setup>
    import ProductDescription from './ProductDescription.vue';
    import OtherProduct from './OtherProduct.vue';
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { useStore } from 'vuex';

    const route = useRoute();
    const store = useStore();

    onMounted(() => {
        store.dispatch("product/getProductDetail", route.params.id);
    });
</script>