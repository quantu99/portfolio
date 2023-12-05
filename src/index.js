import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
<link
    href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,200;9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800;9..40,900&family=Fira+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet"
></link>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalStyles>
        <App />
    </GlobalStyles>,
);
