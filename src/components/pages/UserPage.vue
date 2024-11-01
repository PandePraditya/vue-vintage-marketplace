<script setup>
import UserMenu from '../user/UserMenu.vue';
import ProfileSetting from '../user/ProfileSetting.vue';
import ChangePassword from '../user/ChangePassword.vue';
import TransactionHistory from '../user/TransactionHistory.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const component = {
    "profile-setting": ProfileSetting,
    "change-password": ChangePassword,
    "transaction-history": TransactionHistory
};

const getRoute = computed(() => {
    return route.params.component;
});

</script>

<template>
    <main class="container-fluid p-5">
        <div class="d-flex justify-content-center">
            <user-menu @changeComponent="$router.push($event)"></user-menu>
            <component :is="component[getRoute]"></component>
        </div>
    </main>
</template>