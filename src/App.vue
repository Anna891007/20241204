<script>
import { RouterLink,RouterView } from 'vue-router'
import router from '@/router';
export default {
  components: {
    RouterLink,
    RouterView,
  },
  methods: {
    submit(item) {
      router.push(item);
    }
  }
}
</script>

<template>
  <div class="big-box">
        <header class="head">
            <div class="page">
                <span class="title">首頁</span>
            </div>
        </header>

        <RouterView />

        <footer class="footer">
            <div class="fbb">
              <RouterLink to="/PageView" class="p1 pic">
                <img src="./assets/img素材/主頁白.png" alt="主頁-按鈕">
              </RouterLink>

              <RouterLink to="/EventView" class="p2 pic">
                <img src="./assets/img素材/活動灰.png" alt="活動-按鈕">
              </RouterLink>

              <!-- <button type="button" @click="submit('/EventView')" class="p2 pic">
                <img src="./assets/img素材/活動灰.png" alt="活動-按鈕">
              </button> -->

              <RouterLink to="/GuidedTour" class="p3 pic">
                <img src="./assets/img素材/音樂灰.png" alt="語音導覽-按鈕">
              </RouterLink>

              <RouterLink to="/ParkGuidance" class="p4 pic">
                <img src="./assets/img素材/導覽灰.png" alt="園區導引-按鈕">
              </RouterLink>

              <RouterLink to="/MoreInformation" class="p5 pic">
                <img src="./assets/img素材/更多灰.png" alt="更多資訊-按鈕">
              </RouterLink>                
            </div>
        </footer>
    </div>


</template>

<!-- <style scoped>
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
</style> -->
