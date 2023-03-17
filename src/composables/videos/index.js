import { ref } from 'vue';

export const videos = ref([]);

export function addVideo(video) {
	videos.value.push(video);
	// console.log('Videos:', videos.value);
}
