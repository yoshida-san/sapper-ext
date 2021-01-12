import { render, fireEvent } from '@testing-library/svelte'
import Counter from '../../../src/routes/counter/index.svelte'

it('Testting counter component', async () => {
  const { container } = render(Counter)
  const incrementButton = container.querySelector(
    'button[data-test="increment"]'
  )
  const resultText = container.querySelector('span[data-test="result"]')

  await fireEvent.click(incrementButton)
  expect(resultText.textContent).toBe('1')
})
