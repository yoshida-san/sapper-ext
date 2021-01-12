<script>
  import { count } from './store.js'
</script>

<h1>The count is <span data-test="result">{$count}</span></h1>

<button data-test="increment" on:click={count.increment}>+</button>
<button data-test="decrement" on:click={count.decrement}>-</button>
<button data-test="reset" on:click={count.reset}>reset</button>
