## JavaScript 同步非同步

[How to FETCH data from an API using JavaScript](https://youtu.be/37vxWr0WgQk?si=_ZRIjoMJxlmIOgkJ)

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
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Could not fetch resource.');
    }

    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error(error));
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

```javascript
fetchData();

async function fetchData() {
  try {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon/typhlosion'
    );

    if (!response.ok) {
      throw new Error('Could not fetch resource.');
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```
