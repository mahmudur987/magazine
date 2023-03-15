import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/Routes";

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App"></div>
    </RouterProvider>
  );
}

export default App;
