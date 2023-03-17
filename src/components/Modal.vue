<template>
	<div class="modal" v-show="open">
		<div class="modal-inner">
			<div class="modal-content">
				<slot />
				<button type="button">
					<img src="/delete.svg" alt="" />
				</button>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style scoped></style>
