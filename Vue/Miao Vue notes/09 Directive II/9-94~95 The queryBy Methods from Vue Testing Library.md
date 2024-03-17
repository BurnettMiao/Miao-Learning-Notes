## 9-94~95 The queryBy Methods from Vue Testing Library

1. MainNav.test.js 新增以下程式碼

```javascript
import { render, screen } from '@testing-library/vue';
// 9-94 新增 start
import userEvent from '@testing-library/user-event';
// 9-94 新增 end

import MainNav from '@/components/MainNav.vue';
import { describe } from 'vitest';

describe('MainNav', () => {
  it('displays compony name', () => {
    render(MainNav, {
      data() {
        return {
          company: 'Super Corp',
        };
      },
    });
    const componyName = screen.getByText('Super Corp');
    expect(componyName).toBeInTheDocument();
  });

  it('displays menu items for navigation', () => {
    render(MainNav);
    const navigationMenuItems = screen.getAllByRole('listitem');
    const navigationMenuTexts = navigationMenuItems.map(
      (item) => item.textContent
    );
    expect(navigationMenuTexts).toEqual([
      'Teams',
      'Locations',
      'Life at Bobo Corp',
      'How we hire',
      'Students',
      'Jobs',
    ]);
  });

  // 9-94 新增 start
  describe('when the user logs in', () => {
    it('display user profile picture', async () => {
      render(MainNav);

      screen.debug();

      let profileImage = screen.queryByRole('img', {
        name: /user profile image/i,
      });
      expect(profileImage).not.toBeInTheDocument();

      const loginButton = screen.getByRole('button', {
        name: /sign in/i,
      });
      await userEvent.click(loginButton);

      profileImage = screen.getByRole('img', {
        name: /user profile image/i,
      });
      expect(profileImage).toBeInTheDocument();
    });
  });
  // 9-94 新增 end
});
```
