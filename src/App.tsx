import React, { Fragment } from "react";
import Dashboard from "./pages/Dashboard";
import GlobalStyles from "./styles/GlobalStyles";

const App: React.FC = () => {
    return(
        <Fragment>
            <GlobalStyles/>
            <Dashboard/>
        </Fragment>
    )
}

export default App;