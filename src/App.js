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
import Ques1_1 from "./components/question/ques1_1.jsx"
import Ques1_2 from "./components/question/ques1_2.jsx"
import Ques1_3 from "./components/question/ques1_3.jsx"
import Ques3_1 from "./components/question/ques3_1.jsx"
import Ques3_2 from "./components/question/ques3_2.jsx"
import Ques3_3 from "./components/question/ques3_3.jsx"
import Ques4_1 from "./components/question/ques4_1.jsx"
import Ques4_2 from "./components/question/ques4_2.jsx"
import Ques5_1 from "./components/question/ques5_1.jsx"
import Ques6_1 from "./components/question/ques6_1.jsx"
import Ques6_2 from "./components/question/ques6_2.jsx"
import Ques7_1 from "./components/question/ques7_1.jsx"
import Ques7_2 from "./components/question/ques7_2.jsx"


// complete the paths for files above

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
                // <PrivateRoute>
                  <Home />
                // </PrivateRoute>
              }
            />
            <Route path="login" exact element={<Login />} />
            <Route path="logout" exact element={<Logout />} />
            <Route path="ques1_1" exact element={<Ques1_1 />} />
            <Route path="ques1_2" exact element={<Ques1_2 />} />
            <Route path="ques1_3" exact element={<Ques1_3 />} />
            <Route path="ques3_1" exact element={<Ques3_1 />} />
            <Route path="ques3_2" exact element={<Ques3_2 />} />
            <Route path="ques3_3" exact element={<Ques3_3 />} />
            <Route path="ques4_1" exact element={<Ques4_1 />} />
            <Route path="ques4_2" exact element={<Ques4_2 />} />
            <Route path="ques5_1" exact element={<Ques5_1 />} />
            <Route path="ques6_1" exact element={<Ques6_1 />} />
            <Route path="ques6_2" exact element={<Ques6_2 />} />
            <Route path="ques7_1" exact element={<Ques7_1 />} />
            <Route path="ques7_2" exact element={<Ques7_2 />} />
            <Route
              path="question"
              exact
              element={
                //<PrivateRoute>
                  <Question />
                //</PrivateRoute>
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
