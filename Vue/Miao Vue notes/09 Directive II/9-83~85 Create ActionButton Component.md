## 9-83 Create ActionButton Component

1. 在根目錄 **src** folder -> **components** folder -> 創建 ActionButton.vue component

```vue
<template>
  <button
    class="rounded border-0 px-5 py-3 font-medium text-white hover:shadow-blue bg-brand-blue-1"
  >
    Sign in
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
};
</script>
```

2. 在 **MainNav.vue** component import 並且註冊 ActionButton component

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

        // 9-83 新增 start
        <div class="ml-auto h-full flex items-center">
          <ActionButton />
        </div>
        // 9-83 新增 end
      </div>
    </div>
  </header>
</template>

// vue Options API 寫法
<script>
// 9-83 新增 start
import ActionButton from '@/components/ActionButton.vue';
// 9-83 新增 end

export default {
  name: 'MainNav',
  // 9-83 新增 start
  components: { ActionButton },
  // 9-83 新增 end
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

3. 在根目錄下 tailwind.config.js 新增 boxShadow object

```javascript
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'brand-gray-1': '#dadce0',
        'brand-blue-1': '#1967d2',
        'brand-green-1': '#137333',
      },
      // 9-83 新增 start
      boxShadow: {
        blue: '0 0 3px 3px #4285f4',
      },
      // 9-83 新增 end
    },
  },
  plugins: [],
};
```
