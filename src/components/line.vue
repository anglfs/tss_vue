<template>
		<div class="l-line">
			<div class="l-left"></div>
			<div class="l-center">{{title}}</div>
			<div class="l-right"></div>
		</div>
</template>

<script>
export default {
	name: 'line',
	props: {
		msg: String,
		color:String,
		title:String
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.l-line{
	height: 10px;
	background-color: red;
	width: 100%;
	margin-top: 50px;
	z-index: 200;
}
</style>
