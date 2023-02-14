<script>
import AppMainHeader from './AppMainHeader.vue';
import AppMainFirstSection from './AppMainFirstSection.vue';
import AppMainSecondSection from './AppMainSecondSection.vue';
import AppMainThirdSection from './AppMainThirdSection.vue';
export default {
    name: 'AppMain',
    components: {
        AppMainHeader,
        AppMainFirstSection,
        AppMainSecondSection,
        AppMainThirdSection
    }
}
</script>

<template>
    <main>
        <header>
            <AppMainHeader/>
        </header>
        <main>
            <AppMainFirstSection/>
            <AppMainSecondSection/>
            <AppMainThirdSection/>
        </main>
    </main>
</template>

<style lang="scss" scoped>

</style>