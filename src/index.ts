import App from './components/app/app';
// @ts-expect-error bundler will handle CSS imports
import './global.css';

const app = new App();
app.start();
