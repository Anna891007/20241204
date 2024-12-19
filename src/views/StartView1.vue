<script>
</script>

<template>
    <main class="pic">
    <div class="text1">
        <img class="p1" src="./img素材/日本.png" alt="日本語">
        <span class="sp1">日本語</span>
    </div>
    <img class="p2" src="./img素材/中文.png" alt="中文">
    <div class="text3">
        <img class="p3" src="./img素材/英文.png" alt="English">
        <span class="sp3">English</span>
    </div>
</main>
</template>

<style scoped>
.pic {
    width: 100%;
    margin: 50px 0px 50px 20px;
    display: flex;
    justify-content: center;
    gap: 30px;
}
.btn {
    width: 120px;
    height: 44px;
    background-color: #c1240a;
    border-radius: 99px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 700px;
    cursor: pointer;
}
.p1 {
    height: 80%;
}
.p3 {
    height: 88%;
}
.sp1,
.sp3 {
    position: absolute;
    bottom: 0px;
    font-size: 12px;
    font-weight: 400px;
}
.text1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}
.text3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}
a:hover {
    opacity: 0.9;
}
button:active {
    opacity: 0.5;
}
</style>
