import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { fonts } from '../theme/fonts';

const { width } = Dimensions.get('window');

const PlanetaryAlertsScreen = ({ navigation }: any) => {
  const [activeTab, setActiveTab] = useState<'notifications' | 'alerts'>('notifications');

  // Mock data - replace with API calls
  const dailyInsights = {
    date: 'Friday, January 02, 2026',
    dominantPlanet: 'Venus',
    energy: 'Harmonious',
    luckyColor: '#FF6B9D',
    luckyColorName: 'Rose Pink',
    luckyNumber: 7,
    luckyDirection: 'East',
    gemstone: 'Diamond',
    moonPhase: 'Waxing Crescent',
    favorableTime: '10:00 AM - 2:00 PM',
    ratings: {
      career: 4,
      finance: 3,
      love: 5,
      health: 4,
      creativity: 5,
    },
    dos: [
      'Initiate romantic conversations',
      'Focus on creative projects',
      'Wear light colors for positivity',
    ],
    donts: [
      'Avoid major financial decisions',
      'Skip confrontations at work',
      'Don\'t ignore your intuition',
    ],
    mantra: 'I attract love and abundance',
    transitingPlanets: [
      { name: 'Venus', position: 'Pisces', impact: 'Positive' },
      { name: 'Mars', position: 'Capricorn', impact: 'Neutral' },
    ],
    compatibility: {
      favorable: ['Taurus', 'Cancer', 'Scorpio'],
      challenging: ['Aries', 'Sagittarius'],
    },
  };

  const criticalAlerts = [
    {
      id: 1,
      type: 'Retrograde',
      title: 'Mercury Retrograde Alert',
      severity: 'high',
      date: 'Jan 5 - Jan 28, 2026',
      description: 'Communication delays and tech issues likely. Back up data and double-check messages.',
      icon: '☿️',
    },
    {
      id: 2,
      type: 'Transit',
      title: 'Saturn Enters Aquarius',
      severity: 'medium',
      date: 'Jan 10, 2026',
      description: 'Major shift in career and responsibility areas. Time for structured growth.',
      icon: '♄',
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Text key={star} style={styles.star}>
            {star <= rating ? '★' : '☆'}
          </Text>
        ))}
      </View>
    );
  };

  const renderNotifications = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Daily Summary Card */}
      <View style={styles.summaryCard}>
        <Text style={styles.dateText}>{dailyInsights.date}</Text>
        <View style={styles.summaryRow}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Dominant Planet</Text>
            <Text style={styles.summaryValue}>♀ {dailyInsights.dominantPlanet}</Text>
          </View>
          <View style={styles.summaryDivider} />
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Energy</Text>
            <Text style={styles.summaryValue}>{dailyInsights.energy}</Text>
          </View>
        </View>
      </View>

      {/* Lucky Elements */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>✨ Today's Lucky Elements</Text>
        <View style={styles.luckyGrid}>
          <View style={styles.luckyItem}>
            <View style={[styles.colorCircle, { backgroundColor: dailyInsights.luckyColor }]} />
            <Text style={styles.luckyLabel}>Color</Text>
            <Text style={styles.luckyValue}>{dailyInsights.luckyColorName}</Text>
          </View>
          <View style={styles.luckyItem}>
            <View style={styles.numberCircle}>
              <Text style={styles.numberText}>{dailyInsights.luckyNumber}</Text>
            </View>
            <Text style={styles.luckyLabel}>Number</Text>
            <Text style={styles.luckyValue}>{dailyInsights.luckyNumber}</Text>
          </View>
          <View style={styles.luckyItem}>
            <Text style={styles.directionIcon}>🧭</Text>
            <Text style={styles.luckyLabel}>Direction</Text>
            <Text style={styles.luckyValue}>{dailyInsights.luckyDirection}</Text>
          </View>
          <View style={styles.luckyItem}>
            <Text style={styles.directionIcon}>💎</Text>
            <Text style={styles.luckyLabel}>Gemstone</Text>
            <Text style={styles.luckyValue}>{dailyInsights.gemstone}</Text>
          </View>
        </View>
      </View>

      {/* Favorable Time */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>⏰ Best Time Window</Text>
        <View style={styles.timeCard}>
          <Text style={styles.timeText}>{dailyInsights.favorableTime}</Text>
          <Text style={styles.timeDesc}>Most auspicious for important tasks</Text>
        </View>
      </View>

      {/* Life Aspects Ratings */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📊 Life Aspects Forecast</Text>
        {Object.entries(dailyInsights.ratings).map(([aspect, rating]) => (
          <View key={aspect} style={styles.ratingRow}>
            <Text style={styles.aspectName}>
              {aspect.charAt(0).toUpperCase() + aspect.slice(1)}
            </Text>
            {renderStars(rating)}
          </View>
        ))}
      </View>

      {/* Do's and Don'ts */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>✅ Do's</Text>
        {dailyInsights.dos.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>❌ Don'ts</Text>
        {dailyInsights.donts.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}
      </View>

      {/* Mantra */}
      <View style={[styles.card, styles.mantraCard]}>
        <Text style={styles.mantraLabel}>🕉️ Today's Mantra</Text>
        <Text style={styles.mantraText}>"{dailyInsights.mantra}"</Text>
      </View>

      {/* Transiting Planets */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🌍 Active Transits</Text>
        {dailyInsights.transitingPlanets.map((planet, index) => (
          <View key={index} style={styles.transitRow}>
            <View style={styles.transitInfo}>
              <Text style={styles.planetName}>{planet.name}</Text>
              <Text style={styles.planetPosition}>in {planet.position}</Text>
            </View>
            <View style={[
              styles.impactBadge,
              planet.impact === 'Positive' && styles.impactPositive,
              planet.impact === 'Neutral' && styles.impactNeutral,
            ]}>
              <Text style={styles.impactText}>{planet.impact}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Compatibility */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🤝 Today's Compatibility</Text>
        <Text style={styles.compatLabel}>Favorable Signs</Text>
        <View style={styles.signRow}>
          {dailyInsights.compatibility.favorable.map((sign, index) => (
            <View key={index} style={[styles.signChip, styles.favorableChip]}>
              <Text style={styles.signText}>{sign}</Text>
            </View>
          ))}
        </View>
        <Text style={[styles.compatLabel, { marginTop: spacing.m }]}>Handle Mindfully</Text>
        <View style={styles.signRow}>
          {dailyInsights.compatibility.challenging.map((sign, index) => (
            <View key={index} style={[styles.signChip, styles.challengingChip]}>
              <Text style={styles.signText}>{sign}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Last Updated */}
      <Text style={styles.updateText}>Last updated: Today at 12:00 AM</Text>
    </ScrollView>
  );

  const renderAlerts = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      {criticalAlerts.length > 0 ? (
        <>
          <View style={styles.alertHeader}>
            <Text style={styles.alertHeaderText}>🚨 Active Critical Alerts</Text>
            <Text style={styles.alertSubtext}>
              Major planetary events requiring your attention
            </Text>
          </View>

          {criticalAlerts.map((alert) => (
            <View key={alert.id} style={[
              styles.alertCard,
              alert.severity === 'high' && styles.alertHigh,
              alert.severity === 'medium' && styles.alertMedium,
            ]}>
              <View style={styles.alertIconContainer}>
                <Text style={styles.alertIcon}>{alert.icon}</Text>
              </View>
              <View style={styles.alertContent}>
                <View style={styles.alertHeader}>
                  <Text style={styles.alertType}>{alert.type.toUpperCase()}</Text>
                  <View style={[
                    styles.severityBadge,
                    alert.severity === 'high' && styles.severityHigh,
                    alert.severity === 'medium' && styles.severityMedium,
                  ]}>
                    <Text style={styles.severityText}>
                      {alert.severity === 'high' ? 'HIGH' : 'MEDIUM'}
                    </Text>
                  </View>
                </View>
                <Text style={styles.alertTitle}>{alert.title}</Text>
                <Text style={styles.alertDate}>📅 {alert.date}</Text>
                <Text style={styles.alertDescription}>{alert.description}</Text>
              </View>
            </View>
          ))}
        </>
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyIcon}>✨</Text>
          <Text style={styles.emptyTitle}>All Clear!</Text>
          <Text style={styles.emptyText}>
            No critical planetary alerts at this time.{'\n'}
            The cosmos are in harmony with your path.
          </Text>
        </View>
      )}
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Planetary Alerts</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'notifications' && styles.activeTab]}
          onPress={() => setActiveTab('notifications')}
        >
          <Text style={[styles.tabText, activeTab === 'notifications' && styles.activeTabText]}>
            Notifications
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'alerts' && styles.activeTab]}
          onPress={() => setActiveTab('alerts')}
        >
          <Text style={[styles.tabText, activeTab === 'alerts' && styles.activeTabText]}>
            Critical Alerts
          </Text>
          {criticalAlerts.length > 0 && (
            <View style={styles.alertBadge}>
              <Text style={styles.alertBadgeText}>{criticalAlerts.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {activeTab === 'notifications' ? renderNotifications() : renderAlerts()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.l,
    paddingVertical: spacing.m,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    padding: spacing.xs,
  },
  backText: {
    fontSize: fonts.size.m,
    color: colors.primary,
    fontWeight: fonts.weight.medium,
  },
  headerTitle: {
    fontSize: fonts.size.l,
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
  },
  placeholder: {
    width: 50,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    margin: spacing.m,
    borderRadius: 12,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: spacing.m,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: colors.primary,
  },
  tabText: {
    fontSize: fonts.size.m,
    fontWeight: fonts.weight.medium,
    color: '#666',
  },
  activeTabText: {
    color: '#fff',
  },
  alertBadge: {
    backgroundColor: '#ff4444',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: spacing.xs,
  },
  alertBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: fonts.weight.bold,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.m,
  },
  summaryCard: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    padding: spacing.l,
    marginVertical: spacing.m,
  },
  dateText: {
    color: '#fff',
    fontSize: fonts.size.l,
    fontWeight: fonts.weight.bold,
    textAlign: 'center',
    marginBottom: spacing.m,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  summaryItem: {
    alignItems: 'center',
    flex: 1,
  },
  summaryDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  summaryLabel: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: fonts.size.s,
    marginBottom: spacing.xs,
  },
  summaryValue: {
    color: '#fff',
    fontSize: fonts.size.l,
    fontWeight: fonts.weight.bold,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: spacing.l,
    marginBottom: spacing.m,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: fonts.size.l,
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
    marginBottom: spacing.m,
  },
  luckyGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  luckyItem: {
    width: '48%',
    alignItems: 'center',
    marginBottom: spacing.m,
  },
  colorCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: spacing.xs,
    borderWidth: 3,
    borderColor: '#f0f0f0',
  },
  numberCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  numberText: {
    fontSize: fonts.size.xl,
    fontWeight: fonts.weight.bold,
    color: '#fff',
  },
  directionIcon: {
    fontSize: 40,
    marginBottom: spacing.xs,
  },
  luckyLabel: {
    fontSize: fonts.size.s,
    color: '#888',
    marginBottom: 2,
  },
  luckyValue: {
    fontSize: fonts.size.m,
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
  },
  timeCard: {
    backgroundColor: '#f9f9f9',
    padding: spacing.m,
    borderRadius: 12,
    alignItems: 'center',
  },
  timeText: {
    fontSize: fonts.size.l,
    fontWeight: fonts.weight.bold,
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  timeDesc: {
    fontSize: fonts.size.s,
    color: '#666',
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.s,
  },
  aspectName: {
    fontSize: fonts.size.m,
    color: colors.textDark,
    fontWeight: fonts.weight.medium,
  },
  starsContainer: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 16,
    color: colors.secondary,
    marginLeft: 2,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: spacing.s,
  },
  bullet: {
    fontSize: fonts.size.m,
    color: colors.primary,
    marginRight: spacing.s,
    fontWeight: fonts.weight.bold,
  },
  listText: {
    flex: 1,
    fontSize: fonts.size.m,
    color: colors.textDark,
    lineHeight: 22,
  },
  mantraCard: {
    backgroundColor: '#f5eef6',
    borderWidth: 2,
    borderColor: colors.primary,
  },
  mantraLabel: {
    fontSize: fonts.size.m,
    color: colors.primary,
    fontWeight: fonts.weight.bold,
    textAlign: 'center',
    marginBottom: spacing.s,
  },
  mantraText: {
    fontSize: fonts.size.l,
    color: colors.textDark,
    fontWeight: fonts.weight.medium,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  transitRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.m,
    paddingBottom: spacing.m,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  transitInfo: {
    flex: 1,
  },
  planetName: {
    fontSize: fonts.size.m,
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
  },
  planetPosition: {
    fontSize: fonts.size.s,
    color: '#888',
    marginTop: 2,
  },
  impactBadge: {
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.xs,
    borderRadius: 12,
  },
  impactPositive: {
    backgroundColor: '#d4edda',
  },
  impactNeutral: {
    backgroundColor: '#fff3cd',
  },
  impactText: {
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
  },
  compatLabel: {
    fontSize: fonts.size.s,
    color: '#888',
    marginBottom: spacing.xs,
    fontWeight: fonts.weight.medium,
  },
  signRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  signChip: {
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.xs,
    borderRadius: 16,
    marginRight: spacing.s,
    marginBottom: spacing.s,
  },
  favorableChip: {
    backgroundColor: '#d4edda',
  },
  challengingChip: {
    backgroundColor: '#f8d7da',
  },
  signText: {
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.medium,
    color: colors.textDark,
  },
  updateText: {
    textAlign: 'center',
    fontSize: fonts.size.s,
    color: '#aaa',
    marginVertical: spacing.l,
  },
  alertHeader: {
    marginBottom: spacing.l,
  },
  alertHeaderText: {
    fontSize: fonts.size.xl,
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
    marginBottom: spacing.xs,
  },
  alertSubtext: {
    fontSize: fonts.size.m,
    color: '#666',
  },
  alertCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: spacing.l,
    marginBottom: spacing.m,
    borderLeftWidth: 4,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  alertHigh: {
    borderLeftColor: '#ff4444',
  },
  alertMedium: {
    borderLeftColor: '#ffaa00',
  },
  alertIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.m,
  },
  alertIcon: {
    fontSize: 32,
  },
  alertContent: {
    flex: 1,
  },
  alertType: {
    fontSize: fonts.size.s,
    color: colors.primary,
    fontWeight: fonts.weight.bold,
    letterSpacing: 1,
  },
  severityBadge: {
    paddingHorizontal: spacing.s,
    paddingVertical: 2,
    borderRadius: 8,
  },
  severityHigh: {
    backgroundColor: '#ffe0e0',
  },
  severityMedium: {
    backgroundColor: '#fff3cd',
  },
  severityText: {
    fontSize: 10,
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
  },
  alertTitle: {
    fontSize: fonts.size.l,
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
    marginTop: spacing.xs,
    marginBottom: spacing.xs,
  },
  alertDate: {
    fontSize: fonts.size.s,
    color: '#888',
    marginBottom: spacing.s,
  },
  alertDescription: {
    fontSize: fonts.size.m,
    color: colors.textDark,
    lineHeight: 22,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xxl * 2,
  },
  emptyIcon: {
    fontSize: 80,
    marginBottom: spacing.l,
  },
  emptyTitle: {
    fontSize: fonts.size.xl,
    fontWeight: fonts.weight.bold,
    color: colors.textDark,
    marginBottom: spacing.s,
  },
  emptyText: {
    fontSize: fonts.size.m,
    color: '#888',
    textAlign: 'center',
    paddingHorizontal: spacing.xl,
    lineHeight: 24,
  },
});

export default PlanetaryAlertsScreen;