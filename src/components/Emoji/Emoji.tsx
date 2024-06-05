import React from 'react';

interface EmojiProps {
    emoji: string;
    background: string | null;
}

const EmojiComponent: React.FC<EmojiProps> = ({ emoji }) => {
    return (
        <div style={{ padding: '20px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <img src={emoji} alt="emoji" style={{ width: '50px', height: '50px' }} />
        </div>
    );
};

export default EmojiComponent;
