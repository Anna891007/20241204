<!-- 三個區塊 -->
<!-- 1.放vue的js(可有可無) -->
<!-- <script> Options
export default {
  methods: {
    submit(item) {
      this.$router.push(item);
    }
  }
}
</script> -->
<script setup> //Composition
import router from '@/router';
const submit = function (item) {
  router.push(item);
}
</script>

<!-- html的畫面 -->
<template>
  <section>
  </section>
  <main class="main">
    <div class="mbb">
      <button @click="submit('/GuidedTour1')">12321</button>
      <div class="m1">藝術</div>
      <div class="m2">
        <div class="m2card">
          <img src="../assets/img/展覽.png" alt="展覽">
          <div class="m2text">
            <div class="mt1">展覽標題</div>
            <div class="mt2">藝術家</div>
            <div class="mt3">展覽日期</div>
          </div>
        </div>
        <div class="m2card">
          <img src="../assets/img/展覽.png" alt="展覽">
          <div class="m2text">
            <div class="mt1">展覽標題</div>
            <div class="mt2">藝術家</div>
            <div class="mt3">展覽日期</div>
          </div>
        </div>
        <div class="m2card">
          <img src="../assets/img/展覽.png" alt="展覽">
          <div class="m2text">
            <div class="mt1">展覽標題</div>
            <div class="mt2">藝術家</div>
            <div class="mt3">展覽日期</div>
          </div>
        </div>
      </div>
      <div class="m3">
        <div class="m3-1">近期市集</div>
        <img src="../assets/img/市集.png" alt="市集">
        <div class="m3-2">日期</div>
        <div class="m3-3">地點</div>
      </div>
      <div class="m4">
        <div class="m4-1">近期市集</div>
        <img src="../assets/img/市集.png" alt="市集">
      </div>
    </div>
  </main>
</template>

<!-- 這個頁面的樣式(可有可無) -->
<style scoped>
.m1 {
  width: 100%;
  height: 24px;
  margin-bottom: 5px;
}

.m2 {
  display: flex;
  width: 100%;
  height: 181px;
  gap: 20px;
}

.m2card {
  overflow: hidden;
  width: 100px;
}

.m2text {
  width: 100%;
  height: 80px;
  padding: 5px;
}

.mt1 {
  overflow: hidden;
  width: 90px;
  height: 21px;
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 14px;
}

.mt2,
.mt3 {
  font-size: 12px;
  font-weight: 400;
}

.m3,
.m4 {
  width: 335px;
  display: flex;
  flex-direction: column;
  font-size: 23px;
  margin-bottom: 10px;
}

.m3-1,
.m4-1 {
  width: 100%;
  height: 26px;
  /* overflow: hidden; */
  margin-bottom: 10px;
}

.m3 img {
  width: 100%;
  margin-bottom: 11px;
}

.m3-2 {
  font-size: 20px;
  margin-bottom: 6px;
}

.m3-3 {
  font-size: 16px;
}

.p2 {
  width: 46px;
  height: 46px;
  background-color: red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 28px;
}
</style>
