import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    let name = 'Marcos';

    return (
        <View style={styles.container}>
            <Text>Hello World!</Text>
            <Text>My name is {name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
