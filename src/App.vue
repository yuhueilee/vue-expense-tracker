<template>
  <ExpenseHeader />
  <div class="container">
    <BalanceItem />
    <IncomeExpenses />
  </div>
</template>

<script>
import BalanceItem from './components/Balance.vue'
import ExpenseHeader from './components/Header.vue'
import IncomeExpenses from './components/IncomeExpenses.vue'

export default {
  components: {
    ExpenseHeader,
    BalanceItem,
    IncomeExpenses
  }
}
</script>
