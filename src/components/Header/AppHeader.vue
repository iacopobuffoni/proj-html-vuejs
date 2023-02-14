<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header>
        <div class="h-100 d-flex header-container align-items-center">
            <div class="me-2">
                <img src="../../assets/images/avada-marketing-logo.png" alt="">
            </div>
            <ul class="d-flex list-unstyled align-items-center mb-0 mx-4">
                <li class="me-3">
                    <a href="#" class="orange">
                        <span class="me-1">
                            Home 
                        </span>
                        <font-awesome-icon icon="fa-solid fa-angle-down" class="dropdown" />
                    </a>
                </li>
                <li class="mx-3">
                    <a href="#" class="">
                        <span class="me-1">
                            Services 
                        </span>
                        <font-awesome-icon icon="fa-solid fa-angle-down" class="dropdown" />
                    </a>
                </li>
                <li class="mx-3">
                    <a href="#" class="">
                        <span class="me-1">
                            Why Us 
                        </span>
                    </a>
                </li><li class="mx-3">
                    <a href="#" class="">
                        <span class="me-1">
                            Case Studies
                        </span>
                    </a>
                </li>
                <li class="mx-3">
                    <a href="#" class="">
                        <span class="me-1">
                            About 
                        </span>
                    </a>
                </li>
                <li class="mx-3">
                    <a href="#" class="">
                        <span class="me-1">
                            Blog 
                        </span>
                    </a>
                </li>
                <li class="mx-3">
                    <a href="#" class="">
                        <font-awesome-icon icon="fa-solid fa-phone" class="mx-3 orange" />
                        <span class="me-1">
                            (555) 802-1234
                        </span>
                    </a>
                </li>
                <div class="btn ms-4">
                    <a class="orange fs-5"> Free Quote </a>
                </div>
            </ul>

        </div>
    </header>
</template>

<style lang="scss" scoped>
@import "../../styles/header/appheader.scss";
</style>