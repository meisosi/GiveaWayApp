import React from 'react';
import { GiveawayPageComponent } from '@/components/GiveawayComponent/GiveawayComponent';
import { List } from '@telegram-apps/telegram-ui';


export const GiveawayPage: React.FC = () => {
    return (
        <List>
            <GiveawayPageComponent giveawayId="example-giveaway-id" />
        </List>
    );
};
