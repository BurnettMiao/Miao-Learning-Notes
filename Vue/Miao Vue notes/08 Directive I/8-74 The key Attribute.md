## 8-74 The :key Attribue

使用 v-for 須加上 key 且 key 須為獨一無二不可重複，key 綁定為 v-bind，Vue 這樣才可以辨別

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
            <!-- 8-74 使用 :key="" -->
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="ml-9 h-full"
            >
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
