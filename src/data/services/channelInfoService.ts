import { Statistics } from "../../core/interfaces/ChannelInterface";
export const getChannelInfoService = async ({
  channelId,
}: {
  channelId: string;
}): Promise<Statistics> => {
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const baseUrl: string = "https://www.googleapis.com/youtube/v3/channels?";
  const part: string = "statistics";

  const finalUrl: string = `${baseUrl}part=${part}&key=${apiKey}&id=${channelId}`;

  const resp = await fetch(finalUrl);
  const data = await resp.json();

  const channelInfo: Statistics = data.items[0].statistics;
  return channelInfo;
};
