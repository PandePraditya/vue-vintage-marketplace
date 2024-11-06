<template>
    <product-form 
        :isEdit="isEdit"
        :detailData="detailData">
    </product-form>
</template>

<script setup>
    import ProductForm from '../ProductForm/ProductForm.vue';

    defineProps({
        isEdit: { type: Boolean, default: false },
        detailData: { type: Object, default: () => ({}) },
    });
</script>