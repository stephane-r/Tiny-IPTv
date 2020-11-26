export interface Playlist {
  categories: string[];
  data: {
    [key: string]: ChannelGroup[];
  };
}

export interface ChannelGroup {
  title: string;
  items: Channel[];
}

export interface Channel {
  name: string;
  tvg: {
    id: string;
    name: string;
    language: string;
    country: string;
    logo: string;
    url: string;
  };
  group: {
    title: string;
  };
  http: {
    referrer: string;
    'user-agent': string;
  };
  url: string;
  raw: string;
}
