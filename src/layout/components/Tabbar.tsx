import { MouseEventHandler } from "react";

export const Tabbar = ({ handleClick, activeTab, channelId }: { handleClick: (channelName: string) => void, activeTab: string, channelId: string }) => {

    const handleTabClick: MouseEventHandler<HTMLHeadingElement> = (e) => {
        const tabs = document.querySelectorAll('.tabbar-menu h3');
        tabs.forEach(tab => tab.classList.remove('active'));
        e.currentTarget.classList.add('active');
        handleClick(e.currentTarget.textContent!.toLowerCase() || '');
    }

    return (
        <div className="tabbar-menu">
            <h3 className={activeTab === 'channels' ? 'active' : ''} onClick={handleTabClick}>Channels</h3>
            {
                channelId && <h3 className={activeTab === 'dashboard' ? 'active' : ''} onClick={handleTabClick}>Dashboard</h3>
            }
        </div>
    )
}