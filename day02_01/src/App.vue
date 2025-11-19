<script>

  export default {

    data(){
      return{
        ErrString:{
          username : "이름은 두 글자 이상 입력해야 합니다.",
          email : "이메일 형식이 올바르지 않습니다.",
          password : "비밀번호는 8자 이상이어야 합니다.",
          confirm_password : "비밀번호가 일치하지 않습니다."
        },

        Msg:{
          username: '',
          email: '',
          password: '',
          confirm_password: ''
        },

        username : "",
        email : "",
        password : "",
        confirm_password : "",
        checked : false

      }
    },

    methods:{
      
    checkUsername(){
      if(this.username.length < 2){
        this.Msg.username = this.ErrString.username;
      } else {
        this.Msg.username = "사용 가능한 이름입니다.";
      }
      this.checkDisable();
    },

    checkEmail(){
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailPattern.test(this.email)){
        this.Msg.email = this.ErrString.email;
      } else {
        this.Msg.email = "사용 가능한 이메일입니다.";
      }
      this.checkDisable();
    },

    checkPassword(){
      if(this.password.length < 8){
        this.Msg.password = this.ErrString.password;
      } else {
        this.Msg.password = "사용 가능한 비밀번호입니다.";
      }
      this.checkDisable();
    },

    checkConfirmPassword(){
      if(this.confirm_password !== this.password){
        this.Msg.confirm_password = this.ErrString.confirm_password;
      } else {
        this.Msg.confirm_password = "비밀번호가 일치합니다.";
      }
      this.checkDisable();
    },

    checkDisable(){
      const ok =
        this.Msg.username === "사용 가능한 이름입니다." &&
        this.Msg.email === "사용 가능한 이메일입니다." &&
        this.Msg.password === "사용 가능한 비밀번호입니다." &&
        this.Msg.confirm_password === "비밀번호가 일치합니다.";

        this.checked = ok;
    },

    submitted(){
      alert("이름 : " + this.username + "\n이메일 : " + this.email + "\n비밀번호 : " + this.password + "\n비밀번호 확인 : " + this.confirm_password);
    }

    },  
    
  }

</script>

<template>
  <div>
<form>

  <label for="username">이름: </label>
  <input type="text" id="username" name="username" v-model="username" @blur="checkUsername" />
  <br>
  <span>{{ Msg.username }}</span>
  <br>


  <label for="email">이메일: </label>
  <input type="email" id="email" name="email" v-model="email" @blur="checkEmail"/>
  <br>
  <span>{{ Msg.email }}</span>
  </br>

  <br></br>
  <label for="password">비밀번호: </label>
  <input type="password" id="password" name="password" v-model="password" @blur="checkPassword"/>
  <br>
  <span>{{ Msg.password }}</span>
  </br>
  
  <br></br>
  <label for="confirm_password">비밀번호 확인: </label>
  <input type="password" id="confirm_password" name="confirm_password" v-model="confirm_password" @blur="checkConfirmPassword" />
  <br>
  <span>{{ Msg.confirm_password }}</span>
  </br>

  <br></br>
  <input type="submit" value="회원가입" :disabled="!checked" @click="submitted"/>

</form>
</div>
</template>

<style>

.span {
  color: red;
}

</style>