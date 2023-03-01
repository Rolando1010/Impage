interface Website {
    title: string,
    description: string,
    icon: string
}

export interface Image {
    name: string,
    originalURL: string,
    originalSize: number,
    optimizedURL: string,
    optimizedSize: number
}

export type WebsiteImages = Website & { images: Image[] };