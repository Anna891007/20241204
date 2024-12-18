<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="big-box">
    <header class="head">
      <div class="page">
        <img class="page-pic pp1" src="./assets/img/下拉.png" alt="下拉-縮小">
        <RouterLink to="/GuidedTour1">
          <img class="page-pic pp2" src="./assets/img/叉叉.png" alt="離開 本頁">
        </RouterLink>
      </div>
    </header>

    <!-- 每個頁面的內容 -->
    <RouterView />

    <footer class="footer">
      <div class="fbb">
        <RouterLink to="/GuidedTour2">
          <img src="./assets/img/3下左.png" alt="詳細 內容">
        </RouterLink>
        <RouterLink to="/GuidedTour3">
          <img src="./assets/img/3下右.png" alt="更多-作品">
        </RouterLink>
      </div>
    </footer>
  </div>
  <!-- 頁面都會使用到的 -->
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
