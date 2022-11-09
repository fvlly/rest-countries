import { BrowserRouter,Route } from "react-router-dom";

import Home from "./pages/Home";
import DetailedPage from "./pages/DetailedPage"
import Header from "./Header";

const App = () => {
  return(
    <BrowserRouter>
    <Header />
    <Route exact path="/" component={Home} />
    <Route exact path="/country/:countryName" component={DetailedPage} />
  </BrowserRouter>
  )
};

export default App;
