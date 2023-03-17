<template>
	<div>
		<h1 class="title">Añadir nuevo video</h1>
		<div class="add-form">
			<input
				type="text"
				placeholder="Añadir"
				class="add-input text-input"
				v-model="videoUrl"
				required
			/>
			<button class="btn" @click="onAddVideo">Añadir</button>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import { addVideo } from '../composables/videos';

	const videoUrl = ref('');

	function getIdFromYoutubeVideoUrl(url) {
		const videoUrl = new URL(url);
		const searchParams = new URLSearchParams(videoUrl.search);
		return searchParams.get('v');
	}

	function onAddVideo() {
		const videoId = getIdFromYoutubeVideoUrl(videoUrl.value);
		fetchVideo(videoId);
		videoUrl.value = '';
	}

	async function fetchVideo(videoId) {
		const videoResponse = await fetch(
			`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=AIzaSyArrdSAwDkWP-Uq7yHLojakynOReNRnVeA`
		).then(res => res.json());
		const videoInfo = {
			id: videoResponse?.items[0].id,
			title: videoResponse?.items[0].snippet.title,
			description: videoResponse?.items[0].snippet.description,
			thumbnail: videoResponse?.items[0].snippet.thumbnails.medium.url,
		};
		// console.log(videoResponse);
		addVideo(videoInfo);
		// console.log(videoInfo);
		// console.log(addVideo);
	}
</script>

<style lang="scss" scoped>
	.title {
		font-weight: 500;
		font-size: 28.33px;
		line-height: 38px;
		color: #020202;
	}

	.add-form {
		display: flex;

		.add-input {
			width: 823px;
			height: 57px;
			font-size: 16px;
			background: #ffffff;
			border: 1px solid rgba(0, 0, 0, 0.3);
			border-radius: 5px 0px 0px 5px;
			padding: 0 23px;
		}

		.text-input {
			font-weight: 400;
			line-height: 21px;
			font-size: 16px;
		}

		.btn {
			width: 253px;
			height: 57px;
			display: flex;
			font-size: 16px;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			padding: 7px 20px;
			background-color: #136ae4;
			color: #ffffff;
			font-weight: bold;
			box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2), 0px 1px 4px rgba(0, 0, 0, 0.12),
				0px 2px 2px rgba(0, 0, 0, 0.14);
			border: none;
			border-radius: 0px 10px 10px 0px;

			&:hover {
				cursor: pointer;
			}
		}
	}
</style>
