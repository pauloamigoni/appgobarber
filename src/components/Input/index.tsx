import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './style';

interface inputProps extends TextInputProps {
    name: string;
    icon: string;
}

const Input: React.FC<inputProps> = ({ name, icon, ...rest }) => (
    <Container>
        <Icon name={icon} size={20} color="#666360" />
        <TextInput
            keyboardAppearance="dark"
            placeholderTextColor="#666360"
            {...rest}
        />
    </Container>
);

export default Input;
