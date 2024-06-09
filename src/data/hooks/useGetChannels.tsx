import { useEffect, useState } from "react";
import { getChannelsService } from "../services/channelService"
import { ChannelInterface } from "../../core/interfaces/ChannelInterface";
import { PaginationInterface } from "../../core/interfaces/PaginationInterface";

export const useGetChannels = (channelSearch: string) => {
    const [channels, setChannels] = useState<ChannelInterface[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [paginationInfo, setPaginationInfo] = useState<PaginationInterface>();

    const getChannels = async (nextPageToken?: string) => {
        if (!channelSearch) return setChannels([]);
        const response = await getChannelsService({ channel: channelSearch, nextPageToken });
        setChannels(response.channels);
        setIsLoading(false);
        setPaginationInfo(response.paginationInfo);
    };

    useEffect(() => {
        getChannels();
    }, [channelSearch]);

    return {
        channels,
        isLoading,
        paginationInfo,
        getChannels
    };
};