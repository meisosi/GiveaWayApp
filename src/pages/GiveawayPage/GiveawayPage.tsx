import React from 'react';
import { GiveawayPageComponent } from '@/components/GiveawayComponent/GiveawayComponent';

export const GiveawayPage: React.FC = () => {
    return (
        <div className="App">
            <GiveawayPageComponent giveawayId="example-giveaway-id" />
        </div>
    );
};
