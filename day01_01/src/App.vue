<script>
  export default {

    data(){
      return{
        // message : "",
        // fruit : ['banana', 'orange'],
        // gender: ['female', 'male'],
        // selectItem : 'cafeLatte',

        uid : "",
        upw : "",
      }
    },
    
    methods: {
      login(){
        alert(`아이디: ${this.uid}, 비밀번호: ${this.upw}`);
      } ,

      pringData(){
        console.log(`id: ${this.uid}, pw: ${this.upw}`);
      }
    }

  }
</script>



<template>
  <form>
    <label for="uid">아이디:</label>
    <input type="text" id="uid" v-model="uid" />
    <br/>
    <label for="upw">비밀번호:</label>
    <input type="password" id="upw" v-model="upw" />
    <br/>
    <button type="button" @click="login">로그인</button>
    <br/>
    
    <!-- <textarea v-model="message" cols="30" rows="10"></textarea>
    <button type="button" @click="pringData">출력</button> -->

    <!-- <label for="banana">
      <input type="checkbox" id="banana" v-model="fruit" value="banana"/>banana
    </label>
    <label for="orange">
      <input type="checkbox" id="orange" v-model="fruit" value="orange"/>orange
    </label>
    <label for="strawberry">
      <input type="checkbox" id="strawberry" v-model="fruit" value="strawberry"/>strawberry
    </label>

    <button type="button" @click="pringData">출력</button> -->


    <!-- <label for="female">
      <input type="radio" id="female" v-model="gender" value="female"/>여자
    </label>
    <label for="male">
      <input type="radio" id="male" v-model="gender" value="male"/>남자
    </label>
    <button type="button" @click="pringData">출력</button>  -->

    <!-- 콥보박스의 요소가 사용자가 선택한 option 태그의 value 속성의 값이 v-model 연결된 selectItem ㄷ데이터에 연결되어 있어서 자동 업데이트 된다.-->
    <!-- <select v-model="selectItem">
      <option value="cafeAmericano">아메리카노</option>
      <option value="cafeLatte">카페라떼</option>
      <option value="cafeMocha">카페모카</option>
      <option value="cafeCappuccino">카푸치노</option>
    </select> -->

    <button type="button" @click="pringData">출력</button>




  </form>


</template>



<style></style>