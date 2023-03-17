<template>
	<div class="miniature-grid">
		<div class="miniature" v-for="video in videos" :key="video.id" @click="open">
			<img :src="video.thumbnail" :alt="`Imagen de ${video.title}`" />
			<button class="delete-btn">X</button>
		</div>
	</div>
</template>

<script setup>
	import { videos } from '../composables/videos';
</script>

<style lang="scss" scoped>
	.miniature-grid {
		margin: 125px auto 142px auto;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 70px;
	}

	.miniature {
		width: 263px;
		height: 150px;
		position: relative;
		// border: solid 0.5px #cccccc;

		&:hover {
			cursor: pointer;
		}

		img {
			width: 263px;
			height: 150;
		}

		.delete-btn {
			position: absolute;
			top: 9px;
			right: 9px;
			width: 24px;
			height: 24px;
			background-color: #000000;
			color: #ffffff;
			z-index: 2;
		}
	}

	.delete-box {
		position: absolute;
		width: 900px;
		height: 227px;
		background: #fbfbfb;
		box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.07);
		border-radius: 15px;
	}

	.stream-box {
		position: absolute;
		width: 1096px;
		height: 438px;
		background: #fbfbfb;
		box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.07);
		border-radius: 15px;
	}
</style>
