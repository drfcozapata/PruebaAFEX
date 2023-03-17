<template>
	<main class="main">
		<VideoAdder />
		<VideosViewer />
	</main>
</template>

<script setup>
	import VideoAdder from '../components/VideoAdder.vue';
	import VideosViewer from '../components/VideosViewer.vue';
</script>

<style scoped>
	.main {
		margin-top: 142px;
		position: relative;
		display: grid;
		place-content: center;
	}
</style>
