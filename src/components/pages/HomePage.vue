<script setup>
    import ProductList from '../products/ProductList.vue'; // jangan dihapus
    import PRODUCT_DATA from "../../product.js";

    const productList = PRODUCT_DATA;
</script>

<template>
    <main class="container-fluid p-0 overflow-hidden">
        <!-- Background Image -->
        <div class="row bg-img vh-100 p-5">
            <div class="row align-items-center ms-5">
                <div class="col-lg-3 col-md-3 col-sm-5">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title mb-4">Ready to declutter your closet?</h4>
                            <a href="products.html" class="btn btn-teal w-100">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Products -->
        <div class="row p-5">
            <div class="d-flex justify-content-between align-items-center">
                <h3 class="py-3" style="margin-left: 50px;">Popular Item</h3>
                <a href="products.html" class="text-teal text-decoration-none" style="margin-right: 60px;">See All</a>
            </div>
            <!-- Popular Item -->
            <product-list :products="productList"></product-list>

            <!-- Shop by Brand -->
            <div class="pt-5">
                <h3 style="margin-left: 50px;">Shop by Brand</h3>
                <div class="d-flex justify-content-center flex-wrap my-3">
                    <div class="px-2 mb-2">
                        <input type="checkbox" class="btn-check" id="btn-check-outlined">
                        <label class="btn btn-category" for="btn-check-outlined">Vans</label>
                    </div>
                    <div class="px-2 mb-2">
                        <input type="checkbox" class="btn-check" id="btn-check-2-outlined">
                        <label class="btn btn-category" for="btn-check-2-outlined">Bohoo</label>
                    </div>
                    <div class="px-2 mb-2">
                        <input type="checkbox" class="btn-check" id="btn-check-3-outlined">
                        <label class="btn btn-category" for="btn-check-3-outlined">Mango</label>
                    </div>
                    <div class="px-2 mb-2">
                        <input type="checkbox" class="btn-check" id="btn-check-4-outlined">
                        <label class="btn btn-category" for="btn-check-4-outlined">Reebok</label>
                    </div>
                    <div class="px-2 mb-2">
                        <input type="checkbox" class="btn-check" id="btn-check-5-outlined">
                        <label class="btn btn-category" for="btn-check-5-outlined">Converse</label>
                    </div>
                    <div class="px-2 mb-2">
                        <input type="checkbox" class="btn-check" id="btn-check-6-outlined">
                        <label class="btn btn-category" for="btn-check-6-outlined">Sandro</label>
                    </div>
                    <div class="px-2 mb-2">
                        <input type="checkbox" class="btn-check" id="btn-check-7-outlined">
                        <label class="btn btn-category" for="btn-check-7-outlined">nike</label>
                    </div>
                    <div class="px-2 mb-2">
                        <input type="checkbox" class="btn-check" id="btn-check-8-outlined">
                        <label class="btn btn-category" for="btn-check-8-outlined">Adidas</label>
                    </div>
                    <div class="px-2 mb-2">
                        <input type="checkbox" class="btn-check" id="btn-check-9-outlined">
                        <label class="btn btn-category" for="btn-check-9-outlined">Dior</label>
                    </div>
                    <div class="px-2 mb-2">
                        <input type="checkbox" class="btn-check" id="btn-check-10-outlined">
                        <label class="btn btn-category" for="btn-check-10-outlined">Puma</label>
                    </div>
                    <div class="px-2 mb-2">
                        <input type="checkbox" class="btn-check" id="btn-check-11-outlined">
                        <label class="btn btn-category" for="btn-check-11-outlined">Zora</label>
                    </div>
                    <div class="px-2 mb-2">
                        <input type="checkbox" class="btn-check" id="btn-check-12-outlined">
                        <label class="btn btn-category" for="btn-check-12-outlined">Berskha</label>
                    </div>
                    <div class="px-2 mb-2">
                        <input type="checkbox" class="btn-check" id="btn-check-13-outlined">
                        <label class="btn btn-category" for="btn-check-13-outlined">Eiger</label>
                    </div>
                    <div class="px-2 mb-2">
                        <input type="checkbox" class="btn-check" id="btn-check-14-outlined">
                        <label class="btn btn-category" for="btn-check-14-outlined">American Eagle</label>
                    </div>
                </div>
            </div>
            <!-- New Product -->
            <div class="d-flex justify-content-between align-items-center">
                <h3 class="py-3" style="margin-left: 50px;">New Items</h3>
                <a href="products.html" class="text-teal text-decoration-none" style="margin-right: 60px;">See All</a>
            </div>
            <product-list :products="productList"></product-list>
        </div>
    </main>
</template>