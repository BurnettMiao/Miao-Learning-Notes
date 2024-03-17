## 10-100 Intor to Props

A prop is a pice of data that a parent component can pass down to a child component

1. MainNav.vue component 要 pass data 到 child component(ActionButton) 作為按鈕的文字(Sign in)，

```javascript
<div class="ml-auto h-full flex items-center">
  <ProfileImage v-if="isLoggedIn" />
  <ActionButton v-else text="Sign in" @click="loginUser" />
</div>
```

2. ActionButton.vue component 接收 **text** 並於 **script** 用 **props** 註冊，最後用插植法 {{ text }} 即可接收 parent component 的值

```javascript
<template>
  <button
    class="rounded border-0 px-5 py-3 font-medium text-white hover:shadow-blue bg-brand-blue-1"
    @click="handleClick"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: ['text'],
  methods: {
    handleClick() {
      console.log("I've been clicked")
    }
  }
}
</script>
```
