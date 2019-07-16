<template>
	<div>
		<van-nav-bar
		  title="登陆"
		  :fixed="true"
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
	<van-button type="primary" @click="login1()">登陆</van-button>
	<van-button type="info" to="/register">注册</van-button>
	<hr />
	<!--获取store数据-->
	<van-button type="info" @click="tap()">获取state数据</van-button>
	<h3>{{this.$store.state.count}}</h3>
	<h3>{{this.$store.state.info.counts}}</h3>
	<h3>间接获取{{count}}</h3>
	<h3>获取getters：{{count1}}</h3>
	<van-button type="info" @click="tap1()">获取actions数据</van-button>
	<van-button type="info" @click="jian()">获取actions数据-另一种</van-button>
	<van-button type="info" @click="login(username)">获取actions数据-另+种</van-button>
	</div>
</template>

<script>
	import {mapState,mapGetters,mapActions} from "vuex"
	export default{
		name:"Login",
		data(){
			return{
				username:"",
				password:""
			}
		},
		computed:{
			...mapState(["count"]),
			...mapGetters(["count1"])
		},
		methods:{
			...mapActions(["jian","login"]),
			tap(){
				this.$store.commit("add")
			},
			tap1(){
				this.$store.dispatch("jian")
			},
			login1(){
				this.$store.commit("login",this.username)
				this.$router.push("/index")
			},
			
		}
	}
</script>

<style>
	#box{
		margin-top:46px;
	}
</style>