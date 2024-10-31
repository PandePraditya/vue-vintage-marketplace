<script setup>
    import BaseInput from '../ui/BaseInput.vue';
    import BaseButton from '../ui/BaseButton.vue';
    import { reactive } from "vue";
    import { useStore } from "vuex";
    import { useRouter } from "vue-router";

    const store = useStore();
    const router = useRouter();

    const loginData = reactive({
        email: "",
        password: "",
        isLogin: true,
    });

    const login = async () => {
        await store.dispatch("auth/getLoginData", loginData);
        router.push("/");
    };

</script>

<template>
        <main class="p-5">
        <!-- Login Form -->
        <div class="container-md">
            <div class="row justify-content-center">
                <div class="card w-40 w-md-50">
                    <div class="card-body">
                        <h4 class="py-2">Log In</h4>
                        <p>Enter your details below</p>
                        <form @submit.prevent="login">
                            <div class="mb-3">
                                <base-input
                                    type="email" identity="email" placeholder="Enter your email" label="Email" v-model="loginData.email">
                                </base-input>
                            </div>
                            <div class="mb-3">
                                <base-input
                                    type="password" identity="password" placeholder="Enter your password" label="Password" v-model="loginData.password">
                                </base-input>
                            </div>
                            <base-button class="btn btn-teal w-100">Log In</base-button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>