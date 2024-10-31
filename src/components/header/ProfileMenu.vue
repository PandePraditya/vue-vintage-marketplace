<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const logout = () => {
    store.commit("auth/setUserLogout");
    router.push("/");
};
</script>

<template>
    <div class="header__signup col-8 col-sm-4 fw-semibold d-flex justify-content-evenly align-items-center text-decoration-none"
        style="text-align: right">
        <ul class="navbar-nav">
            <div class="d-flex align-items-center">
                <div class="cart-menu me-5">
                    <i class="fa-solid fa-cart-shopping text-secondary me-4 fs-5"></i>
                    <i class="fa-solid fa-heart text-secondary fs-5"></i>
                </div>
                <div class="profile-menu d-flex align-items-center">
                    <i class="fa-solid fa-user me-3 border border-dark border-1 rounded-circle p-2"></i>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            My Profile
                        </a>
                        <ul class="dropdown-menu">
                            <router-link to="/user/personal-info" class="dropdown-item">
                                <i class="fa-solid fa-user me-2"></i> My Profile
                            </router-link>
                            <router-link to="/user/favorite-recipe" class="dropdown-item">
                                <i class="fa-solid fa-scroll me-1"></i> Order
                            </router-link>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <li class="text-danger dropdown-item cursor-pointer" @click="logout">
                                <i class="fa-solid fa-arrow-right-from-bracket me-2"></i> Logout
                            </li>
                        </ul>
                    </li>
                </div>
            </div>
        </ul>
    </div>

    <!-- Modal -->
    <!-- <div class="modal fade" id="logoutModal" tabindex="-1" aria-labelledby="logoutModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h3>Are you sure you want to logout?</h3>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-danger" @click="logout">Logout</button>
                </div>
            </div>
        </div>
    </div> -->
</template>