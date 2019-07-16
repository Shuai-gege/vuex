<template>
	<div>
		<h2>欢迎：{{this.$store.state.name}}</h2>
		<h2>朋友</h2>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				title:"朋友"
			}
		},
		mounted(){
			this.$emit("toparent",this.title)
		}
	}
</script>

<style>
</style>