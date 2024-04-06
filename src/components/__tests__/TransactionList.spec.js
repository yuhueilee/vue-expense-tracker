import { describe, expect, it } from 'vitest'
import TransactionList from '../TransactionList.vue'
import { mount } from '@vue/test-utils'

describe('transaction list component', () => {
  it('should display two transaction items', () => {
    const wrapper = mount(TransactionList)
    const list = wrapper.get('#list')
    expect(list.element.childElementCount).toBe(2)
  })
})
