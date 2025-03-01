import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Body from './components/body';
import List from './components/list';
import Footer from './components/footer';
import './styles/styles.css';

const App = () => {
    return (
        <div className="app-container">
            <Header />
            <Body />
            <List />
            <Footer />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
