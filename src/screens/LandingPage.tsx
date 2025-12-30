import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    LayoutAnimation,
    Platform,
    UIManager,
} from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { fonts } from '../theme/fonts';

const WelcomeScreen = ({ navigation }: any) => {
    const features = [
        {
            id: 1,
            title: '24/7 Pandit Chat',
            desc: 'Get instant astrology guidance anytime',
            icon: '💬', // Replace with specific icons/images as needed
            onPress: () => navigation.navigate('PanditChat'),
        },
        {
            id: 2,
            title: 'Personalized Kundali',
            desc: 'Detailed birth chart analysis',
            icon: '♈',
        },
        {
            id: 3,
            title: 'Daily Horoscope',
            desc: 'Start your day with cosmic insights',
            icon: '📅',
        },
        {
            id: 4,
            title: 'Planetary Alerts',
            desc: 'Stay updated with celestial events',
            icon: '🔔',
        },
    ];
    const [selectedId, setSelectedId] = useState<number | null>(null);


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backText}>← Back</Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Top Section */}
                <View style={styles.header}>
                    <View style={styles.logoCircle}>
                        <Image
                            source={require('../assets/images/pandit.png')}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={styles.welcomeTitle}>Welcome to <Text style={styles.highlight}>ZanAstro</Text></Text>
                    <Text style={styles.subtitle}>Your Personal Astrology Guide</Text>
                </View>

                {/* Feature Cards Section */}
                <View style={styles.featuresContainer}>
                    {features.map((item) => (
                        <TouchableOpacity key={item.id} style={styles.card}
                            onPress={() => {
                                LayoutAnimation.easeInEaseOut();
                                setSelectedId(item.id);
                                if (item.onPress) {
                                    item.onPress();
                                }
                            }}
                        >
                            <View style={styles.iconContainer}>
                                <Text style={styles.iconText}>{item.icon}</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.cardTitle}>{item.title}</Text>
                                <Text style={styles.cardDesc}>{item.desc}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            <View style={styles.bottomBar} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    backButton: { paddingVertical: spacing.s },
    backText: { fontSize: fonts.size.m, color: colors.primary, fontWeight: fonts.weight.medium },
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    scrollContent: {
        paddingBottom: spacing.xl,
    },
    highlight: { color: colors.primary },
    header: {
        alignItems: 'center',
        marginTop: spacing.xxl,
        marginBottom: spacing.l,
    },
    logoCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: spacing.l,
    },
    logo: {
        width: 100,
        height: 100,
    },
    welcomeTitle: {
        fontSize: fonts.size.xl,
        fontWeight: fonts.weight.bold,
        color: colors.textDark,
        marginBottom: spacing.xs,
    },
    subtitle: {
        fontSize: fonts.size.m,
        color: '#777',
        fontWeight: fonts.weight.medium,
    },
    featuresContainer: {
        paddingHorizontal: spacing.l,
        marginTop: spacing.m,
        borderColor: colors.primary,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: 16,
        padding: spacing.m,
        marginBottom: spacing.m,
        borderWidth: 1,
        borderColor: '#eee',
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: spacing.m,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    iconText: {
        fontSize: 20,
        color: colors.primary,
    },
    textContainer: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.textDark,
    },
    cardDesc: {
        fontSize: 12,
        color: '#888',
        marginTop: 2,
    },
    bottomBar: {
        height: 4,
        backgroundColor: colors.primary,
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
});

export default WelcomeScreen;
