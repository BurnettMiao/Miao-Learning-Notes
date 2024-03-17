## 10-101 The Tailwind @apply Directive

1. ActionButton.vue component 裡的值可用 @apply 的方式寫進 **style** 而不用在 **template** 寫

```javascript
<template>
  <button class="primary" @click="handleClick">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: ['text'],
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
