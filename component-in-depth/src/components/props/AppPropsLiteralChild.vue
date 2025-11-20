<script setup>
import { computed } from "vue";    // computed() 가져오기 — 계산된 속성

// 부모가 내려준 Props 선언
const props = defineProps({
    fruitId: String,               // 과일 고유 ID
    fruitName: String,             // 과일 이름
    isChecked: Boolean             // 체크 여부
});

// 이미지 경로를 동적으로 계산하는 computed 속성
const imgSrc = computed(() => {
    return new URL(`../../assets/${props.fruitId}.png`, import.meta.url).href;
    // props.fruitId 값에 따라 f1.png, f2.png 등 이미지 파일 경로 동적 생성
});
</script>

<template>
    <div class="div-fruit">
        <input 
            type="checkbox" 
            :id="fruitId"          
            :checked="isChecked"   
        >

        <label :for="fruitId">     
            <img 
                :src="imgSrc"      
                class="img-fruit" 
                :alt="fruitName"   
            >
            {{ fruitName }}        
        </label>
    </div>
</template>

<style scoped>
.div-fruit {
    margin-bottom: 5px;
    font-size: large;
}

.img-fruit {
    width: 20px;
    margin: 0 1px 0 5px;
}
</style>
