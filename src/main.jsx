import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Body from './components/body';
import List from './components/list';
import './styles/styles.css';

const App = () => {
    return (
        <>
            <Header />
            <Body />
            <List />
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);