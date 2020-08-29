import React, { useState } from 'react';
import {
    View,
    Text,
    Pressable,
    StyleSheet,
    Platform
} from 'react-native';
import Torch from 'react-native-torch';
import Icon from 'react-native-ionicons';

const TorchScreen = () => {
    const [isTorchOn, setIsTorchOn] = useState(true);

    const toggleSwitch = () => {
        Torch.switchState(isTorchOn);
        setIsTorchOn(!isTorchOn);
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Pressable style={styles.button} onPress={toggleSwitch}>
                { isTorchOn ? <Icon name="ios-power" style={styles.icon} /> : <Icon name="ios-sunny" style={styles.icon} /> }
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 200,
        height: 200,
        padding: 10,
        borderRadius: 200 / 2,
        borderWidth: 1,
        backgroundColor: '#DEE9F7',
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2
    },
    icon: {
        fontSize: 100,
        color: 'whitesmoke',
    }
});

export default TorchScreen;
