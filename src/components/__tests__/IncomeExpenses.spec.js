import { describe, expect, it } from 'vitest'
import IncomeExpenses from '../IncomeExpenses.vue'
import { mount } from '@vue/test-utils'

describe('income expenses component', () => {
  it('should display income title', () => {
    const wrapper = mount(IncomeExpenses)
    expect(wrapper.text()).toContain('Income')
  })

  it('should display expense title', () => {
    const wrapper = mount(IncomeExpenses)
    expect(wrapper.text()).toContain('Expense')
  })
})
