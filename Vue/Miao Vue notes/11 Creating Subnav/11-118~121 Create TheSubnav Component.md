## 11-118~121 Create TheSubnav Component

1. 創造一個 TheSubnav component 並且置入至 MainNav component

2. 於 Terminal 打入 npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/vue-fontawesome@latest 即可安裝 fontawesome

3. 於 src folder -> main.js 註冊 fontawesome

```js
// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue';

// fontawesome start
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// fontawesome end

import '@/index.css';
import App from '@/App.vue';

library.add(faSearch);

// fontawesome start
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
// fontawesome end
```
