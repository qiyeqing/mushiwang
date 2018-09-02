<template>
	<div class="login">
		<div class="login_main">
			<h2>注册</h2>
			<Form ref="registerdata" :model="registerdata" :rules="ruleCustom" :label-width="80">
				<FormItem label="用户名:" prop="namerules" class="margin_b_25">
					<Input type="text" v-model="registerdata.name" placeholder="请输入用户名"></Input>
				</FormItem>
				<FormItem label="手机号码:" prop="phonerules" class="margin_b_25">
					<Input type="text" v-model="registerdata.phone" placeholder="请输入手机号" @on-blur="hasPhone"></Input>
				</FormItem>
				<FormItem label="密码:" prop="passwordrules" class="margin_b_25">
					<Input type="password" v-model="registerdata.password" placeholder="请输入密码"></Input>
				</FormItem>
                <FormItem label="确认密码:" prop="passwordRealrules" class="margin_b_25">
					<Input type="password" v-model="registerdata.passwordReal" placeholder="确认密码"></Input>
				</FormItem>
				<Row class="login_code">
					<Col span='16'>
					<FormItem label="验证码:" prop="coderules" class="margin_b_25">
						<Input v-model="registerdata.code" placeholder="请输入验证码" @on-blur="codeCheck"></Input>
					</FormItem>
					</Col>
					<Col span="7" style="height:33px;margin-left:12px">
					<Button type="primary" class="code_button" :disabled="codeDisabled" @click='getCode'>{{registerdata.codename}}</Button>
					</Col>
				</Row>
				<div class="resigter_buton">
					<Button type="primary" long @click="registerUser" :disabled="registerButton">立即注册</Button>
				</div>
				<div class="login_check">
					<CheckboxGroup v-model="registerdata.remeber">
						<Checkbox> &nbsp;&nbsp;&nbsp;注册幕饰网账户并同意
							<router-link to='/index'>《用户协议》</router-link>
						</Checkbox>
					</CheckboxGroup>
				</div>
			</Form>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			const phonerulesPhone = (rule, value, callback) => {
				if (this.registerdata.phone == '') {
					callback(new Error('请输入手机号'));
				} else if (!(/^1[34578]\d{9}$/.test(this.registerdata.phone))) {
					callback(new Error('请输入正确的手机号'));
				} else {
					callback();
				}
			};
			const phonerulesPass = (rule, value, callback) => {
				if (this.registerdata.password == '') {
					callback(new Error('请输入密码'));
				} else if (this.registerdata.password.length < 6 || this.registerdata.password.length > 10) {
					callback(new Error('请输入6~10位的密码'));
				} else {
					callback();
				}
			};
			const phonerulesName = (rule, value, callback) => {
				if (this.registerdata.name == '') {
					callback(new Error('请输入用户名'));
				} else if (this.registerdata.password.name < 3 || this.registerdata.password.length > 6) {
					callback(new Error('请输入3~6位的用户名'));
				} else {
					callback();
				}
            };
            const phonerulesRealPass = (rule, value, callback) => {
				if (this.registerdata.passwordReal == '') {
					callback(new Error('请输入确认的密码'));
				} else if (this.registerdata.passwordReal!=this.registerdata.password) {
					callback(new Error('两次密码输入不一致'));
				} else {
					callback();
				}
			};
			return {
				registerdata: {
					name: '',
					phone: '',
                    password: '',
                    passwordReal:'',
					code: '',
					remeber: [],
					codename: '立即发送'
				},
				messagesToken: '',
                codeDisabled: true,
                registerButton:true,
				ruleCustom: {
					phonerules: [{
						validator: phonerulesPhone,
						trigger: 'blur'
					}],
					passwordrules: [{
						validator: phonerulesPass,
						trigger: 'blur'
					}],
					namerules: [{
						validator: phonerulesName,
						trigger: 'blur'
                    }],
                    passwordRealrules:[{
                        validator: phonerulesRealPass,
						trigger: 'blur'
                    }]
				}
			}
		},
		watch: {      
		},
		methods: {
			// 获取短信验证码按钮
			getCode() {
					let timer = 60;
                    this.codeDisabled = true;
                    this.phoneCode();
					let interval = setInterval(() => {
						timer = timer - 1
						this.registerdata.codename = `${timer}秒重试`
						if (timer == 0) {
							clearInterval(interval)
							this.codeDisabled = false;
							this.registerdata.codename = '立即发送'
						}
					}, 1000)
			},
			//获取短信验证码
			phoneCode() {
				this.messagesToken = '';
				this.$http.get('/security/sms?phoneNum=' + this.registerdata.phone).then(res => {
                    console.log(res)
					if (res.status == 200) {
						this.$Notice.success({title: `发送短信成功`,duration: 2});
						this.messagesToken = res.headers.validatecodetoken
					} else {
						this.$Notice.error({title: `发送短信失败`,duration: 2})
					}
				})
            },
            hasPhone(){            
              if((/^1[34578]\d{9}$/.test(this.registerdata.phone))){
                   this.$http.get('/user/phone?phone=' + this.registerdata.phone).then(res => {     
                    let response=JSON.parse(res.request.response)
					if (response.code == 200) {                         
                          this.codeDisabled = false                 
					} else {
						this.$Notice.error({title: `该号码已经被注册`,duration: 2})
                        this.codeDisabled=true 
					}
				}) 
              } else{
                   this.$Message.error('输入正确的号码')
              }
            },
            // 验证码验证
            codeCheck(){
                 this.$http.post('/user/validateCodeIsTrue?code='+this.registerdata.code+'&validateCodeToken='+this.messagesToken).then(res=>{               
                        let response=JSON.parse(res.request.responseText)
                        if(response.code == 200){
                               this.registerButton=false
                        }
                        else{
                             this.$Message.error('验证码输入错误')
                        }
                 })
            },
			registerUser() {
				if (this.registerdata.remeber.length == 0) {
					this.$Notice.error({title: `点击同意服务条框`,duration: 2	})
				} else if (this.registerdata.code == '') {
					this.$Notice.error({title: `请输入验证码`,duration: 2})
				} else {
					this.$http.post('/user/register?loginname='+this.registerdata.name+'&password='+this.registerdata.password+'&phone='+this.registerdata.phone).then(res => {
					     if(res.status==200){
                              this.$Message.success('注册成功')
                             setInterval(()=>{
                                this.$router.push('/login')
                             },1000)
                         }else{
                             this.$Message.error('注册失败')  
                         }
					})
				}
			}
		}
	}
</script>
<style scoped>
	* {
		margin: 0 auto;
		padding: 0
	}
	.margin_b_25 {
		margin-bottom: 25px;
	}
	.login {
		width: 100%;
		min-height: 540px;
		background: #f9f9f9;
		overflow: hidden;
	}
	.login_main {
		width: 300px;
		height: 460px;
		margin-top: 20px;

	}
	.login_main h2 {
		font-weight: 400;
		font-size: 25px;
		text-align: center;
		line-height: 80px
	}
	.login_code {
		height: 33px;
	}
	button {
		width: 100%;
		height: 100%;
	}
	.resigter_buton {
		width: 83%;
		margin: 0 auto;
		height: 33px;
		margin-top: 30px
	}
	.login_check {
		width: 85%;
		height: 25px;
		line-height: 25px;
		margin-top: 25px
	}
</style>