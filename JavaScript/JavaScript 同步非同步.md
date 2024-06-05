## JavaScript 同步非同步

**fetch**

```javascript
fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => {
    if (!res.ok) {
      console.log('not found data');
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
    const userInfo = data.map((user) => {
      return user.name;
    });
    console.log(userInfo);
  })
  .catch((err) => {
    console.log(err);
  });
```

```javascript
fetch('https://reqres.in/api/users/23', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'User 2', age: 23, job: 'FrontEnd Developer' }),
})
  .then((res) => {
    if (!res.ok) {
      throw new Error('response was not ok!');
    }
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));
```

**Async function / Await**

```javascript
const getApi = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  console.log(data);
};
getApi();
```
