<template>
    <button class="btn btn-teal w-100" @click="$emit('clickButton')">
        <slot></slot>
    </button>
</template>