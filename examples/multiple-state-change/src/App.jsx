import './App.css'
import Counter from "./components/Counter.jsx";

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

export default App
