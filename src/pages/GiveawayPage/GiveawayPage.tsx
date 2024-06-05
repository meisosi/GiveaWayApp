import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmojiComponent from '@/components/Emoji/Emoji';
import { EmojiData, GiveawayPageProps } from '@/interfaces';

const getRandomGradient = () => {
    const gradients = [
        'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
};

const GiveawayPage: React.FC<GiveawayPageProps> = ({ giveawayId }) => {
    const [, setEmojis] = useState<EmojiData[]>([]);
    const [background, setBackground] = useState<string | null>(null);

    useEffect(() => {
        axios.get(`/api/giveaway/${giveawayId}`)
            .then(response => {
                setEmojis(response.data.emojis);
                setBackground(response.data.background);
            })
            .catch(() => {
                setBackground(null);
            });
    }, [giveawayId]);

    const bgStyle = background ? { background: `url(${background}) no-repeat center/cover` } : { background: getRandomGradient() };

    return (
        <div style={{ ...bgStyle, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', padding: '20px' }}>
            <div style={{ width: '300px', height: '200px', backgroundColor: 'white', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 10px rgba(0,0,0,0.1)', position: 'relative' }}>
                <EmojiComponent emoji="https://path.to/selectedEmoji.png" background={null} />
            </div>
        </div>
    );
};

export default GiveawayPage;
