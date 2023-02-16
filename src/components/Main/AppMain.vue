<script>
import AppMainHeader from './AppMainHeader.vue';
import AppMainFirstSection from './AppMainFirstSection.vue';
import AppMainSecondSection from './AppMainSecondSection.vue';
import AppMainThirdSection from './AppMainThirdSection.vue';
import AppMainSponsors from './AppMainSponsors.vue';
import AppMainOrganisations from './AppMainOrganisations.vue';
import AppMainFirstLightGraySection from './AppMainFirstLightGraySection.vue';
import AppMainBigPhoto from './AppMainBigPhoto.vue';
import AppMainMarketingResources from './AppMainMarketingResources.vue';
import AppMainFooter from './AppMainFooter.vue';
export default {
    name: 'AppMain',
    components: {
        AppMainHeader,
        AppMainFirstSection,
        AppMainSecondSection,
        AppMainThirdSection,
        AppMainSponsors,
        AppMainOrganisations,
        AppMainFirstLightGraySection,
        AppMainBigPhoto,
        AppMainMarketingResources,
        AppMainFooter
        
    }
}
</script>

<template>
    <main>
        <header>
            <AppMainHeader/>
        </header>
        <main>
            <!-- INIZIO PRIMO BLOCCO -->
            <AppMainFirstSection/>
            <AppMainSecondSection/>
            <AppMainThirdSection/>
            <!-- FINE PRIMO BLOCCO -->
            <!-- INIZIO SECONDO BLOCCO -->
            <AppMainSponsors/>
            <AppMainOrganisations/>
            <!-- FINE SECONDO BLOCCO -->
            <!-- INIZIO PRIMA SEZIONE GRIGIA -->
            <AppMainFirstLightGraySection/>
            <!-- FINE PRIMA SEZIONE GRIGIA -->
            <AppMainBigPhoto/>
            <!-- INIZIO SECONDA SEZIONE GRIGIA -->
            <AppMainMarketingResources/>
            <!-- FINE SECONDA SEZIONE GRIGIA -->
        </main>
        <footer>
            <AppMainFooter/>
        </footer>
    </main>
</template>

<style lang="scss" scoped>

</style>