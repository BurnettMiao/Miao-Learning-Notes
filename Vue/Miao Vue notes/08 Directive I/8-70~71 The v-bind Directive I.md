## 8-70~71 The v-bind Directive I

- 綁定值使用 v-bind，如想要給 a 標籤動態連結則使用 **v-bind:herf="url"** 簡寫為 **:href="url"** ，之後修改 data 裡的 url 則 template 裡的 a 標籤也會跟著連動
- 想要在網頁呈現則使用插值( Interpolation)與法 **{{ company }}**

```vue
<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 ba-white">
      <div
        class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8 mx-auto"
      >
        <a :href="url" class="flex h-full items-center text-xl">{{
          company
        }}</a>
      </div>
    </div>
  </header>
</template>

// vue 2 Options API 寫法
<script>
export default {
  name: 'MainNav',
  data() {
    return {
      company: 'Bobo Careers',
      url: 'https://careers.google.com',
    };
  },
};
</script>
```
