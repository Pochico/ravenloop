import { ChannelInterface } from "../../core/interfaces/ChannelInterface";
import { PaginationInterface } from "../../core/interfaces/PaginationInterface";

interface ChannelsResponse {
  channels: ChannelInterface[];
  paginationInfo: PaginationInterface;
}

export const getChannelsService = async ({
  channel = "",
  nextPageToken = "",
}: {
  channel: string;
  nextPageToken?: string;
}): Promise<ChannelsResponse> => {
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const baseUrl = `https://www.googleapis.com/youtube/v3/search?`;
  const maxResults = 10;
  const type = "channel";
  const finalUrl = `${baseUrl}part=snippet&key=${apiKey}&q=${channel}&maxResults=${maxResults}&type=${type}${
    nextPageToken ? `&pageToken=${nextPageToken}` : ""
  }`;

  const resp = await fetch(finalUrl);
  const data = await resp.json();

  const channels: ChannelInterface[] = data.items.map(
    (channel: ChannelInterface) => ({
      id: channel.id,
      title: channel.snippet.title,
      description: channel.snippet.description,
      thumbnail: channel.snippet.thumbnails.default.url,
    })
  );

  const paginationInfo: PaginationInterface = {
    totalResults: data.pageInfo.totalResults,
    resultsPerPage: data.pageInfo.resultsPerPage,
    nextPageToken: data.nextPageToken,
    prevPageToken: data.prevPageToken,
  };

  return {
    channels,
    paginationInfo,
  };
};
