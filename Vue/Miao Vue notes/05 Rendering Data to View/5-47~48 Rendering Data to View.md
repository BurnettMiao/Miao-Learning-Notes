## Rendering Data to View

1. 在 **export default** 下創建一個 **data** function 並 return object 值

2. 於 template 中使用插值(Interpolation)語法如下所示

3. 如有多個 Multiple Data Properties 則可以使用 . 來取值，如下所示的 author

```vue
<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 ba-white">
      <div
        class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8 mx-auto"
      >
        <a href="/" class="flex h-full items-center text-xl">{{ company }}</a>
        <h2 class="ml-8 flex h-full items-center">
          Developed by {{ author.firstName }} {{ author.lastName }}
        </h2>
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
      author: {
        firstName: 'Boris',
        lastName: 'Paskhaver',
      },
    };
  },
};
</script>
```
