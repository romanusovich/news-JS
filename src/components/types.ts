export interface NewsSource {
    id: string;
    category: string;
    country: string;
    description: string;
    language: string;
    name: string;
    url: string;
}

export interface NewsData {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: NewsSource;
    title: string;
    url: string;
    urlToImage: string;
}

export interface NewsSourceCb {
    sources: NewsSource[];
    status: string;
}

export interface NewsDataCb {
    articles: NewsData[];
    status: string;
    totalResults: number;
}

export type NewsSourceCallback = (data: NewsSourceCb) => void;
export type NewsDataCallback = (data: NewsDataCb) => void;