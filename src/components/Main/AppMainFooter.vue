<script>
export default {
    name: 'AppMainFooter',
}
</script>

<template>
    <main>
        <header>
            <div class="header-container">
                <div class="left-header-container">
                    <h1 class="">
                        Let's Make Things Happen
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur explicabo sed eveniet
                        molestiae consequatur.
                    </p>
                    <div class="line">

                    </div>
                    <p class="mt-5 fs-4 fst-italic"> "The team at Avada Marketing Consultant is fabulous. They helped us
                        unlock our potential online and offline. We have experienced year on year growth due to their
                        progressive approach." </p>
                    <h5 class="mt-1"> George Anderson </h5>
                    <h6> Digitalbox CEO </h6>

                </div>
                <div class="right-header-container">
                    <div class="box px-4 border">
                        <div class="upper">
                            <div class="profile">
                                <img src="../../assets/images/marketing-consultant-expert.jpg" alt="">
                            </div>
                            <h4 class="">
                                Richard Madsen
                            </h4>
                            <h5 class="">
                                Marketing Consultant Expert
                            </h5>
                            <div class="orange">
                                <font-awesome-icon icon="fa-solid fa-phone" class="me-1" />
                                <span class="me-1">
                                    (555) 802-1234
                                </span>
                            </div>
                        </div>
                        <form action="">
                            <input type="text" class="border" placeholder="Your Name*">
                            <input type="text" class="mt-3 border" placeholder="Your Email*">
                            <input type="text" class="mt-3 border" placeholder="Your Phone Number*">
                            <div class="btn mt-3">
                                <a class="orange fs-5"> Get a Callback </a>
                            </div>
                        </form>
                        <h6 class="mt-3 pb-5">
                            By submitting my data I agree to be contacted
                        </h6>
                    </div>
                </div>
            </div>
        </header>
    </main>
</template>

<style lang="scss" scoped>
@import "../../styles/main/appmainfooter.scss";
</style>