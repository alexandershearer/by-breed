import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Item(props) {
    const { data, index } = props
    const { breed } = data
    const keys = Object.keys(data).filter(key => key !== 'breed')


    return (
        <View style={styles.container}>
            <Text style={styles.label}>{index}: {breed}</Text>
            {keys.map(key => <Text style={styles.property}>{key}: {data[key]}</Text>)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        margin: 1
    },
    label: {
        fontSize: 24
    },
    property: {
        fontSize: 16,
        margin: 1
    }
})

export default Item