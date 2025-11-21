<script setup>
import { ref, computed } from "vue";

/**
 * ✅ props:
 * - faqs: FAQ 목록 배열
 * - loading: 로딩 중 표시용
 * - allowAdmin: 수정/삭제 버튼 노출 여부
 *
 * ✅ emit:
 * - select: FAQ 펼칠 때 선택 알림
 * - edit: 수정 버튼 클릭
 * - remove: 삭제 버튼 클릭
 */
const props = defineProps({
  faqs: {
    type: Array,
    default: () => [
      {
        id: 1,
        question: "회원가입은 어떻게 하나요?",
        answer: "우측 상단의 회원가입 버튼을 눌러 정보를 입력하면 됩니다.",
        category: "계정",
        updatedAt: "2025-11-21",
      },
      {
        id: 2,
        question: "비밀번호를 잊어버렸어요.",
        answer: "로그인 화면에서 '비밀번호 찾기'를 이용해 재설정할 수 있습니다.",
        category: "계정",
        updatedAt: "2025-11-18",
      },
      {
        id: 3,
        question: "배송 조회는 어디서 하나요?",
        answer: "마이페이지 > 주문내역에서 배송상태를 확인할 수 있습니다.",
        category: "주문/배송",
        updatedAt: "2025-11-10",
      },
    ],
  },
  loading: { type: Boolean, default: false },
  allowAdmin: { type: Boolean, default: false },
});

const emit = defineEmits(["select", "edit", "remove"]);

// 검색어 / 카테고리 / 펼쳐진 FAQ
const search = ref("");
const currentCategory = ref("all");
const openId = ref(null);

// 카테고리 목록 자동 생성
const categories = computed(() => {
  const set = new Set(props.faqs.map((f) => f.category).filter(Boolean));
  return ["all", ...set];
});

// 검색 + 카테고리 필터
const filteredFaqs = computed(() => {
  const q = search.value.trim().toLowerCase();
  return props.faqs.filter((f) => {
    const matchCategory =
      currentCategory.value === "all" || f.category === currentCategory.value;

    const matchSearch =
      !q ||
      f.question.toLowerCase().includes(q) ||
      (f.answer && f.answer.toLowerCase().includes(q));

    return matchCategory && matchSearch;
  });
});

// 아코디언 토글
const toggle = (id) => {
  openId.value = openId.value === id ? null : id;
  emit("select", id);
};

// 관리자 버튼
const onEdit = (faq) => emit("edit", faq);
const onRemove = (id) => emit("remove", id);
</script>

<template>
  <section class="faq-wrap">
    <header class="faq-header">
      <h2 class="faq-title">FAQ</h2>

      <div class="faq-controls">
        <input
          v-model="search"
          type="text"
          class="faq-search"
          placeholder="검색어를 입력하세요"
        />

        <select v-model="currentCategory" class="faq-select">
          <option v-for="c in categories" :key="c" :value="c">
            {{ c === "all" ? "전체" : c }}
          </option>
        </select>
      </div>
    </header>

    <!-- 로딩 -->
    <div v-if="loading" class="faq-state">불러오는 중...</div>

    <!-- 비어있음 -->
    <div v-else-if="filteredFaqs.length === 0" class="faq-state">
      검색 결과가 없습니다.
    </div>

    <!-- 리스트 -->
    <ul v-else class="faq-list">
      <li v-for="faq in filteredFaqs" :key="faq.id" class="faq-item">
        <button
          class="faq-q"
          type="button"
          :aria-expanded="openId === faq.id"
          @click="toggle(faq.id)"
        >
          <span class="faq-q-text">{{ faq.question }}</span>
          <span class="faq-q-meta">
            <span v-if="faq.category" class="chip">{{ faq.category }}</span>
            <span class="chev" :class="{ open: openId === faq.id }">▾</span>
          </span>
        </button>

        <div v-show="openId === faq.id" class="faq-a">
          <p class="faq-a-text">{{ faq.answer }}</p>

          <div class="faq-a-footer">
            <small v-if="faq.updatedAt" class="updated">
              업데이트: {{ faq.updatedAt }}
            </small>

            <div v-if="allowAdmin" class="admin-actions">
              <button class="btn edit" @click="onEdit(faq)">수정</button>
              <button class="btn remove" @click="onRemove(faq.id)">삭제</button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.faq-wrap {
  max-width: 820px;
  margin: 0 auto;
  padding: 20px;
  color: #e9eef5;
}

.faq-header {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 14px;
}

.faq-title {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.2px;
}

.faq-controls {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.faq-search,
.faq-select {
  background: #0e1420;
  border: 1px solid #243047;
  color: #e9eef5;
  padding: 10px 12px;
  border-radius: 10px;
  outline: none;
}

.faq-search {
  flex: 1;
  min-width: 200px;
}

.faq-select {
  width: 140px;
}

.faq-state {
  padding: 30px;
  text-align: center;
  background: #0e1420;
  border: 1px dashed #243047;
  border-radius: 12px;
  color: #a7b2c7;
}

.faq-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.faq-item {
  background: #0e1420;
  border: 1px solid #1b2640;
  border-radius: 12px;
  overflow: hidden;
}

.faq-q {
  width: 100%;
  text-align: left;
  padding: 14px 16px;
  background: transparent;
  border: none;
  color: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.faq-q:hover {
  background: rgba(255, 255, 255, 0.03);
}

.faq-q-text {
  font-weight: 600;
  line-height: 1.3;
}

.faq-q-meta {
  display: flex;
  align-items: center;
  gap: 8px;
}

.chip {
  font-size: 12px;
  padding: 4px 8px;
  background: #142038;
  border: 1px solid #243047;
  border-radius: 999px;
  color: #c9d4e8;
}

.chev {
  transition: transform 0.18s ease;
  opacity: 0.8;
}
.chev.open {
  transform: rotate(180deg);
}

.faq-a {
  padding: 0 16px 14px 16px;
  border-top: 1px solid #1b2640;
}

.faq-a-text {
  margin: 12px 0 8px 0;
  color: #cfd7e6;
  line-height: 1.6;
  white-space: pre-line;
}

.faq-a-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.updated {
  color: #93a0b8;
}

.admin-actions {
  display: flex;
  gap: 6px;
}

.btn {
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid #243047;
  background: #121a2a;
  color: #d7dfef;
  cursor: pointer;
  font-size: 12px;
}
.btn.edit:hover {
  border-color: #3b82f6;
}
.btn.remove:hover {
  border-color: #ef4444;
}
</style>
