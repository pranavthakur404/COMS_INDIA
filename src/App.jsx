import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./root/Root";
import {
  Home,
  About,
  Career,
  Complaience,
  Contact,
  Projects,
  Services,
  Teams,
  Gallary,
  SecurityService,
} from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root></Root>}>
      <Route index element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/career" element={<Career />}></Route>
      <Route path="/complaience" element={<Complaience />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/teams" element={<Teams />}></Route>
      <Route path="/gallary" element={<Gallary />}></Route>
      <Route path="/security-service" element={<SecurityService />}></Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
