import { Provider } from "react-redux"
import DashboardComponent from "./Components/DashboardComponent"
import FormComponent from "./Components/FormComponent"
import store from "./Redux/store"

function App(){
  return(
    <Provider store={store}>
        <div className="app--container">
          <FormComponent />
          <DashboardComponent />
        </div>
      </Provider>
  )
}

export default App