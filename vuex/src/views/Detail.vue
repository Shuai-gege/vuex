<template>
	<div>
		
		<van-nav-bar
		  title="详情"
		  :fixed="true"
		/>
		<van-nav-bar
		  title="登陆"
		  left-text="返回"
		  left-arrow
		  :fixed="true"
		  @click-left="onClickLeft"
		/>
		<div id="box">
			<van-card
			  :price="detail.pprice"
			  :desc="detail.pdesc"  
			  :title="detail.pname"
			  :thumb="detail.pimg"
			/>
		</div>
		<van-goods-action>
		  <van-goods-action-icon
		    icon="chat-o"
		    text="客服"
		    @click="onClickIcon"
		  />
		  <van-goods-action-icon
		    icon="cart-o"
		    text="购物车"
		    @click="onClickIcon"
		  />
		  <van-goods-action-button
		    type="warning"
		    text="加入购物车"
		    @click="onClickButton"
		  />
		  <van-goods-action-button
		    type="danger"
		    text="立即购买"
		    @click="onClickButton"
		  />
		</van-goods-action>
	</div>
</template>

<script>
	import axios from "axios"
	export default {
		data(){
			return{
				detail:""
			}
		},
		mounted(){
			var _this = this;
			axios({
				url:'http://jx.xuzhixiang.top/ap/api/detail.php',
				params:{id:_this.$route.params.id}
			}).then((data)=>{
				this.detail=data.data.data
			})
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			onClickIcon() {
		      Toast('点击图标');
		    },
		    onClickButton() {
		      Toast('点击按钮');
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