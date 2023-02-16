<script>
export default {
    name: 'AppMainFirstSection',
}
</script>

<template>

    <main>

        <div class="main-container">
            <!-- PARTE SINISTRA -->
            <div class="left-main-container p-5">
                <img src="../../assets/images/svg/img1.svg" alt="">
            </div>
            <!-- PARTE DESTRA -->
            <div class="right-main-container p-5">

                <div class="box p-5 mt-4">

                    <div class="title">
                        <div class="icon d-flex justify-content-center align-items-center">
                            <font-awesome-icon icon="fa-solid fa-arrow-up-right-dots" />
                        </div>
                        <span class="fs-5 ms-3"> Business Growth </span>
                    </div>

                    <h2 class="mt-2">
                        Increase Brand Awareness
                    </h2>
                    <p class="my-3"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati voluptates aut qui beatae suscipit tenetur eveniet, corrupti accusamus aliquid. </p>
                    <div class="btn mt-4">
                        <a class="orange fs-5"> Get a Consultation </a>
                    </div>

                </div>

            </div>

        </div>

    </main>

</template>

<style lang="scss" scoped>
@import "../../styles/main/appmainfirstsection.scss";
</style>