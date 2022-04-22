import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Our Files
import Home from "./Components/HomePage/HomePage.js"

function App() {
    

    return(
        <Router>
            <Routes>
                <Route path='/' exact element={<Home/>} />
            </Routes>
        </Router>
    );

}

export default App
