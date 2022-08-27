import React from "react";
import Redux from "./redux/Redux";
import ReduxToolkit from "./redux-toolkit/ReduxToolkit";
import ReduxToolkitThunk from "./redux-toolkit-thunk/ReduxToolkitThunk";

const App = () => {
  return (
    <div>
      <h1>Redux</h1>
      <Redux />
      <h1>Redux-toolkit</h1>
      <ReduxToolkit />
      <h1>Redux-toolkit Thunk</h1>
      <ReduxToolkitThunk />
    </div>
  );
};

export default App;
