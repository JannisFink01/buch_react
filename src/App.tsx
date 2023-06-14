import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Pages/navbar';

export function App() {
    return (
        <div className="Buch">
            <h1>Welcome to BIGBOOKS!</h1>
            <div className="bücher-menu">
                <Navbar />
            </div>
        </div>
    );
}
