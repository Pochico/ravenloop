import { useEffect, useState } from "react";
import { getChannelInfoService } from "../services/channelInfoService"
import { Statistics } from "../../core/interfaces/ChannelInterface";

export const useGetChannelInfo = ({ channel: channelId }: { channel: string }) => {
    const [channelInfo, setChannelInfo] = useState<Statistics | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const getChannels = async () => {
        if (!channelId) return setChannelInfo(null);
        const channelInfo = await getChannelInfoService({ channelId: channelId });
        setChannelInfo(channelInfo);
        setIsLoading(false);
    };

    useEffect(() => {
        getChannels();
    }, [channelId]);

    return {
        channelInfo,
        isLoading
    };
};