import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import CreateEvent from "./pages/CreateEvent";
import Event from "./pages/Event";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <CreateEvent />,
  },
  {
    path: "/event/:id/edit",
    element: <CreateEvent />,
  },
  {
    path: "/event/:id",
    element: <Event />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
