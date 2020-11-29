import Route from "react-router-dom/es/Route";
import React from "react";
import LoginPage from "./LoginPage";
import {renderAdminPanel} from "./renderAdminPanel";

const App = (props) => {
    return <div>
        <Route path='/push' render={() => renderAdminPanel() } />
        <Route path='/' render={() => <LoginPage/>} />
    </div>
}

export default App;