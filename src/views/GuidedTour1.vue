<!-- 三個區塊 -->
<!-- 1.放vue的js(可有可無) -->
<script></script>

<!-- html的畫面 -->
<template>
  <main class="main">
    <div class="mbb">
      <div class="m1">
        <div class="m1b"></div>
        <div class="m1b"></div>
        <div class="m1b"></div>
        <div class="m1b"></div>
      </div>
      <div class="m2">
        <img src="../assets/img/掃描.png" alt="導覽-掃描區">
      </div>
      <RouterLink to="/GuidedTour2">
        <div class="m3">送出</div>
      </RouterLink>
    </div>
  </main>
</template>

<!-- 這個頁面的樣式(可有可無) -->
<style>
.mbb {
  width: 100%;
}

.m1 {
  width: 375px;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 54px;
}

.m1b {
  width: 44px;
  height: 65px;
  background-color: gainsboro;
  border-radius: 5px;
}

.m2 {
  width: 375px;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 81px;
  margin-bottom: 48px;
}

.m2 img {
  width: 80px;
  height: 80px;
}

.m3 {
  width: 357px;
  height: 48px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-left: 9px;
}

.p3 {
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