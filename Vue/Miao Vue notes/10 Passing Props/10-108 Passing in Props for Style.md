## 10-108 Passing in Props for Style

1. 在根目錄 **components** folder -> MainNav.vue 的 component

- 其中 :is-primary="false" 因為 props 是 boolean 所以要用 v-bind 綁定
- is-primary vue 會自動辨識成 isPrimary

```vue
<div class="ml-auto h-full flex items-center">
  <ProfileImage v-if="isLoggedIn" />
  <ActionButton v-else text="Sign in" :is-primary="false" @click="loginUser" />
</div>
```

2. 在根目錄 **components** folder -> ActionButton.vue

```vue
<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: ['text', 'isPrimary'],
  computed: {
    // 10-108 新增 start
    buttonClass() {
      return { primary: this.isPrimary, secondary: !this.isPrimary };
    },
    // 10-108 新增 end
  },
};
</script>
```
