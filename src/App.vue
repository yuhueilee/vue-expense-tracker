<template>
  <ExpenseHeader />
  <div class="container">
    <BalanceItem />
    <IncomeExpenses />
    <TransactionList />
  </div>
</template>

<script>
import BalanceItem from './components/Balance.vue'
import ExpenseHeader from './components/Header.vue'
import IncomeExpenses from './components/IncomeExpenses.vue'
import TransactionList from './components/TransactionList.vue'

export default {
  components: {
    ExpenseHeader,
    BalanceItem,
    IncomeExpenses,
    TransactionList
  }
}
</script>
