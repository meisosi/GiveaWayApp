import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmojiComponent from '../Emoji/Emoji';
import { EmojiData } from '@/interfaces';

const gradients = [
    'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
];

const EmojiSelectionPage: React.FC = () => {
    const [emojis, setEmojis] = useState<EmojiData[]>([]);
    const [background] = useState<string>(gradients[Math.floor(Math.random() * gradients.length)]);
    const [selectedEmoji, setSelectedEmoji] = useState<string>('🎲');

    useEffect(() => {
        axios.get('/api/emojis')
            .then(response => {
                setEmojis(response.data);
            })
            .catch(() => {
                setEmojis([]);
            });
    }, []);

    const handleEmojiClick = (emoji: string) => {
        setSelectedEmoji(emoji);
    };

    return (
        <div>
            <h1>Select an Emoji</h1>
            <div style={{ display: 'flex', gap: '10px' }}>
                {emojis.map(emojiData => (
                    <div key={emojiData.id} onClick={() => handleEmojiClick(emojiData.emoji)}>
                        <EmojiComponent emoji={emojiData.emoji} background={background} />
                    </div>
                ))}
            </div>
            <div>
                <h2>Selected Emoji:</h2>
                <EmojiComponent emoji={selectedEmoji} background={background} />
            </div>
        </div>
    );
};

export default EmojiSelectionPage;
