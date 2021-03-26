import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
