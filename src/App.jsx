import { Provider } from "react-redux"
import FormComponent from "./Components/FormComponent"
import store from "./Redux/store"

function App(){
  return(
    <Provider store={store}>
        <div className="app--container">
          <FormComponent />
        </div>
      </Provider>
  )
}

export default App