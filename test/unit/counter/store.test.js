import { get } from 'svelte/store'
import { count } from '../../../src/routes/counter/store.js'

describe('Testing counter/store', () => {
  it('Increment(Positive number)', () => {
    count.set(0)
    expect(get(count)).toBe(0)
    count.increment()
    expect(get(count)).toBe(1)
  })

  it('Increment(Negative number)', () => {
    count.set(-100)
    expect(get(count)).toBe(-100)
    count.increment()
    expect(get(count)).toBe(-99)
  })

  it('Decrement(Positive number)', () => {
    count.set(100)
    expect(get(count)).toBe(100)
    count.decrement()
    expect(get(count)).toBe(99)
  })

  it('Decrement(Negative number)', () => {
    count.set(-99)
    expect(get(count)).toBe(-99)
    count.decrement()
    expect(get(count)).toBe(-100)
  })
})
