<template>
    <main>
        <div class="container-md m-5 p-5">
            <add-product
                v-if="detailData && !isLoading"
                :isEdit="true"
                :detailData="detailData">
            </add-product>
        </div>
    </main>
</template>

<script setup>
    import AddProduct from '../user/AddProduct.vue';
    import { onMounted, ref } from 'vue';
    import { useStore } from 'vuex';
    import { useRoute } from 'vue-router';

    const store = useStore();
    const route = useRoute();
    const detailData = ref();
    const isLoading = ref(false);

    onMounted( async () => {
        try {
            isLoading.value = true;
            await store.dispatch("product/getProductDetail", route.params.id);
            detailData.value = store.state.product.productDetail;
            isLoading.value = false;
        } catch (err) {
            console.log(err);
        }
    });
</script>