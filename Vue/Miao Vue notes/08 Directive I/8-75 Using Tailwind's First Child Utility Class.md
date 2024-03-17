## 8-75 Using Tailwind's First Child Utility Class

使用 **first:** 例如 first:ml-0

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
            <!-- 8-75 tailwind class first: -->
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="ml-9 h-full first:ml-0"
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
