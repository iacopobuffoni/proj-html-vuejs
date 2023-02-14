<script>
	import AppHeader from './components/Header/AppHeader.vue';
	import AppMain from './components/Main/AppMain.vue';
	import AppFooter from './components/Footer/AppFooter.vue';
	export default {
		name: 'App',
  		components : {
			AppHeader,
			AppMain,
			AppFooter

  	}
	
}
</script>

<template>
	
	<AppHeader/>
	<AppMain/>
	<AppFooter/>

</template>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
	@import "./styles/partials/main.scss";

	body {
		font-family: 'DM Sans', sans-serif;
	}
</style>
