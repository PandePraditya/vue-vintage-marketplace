<template>
    <component :is="component[menuComponent]"></component>
</template>

<script setup>
    import AuthMenu from './AuthMenu.vue';
    import ProfileMenu from './ProfileMenu.vue';
    import { computed, ref, watch } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();
    const menuComponent = ref("auth-menu");

    const component = {
        "auth-menu": AuthMenu,
        "profile-menu": ProfileMenu,
    };

    const getToken = computed(() => {
        return store.state.auth.token;
    });

    if(!getToken.value) {
        menuComponent.value = "auth-menu";
    } else {
        menuComponent.value = "profile-menu";
    }

    // Watch for token changes
    watch(getToken, (newValue) => {
        if (!newValue) {
            menuComponent.value = "auth-menu";
        } else {
            menuComponent.value = "profile-menu";
        }
    });

</script>