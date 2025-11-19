<script>

export default{

  methods:{

    onkeyupHandler(event){
      if(event.keyCode === 13){
        alert("엔터키 입력됨!"); 
    }
  },

  increment(){
    this.number += 1;
  },

  decrement(){
    this.number -= 1;
  }
},

data(){
   return {
    number : 0,
    name: "ssg",
    age:20,
    gender:"male",
    
   }
  }

}

</script>

<template>

<input type="text" @keyup="($event) => onkeyupHandler($event)" />
<input type="text" @keyup.enter = "onkeyupHandler" />

<h1>{{ number }}</h1>
<button @click="increment">증가</button>
<button @click="decrement">감소</button>

<!-- 저장 하겠다-->
<div v-memo="[name, gender]">
  <p>이름: {{ name }}</p>
  <p>성벌: {{ gender }}</p>
  <p>나이: {{ age }}</p>
</div>

<button @click="name = 'ssg1'">이름 변경</button>
<button @click="age = 30">나이 변경 </button>
<button @click="gender = 'female'">성별 변경</button>


</template>

<style></style>