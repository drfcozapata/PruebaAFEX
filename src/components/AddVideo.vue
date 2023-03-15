<template>
	<div>
		<h1 class="title">Añadir nuevo video</h1>
		<form class="add-form">
			<input type="text" placeholder="Añadir" class="add-input text-input" />
			<button class="btn">Añadir</button>
		</form>
	</div>
</template>

<script setup></script>

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
		}
	}
</style>
