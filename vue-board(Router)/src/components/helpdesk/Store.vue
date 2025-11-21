<script setup>
// 매장 이용 안내문 페이지 (정적 안내)
// 필요하면 아래 데이터를 API로 교체해서 동적으로 써도 됨.
const notices = [
  {
    title: "운영 시간",
    items: [
      "평일 10:00 ~ 20:00",
      "주말/공휴일 11:00 ~ 19:00",
      "정기 휴무: 매주 월요일 (공휴일인 경우 정상 운영)",
    ],
  },
  {
    title: "매장 이용 방법",
    items: [
      "입장 후 안내 데스크에서 이용 목적(구매/상담/픽업)을 말씀해 주세요.",
      "상품은 진열대 순서대로 자유롭게 둘러보실 수 있습니다.",
      "직원 상담이 필요한 경우 ‘상담 요청’ 버튼(또는 데스크)에 요청해 주세요.",
      "결제는 카운터/키오스크 모두 가능합니다.",
    ],
  },
  {
    title: "픽업/예약 서비스",
    items: [
      "온라인 주문 후 ‘매장 픽업’ 선택 시 준비 완료 알림을 보내드립니다.",
      "픽업 가능 시간 내 방문해 주문번호를 제시해 주세요.",
      "예약 상품은 3일간 보관되며 이후 자동 취소될 수 있습니다.",
    ],
  },
  {
    title: "교환/환불 안내",
    items: [
      "구매일로부터 7일 이내, 미개봉/미사용 상품에 한해 교환·환불 가능합니다.",
      "영수증 또는 주문내역(모바일)을 꼭 지참해 주세요.",
      "단순 변심의 경우 왕복 배송비/포장 비용이 발생할 수 있습니다.",
      "식품/위생용품/커스텀 상품은 교환·환불이 제한됩니다.",
    ],
  },
  {
    title: "주차/오시는 길",
    items: [
      "매장 지하 주차장 이용 가능 (2시간 무료, 이후 10분당 500원)",
      "대중교통 이용 시 ‘OO역 3번 출구’ 도보 5분 거리",
      "주말 혼잡 시간대에는 인근 공영주차장 이용을 권장합니다.",
    ],
  },
  {
    title: "매장 이용 유의사항",
    items: [
      "매장 내 음식물 반입 및 취식은 제한됩니다.",
      "상품 훼손/분실 시 변상 책임이 발생할 수 있습니다.",
      "안전사고 예방을 위해 어린이는 보호자 동반이 필요합니다.",
      "반려동물 동반은 캐리어 또는 유모차 이용 시에만 가능합니다.",
    ],
  },
];

const contacts = [
  { label: "고객센터", value: "1588-0000" },
  { label: "이메일", value: "help@store.com" },
  { label: "카카오톡", value: "@StoreOfficial" },
];
</script>

<template>
  <main class="store-wrap">
    <!-- 헤더 -->
    <header class="hero">
      <div class="hero-badge">STORE GUIDE</div>
      <h1 class="hero-title">매장 이용 안내</h1>
      <p class="hero-sub">
        편안하고 안전한 쇼핑을 위해 아래 안내사항을 확인해 주세요.
      </p>
    </header>

    <!-- 안내 섹션 -->
    <section class="notice-grid">
      <article v-for="(n, i) in notices" :key="i" class="notice-card">
        <h2 class="notice-title">{{ n.title }}</h2>
        <ul class="notice-list">
          <li v-for="(it, j) in n.items" :key="j">{{ it }}</li>
        </ul>
      </article>
    </section>

    <!-- 문의 -->
    <section class="contact-card">
      <h2 class="contact-title">문의 및 도움</h2>
      <p class="contact-sub">
        이용 중 불편 사항이나 궁금한 점이 있으시면 언제든지 연락해 주세요.
      </p>

      <div class="contact-row">
        <div v-for="(c, i) in contacts" :key="i" class="contact-item">
          <span class="label">{{ c.label }}</span>
          <span class="value">{{ c.value }}</span>
        </div>
      </div>

      <p class="contact-foot">
        ※ 혼잡 시간대에는 답변이 지연될 수 있습니다. 양해 부탁드립니다.
      </p>
    </section>
  </main>
</template>

<style scoped>
.store-wrap {
  max-width: 980px;
  margin: 0 auto;
  padding: 24px;
  color: #0f172a; /* 전체 기본 글자색 다크 */
}

/* 헤더(상단 큰 박스) */
.hero {
  background: linear-gradient(180deg, #ffffff, #f3f6ff);
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  padding: 22px 20px;
  margin-bottom: 18px;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
}

.hero-badge {
  display: inline-block;
  font-size: 12px;
  letter-spacing: 1px;
  padding: 6px 10px;
  border-radius: 999px;
  background: #eef2ff;
  border: 1px solid #dbe2ff;
  color: #3b5bcc;
  margin-bottom: 10px;
}

.hero-title {
  font-size: 26px;
  font-weight: 800;
  margin: 0 0 6px 0;
}

.hero-sub {
  margin: 0;
  color: #475569;
  line-height: 1.6;
}

/* 안내 카드 그리드 */
.notice-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.notice-card {
  background: #ffffff;
  border: 1px solid #e6ebf2;
  border-radius: 14px;
  padding: 16px 16px 14px;
  box-shadow: 0 6px 14px rgba(15, 23, 42, 0.06);
}

.notice-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #0f172a;
}

.notice-list {
  margin: 0;
  padding-left: 18px;
  color: #334155;
  line-height: 1.7;
  font-size: 14.5px;
}

/* 문의 카드 */
.contact-card {
  margin-top: 14px;
  background: #ffffff;
  border: 1px solid #e6ebf2;
  border-radius: 14px;
  padding: 18px;
  box-shadow: 0 6px 14px rgba(15, 23, 42, 0.06);
}

.contact-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 6px 0;
}

.contact-sub {
  margin: 0 0 10px 0;
  color: #475569;
  font-size: 14.5px;
}

.contact-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
  margin: 8px 0 6px;
}

.contact-item {
  background: #f8fafc;
  border: 1px dashed #e2e8f0;
  border-radius: 10px;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.label {
  font-size: 12px;
  color: #64748b;
}

.value {
  font-weight: 600;
  color: #0f172a;
}

.contact-foot {
  margin: 6px 0 0;
  font-size: 12px;
  color: #6b7280;
}

/* 반응형 */
@media (max-width: 720px) {
  .notice-grid {
    grid-template-columns: 1fr;
  }
  .contact-row {
    grid-template-columns: 1fr;
  }
}
</style>
