## 6-52 Quick Fix for Testing Issues

Before starting the next lesson, open the **package.json** in your project and make sure the **test:unit** command has the following script:

- **package.json** 裡面的 **test:unit** 須改成以下

```javascript
"test:unit": "vitest --environment jsdom",
```

The Create Vue utility adds a new --root src/ flag to this test:unit command in its latest version. This setting tells Vitest to look for tests within the src directory. We'll be using a different directory structure for our tests throughout the course, so that extra --root flag is not needed.

See this question for more info:

https://www.udemy.com/course/vue-masterclass/learn/lecture/35041768#questions/18761582
