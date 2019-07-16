<template>
	<div>
		<h2>搜索</h2>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				title:"搜索"
			}
		},
		mounted(){
			this.$emit("toparent",this.title)
		}
	}
</script>

<style>
</style>