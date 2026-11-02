import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { NewsDataCb, NewsSourceCb } from '../types';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sources: HTMLElement = document.querySelector('.sources') as HTMLElement;
        sources.addEventListener('click', (e) =>
            this.controller.getNews(e, (data: NewsDataCb) => this.view.drawNews(data))
        );
        this.controller.getSources((data: NewsSourceCb) => this.view.drawSources(data));
    }
}

export default App;
