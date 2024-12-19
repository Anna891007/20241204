<script>
export default {
  props: {
    item: Object,
  }
}
</script>

<template>
  <div class="m2card">
    <img src="../assets/img/展覽.png" alt="展覽">
    <div class="m2text">
      <div class="mt1">{{ $props.item?.title }}</div>
      <div class="mt2">{{ $props.item?.name }}</div>
      <div class="mt3">{{ $props.item?.date }}</div>
    </div>
  </div>
</template>

<style scoped>
.m2card {
  overflow: hidden;
  width: 100px;
}

.m2text {
  width: 100%;
  height: 80px;
  padding: 5px;
}
</style>
