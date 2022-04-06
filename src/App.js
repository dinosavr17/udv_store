import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Cart} from "./pages/Cart";
import Navbar from "./components/Navbar";
import {Orders} from "./pages/Orders";
import {UserInfo} from "./pages/UserInfo";
import {SidebarData} from "./components/SidebarData";
function App() {
  return (
      <BrowserRouter>
          <Navbar/>
          <div className="container">
       <Switch>
           <Route path={'/'} exact component={Home}></Route>
           <Route path={'/cart'} component={Cart}></Route>
           <Route path={'/orders'} component={Orders}></Route>
           <Route path={'/about'} component={UserInfo}></Route>
           <Route path={'/sidebar'} component={SidebarData}></Route>
       </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
