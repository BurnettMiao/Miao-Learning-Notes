```vue
<script setup>
import { ref, computed } from 'vue';

const drinks = ref([
  { id: 1, name: 'Coffee', price: 50 },
  { id: 2, name: 'Latte', price: 60 },
  { id: 3, name: 'Matcha Latte', price: 70 },
  { id: 4, name: 'Black Tea', price: 40 },
]);

const cart = ref([]);

const totalQuantity = computed(() => {
  return cart.value.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);
});

const totalPrice = computed(() => {
  return cart.value.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
});

function addDrink(drink) {
  const existItem = cart.value.find((item) => {
    return item.id === drink.id;
  });

  if (existItem) {
    existItem.quantity++;
  } else {
    cart.value.push({ ...drink, quantity: 1 });
  }
}

function increment(item) {
  item.quantity++;
}

function decrement(item) {
  if (item.quantity > 1) {
    item.quantity--;
  } else {
    cart.value = cart.value.filter((cartItem) => cartItem.id !== item.id);
  }
}
</script>

<template>
  <h1>Order Drink</h1>

  <!-- 飲料清單 -->
  <div class="drinks-container">
    <div class="drink-item" v-for="drink in drinks" :key="drink.id">
      <span>{{ drink.name }} - ${{ drink.price }} </span>

      <button @click="addDrink(drink)">加入</button>
    </div>
  </div>

  <br />

  <!-- 訂單摘要 -->
  <div class="summary">
    <p>Total Cups: {{ totalQuantity }}</p>
    <p>Total Amount: {{ totalPrice }}</p>
  </div>

  <br />

  <!-- 訂單明細 -->
  <h2>Order Lists</h2>
  <div v-if="cart.length === 0">Lists Empty</div>
  <div v-else>
    <div class="cart-item" v-for="drink in cart" :key="drink.id">
      <span>
        {{ drink.name }} x {{ drink.quantity }} - ${{
          drink.price * drink.quantity
        }}
      </span>

      <div>
        <button @click="increment(drink)">+1</button>
        <button @click="decrement(drink)">-1</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.drinks-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 200px;
}

.summary {
  font-weight: bold;
}

.drink-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.cart-item {
  max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
```
