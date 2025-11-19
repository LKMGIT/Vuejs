<script>
export default {
  //데이터 정의 
  // 컴포넌트 전반에 걸쳐서 사용할 값들을 의미한다. 

  // data: function(){
  //   return {
  //     message: "Hello Vue!"
  //   }
  // },

  data(){
    return {
      // message: `<h1>Hello Vue!</h1>`
      // message: "hello Vue!"    
      // className: 'red-color',
      // visiable: true,
      // unvisiable: false

      condition : 'A',
      show: true,
      names : ["ssg1", "ssg2", "ssg3"],

      user : {
        name: "jone",
        age: 20
      },

      methods: {
        clickHandler(event, value){
          console.log(event);
          console.log(value);
          alert("클릭됨!");
        }
      }
      
  }

}}
</script>
<template>
  
  <div v-html="message"></div>
  <div v-text="message"></div>
  <div v-pre>{{message}}></div>
  
  <!-- <h1 v-bind:class="className">안녕하세요</h1> -->
  
  
  
  <!-- <p v-if="visiable">보임</p>
  <p v-if="unvisiable">안보임</p> -->

  <p v-if="condition === 'A'">A입니다.</p>
  <p v-else-if="condition === 'B'">B입니다.</p>
  <p v-else>모릅니다.</p>


  <p v-show="show">v-show 조건이 참</p>
  <p v-show="!show">v-show 조건이 그짓</p>

  <ul>
    <li v-for="(name, index) in names" :key="index">{{index}} - {{name}}</li>
  </ul>

  <ul>
    <li v-for="(name) in names">{{name}}</li>
  </ul>

  <ul>
    <li v-for="(name, key ,index) in names" :key="index">
      index: {{index}} - key: {{key}} - value: {{name}}</li>
  </ul>

  <br>
  <ul>
    <li v-for="(name, age) in user":key="index">
      key: {{age}} - value: {{name}}
    </li>
  </ul>

  <button v-on:click="methods.clickHandler($event, 123)">클릭</button>


</template>
<style>
.red-color{
  color: red;
}
</style>