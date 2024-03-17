## 10-107 Adding Secondary Button

```vue
<template>
  <!-- <button :class="{ primary: true }"  -->
  <!-- <button :class="{ primary: primary }"> -->
  <button :class="buttonClass">
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
  // 10-107 新增 start
  computed: {
    buttonClass() {
      return { primary: this.primary, secondary: !this.primary };
    },
  },
  // 10-107 新增 end
};
</script>

<style scoped>
button {
  @apply rounded px-5 py-3 font-medium;
}

.primary {
  @apply border-0 bg-brand-blue-1 text-white hover:shadow-blue;
}

// 10-107 新增 start
.secondary {
  @apply bg-transparent text-brand-blue-1 hover:bg-brand-blue-2 hover:text-white;
}
// 10-107 新增 end
</style>
```
