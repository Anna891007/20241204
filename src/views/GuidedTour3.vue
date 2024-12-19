<!-- 三個區塊 -->
<!-- 1.放vue的js(可有可無) -->
<script></script>

<!-- html的畫面 -->
<template>
  <main class="main">
    <div class="mbb">
      <div class="mp1">채영이가 좋아하는 랜덤 게임, 랜덤 게임
        Game start
        아파트, 아파트, 아파트, 아파트
        아파트, 아파트, uh, uh-huh, uh-huh
        아파트, 아파트, 아파트, 아파트
        아파트, 아파트, uh, uh-huh, uh-huh
        Kissy face, kissy face sent to your phone, but
        I'm trying to kiss your lips for real (uh-huh, uh-huh)
        Red hearts, red hearts, that's what I'm on, yeah
        Come give me somethin' I can feel, oh-oh-oh
        Don't you want me like I want you, baby?
        Don't you need me like I need you now?
        Sleep tomorrow, but tonight go crazy
        All you gotta do is just meet me at the
        아파트, 아파트, 아파트, 아파트
        아파트, 아파트, uh, uh-huh, uh-huh</div>
      <div class="m-text">
        <img class="m-text-pic" src="../assets/img/apt.jpg" alt="導覽 圖片">
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

.m-text-pic {
  width: 40px;
  height: 40px;
}

.m-text {
  width: 327px;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 44px;
  margin-bottom: 10px;
}

.m-text-box {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
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
