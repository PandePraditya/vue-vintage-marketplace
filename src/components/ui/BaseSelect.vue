<template>
    <label :for="identity" class="fw-semibold">
        {{ label }} <span style="color: #cb3a31;">*</span>
        <slot></slot>
    </label>
    <select class="form-select" :id="id" @input="$emit('update:modelValue', $event.target.value)">
        <option v-for="(item, index) in data" :key="index" :value="item" :selected="modelValue === item">{{ item }}
        </option>
    </select>
</template>

<script setup>
defineProps({
    data: { type: Array, require: true, },
    id: { type: String, require: true, },
    label: { type: String, require: true, },
    modelValue: { type: [String, Number] },
});
</script>