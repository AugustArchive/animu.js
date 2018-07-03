declare module 'animu.js' {
    export interface AnimuOptions {
        userAgent: String | string;
    }

    export class AnimuClient {
        public constructor(options: AnimuOptions);

        public anime(): Promise<Object>;
        public hentai(): Promise<Object>;
        public dva(): Promise<Object>;
        public hug(): Promise<Object>;
        public trap(): Promise<Object>;
        public baguette(): Promise<Object>;
    }
}