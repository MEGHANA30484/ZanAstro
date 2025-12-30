import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { fonts } from '../theme/fonts';

interface ZodiacSign {
  id: number;
  name: string;
  symbol: string;
  dateRange: string;
  element: string;
}

interface HoroscopeData {
  lucky_number: number;
  lucky_color: string;
  mood: string;
  compatibility: string;
  description: string;
}

const DailyHoroscopeScreen = ({ navigation }: any) => {
  const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null);
  const [fadeAnim] = useState(new Animated.Value(1));

  const zodiacSigns: ZodiacSign[] = [
    { id: 1, name: 'Aries', symbol: '♈', dateRange: 'Mar 21 - Apr 19', element: 'Fire' },
    { id: 2, name: 'Taurus', symbol: '♉', dateRange: 'Apr 20 - May 20', element: 'Earth' },
    { id: 3, name: 'Gemini', symbol: '♊', dateRange: 'May 21 - Jun 20', element: 'Air' },
    { id: 4, name: 'Cancer', symbol: '♋', dateRange: 'Jun 21 - Jul 22', element: 'Water' },
    { id: 5, name: 'Leo', symbol: '♌', dateRange: 'Jul 23 - Aug 22', element: 'Fire' },
    { id: 6, name: 'Virgo', symbol: '♍', dateRange: 'Aug 23 - Sep 22', element: 'Earth' },
    { id: 7, name: 'Libra', symbol: '♎', dateRange: 'Sep 23 - Oct 22', element: 'Air' },
    { id: 8, name: 'Scorpio', symbol: '♏', dateRange: 'Oct 23 - Nov 21', element: 'Water' },
    { id: 9, name: 'Sagittarius', symbol: '♐', dateRange: 'Nov 22 - Dec 21', element: 'Fire' },
    { id: 10, name: 'Capricorn', symbol: '♑', dateRange: 'Dec 22 - Jan 19', element: 'Earth' },
    { id: 11, name: 'Aquarius', symbol: '♒', dateRange: 'Jan 20 - Feb 18', element: 'Air' },
    { id: 12, name: 'Pisces', symbol: '♓', dateRange: 'Feb 19 - Mar 20', element: 'Water' },
  ];

  const horoscopeData: Record<string, HoroscopeData> = {
    Aries: {
      lucky_number: 7,
      lucky_color: 'Red',
      mood: 'Energetic',
      compatibility: 'Leo',
      description: 'Today brings fresh opportunities for leadership. Your natural confidence will attract positive attention. Focus on new beginnings and trust your instincts. A financial opportunity may present itself in the afternoon.',
    },
    Taurus: {
      lucky_number: 6,
      lucky_color: 'Green',
      mood: 'Stable',
      compatibility: 'Virgo',
      description: 'Patience and persistence will be your greatest allies today. Focus on building stability in your personal relationships. A creative project may finally come to fruition. Trust the process.',
    },
    Gemini: {
      lucky_number: 5,
      lucky_color: 'Yellow',
      mood: 'Curious',
      compatibility: 'Libra',
      description: 'Communication flows effortlessly today. Your quick wit and adaptability will help you navigate complex situations. Consider reaching out to someone you have not spoken to in a while.',
    },
    Cancer: {
      lucky_number: 2,
      lucky_color: 'Silver',
      mood: 'Reflective',
      compatibility: 'Pisces',
      description: 'Emotional clarity arrives as the day progresses. Trust your intuition when making decisions about home and family. A heartfelt conversation may strengthen an important relationship.',
    },
    Leo: {
      lucky_number: 1,
      lucky_color: 'Gold',
      mood: 'Confident',
      compatibility: 'Aries',
      description: 'Your natural charisma shines bright today. Leadership opportunities emerge, and others look to you for guidance. Creative pursuits are especially favored. Embrace your authentic self.',
    },
    Virgo: {
      lucky_number: 5,
      lucky_color: 'Navy Blue',
      mood: 'Analytical',
      compatibility: 'Taurus',
      description: 'Attention to detail pays off in unexpected ways. Your practical approach solves a lingering problem. Focus on organization and planning for future success. Health matters deserve attention.',
    },
    Libra: {
      lucky_number: 6,
      lucky_color: 'Pink',
      mood: 'Harmonious',
      compatibility: 'Gemini',
      description: 'Balance and harmony are within reach today. Diplomatic skills help you mediate a difficult situation. Partnership opportunities look promising. Beauty and aesthetics bring you joy.',
    },
    Scorpio: {
      lucky_number: 9,
      lucky_color: 'Maroon',
      mood: 'Intense',
      compatibility: 'Cancer',
      description: 'Deep transformations are underway. Your powerful intuition guides you toward truth. A mystery may be solved, bringing clarity. Trust your ability to regenerate and renew.',
    },
    Sagittarius: {
      lucky_number: 3,
      lucky_color: 'Purple',
      mood: 'Optimistic',
      compatibility: 'Aries',
      description: 'Adventure calls to you today. Expand your horizons through learning or travel planning. Your optimism is contagious and attracts positive people. Philosophical discussions inspire growth.',
    },
    Capricorn: {
      lucky_number: 8,
      lucky_color: 'Brown',
      mood: 'Determined',
      compatibility: 'Taurus',
      description: 'Hard work begins to show tangible results. Professional recognition may come your way. Focus on long-term goals and maintain your disciplined approach. Success is building steadily.',
    },
    Aquarius: {
      lucky_number: 4,
      lucky_color: 'Electric Blue',
      mood: 'Innovative',
      compatibility: 'Gemini',
      description: 'Unconventional solutions emerge for old problems. Your unique perspective is valued by others. Social connections bring unexpected opportunities. Embrace your individuality fully.',
    },
    Pisces: {
      lucky_number: 7,
      lucky_color: 'Sea Green',
      mood: 'Dreamy',
      compatibility: 'Cancer',
      description: 'Creative and spiritual energies flow freely. Your compassion touches someone deeply today. Dreams and intuition provide valuable guidance. Artistic pursuits are especially rewarding.',
    },
  };

  const getCurrentDate = () => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date().toLocaleDateString('en-US', options);
  };

  const handleSignSelect = (sign: ZodiacSign) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setSelectedSign(sign);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  const handleBack = () => {
    if (selectedSign) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        setSelectedSign(null);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      });
    } else {
      navigation?.goBack();
    }
  };

  const renderZodiacGrid = () => (
    <Animated.View style={{ opacity: fadeAnim }}>
      <View style={styles.headerSection}>
        <Text style={styles.screenTitle}>Daily Horoscope</Text>
        <Text style={styles.dateText}>{getCurrentDate()}</Text>
        <Text style={styles.selectPrompt}>Select Your Zodiac Sign</Text>
      </View>

      <View style={styles.gridContainer}>
        {zodiacSigns.map((sign) => (
          <TouchableOpacity
            key={sign.id}
            style={styles.zodiacCard}
            onPress={() => handleSignSelect(sign)}
            activeOpacity={0.7}
          >
            <Text style={styles.zodiacSymbol}>{sign.symbol}</Text>
            <Text style={styles.zodiacName}>{sign.name}</Text>
            <Text style={styles.zodiacDate}>{sign.dateRange}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Animated.View>
  );

  const renderHoroscopeDetails = () => {
    if (!selectedSign) return null;
    const horoscope = horoscopeData[selectedSign.name];

    return (
      <Animated.View style={{ opacity: fadeAnim, flex: 1 }}>
        <ScrollView contentContainerStyle={styles.detailsScrollContent}>
          <View style={styles.detailsHeader}>
            <View style={styles.signCircle}>
              <Text style={styles.signSymbolLarge}>{selectedSign.symbol}</Text>
            </View>
            <Text style={styles.signNameLarge}>{selectedSign.name}</Text>
            <Text style={styles.signDateRange}>{selectedSign.dateRange}</Text>
            <View style={styles.elementBadge}>
              <Text style={styles.elementText}>{selectedSign.element}</Text>
            </View>
          </View>

          <View style={styles.dateCard}>
            <Text style={styles.todayLabel}>Today's Reading</Text>
            <Text style={styles.currentDate}>{getCurrentDate()}</Text>
          </View>

          <View style={styles.quickInfoSection}>
            <View style={styles.infoCard}>
              <Text style={styles.infoIcon}>🍀</Text>
              <Text style={styles.infoLabel}>Lucky Number</Text>
              <Text style={styles.infoValue}>{horoscope.lucky_number}</Text>
            </View>
            <View style={styles.infoCard}>
              <Text style={styles.infoIcon}>🎨</Text>
              <Text style={styles.infoLabel}>Lucky Color</Text>
              <Text style={styles.infoValue}>{horoscope.lucky_color}</Text>
            </View>
            <View style={styles.infoCard}>
              <Text style={styles.infoIcon}>😊</Text>
              <Text style={styles.infoLabel}>Mood</Text>
              <Text style={styles.infoValue}>{horoscope.mood}</Text>
            </View>
            <View style={styles.infoCard}>
              <Text style={styles.infoIcon}>💕</Text>
              <Text style={styles.infoLabel}>Compatible</Text>
              <Text style={styles.infoValue}>{horoscope.compatibility}</Text>
            </View>
          </View>

          <View style={styles.descriptionCard}>
            <Text style={styles.descriptionTitle}>Your Horoscope</Text>
            <Text style={styles.descriptionText}>{horoscope.description}</Text>
          </View>

          <TouchableOpacity style={styles.shareButton}>
            <Text style={styles.shareButtonText}>Share Your Horoscope</Text>
          </TouchableOpacity>
        </ScrollView>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
      </View>

      {!selectedSign ? renderZodiacGrid() : renderHoroscopeDetails()}

      <View style={styles.bottomBar} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: spacing.l,
    paddingTop: spacing.m,
  },
  backButton: {
    paddingVertical: spacing.s,
  },
  backText: {
    fontSize: fonts.size.m,
    color: colors.primary,
    fontWeight: fonts.weight.medium,
  },
  headerSection: {
    alignItems: 'center',
    paddingHorizontal: spacing.l,
    marginTop: spacing.m,
    marginBottom: spacing.xl,
  },
  screenTitle: {
    fontSize: fonts.size.xl,
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
    marginBottom: spacing.xs,
  },
  dateText: {
    fontSize: fonts.size.s,
    color: '#777',
    marginBottom: spacing.l,
  },
  selectPrompt: {
    fontSize: fonts.size.m,
    color: colors.primary,
    fontWeight: fonts.weight.medium,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: spacing.m,
    justifyContent: 'space-between',
  },
  zodiacCard: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    borderRadius: 16,
    padding: spacing.l,
    marginBottom: spacing.m,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  zodiacSymbol: {
    fontSize: 48,
    marginBottom: spacing.s,
  },
  zodiacName: {
    fontSize: fonts.size.m,
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
    marginBottom: spacing.xs,
  },
  zodiacDate: {
    fontSize: fonts.size.s,
    color: '#888',
    textAlign: 'center',
  },
  detailsScrollContent: {
    paddingBottom: spacing.xxl,
  },
  detailsHeader: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  signCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.m,
    borderWidth: 3,
    borderColor: colors.primary,
  },
  signSymbolLarge: {
    fontSize: 60,
  },
  signNameLarge: {
    fontSize: fonts.size.xl,
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
    marginBottom: spacing.xs,
  },
  signDateRange: {
    fontSize: fonts.size.m,
    color: '#777',
    marginBottom: spacing.m,
  },
  elementBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.xs,
    borderRadius: 20,
  },
  elementText: {
    color: colors.background,
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.medium,
  },
  dateCard: {
    backgroundColor: colors.secondary,
    marginHorizontal: spacing.l,
    marginTop: spacing.l,
    padding: spacing.m,
    borderRadius: 12,
    alignItems: 'center',
  },
  todayLabel: {
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
    marginBottom: spacing.xs,
  },
  currentDate: {
    fontSize: fonts.size.m,
    color: colors.textDark,
    fontWeight: fonts.weight.medium,
  },
  quickInfoSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: spacing.l,
    marginTop: spacing.l,
    justifyContent: 'space-between',
  },
  infoCard: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: spacing.m,
    marginBottom: spacing.m,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
  },
  infoIcon: {
    fontSize: 24,
    marginBottom: spacing.xs,
  },
  infoLabel: {
    fontSize: fonts.size.s,
    color: '#888',
    marginBottom: spacing.xs,
  },
  infoValue: {
    fontSize: fonts.size.m,
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
  },
  descriptionCard: {
    backgroundColor: '#f9f9f9',
    marginHorizontal: spacing.l,
    marginTop: spacing.m,
    padding: spacing.l,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#eee',
  },
  descriptionTitle: {
    fontSize: fonts.size.l,
    fontWeight: fonts.weight.bold,
    color: colors.primary,
    marginBottom: spacing.m,
  },
  descriptionText: {
    fontSize: fonts.size.m,
    color: colors.textDark,
    lineHeight: 24,
  },
  shareButton: {
    backgroundColor: colors.primary,
    marginHorizontal: spacing.l,
    marginTop: spacing.l,
    padding: spacing.m,
    borderRadius: 12,
    alignItems: 'center',
  },
  shareButtonText: {
    color: colors.background,
    fontSize: fonts.size.m,
    fontWeight: fonts.weight.bold,
  },
  bottomBar: {
    height: 4,
    backgroundColor: colors.primary,
    width: '100%',
  },
});

export default DailyHoroscopeScreen;