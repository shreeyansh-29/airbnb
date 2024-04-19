import Header from "components/header/header";
import Home from "pages/home/home";
import Footer from "components/footer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SearchPage from "pages/searchPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route exact path="/search" children={<SearchPage />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
