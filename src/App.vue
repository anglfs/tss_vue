<template>
	<div class="app">
		<div class="head">
			<img class="head-left" src="./assets/logo.png" />
			<div class="head-right">Tss Vueapp</div>
		</div>
		<div class="head-title">快速，可视化的，可靠的vueUI组件库</div>
				<div class="concent-item" v-for="(item, index) in content" :key="index">
			<div class="concent-item-name">{{ item.name }}</div>
			<img class="concent-item-image" :src="item.image" />
		</div>

		<div class="footer"></div>
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<Head msg="Welcome to Your Vue.js App" title="真的猥琐" />
		<Line title="什么?" />
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Head from './components/head.vue';
import Line from './components/line.vue';
export default {
	name: 'App',

	components: {
		HelloWorld,
		Head,
		Line
	},
	data() {
		return {
			content: [
				{
					name: '基础组件',
					image: require('./assets/jc.png')
				},
				{
					name: '头部组件',
					image: require('./assets/head.png')
				},
				{
					name: '列表组件',
					image: require('./assets/im.png')
				},
				{
					name: '展示组件',
					image: require('./assets/show.png')
				},
				{
					name: '提示组件',
					image: require('./assets/dia.png')
				},
				{
					name: '导航组件',
					image: require('./assets/dh.png')
				},
				{
					name: '业务组件',
					image: require('./assets/yw.png')
				}
			]
		};
	}
};
</script>

<style lang="less">
.head {
	height: 40px;
	width: 100%;
	text-align: center;
	padding-top: 50px;
}
.head-left {
	height: 40px;
	width: 40px;
	margin-left: 30px;
	float: left;
}
.head-right {
	color: green;
	font-weight: bold;
	float: left;
	font-size: 30px;
	margin-left: 30px;
}
.head-title {
	height: 40px;
	width: 100%;
	margin-top: 20px;
	font-size: 13px;
	margin-left: 30px;
	color: #999999;
	text-align: left;
}
.concent-item {
	height: 55px;
	width: 95%;
	margin-left: 5%;
	background-color: seashell;
	border-radius: 4px;
	margin-top: 20px;
}
.concent-item-name {
	margin-left: 20px;
	line-height: 50px;
	font-weight: bold;
	float: left;
}
.concent-item-image {
	float: right;
	height: 20px;
	width: 20px;
	margin-right: 20px;
	margin-top: 20px;
	margin-bottom: 10px;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	background-color: skyblue;
	width: 100%;
	height: 100%;
}
.footer {
	height: 50px;
	width: 100%;
}
</style>
