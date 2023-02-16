<script>
export default {
    name: 'AppMainSecondSection',
}
</script>

<template>

    <main>
        <!-- LEFT E RIGHT, VISIVAMENTE PARLANDO SONO INVERTITI, 
            CAUSA RICICLO COMPONENT GIà CREATA.
            ATTENERSI AL CODICE SCSS COSI' COME LO SI TROVA -->
        <div class="main-container">

            <div class="right-main-container p-5">

                <div class="box p-5 mt-4">

                    <div class="title">

                        <div class="icon d-flex justify-content-center align-items-center">
                            <font-awesome-icon icon="fa-solid fa-people-group" />
                        </div>
                        <span class="fs-5 ms-3"> Investors In People </span>

                    </div>

                    <h2 class="mt-2">
                        In-House Sales Training
                    </h2>
                    <p class="my-3"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati voluptates aut qui beatae suscipit tenetur eveniet, corrupti accusamus aliquid. </p>
                    <div class="btn mt-4">
                        <a class="orange fs-5"> Get a Consultation </a>
                    </div>

                </div>

            </div>

            <div class="left-main-container p-4">
                <img src="../../assets/images/svg/img2.svg" alt="">
            </div>
            
        </div>

    </main>

</template>

<style lang="scss" scoped>
@import "../../styles/main/appmainsecondsection.scss";
</style>