## 2-41 Creating the MainNav component

1. 在 src -> componets 下建立一個 MainNav.vue (命名方式須使用 Upper Camel Case 如 MainNav)，即是 vue 中基本的 component

```vue
<template>
  <header class="w-full text-sm">Main Nav</header>
</template>

// vue 2 Options API 寫法
<script>
export default {
  name: 'MainNav',
};
</script>
```
