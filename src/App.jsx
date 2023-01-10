import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "./pages/signin";
import Signout from "./pages/signout";
import Home from "./pages/home";
import Login from "./pages/login";
import { Provider } from "react-redux";
import store from "./redux/store";
import userManager, { loadUserFromStorage } from "./services/user-service";
import AuthProvider from "./utils/auth-provider";
import ProtectedRoute from "./utils/protected-route";

function App() {
  useEffect(() => {
    // fetch current user from cookies
    loadUserFromStorage(store);
  }, []);

  return (
    <Provider store={store}>
      <AuthProvider userManager={userManager} store={store}>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signout" component={Signout} />
            <Route path="/signin" component={Signin} />
            <ProtectedRoute path="/" component={Home} />
          </Switch>
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;
