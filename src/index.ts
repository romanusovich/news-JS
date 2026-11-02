import App from './components/app/app';
// @ts-expect-error
import './global.css';

const app = new App();
app.start();
