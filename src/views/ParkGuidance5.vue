<!-- 三個區塊 -->
<!-- 1.放vue的js(可有可無) -->
<script></script>

<!-- html的畫面 -->
<template>
  <section class="aaaa">
    <RouterLink to="/ParkGuidance4" class="aaaa-a">
      <img src="../assets/img/arrow.png" alt="往返箭頭">
    </RouterLink>
    <RouterLink to="/ParkGuidance1">
      <span>返回</span>
    </RouterLink>
  </section>

  <main class="main">
    <div class="mbb">
      <img src="../assets/img/活動集點卡.png" alt="集點卡">
    </div>
  </main>
</template>

<!-- 這個頁面的樣式(可有可無) -->
<style scoped>
.big-box {
  background-color: #0a1219;
  justify-content: center;
}

.page-text2 {
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-weight: 400;
  font-size: 12px;
  border-radius: 50%;
  background-color: #c1240a;
  bottom: 12px;
  right: 36px;
}

.mbb {
  align-items: center;
}

.aaaa {
  display: flex;
  position: absolute;
  left: 30px;
  top: 250px;
  gap: 5px;
}

.aaaa-a {
  margin-top: 3px;
}

.mbb img {
  width: 323px;
  height: 148px;
  border-radius: 13px;
}

.p4 {
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
