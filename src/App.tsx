import { Provider } from "react-redux"
import Products from "./pages/Products"
import store from "./store/store"

function App() {

  return (
    <>
    <Provider store={store}>
      <Products/>
    </Provider>
    </>
  )
}

export default App
