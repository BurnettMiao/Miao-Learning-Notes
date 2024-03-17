## 10-104~105 Intro to Computed Properties

- computed 為被動更新的，需要 return 一個值出來。
- 讓 Computed 更新的條件，是原始資料必須變更，也就是說資料沒變動的話就不會觸發 Computed 更新，不管取幾次他都會拿暫存的資料給你

1. 在根目錄 **components** folder -> ActionButton.vue

```vue
<template>
  <!-- 10-104 新增 start -->
  <!-- <button :class="{ primary: true }"  -->
  <!-- <button :class="{ primary: primary }"> -->
  <button :class="buttonClass">
    <!-- 10-104 新增 end -->
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: ['text'],
  data() {
    return {
      primary: true,
    };
  },

  // 10-104 新增 start
  computed: {
    buttonClass() {
      return { primary: this.primary };
    },
  },
  // 10-104 新增 end
};
</script>

<style scoped>
button {
  @apply rounded px-5 py-3 font-medium;
}

.primary {
  @apply border-0 bg-brand-blue-1 text-white hover:shadow-blue;
}

.secondary {
  height: 60px;
  width: 60px;
}
</style>
```
