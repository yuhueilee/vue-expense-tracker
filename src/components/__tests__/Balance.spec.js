import BalanceItem from '../Balance.vue'
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

describe('balance component', () => {
  it('should display title', () => {
    const wrapper = mount(BalanceItem)
    expect(wrapper.text()).toContain('Your Balance')
  })
})
