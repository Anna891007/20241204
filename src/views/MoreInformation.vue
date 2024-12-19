<script>
</script>

<template>
    <main class="main">
        <div class="box">
            <div class="title-a">聯絡我們</div>
            <div class="box-a box-fb">
                <span>
                    <a href="https://www.facebook.com/NationalComicMuseum/" class="icon">
                        <img src="./img素材/FB.svg" alt="">
                        <span>Facebook</span>
                    </a>
                </span>
                <a href="https://www.facebook.com/NationalComicMuseum/" class="icon">
                    <img src="./img素材/material-symbols_arrow link.svg" alt="">
                </a>



            </div>
            <hr>

            <div class="box-a box-ig">
                <span>
                    <a href="https://www.instagram.com/preparatory_office_of_ntmc/" class="icon">
                        <img src="./img素材/ig.svg" alt="">
                        <span>Instagram</span>
                    </a>
                </span>
                <a href="https://www.instagram.com/preparatory_office_of_ntmc/" class="icon">
                    <img src="./img素材/material-symbols_arrow link.svg" alt="">
                </a>


            </div>
            <hr>
            <div class="box-a box-web">
                <span>
                    <a href="https://www.ntmc.gov.tw/home/zh-tw" class="icon">
                        <img src="./img素材/web.svg" alt="">
                        <span>Official website</span>
                    </a>
                </span>
                <a href="https://www.ntmc.gov.tw/home/zh-tw" class="icon">
                    <img src="./img素材/material-symbols_arrow link.svg" alt="">
                </a>

            </div>
        </div>
    </main>

</template>

<style>
.box {
    /* margin-top: 290px; */
    position: absolute;
    bottom: 74px;
    width: auto;
    height: 200px;
    font-family: Arial;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
}

.title-a {
    font-size: 16px;
    font-weight: 700;
}

hr {
    width: 300px;
}

.box-a {
    width: auto;
    height: 36px;
    display: flex;
    align-items: center;
    padding: 10px 0px;
    display: flex;
    justify-content: space-between;

}

.icon {
    width: 16px;
    height: 16px;
    padding: 8px;
}

.p5 {
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