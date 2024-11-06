<script setup>
    import BaseButton from '../ui/BaseButton.vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    defineProps({
        transactions: Array,
    });

    const buyAgain = () => {
        router.push("/");
    };
</script>

<template>
    <div class="bg-white border border-1 rounded-3 p-4 w-75">
        <p class="text-secondary">Transaction History</p>
        <div v-if="!transactions || transactions.length === 0">
            <p>No transactions found.</p>
        </div>
        <div v-else>
            <div v-for="transaction in transactions" :key="transaction.id">
                <div v-for="item in transaction.items" :key="item.name" class="my-3 border border-2 rounded-3 p-3">
                    <div class="d-flex align-items-center">
                        <i class="fa-solid fa-bag-shopping text-teal mx-3 mb-3 fs-5"></i>
                        <p class="fw-semibold me-3">Shopping <span class="badge text-bg-success rounded-pill">Done</span></p>
                        <p class="text-secondary">Transaction ID: {{ transaction.id }}</p>
                    </div>
                    <div class="d-flex align-items-center p-2">
                        <img :src="item.imageLink" :alt="item.naame" width="150" class="rounded-2">
                        <div class="card-body mx-3">
                            <h5 class="card-title">{{ item.name }}</h5>
                            <p class="card-text">Size: {{ item.size }}</p>
                            <p class="card-text">Address: {{ transaction.address }}</p>
                        </div>
                        <div class="border-start border-2 px-4 py-3">
                            <p class="card-title text-secondary">Total Price </p>
                            <p class="card-text fw-semibold fs-5">Rp. {{ item.price }}</p>
                        </div>
                    </div>
                    <div class="border-top border-2 text-end mt-3 pt-3">
                        <base-button class="btn btn-teal w-25" @click="buyAgain">Buy Again</base-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>