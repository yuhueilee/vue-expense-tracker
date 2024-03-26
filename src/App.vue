<template>
  <ExpenseHeader />
  <div class="container">
    <BalanceItem />
  </div>
</template>

<script>
import BalanceItem from './components/Balance.vue'
import ExpenseHeader from './components/Header.vue'

export default {
  components: {
    ExpenseHeader,
    BalanceItem
  }
}
</script>
