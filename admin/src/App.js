import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import MovieList from "./pages/movieList/MovieList";
import Lists from "./pages/list/Lists";
import NewList from "./pages/newList/NewList";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Topbar />
      <Switch>
        <Route path="/login"><Login/></Route>
        {user && 
        <>
          <div className="container">
            <Sidebar />

            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/newUser">
              <NewUser />
            </Route>
            <Route path="/movies">
              <ProductList />
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/newproduct">
              <NewProduct />
            </Route>
            <Route path="/lists">
              <MovieList />
            </Route>
             <Route path="/list/:listId">
              <Lists />
            </Route>
            <Route path="/newlist">
              <NewList />
            </Route> 
          </div>
          </>
        }
      </Switch>
    </Router>
  );
}

export default App;
