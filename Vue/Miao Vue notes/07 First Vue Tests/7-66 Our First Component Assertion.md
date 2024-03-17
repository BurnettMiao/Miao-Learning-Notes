## 7-66 Our First Component Assertion

1. **tests** folder -> **unit** folder -> **components** folder -> MainNav.test.js (測試 MainNav 這個 component 的 Bobo Careers 字串)，輸入以下程式碼

```javascript
import { render, screen } from '@testing-library/vue';

import MainNav from '@/components/MainNav.vue';

describe('MainNav', () => {
  it('displays compony name', () => {
    render(MainNav);
    const componyName = screen.getByText('Bobo Careers');
    expect(componyName).toBeInTheDocument();
  });
});
```
