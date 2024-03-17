## 10-114 Custom Prop Validation with the validator Function

1. 在 ActionButton component 下的 script 客製化中驗證 props

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
      default: 'primary',
      // 客製化驗證 props
      validator(value) {
        return ['primary', 'secondary'].includes(value)
      }
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
