## 9-86 Create ProfileImage Component

1. 在根目錄 **src** folder -> **components** folder -> 創建 ProfileImage.vue component，圖片連結設於 data () 並使用 v-bind 方式綁定

```vue
<template>
  <img :src="imageLink" class="h-8 w-8 rounded-3xl object-contain" alt="" />
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageLink:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    };
  },
};
</script>
```
