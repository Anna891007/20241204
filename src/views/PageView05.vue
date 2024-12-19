<!-- 三個區塊 -->
<!-- 1.放vue的js(可有可無) -->
<script></script>

<!-- html的畫面 -->
<template>
  <main class="main">
    <div class="mbb">
      <div class="arrow">
        <a href="./page.html">
          <img class="arrow-s" src="./assets/img/arrow.png" alt="返回">
        </a>
      </div>
      <div class="pic">
        <RouterLink to="/PageView03">
          <img src="./assets/img/所有年度展覽.png" alt="年度展覽">
        </RouterLink>
        <RouterLink to="/PageView03">
          <img src="./assets/img/所有年度展覽.png" alt="年度展覽">
        </RouterLink>
        <RouterLink to="/PageView03">
          <img src="./assets/img/所有年度展覽.png" alt="年度展覽">
        </RouterLink>
        <RouterLink to="/PageView03">
          <img src="./assets/img/所有年度展覽.png" alt="年度展覽">
        </RouterLink>
        <RouterLink to="/PageView03">
          <img src="./assets/img/所有年度展覽.png" alt="年度展覽">
        </RouterLink>
        <RouterLink to="/PageView03">
          <img src="./assets/img/所有年度展覽.png" alt="年度展覽">
        </RouterLink>
        <RouterLink to="/PageView03">
          <img src="./assets/img/所有年度展覽.png" alt="年度展覽">
        </RouterLink>
        <RouterLink to="/PageView03">
          <img src="./assets/img/所有年度展覽.png" alt="年度展覽">
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<!-- 這個頁面的樣式(可有可無) -->
<style>
.arrow {
  width: 25px;
  height: 25px;
  margin-top: 10px;
  margin-left: 26px;
  margin-bottom: 11px;
}

.pic {
  display: flex;
  flex-wrap: wrap;
  gap: 11px;
}

.p1 {
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
