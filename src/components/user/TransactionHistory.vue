<template>
    <transactions-detail :transactions="transactionList"></transactions-detail>
</template>

<script setup>
    import TransactionsDetail from '../transactions/TransactionsDetail.vue';
    import { onMounted, ref } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();
    const transactionList = ref();

    onMounted( async () => {
        try {
            await store.dispatch("product/getTransactionsData");
            transactionList.value = store.state.product.transactions;
        } catch (err) {
            console.log(err);
        }
    });
</script>