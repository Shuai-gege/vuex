<template>
	<div>
	
		
		
		
		<!--<van-uploader :after-read="afterRead" />
		<img :src="imgs" alt="" style="width:300px"/>-->
		<h2>欢迎：{{this.$store.state.name}}</h2>
		<van-card
		  v-for="item in list"
		  :price="item.pprice"
		  :desc="item.pdesc"  
		  :title="item.pname"
		  :thumb="item.pimg"
		  @click="tap(item.pid)"
		/>
	</div>
</template>

<script>
	import axios from "axios";
	import { Toast } from 'vant';
	import { Uploader } from 'vant';
	export default {
		name:"Home",
		data(){
			return{
				list:"",
				imgs:'',
				title:"首页"
			}
		},
		mounted(){
			axios({
				url:"http://jx.xuzhixiang.top/ap/api/productlist.php",
			}).then((data)=>{
				console.log(data.data.data)
				this.list=data.data.data
			})
			this.$emit("toparent",this.title)
		},
		methods: {
		    onClickLeft() {
		      Toast('返回');
		    },
		    onClickRight() {
		      Toast('按钮');
		    },
		     afterRead(file) {
		      // 此时可以自行将文件上传至服务器
		      //console.log();
		      this.imgs=file.content
		    },
		    tap(id){
		    	//console.log(id)
		    	this.$router.push("/detail/"+id)
		    }
	  }
	}
</script>

<style>
	
</style>