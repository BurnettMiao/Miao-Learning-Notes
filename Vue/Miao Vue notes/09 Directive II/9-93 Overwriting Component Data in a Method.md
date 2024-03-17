## 9-63 Overwriting Component Data in a Method

於 MainNav.vue component 中改寫成以下程式，使其能夠用 methods 寫一個功能切換登入狀態。

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

        <div class="ml-auto h-full flex items-center">
          <ProfileImage v-if="isLoggedIn" />
          // 9-93 新增 start
          <ActionButton v-else @click="loginUser" />
          // 9-93 新增 end
        </div>
      </div>
    </div>
  </header>
</template>

// vue Options API 寫法
<script>
import ActionButton from '@/components/ActionButton.vue';
import ProfileImage from '@/components/ProfileImage.vue';

export default {
  name: 'MainNav',
  components: { ActionButton, ProfileImage },
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
      isLoggedIn: false,
    };
  },
  // 9-93 新增 start
  methods: {
    loginUser() {
      this.isLoggedIn = !this.isLoggedIn;
    },
  },
  // 9-93 新增 end
};
</script>
```
