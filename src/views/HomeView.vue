<template>
	<main class="main">
		<AddVideo />
		<GridVideo />
	</main>
</template>

<script setup>
	import AddVideo from '../components/AddVideo.vue';
	import GridVideo from '../components/GridVideo.vue';
</script>

<style scoped>
	.main {
		margin-top: 142px;
		position: relative;
		display: grid;
		place-content: center;
	}
</style>
