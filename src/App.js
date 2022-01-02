import React from 'react';
import store from "./store"
import {Provider} from "react-redux";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import AdminScreen from "./screens/AdminScreen";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="grid-container">
                    <header>
                        <Link to="/">TROLLEY</Link>
                    </header>
                    <main>
                        <Routes>
                            <Route path="/admin" element={<AdminScreen />} />
                            <Route exact path="/" element={<HomeScreen />} />
                        </Routes>
                    </main>
                    <footer>
                        All right is reserved.
                    </footer>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
