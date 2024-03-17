## 2-42 Rendering Child Component with the components Property

1. 在 App.vue 的 **script** 標籤裡 import **MainNav** component

2. 在 App.vue 的 **export default** object 建立一個 **component** object 註冊 **MainNav** component

3. 即可在 **template** 標籤裡使用 **MainNav** component

4. component 有兩種使用方式如 template 所示

5. 另一種 component 寫法為 Kebab Case 方式 **main-nav** 如 template 所示

```vue
<template>
  <MainNav />
  <MainNav></MainNav>
  <main-nav />
  <main-nav></main-nav>
</template>

<script>
import MainNav from '@/components/MainNav.vue';

export default {
  name: 'App',
  components: {
    MainNav, // main-nav
  },
};
</script>
```
