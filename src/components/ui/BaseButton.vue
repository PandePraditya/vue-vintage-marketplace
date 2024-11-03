<template>
    <button class="btn btn-teal" @click="$emit('clickButton')">
        <slot></slot>
    </button>
</template>