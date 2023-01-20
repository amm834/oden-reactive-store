# Reactive Store

To leverage the power of reactive programming, we need to be able to store data in a reactive way.
This lib provides a simple way to define a reactive store for your micro-frontend application.

## Installation

```bash
npm i oden-reactive-store
```

## Usage

Define a store which will global accessible and reactive in your application which means when you change state in
another
component it will be updated in all other components which are using the same store.

```javascript
import {defineStore} from "oden-reactive-store";

export const useCounterStore = defineStore(0)
```

Now you can use the store in your components like this.
You can use the store via custom hook `useCounterStore` which will return the current state and a function to update the
state like `useState`.

```javascript
import {useCounterStore} from "../store/useCounterStore";

const Counter = () => {
    const [count, setCount] = useCounterStore();

    return (
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </div>
    );
};

export default Counter;
```

And you can use your component like this.
When you click the counter button it will be updated in all other components which are using the same store.

```javascript
function App() {

    return (
        <div className="App">
            <h1>Reactive Store</h1>
            <Counter/>
            <Counter/>
            <div>
                Counter value will change across all components due to reactive store behavior
            </div>
        </div>
    )
}
```