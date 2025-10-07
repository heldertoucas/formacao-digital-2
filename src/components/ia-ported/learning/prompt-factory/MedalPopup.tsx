
import React from 'react';
import { Modal, Button, Text, Box } from '@mantine/core';
import RemixIcon from '../../ui/RemixIcon';

type MedalPopupProps = {
  message: string;
  opened: boolean;
  onClose: () => void;
};

const MedalPopup = ({ message, opened, onClose }: MedalPopupProps) => {
  return (
    <Modal opened={opened} onClose={onClose} withCloseButton={false} centered size="sm">
        <Box style={{ textAlign: 'center' }}>
            <RemixIcon name="award-fill" className="text-4xl text-yellow-600 mb-3 inline-block" />
            <Text fw={500} size="lg" mb="md">{message}</Text>
            <Button
                component="a"
                href="https://lisbon.cityoflearning.eu/claim?code=5f8ica&qr=1"
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
                leftSection={<RemixIcon name="external-link-line" />}
            >
                Recolher Medalha
            </Button>
            <Button variant="subtle" onClick={onClose} mt="sm" fullWidth>
                Fechar
            </Button>
        </Box>
    </Modal>
  );
};

export default MedalPopup;
