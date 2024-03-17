## 9-87~88 Conditional Rendering with the v-if Directive

使用 v-if v-else 視情況 render 不同的 component

```vue
<template>
  <header class="w-full text-sm">
    <div class="ml-auto h-full flex items-center">
      // 9-87~88 新增 start
      <ProfileImage v-if="isLoggedIn" />
      <ActionButton v-else />
      // 9-87~88 新增 end
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
      // 9-87~88 新增 start
      isLoggedIn: false,
      // 9-87~88 新增 end
    };
  },
};
</script>
```
