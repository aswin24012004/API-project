import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Outlet,
  createBrowserRouter,
  Link,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ErrorNotFound from "./ErrorNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorNotFound />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link> */}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          navigate("/Contact");
        }}
      >
        Contact
      </button>
      <button
        onClick={() => {
          navigate("/About");
        }}
      >
        About
      </button>
      <Outlet />
    </div>
  );
};
export default NavBar;
