<template>
	<div class="login" :style="bgstyle">
		<div class="login_main">
			<div class="login_main_box fr">
				<div class="login_header">账户登录</div>
				<div class="login_body">
					<div class="inputs">
						<div class="inputs_left fl"><img src="../../assets/img/login_1.png"></div>
						<div class="inputs_right fr"> <input type="text" v-model="logindata.name" placeholder="输入用户名和密码"></div>
					</div>
					<div class="inputs" style="margin-top:20px">
						<div class="inputs_left fl"><img src="../../assets/img/login_2.png"></div>
						<div class="inputs_right fr"> <input type="password" v-model="logindata.password" placeholder="输入密码"></div>
					</div>
					<div class="login_check_remeber">
						<div class="login_check_left fl">
							<Checkbox v-model="logindata.remeberme"> &nbsp; &nbsp;记住密码</Checkbox>
						</div>
						<div class="login_check_right fr">
							<router-link to='/#'>忘记密码</router-link>
						</div>
					</div>
					<div class="login_login"><Button type="success" size="large" long @click="login">登录</Button></div>
					<div class="login_check_remeber" style="margin-top:15px">
						<div class="login_check_left login_check_left2 fl">
							<div class="login_conpany">合作伙伴账户登录</div>
							<div class="login_conpany login_conpany2">
								<Row type="flex" justify="start" class="code-row-bg">
									<Col span="8"><router-link to='/'><img src="../../assets/img/qq.png"></router-link></Col>
									<Col span="8"><router-link to='/'><img src="../../assets/img/weixin.png"></router-link></Col>
									<Col span="8"><router-link to='/'><img src="../../assets/img/weibo.png"></router-link></Col>
								</Row>
							</div>
						</div>
						<div class="login_check_right fr">
							<router-link to='/register' style="color:#ff0000">立即注册</router-link>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import gtInit from "../../assets/js/gt.js";
	export default {
		components: {},
		data() {
			return {
				bgstyle: {
					backgroundImage: "url(" + require("../../assets/img/section3.png") + ")"
				},
				logindata: {
					name: "",
					password: "",
					remeberme: ""
				}
			};
		},
		methods: {
            login(){
                let  remebers=this.logindata.remeberme==true?'1':'0'
                if(this.logindata.name==''){
                    this.$Message.error('请输入用户名或手机号')
                } else if(this.logindata.password==''){
                      this.$Message.error('请输入密码')
                } else{
                     this.$http.post('/user/login?loginname='+this.logindata.name+'&password='+this.logindata.password+'&rememberMe='+remebers).then(res=>{
                     let response= JSON.parse(res.data)      
                     if(response.code==200){
                          this.$Message.success('登录成功')
                          this.$store.commit('setToken',res.headers.token);
                           localStorage.setItem("token",res.headers.token);
                           let _username=encodeURI(response.data.loginname)
                           localStorage.setItem("username",_username);
                           this.$store.commit('setUsername',_username);       
                          setInterval(()=>{
                               this.$router.push('/index')       
                          },1000)                                  
                     }
                     })
                }
            }
			// logout() {
			// 	this.$http.post(this.host + "/uc/logout", {}).then(response => {
			// 		var resp = response.body;
			// 		if (resp.code == 0) {
			// 			localStorage.setItem("setToken", JSON.stringify(null));
			// 			localStorage.setItem("setUsername", null);
			// 		} else {
			// 			// this.$Message.error(resp.message);
			// 			console.log(resp.message);
			// 		}
			// 	});
			// }
        },
        destroyed(){
             window.location.reload()
        },
		created() {
            //	this.logout();    
		}
	};

</script>
<style scoped>
	.login {
		width: 100%;
		height: 550px;
	}

	.login_main {
		width: 1200px;
		height: 550px;
		margin: 0 auto;
	}

	.login_main_box {
		width: 300px;
		height: 400px;
		margin-top: 75px;
		background: #fff;
	}

	.login_header {
		width: 300px;
		height: 60px;
		line-height: 60px;
		text-align: center;
		font-size: 25px;
		background: linear-gradient(to right, #1980d8, #00b1ff);
		color: #fff;
	}

	.login_body {
		width: 260px;
		margin: 0 auto;
		height: 290px;
		margin-top: 20px;
		overflow: hidden;
		border-radius: 3px;
	}

	.login_body input {
		border: none;
		width: 100%;
		outline: none;
		text-indent: 1rem;
		font-size: 14px;
		height: 100%;
		color: #999999;
	}

	.inputs {
		width: 260px;
		height: 45px;
		border: 1px solid #ccc;
	}
	.inputs img {
		vertical-align: middle;
	}
	.inputs_left {
		width: 45px;
		height: 44px;
		line-height: 44px;
		text-align: center;
		border-right: 1px solid #ccc;
	}
	.inputs_right {
		width: 212px;
		height: 43px;
		line-height: 44px;
		text-align: center;
	}
	.login_check_remeber {
		width: 260px;
		height: auto;
		overflow: hidden;
		line-height: 30px;
		margin: 0 auto;
		font-size: 14px;
		color: #999;
		margin-top: 10px;
	}
	.login_check_left {
		width: 160px;
		height: 30px;
	}
	.login_check_left2 {
		width: 160px;
		height: 60px;
	}
	.login_check_right {
		width: 100px;
		height: 30px;
		text-align: right;
	}
	.login_check_right a {
		color: #199ed8;
	}
	.login_login {
		width: 260px;
		height: 38px;
		margin: 20px auto;
	}
	.login_conpany {
		width: 100%;
		height: 30px;
	}
	.login_conpany2 {
		text-align: center;
	}
	.login_conpany2 img {
		width: 25px;
		height: 25px;
	}
</style>
