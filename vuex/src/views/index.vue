<template>
	<div>
		<van-nav-bar
		  :title="title"
		  :fixed="true"
		/>
		<div id="box">
			<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
			<router-view @toparent="getval"></router-view>
			</van-pull-refresh>
		</div>
		<van-tabbar v-model="active">
		  <van-tabbar-item icon="home-o" to="home">页签</van-tabbar-item>
		  <van-tabbar-item icon="search" to="search">搜索</van-tabbar-item>
		  <van-tabbar-item icon="friends-o" to="friends">朋友</van-tabbar-item>
		  <van-tabbar-item icon="setting-o" to="setting">设置</van-tabbar-item>
		</van-tabbar>
			
	</div>
</template>

<script>
	export default{
		name:"Index",
		data(){
			return{
				active: 0,
				title:"首页",
				isLoading: false
			}
		},
		methods:{
			getval(msg){
				this.title=msg
			},
			onRefresh() {
		      setTimeout(() => {
		        this.$toast('刷新成功');
		        this.isLoading = false;
		        this.count++;
		      }, 500);
		    }
		}
	}
</script>

<style>
	#box{
		margin-top:46px;
		margin-bottom: 50px;
	}
	
</style>