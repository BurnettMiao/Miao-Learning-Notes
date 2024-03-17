## 7-67 The Second Argument to render Function

不建議如此做，可能會與 MainNav component 發生不同步的情形，導致 unit test faild

1. **tests** folder -> **unit** folder -> **components** folder -> MainNav.test.js (測試 MainNav 這個 component 的 Bobo Careers 字串)，輸入以下程式碼

```javascript
import { render, screen } from '@testing-library/vue';

import MainNav from '@/components/MainNav.vue';

describe('MainNav', () => {
  it('displays compony name', () => {
    render(MainNav, {
      // 7-67 新增
      data() {
        return {
          company: 'Super Corp',
        };
      },
    });
    // 7-67 修改
    const componyName = screen.getByText('Super Corp');
    expect(componyName).toBeInTheDocument();
  });
});
```
