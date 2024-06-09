import { useState } from "react";
import { ChannelList } from "../components/ChannelList";
import { ChannelSearch } from "../components/ChannelSearch";
import { Tabbar } from "../components/Tabbar";
import { Dashboard } from "../components/Dashboard";
import { Pagination } from "../components/Pagination";
import { useGetChannels } from "../../data/hooks/useGetChannels";

export const ChannelFeed = () => {
    const [channelName, setChannelName] = useState('');
    const [activeChannelName, setActiveChannelName] = useState('');
    const { channels, paginationInfo, getChannels } = useGetChannels(channelName);
    const [activeTab, setActiveTab] = useState('channels')
    const [channelId, setChannelId] = useState('');

    function onSearch(channelName: string): void {
        setChannelName(channelName);
    }

    function handleTabChange(tab: string): void {
        setActiveTab(tab);
    }

    function handleClickCard(channelId: string, selectedChannelName: string): void {
        setChannelId(channelId);
        setActiveChannelName(selectedChannelName);
    }

    return (
        <div className="channel-feed">
            <ChannelSearch onSearch={onSearch} />
            <Tabbar activeTab={activeTab} handleClick={handleTabChange} channelId={channelId} />
            <ChannelList channels={channels} currentTab={activeTab} clickCard={handleClickCard} />
            <Dashboard currentTab={activeTab} channelId={channelId} channelName={activeChannelName} />
            {
                activeTab === 'channels' &&
                <Pagination
                    onNextPage={() => getChannels(paginationInfo?.nextPageToken)}
                    onPrevPage={() => getChannels(paginationInfo?.prevPageToken)}
                    nextPageToken={paginationInfo?.nextPageToken ?? null}
                    prevPageToken={paginationInfo?.prevPageToken ?? null}
                />
            }
        </div>
    );
}