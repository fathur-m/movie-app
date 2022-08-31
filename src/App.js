import React, { Suspense } from "react";
import "./styles/App.css";

const Home = React.lazy(() => import("./HomeScreen"));

function App() {
  return (
    <div className="app">
      <Suspense
        fallback={
          <div className="loading">
            <h4>Loading...</h4>
          </div>
        }
      >
        <Home />
      </Suspense>
    </div>
  );
}

export default App;
