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
        AppMainMarketingResources
        
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
            <AppMainSponsors/>
            <AppMainOrganisations/>
            <AppMainFirstLightGraySection/>
            <AppMainBigPhoto/>
            <AppMainMarketingResources/>
        </main>
    </main>
</template>

<style lang="scss" scoped>

</style>