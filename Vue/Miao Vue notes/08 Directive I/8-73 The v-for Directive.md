## 8-73 The v-for Directive

當有多個 menuItems 則可以使用 **v-for** ，vue 即會馬上 loop 出所有的 item ，省去許多重複貼上的事情

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

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <!-- v-for Directive -->
            <li v-for="menuItem in menuItems" class="ml-9 h-full">
              <a href="#" class="flex h-full items-center py-2.5">{{
                menuItem
              }}</a>
            </li>
          </ul>
        </nav>
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
      menuItems: [
        'Teams',
        'Locations',
        'Life at Bobo Corp',
        'How we hire',
        'Students',
        'Jobs',
      ],
    };
  },
};
</script>
```
