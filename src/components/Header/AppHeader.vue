<script>
import { store } from '../../store';
export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    
    <header>
    <!-- INIZIO HEADER -->
        <div class="h-100 d-flex header-container align-items-center">
        <!-- INIZIO MENU -->
            <div class="me-2">
                <img src="../../assets/images/avada-marketing-logo.png" alt="">
            </div>

            <ul class="d-flex list-unstyled align-items-center mb-0 mx-4">

                <li class="me-4" v-for="nameone in store.partone">
                    <a href="#" class="">
                        <span class="me-1">
                            {{ nameone }}
                        </span>
                        <font-awesome-icon icon="fa-solid fa-angle-down" class="dropdown" />
                    </a>
                </li>

                <li class="mx-3" v-for="nametwo in store.parttwo">
                    <a href="#" class="">
                        <span class="me-1">
                            {{ nametwo }}
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
                <!-- BOTTONE -->
                <div class="btn ms-4">
                    <a class="orange fs-5"> Free Quote </a>
                </div>

            </ul>
        <!-- FINE MENU -->
        </div>
    <!-- FINE HEADER -->
    </header>
    
</template>

<style lang="scss" scoped>
@import "../../styles/header/appheader.scss";
</style>