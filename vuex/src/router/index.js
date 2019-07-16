import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "../views/Home"
import Login from "@/views/Login"
import Register from "@/views/Register"
import Index from "@/views/Index"
import Friends from "@/views/Friends"
import Setting from "@/views/Setting"
import Search from "@/views/Search"
import Detail from "@/views/Detail"
Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:"/",
  		redirect:"/login"
  	},
  	{
  		path:"/login",
  		component:Login
  	},
  	{
  		path:"/register",
  		component:Register
  	},
  	{
  		path:"/index",
  		redirect:"home",
  		component:Index,
  		children:[
  			{
  				path:"/home",
  				component:Home
  			},
  			{
  				path:"/search",
  				component:Search
  			},
  			{
  				path:"/friends",
  				component:Friends
  			},
  			{
  				path:"/setting",
  				component:Setting
  			},
  		]
  	},
  	{
  		path:"/detail/:id",
  		component:Detail
  	}
  ]
})
