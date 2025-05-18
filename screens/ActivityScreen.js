import { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
    SafeAreaView,
    ScrollView,
    FlatList,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function ActivityScreen() {
    const [weather, setWeather] = useState('sunny');

    const activities = {
        sunny: ['Go for a walk', 'Have a picnic', 'Ride a bike'],
        rainy: ['Read a book', 'Watch a movie', 'Do indoor yoga'],
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Activity Screen!</Text>
            <Text style={styles.subheader}>Weather Insight</Text>

            {/* Buttons container */}
            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={[
                        styles.button,
                        weather === 'sunny' && styles.activeButton,
                    ]}
                    onPress={() => setWeather('sunny')}
                >
                    <Text style={styles.buttonText}>Sunny</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.button,
                        weather === 'rainy' && styles.activeButton,
                    ]}
                    onPress={() => setWeather('rainy')}
                >
                    <Text style={styles.buttonText}>Rainy</Text>
                </TouchableOpacity>
            </View>

            {/* Activity List */}
            <Text style={styles.listHeader}>Recommended Activities:</Text>
            <FlatList
                data={activities[weather]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Text style={styles.listItem}>• {item}</Text>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subheader: {
        fontSize: 18,
        textAlign: 'center',
        color: '#555',
        marginBottom: 20,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#ddd',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    activeButton: {
        backgroundColor: '#4CAF50',
    },
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
    },
    listHeader: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10,
    },
    listItem: {
        fontSize: 16,
        marginBottom: 5,
    },
});