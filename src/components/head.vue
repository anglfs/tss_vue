<template>
	<div class="p-hello">
		<div class="p-left"><img class="p-image-left" src="../assets/arrow-ios-back.png" /></div>
		<div class="p-center">{{title}}</div>
		<div class="p-right"><img class="p-image-right" src="../assets/arrow-ios-forward.png" /></div>
	</div>
</template>

<script>
export default {
	name: 'head',
	props: {
		msg: String,
		color:String,
		title:String
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.p-hello{
		width: 100%;
		height: 40px;
		background-color: white;
	}
	.p-image-left{
		width: 30px;
		height: 30px;
		margin-top: 5px;
		float: left;
	}
	.p-image-right{
		width: 30px;
		height: 30px;
		margin-top: 5px;
		float: right;
	}
	.p-left{
		width: 30%;
		height: 40px;
		float: left;
	}
	.p-center{
		width: 40%;
		height: 40px;
		float: left;
		font-size: 18px;
		text-align: center;
		color: black;
		line-height: 40px;
	}
	.p-right{
		width: 30%;
		height: 40px;
		float: right;
	}
</style>
