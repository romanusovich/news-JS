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

export enum Endpoint {
    Sources = 'sources',
    Everything = 'everything',
}

export enum HttpMethod {
    Get = 'GET',
}

export type LoaderOptions = Record<string, string>;

export interface RequestParams {
    endpoint: Endpoint;
    options?: LoaderOptions;
}

export interface ApiResponse {
    status: string;
}

export interface NewsSourceCb extends ApiResponse {
    sources: NewsSource[];
}

export interface NewsDataCb extends ApiResponse {
    articles: NewsData[];
    totalResults: number;
}

export type Callback<T> = (data: T) => void;
export type NewsSourceCallback = Callback<NewsSourceCb>;
export type NewsDataCallback = Callback<NewsDataCb>;
