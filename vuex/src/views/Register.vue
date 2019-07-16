<template>
	<div>
		<van-nav-bar
		  title="登陆"
		  left-text="返回"
		  left-arrow
		  :fixed="true"
		  @click-left="onClickLeft"
		/>
		<div id="box">
			<van-cell-group>
			
		  <van-field
		    v-model="username"
		    required
		    clearable
		    label="用户名"
		    right-icon="question-o"
		    placeholder="请输入用户名"
		    @click-right-icon="$toast('请输入用户名')"
		  />
		
		  <van-field
		    v-model="password"
		    type="password"
		    label="密码"
		    placeholder="请输入密码"
		    required
		  />
		</van-cell-group>
	</div>
	<van-button type="info">注册</van-button>
	<hr />
	<h3>{{this.$store.state.count}}</h3>
	</div>
</template>

<script>
	export default{
		name:"Login",
		data(){
			return{
				username:"",
				password:""
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
	#box{
		margin-top:46px;
	}
</style>