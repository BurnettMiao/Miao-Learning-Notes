## 9-89~91 Adding Methods to Vue Component

於 根目錄 **components** folder 下 ActionButton.vue component 加入以下程式碼，並使用 v-on 觸發 handleClick **methods**。

v-on:click="handleClick" 簡寫為 @click="handleClick"

```vue
<template>
  <button
    class="rounded border-0 px-5 py-3 font-medium text-white hover:shadow-blue bg-brand-blue-1"
    @click="handleClick"
  >
    Sign in
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  methods: {
    handleClick() {
      console.log("I've been clicked");
    },
  },
};
</script>
```
