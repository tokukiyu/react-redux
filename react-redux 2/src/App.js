import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./component/cakeContainer";
import HooksContainer from "./component/hooksContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
