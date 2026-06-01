import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const isGithubPages = import.meta.env.MODE === 'github';

const basename = isGithubPages ? '/tristan-portfolio-site' : '';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);
