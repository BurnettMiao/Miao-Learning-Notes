## 11-122 Use FontAwesome Icon in TheSubnav

1. 於 TheSubnav component 中使用 fontawesome

```js
<template>
  <div class="w-full h-16 border-b border-solid border-brand-gray-1 bg-white">
    <div class="flex h-full items-center px-8">
      <div>
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span><span class="text-brand-green-1">1653</span> jobs matched</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheSubnav'
}
</script>

```
