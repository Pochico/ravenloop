import { FormEvent, useState } from "react";

export const ChannelSearch = ({ onSearch }: { onSearch: (channelName: string) => void }) => {
    const [channelName, setChannelName] = useState("");

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        onSearch(channelName);
    }

    return (
        <>
            <form className="search-channel" onSubmit={handleSubmit}>
                <input type="text" placeholder="Search channel..." value={channelName} onChange={e => setChannelName(e.target.value)} />
                <button>Search</button>
            </form>
        </>
    );
};