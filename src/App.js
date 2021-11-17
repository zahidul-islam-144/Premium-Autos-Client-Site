import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header/Header";
import About from "./components/Header/About/About";
import Explore from "./components/Header/Explore/Explore";
import Contact from "./components/Header/Contact/Contact";
import Login from "./components/Header/Login/Login";
import Home from "./components/Home/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Header/Register/Register";
import Dashboard from "./components/Header/Dashboard/Dashboard";
import Dashboard2 from "./components/Header/Dashboard/Dashboard2";
import AuthProvider from "./contexts/authProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import EditCar from "./components/Admin/EditCar/EditCar";
import ProductDetails from "./components/Home/ProductDetails/ProductDetails";
import SelectNow from "./components/SelectNow/SelectNow";
import SelectNowForm from "./components/SelectNow/SelectNowForm";
import RatingForm from "./components/Home/RatingPage/RatingForm";
import EditOrder from "./components/User/Review/EditOrder/EditOrder";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/about" component={About} />
            {/* <About></About> */}
            {/* </Route> */}

            <Route path="/explore">
              <Explore></Explore>
            </Route>

            <Route path="/details/:dId">
              <ProductDetails></ProductDetails>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path="/register">
              <Register></Register>
            </Route>
{/* 
            <PrivateRoute path="/select-now/:sId">
              <SelectNow></SelectNow>
            </PrivateRoute> */}

            <PrivateRoute path="/select-now/:sId">
              <SelectNowForm></SelectNowForm>
            </PrivateRoute>

            <PrivateRoute path="/rating-form/:rId">
              <RatingForm></RatingForm>
            </PrivateRoute>

            <PrivateRoute path="/edit-order/:eoId">
              <EditOrder></EditOrder>
            </PrivateRoute>

          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
