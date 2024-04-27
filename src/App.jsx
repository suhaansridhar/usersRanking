import { Provider } from "react-redux"

function App(){
  return(
    <Provider store = {store}>
      <div className="app--container">
        <FormComponent />
        <Dashboard />
      </div>
    </Provider>
  )
}

export default App