export interface Thumbnail {
    url: string;
    width: number;
    height: number;
}

interface Snippet {
    title: string;
    description: string;
    thumbnails: {
        default: Thumbnail;
        medium: Thumbnail;
        high: Thumbnail;
    };
}

export interface Statistics {
    viewCount: string;
    subscriberCount: string;
    hiddenSubscriberCount: boolean;
    videoCount: string;
}


export interface ChannelInterface {
    kind: string;
    etag: string;
    id: Id;
    snippet: Snippet;
    title: string;
    description: string;
    thumbnail: Thumbnail;
    statistics: Statistics;
}

export interface Id {
    channelId: string;
}