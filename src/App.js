import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Cart} from "./pages/Cart";
import Navbar from "./components/Navbar";
import {Orders} from "./pages/Orders";
import {UserInfo} from "./pages/UserInfo";
import {SidebarData} from "./components/SidebarData";
import {SignUp} from "./pages/SignUp";
import {SignIn} from "./pages/SignIn";
function App() {
  return (
      <BrowserRouter>
          <Route path={'/sign-up'} component={SignUp}></Route>
          <Route path={'/sign-in'} component={SignIn}></Route>
          <Navbar/>
       <Switch>
           <Route path={'/'} exact component={Home}></Route>
           <Route path={'/cart'} component={Cart}></Route>
           <Route path={'/orders'} component={Orders}></Route>
           <Route path={'/about'} component={UserInfo}></Route>
           <Route path={'/sidebar'} component={SidebarData}></Route>
       </Switch>
      </BrowserRouter>
  );
}

export default App;
