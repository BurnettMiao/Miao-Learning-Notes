## 10-102~103 Adding v-bind to class Attribute.md

1. ActionButton.vue component 以下的程式碼

<button :class="{ primary: primary }" @click="handleClick">
(data 裡面的 primary 為 true，故 class 會被自動帶入 .primary 的 class 內容)
<button :class="{ primary: true }">

```javascript
<template>
  <button :class="{ primary: primary }" @click="handleClick">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: ['text'],
  data() {
    return {
      primary: true
    }
  },
  methods: {
    handleClick() {
      console.log("I've been clicked")
    }
  }
}
</script>

<style scoped>
button {
  @apply rounded px-5 py-3 font-medium;
}

.primary {
  @apply border-0 bg-brand-blue-1 text-white hover:shadow-blue;
}

.secondary {
}
</style>

```
