<script setup>

</script>

<template>
    <header class="container-fluid bg-white py-3 border-bottom position-sticky top-0" style="z-index: 1000;">
        <div class="container-md d-flex justify-content-between align-items-center">
            <router-link to="/" class="col-sm-2 d-flex align-items-center">
                <img src="@/assets/images/Logo.png" alt="Logo" width="150">
            </router-link>
            <!-- Search -->
            <div class="col-6 col-sm-4 py-0 d-none d-sm-block">
                <div class="header_search input-group align-items-center border rounded-2">
                    <span class="px-2">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input type="text" class="form-control form-control-sm border-0 rounded-2" placeholder="Search...">
                </div>
            </div>
            <div class="col-2 col-sm-1 d-block d-sm-none border-end text-end">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <!-- Login & Signup -->
            <navigation-bar></navigation-bar>
            <div class="col-2 col-sm-1 fw-semibold align-items-center">
                <select name="langguage" class="form-select">
                    <option value="English">EN</option>
                    <option value="French">CH</option>
                    <option value="Spanish">ID</option>
                </select>
            </div>
        </div>
    </header>
</template>

<script setup>
    import NavigationBar from './NavigationBar.vue';
</script>