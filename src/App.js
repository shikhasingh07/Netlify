import Login from "./Components/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import home from "./Components/home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={home} />
        </Switch>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
