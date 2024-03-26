import { describe, expect, it } from 'vitest'
import ExpenseHeader from '../Header.vue'
import { mount } from '@vue/test-utils'

describe('header component', () => {
  it('should display title', () => {
    const wrapper = mount(ExpenseHeader)
    expect(wrapper.text()).toContain('Expense Tracker')
  })
})
