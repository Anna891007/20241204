<!-- 三個區塊 -->
<!-- 1.放vue的js(可有可無) -->
<script></script>

<!-- html的畫面 -->
<template>
  <main class="main">
    <div class="mbb">
      <img class="mp1" src="../assets/img/apt.jpg" alt="導覽 圖片">
      <div class="m-text">
        <div class="m-text-box">
          <span class="m-text-1">ROSE & BRUNO MARS</span>
          <span class="m-text-2">APT</span>
        </div>
      </div>
      <img class="mp2" src="../assets/img/播放條.png" alt="播放 進度條">
      <div class="mbt">
        <img src="../assets/img/3往前.png" alt="往前 15秒">
        <img src="../assets/img/播放鈕.png" alt="播放鈕">
        <img src="../assets/img/3往後.png" alt="往後 15秒">
      </div>
    </div>
  </main>
</template>

<!-- 這個頁面的樣式(可有可無) -->
<style scoped>
.page-pic {
  position: absolute;
}

.pp1 {
  bottom: 13px;
  left: 16px;
}

.pp2 {
  bottom: 13px;
  right: 16px;
}

.mbb {
  width: 100%;
  align-items: center;
  flex-direction: column;
}

.mp1 {
  width: 300px;
  height: 300px;
  margin-top: 47px;
  margin-bottom: 30px;
}

.m-text {
  width: 285px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.m-text-box {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  margin-left: 4px;
}

.m-text-1 {
  font-size: 15px;
}

.m-text-2 {
  font-size: 10px;
}

.mbt {
  width: 375px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 34px;
}

.p1 {
  position: absolute;
  left: 16px;
}

.p2 {
  position: absolute;
  right: 16px;
}
</style>
