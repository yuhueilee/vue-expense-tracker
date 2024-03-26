<template>
  <ExpenseHeader />
  <div class="container">
    <BalanceItem />
  </div>
</template>

<script>
import ExpenseHeader from './components/Header.vue'
import BalanceItem from './components/Balance.vue'

export default {
  components: {
    ExpenseHeader,
    BalanceItem
  }
}
</script>
