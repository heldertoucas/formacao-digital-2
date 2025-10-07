
import React from 'react';
import { Alert, ActionIcon } from '@mantine/core';
import RemixIcon from '../../ui/RemixIcon';

type GamificationNotificationProps = {
  message: string;
  onClose: () => void;
};

const GamificationNotification = ({ message, onClose }: GamificationNotificationProps) => {
  return (
    <Alert 
        variant="light" 
        color="blue" 
        title="Progresso Desbloqueado!" 
        icon={<RemixIcon name="sparkling-2-line" />} 
        withCloseButton 
        onClose={onClose}
        styles={{ title: { fontWeight: 700 } }}
    >
      {message}
    </Alert>
  );
};

export default GamificationNotification;
