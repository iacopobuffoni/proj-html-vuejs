<script>
import { store } from '../../store';
export default {
    name: 'AppFooter',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main>
        <footer>
            <div class="footer-container">
                <div class="left-footer-container">
                    <h2> Grow Your Online Business Strategically, and Improve Customer retention. </h2>
                    <font-awesome-icon icon="fa-brands fa-facebook-f" class="fs-5 me-4 mt-4" />
                    <font-awesome-icon icon="fa-brands fa-twitter" class="fs-5 me-4 mt-4" />
                    <font-awesome-icon icon="fa-brands fa-instagram" class="fs-5 me-4 mt-4" />
                    <font-awesome-icon icon="fa-brands fa-youtube" class="fs-5 me-4 mt-4" />
                    <font-awesome-icon icon="fa-brands fa-linkedin-in" class="fs-5 me-4 mt-4" />
                    <font-awesome-icon icon="fa-brands fa-tiktok" class="fs-5 me-4 mt-4" />
                </div>
                <div class="right-footer-container">
                    <div class="list fs-5">
                        <h6 class="fs-5"> Services </h6>
                        <ul>
                            <li v-for="nameone in store.listone">
                                <a href="">
                                    {{ nameone }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="list fs-5">
                        <h6 class="fs-5"> Resources </h6>
                        <ul>
                            <li v-for="nametwo in store.listtwo">
                                <a href="">
                                    {{ nametwo }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="list fs-5">
                        <h6 class="fs-5"> Company </h6>
                        <ul>
                            <li v-for="namethree in store.listthree">
                                <a href="">
                                    {{ namethree }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-container pt-5">
                <div class="left-footer-container">
                    <p class="padding">
                        <font-awesome-icon icon="fa-regular fa-copyright" /> 2020 &#x2022; Avada Consultant &#x2022;
                        Powered by IacopoBuffoni
                    </p>
                </div>
                <div class="right-footer-container">
                    <div class="list">
                        <p> Call Us (555) 802-134 </p>
                    </div>
                    <div class="list">

                    </div>
                    <div class="list">
                        <p class=""> info@yourcompany.com </p>
                    </div>
                </div>
            </div>
        </footer>
    </main>
</template>

<style lang="scss" scoped>
@import "../../styles/footer/appfooter.scss";
</style>