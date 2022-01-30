// react
import React, {FunctionComponent} from 'react';
// react-router-dom
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
// pages
import Admin from "./pages/Admin";
import Home from "./pages/Home";

const App: FunctionComponent = (): JSX.Element => {
        return (
            <Router>
                <div className="grid-container">
                    <header>
                        <Link to="/">TROLLEY</Link>
                        <Link to="/admin">Admin</Link>
                    </header>
                    <main>
                        <Routes>
                            <Route path="/admin" element={<Admin />} />
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </main>
                    <footer>
                        All right is reserved.
                    </footer>
                </div>
            </Router>
    );
};

export default App;
