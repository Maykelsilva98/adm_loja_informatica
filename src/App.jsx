import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './components/Style/App.css';
import Login from './components/composer/Login/Login';
import Home from './components/composer/Home';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
            </Routes>
        </Router>
    );
};





export default App;
