import { useState } from 'react';
import { ChannelInterface } from '../../core/interfaces/ChannelInterface.js';
import { ChannelCard } from './ChannelCard.js';

export const ChannelList = ({
    channels,
    currentTab,
    clickCard
}: {
    channels: ChannelInterface[],
    currentTab: string,
    clickCard: (channelId: string, channelName: string) => void
}) => {
    const [cardActive, setCardIsActive] = useState("");


    function changeActive(id: string, title: string) {
        setCardIsActive(id);
        clickCard(id, title);
    }

    return (
        <div className={`channel-list ${currentTab === 'channels' ? 'active' : ''}`}>
            {
                channels?.length === 0
                    ? <p>No channels found</p>
                    : channels?.map((channel: ChannelInterface) => (
                        <ChannelCard key={channel.id.channelId} channel={channel} cardActive={cardActive} changeActive={changeActive} />
                    ))
            }
        </div>
    );
};