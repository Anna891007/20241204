<script>
</script>

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
            <img src="./img素材/掃描.png" alt="導覽-掃描區">
        </div>
        <a href="./guided-tour-1.html">
            <div class="m3">送出</div>
        </a>
    </div>
</main>
</template>

<style scoped>
.head {
    height: 106px;
    width: 100%;
    display: flex;
    position: fixed;
    z-index: 100;
    top: 0px;
    background-color: black;
}

.page {
    height: 100%;
    width: 100%;
    font-size: 20px;
}

.title {
    position: absolute;
    bottom: 13px;
    left: 16px;
}

.main {
    width: 100vw;
    margin-top: 106px;
    margin-bottom: 74px;
    display: flex;
    justify-content: center;
}

.mbb {
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
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

.m3{
    width: 357px;
    height: 48px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    margin-left: 9px;
}
</style>
