import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Root from "./routes/root";
import Home from "./routes/home";
import Login from "./routes/login";
import Logout from "./routes/logout";
import PrivateRoute from "./components/PrivateRoute";
import { Question } from "./routes/question";
import { NotFound } from "./routes/404";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         index: true,
//         element: (
//           <PrivateRoute>
//             <Home />
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//       {
//         path: "register",
//         element: <Register />,
//       },
//       {
//         path: "logout",
//         element: <Logout />,
//       },
//     ],
//   },
// ]);

function App() {
  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      <Router>
        <Routes>
          <Route path="/" exact element={<Root />}>
            <Route
              index
              exact
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path="login" exact element={<Login />} />
            <Route path="logout" exact element={<Logout />} />
            <Route
              path="question"
              exact
              element={
                <PrivateRoute>
                  <Question />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="*" exact element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
