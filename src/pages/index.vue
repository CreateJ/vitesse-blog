<script setup lang="ts">
</script>

<template>
  <div>
    <ul>
      <li v-for="value in 20" :key="value" class="h-20">
        {{ value }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.name {
  background-color: black;
}
</style>

<!--
<route lang="yaml">
# 在这里配置layout
# 如果不配置会直接使用default.vue
meta:
  layout: home
</route>
-->
