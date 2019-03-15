import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import Shimmer from 'react-native-shimmer';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 22,
        fontWeight: '300',
        marginBottom: 20,
    },
    loading: {
        marginVertical: 10,
    },
    loadingText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
    reactLogo: {
        width: 150,
        height: 150,
    },
});

export default function Example(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Shimmer Example</Text>
            <View>
                <Shimmer>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: 'red', margin: 10, overflow: 'hidden'}}></View>
                    </View>
                </Shimmer>
            </View>
        </View>
    );
}
