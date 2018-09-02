<template>
	<div>
         <!--登录注册的头部-->
		<div class="lo_re_header" v-if="this.$route.fullPath=='/register' || this.$route.fullPath=='/login'">
			<div class="lo_re_main">
				<router-link to='/index'><img src="../assets/img/loge.png"></router-link>
			</div>
		</div>
        <!--正常页面的头部-->
		<div v-else>
			<div class="layout_header">
				<div class="app-header header_main">
					<Row type="flex">
						<Col span="18">
						<Row type="flex">
							<Col span="5">www.91mushi.com</Col>
							<Col span="2">你好请</Col>
							<Col span="2" class="txt_center"><router-link to='/login'>登录</router-link></Col>
							<Col span="2" class="txt_center">
							<router-link to='/register'>注册</router-link>
							</Col>
						</Row>
						</Col>
						<Col span="6">
						<div class="header_right">
							<ul>
								<li>卖家中心</li>
								<li>卖家中心</li>
								<li>安徽省</li>
							</ul>
						</div>
						</Col>
					</Row>
				</div>
			</div>
			<div class="app-header">
				xx
			</div>
		</div>
		<div class="app-content">
			<!-- <keep-alive> -->
			<router-view></router-view>
			<!-- </keep-alive> -->
		</div>
        <div class="foot_lo_re" v-if="this.$route.fullPath=='/register' || this.$route.fullPath=='/login'">
			<div class="foot_ul">
                  <Row type="flex" justify="center" class="code-row-bg">
                     <Col span="4" class="border_right"><router-link to='/membercenter'>关于我们</router-link></Col>
                     <Col span="4" class="border_right"><router-link to='/'>公司资质</router-link></Col>
                     <Col span="4" class="border_right"><router-link to='/'>联系我们</router-link></Col>
                     <Col span="4" class="border_right"><router-link to='/'>隐私说明</router-link></Col>
                     <Col span="4" class="border_right"><router-link to='/'>发票规则</router-link></Col>
                     <Col span="4"><router-link to='/'>注册协议</router-link></Col>
                 </Row>
            </div>
            <div class="foot_explain">Copyright 幕饰网 &nbsp;&nbsp; www.91mushi.com &nbsp; &nbsp;版权所有&nbsp; © 沪 ICP备 18007958号 -1</div>
		</div>
		<div class="foot" v-else>
            <div class="foot_loge_img"><img src="../assets/img/foot_loge.png" ></div>
			<div class="foot_ul">
                  <Row type="flex" justify="center" class="code-row-bg">
                     <Col span="4" class="border_right"><router-link to='/membercenter'>关于我们</router-link></Col>
                     <Col span="4" class="border_right"><router-link to='/'>公司资质</router-link></Col>
                     <Col span="4" class="border_right"><router-link to='/'>联系我们</router-link></Col>
                     <Col span="4" class="border_right"><router-link to='/'>隐私说明</router-link></Col>
                     <Col span="4" class="border_right"><router-link to='/'>发票规则</router-link></Col>
                     <Col span="4"><router-link to='/'>注册协议</router-link></Col>
                 </Row>
            </div>
              <div class="foot_erweima_loge">
                  <ul>
                      <li><img src="../assets/img/fuwuhao.jpg" alt="服务号"> <p>幕饰服务号</p></li>
                      <li style="margin-left:30px"><img src="../assets/img/dingyuehao.jpg" alt="订阅号">幕饰订阅号</li>
                  </ul>
              </div>
              <div class="foot_explain">Copyright 幕饰网 &nbsp;&nbsp; www.91mushi.com &nbsp; &nbsp;版权所有&nbsp; © 沪 ICP备 18007958号 -1</div>
		</div>      
	</div>
</template>
<script>
	import Vue from "vue";
	export default {
		data() {
			return {
			};
		},
		created: function () {
		},
		methods: {}
	};
</script>
<style>
	html,
	body {
		height: 100%;
		margin: 0;
		padding: 0;
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
		"Microsoft YaHei", "微软雅黑", Arial, sans-serif;
	}

	ul li {
		list-style: none;
	}

	/* 公告的css样式 */

	/*start*/

	.fl {
		float: left;
	}

	.fr {
		float: right;
	}

	.clearfix {
		overflow: auto;
		_height: 1%;
	}

	.txt_center {
		text-align: center
	}

	/*end*/

	.foot {
		width: 100%;
		height: 445px;
		background: #fdf;
        overflow: hidden;
	}
  .foot_lo_re{ width: 100%; height: 120px;background: #fff;}
	.foot_titl {
		width: 1200px;
		color: #fff;
		line-height: 45px;
		height: 45px;
		margin: 0 auto;
		font-size: 16px;
	}
   .foot_ul{width: 800px;text-align: center;height: 30px;line-height: 30px;margin:0 auto; margin-top:35px }
   .border_right{ border-right:1px solid #cccccc}
   .foot_ul a{color:#666666;display: block;width: 100%;height: 100%;font-size: 16px}
   .foot_explain{width: 800px;text-align: center;font-size: 15px;color:#666666;height: 30px;line-height: 30px;margin:0 auto; margin-top:25px }
  .layout_header {
		width: 100%;
		height: 45px;
		background: #dfd;
	}

	.app-header {
		width: 1200px;
		height: 80px;
		margin: 0 auto;
	}

	.header_main {
		height: 45px;
		line-height: 45px;
		font-size: 16px
	}

	.header_right ul li {
		width: 30%;
		height: 45px;
		line-height: 45px;
		margin-left: 3%;
		text-align: center;
		float: left;
	}

	.lo_re_header {
		width: 100%;
		background: #fff;
		height: 100px;
	}

	.lo_re_main {
		width: 1200px;
		height: 100px;
		margin: 0 auto;
	}

	.lo_re_main img {	width: 231px;height: 60px;float: left;	margin-top: 20px;}
    .foot_loge_img{ width: 400px; height:100px; margin:0 auto;margin-top:45px}
    .foot_erweima_loge{ width: 230px; height: 120px;margin:20px auto;text-align: center;line-height: 20px;color:#999999;font-size: 15px}
    .foot_erweima_loge ul Li{ float: left;width: 100px; height: 120px;}
    .foot_erweima_loge ul Li img{ width: 100px; height: 100px;}
</style>