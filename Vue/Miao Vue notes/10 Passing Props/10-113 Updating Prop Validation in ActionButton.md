## 10-113 Updating Prop Validation in ActionButton

1. 在 ActionButton component 下的 script 中驗證 props

```js
<script>
export default {
  name: 'ActionButton',
  // props: ['text', 'type'],
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: 'primary'
    }
  },
  computed: {
    buttonClass() {
      return {
        // primary: this.type === 'primary',
        // secondary: this.type === 'secondary'
        [this.type]: true // {primary: true} {secondary: true}
      }
    }
  }
}
</script>
```
