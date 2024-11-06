<template>
    <div class="d-flex align-items-center my-2">
        <img :src="product.imageLink" :alt="product.name" class="me-3 rounded" width="100" height="100">
        <div class="w-100">
            <p class="mb-0">{{ product.category }}</p>
            <div class="h-50">
                <h4 class="fs-5 mb-0">{{ product.name }}</h4>
            </div>
            <slot></slot>
        </div>
        <div class="d-flex flex-column border-start m-3">
            <button class="btn btn-danger px-2 py-1 m-2 rounded-pill" @click="$emit('btnRemove')">{{ buttonName[0] }}</button>
            <button class="btn btn-primary px-2 py-1 m-2 rounded-pill" @click="$emit('btnEdit')">{{ buttonName[1] }}</button>
        </div>
    </div>
</template>

<script setup>
defineProps({
    product: { type: Boolean, default: true },
    buttonName: { type: Array, require: true },
});
</script>