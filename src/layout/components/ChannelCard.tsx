import { ChannelInterface } from '../../core/interfaces/ChannelInterface.js';

export const ChannelCard = ({ changeActive, channel, cardActive }: { changeActive: (key: string, title: string) => void, channel: ChannelInterface, cardActive: string }) => {
    const handleClick = () => {
        changeActive(channel.id.channelId, channel.title);
    }

    return (
        <div className={`channel-card ${channel.id.channelId === cardActive ? 'active' : ''}`} onClick={handleClick}>
            <img src={channel.thumbnail.toString()} alt={channel.description} />
            <h3>{channel.title}</h3>
        </div>
    );
}