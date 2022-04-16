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
import Announcement from "./components/Announcement";
function App() {
  return (
      <BrowserRouter>
          <Route path={'/sign-up'} component={SignUp}></Route>
          <Route path={'/sign-in'} component={SignIn}></Route>
          <Announcement/>
          <Navbar/>
       <Switch>
           <Route path={'/sidebar'} component={SidebarData}></Route>
           <Route path={'/'} exact component={Home}></Route>
           <Route path={'/cart'} component={Cart}></Route>
           <Route path={'/orders'} component={Orders}></Route>
           <Route path={'/about'} component={UserInfo}></Route>
       </Switch>
      </BrowserRouter>
  );
}

export default App;
