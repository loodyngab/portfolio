import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { portfolioData } from '../data/portfolioData';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const { profile, projects } = portfolioData;
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Greeting Bar */}
        <View style={styles.topBar}>
          <View>
            <Text style={styles.greetingText}>Halo, Selamat Datang! 👋</Text>
            <Text style={styles.subGreetingText}>Portofolio Pribadi Mobile</Text>
          </View>
          <View style={styles.statusBadge}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>Aktif</Text>
          </View>
        </View>

        {/* Hero Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarWrapper}>
            <Image
              source={{ uri: profile.avatarUrl }}
              style={styles.avatar}
              resizeMode="cover"
            />
            <View style={styles.verifiedIconWrapper}>
              <Ionicons name="checkmark-circle" size={24} color={colors.primary} />
            </View>
          </View>

          <Text style={styles.nameText}>{profile.name}</Text>

          <View style={styles.badgeContainer}>
            <Ionicons name="school-outline" size={16} color={colors.primary} />
            <Text style={styles.badgeText}>{profile.title}</Text>
          </View>

          <Text style={styles.subtitleText}>{profile.subtitle}</Text>
          <Text style={styles.bioText}>{profile.bio}</Text>

          {/* Quick CTA Buttons */}
          <View style={styles.ctaRow}>
            <TouchableOpacity
              style={styles.primaryButton}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('Projects')}
            >
              <Ionicons name="briefcase-outline" size={18} color="#FFFFFF" />
              <Text style={styles.primaryButtonText}>Lihat Proyek</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('Contact')}
            >
              <Ionicons name="chatbubbles-outline" size={18} color={colors.primary} />
              <Text style={styles.secondaryButtonText}>Kontak</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats Row */}
        <View style={styles.statsContainer}>
          {profile.stats.map((stat, index) => (
            <View key={index} style={styles.statBox}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Featured Projects Highlight */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Proyek Unggulan</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Projects')}
            style={styles.seeAllButton}
          >
            <Text style={styles.seeAllText}>Lihat Semua</Text>
            <Ionicons name="chevron-forward" size={16} color={colors.primary} />
          </TouchableOpacity>
        </View>

        {featuredProjects.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.featuredCard}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Projects')}
          >
            <View style={styles.featuredCardHeader}>
              <View style={styles.iconSquare}>
                <Ionicons
                  name={item.category === 'Mobile' ? 'phone-portrait-outline' : 'code-slash-outline'}
                  size={20}
                  color={colors.primary}
                />
              </View>
              <View style={styles.featuredTitleWrapper}>
                <Text style={styles.featuredTitle}>{item.title}</Text>
                <Text style={styles.featuredTagline}>{item.tagline}</Text>
              </View>
            </View>
            <Text style={styles.featuredDesc} numberOfLines={2}>
              {item.description}
            </Text>
            <View style={styles.tagsRow}>
              {item.technologies.slice(0, 3).map((tech, idx) => (
                <View key={idx} style={styles.miniTag}>
                  <Text style={styles.miniTagText}>{tech}</Text>
                </View>
              ))}
            </View>
          </TouchableOpacity>
        ))}

        {/* Footer Note */}
        <View style={styles.footerNote}>
          <Ionicons name="laptop-outline" size={16} color={colors.textMuted} />
          <Text style={styles.footerText}>
            Dibuat untuk Presentasi & Portofolio Personal
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 32,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  subGreetingText: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 2,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DCFCE7',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.accent,
    marginRight: 6,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#15803D',
  },
  profileCard: {
    backgroundColor: colors.surface,
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    ...colors.cardShadow,
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: colors.primaryLight,
  },
  verifiedIconWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },
  nameText: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.textPrimary,
    textAlign: 'center',
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primaryLight,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginTop: 8,
    marginBottom: 8,
    gap: 6,
  },
  badgeText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.primary,
  },
  subtitleText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 10,
  },
  bioText: {
    fontSize: 13,
    lineHeight: 20,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 20,
  },
  ctaRow: {
    flexDirection: 'row',
    width: '100%',
    gap: 12,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 14,
    gap: 8,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: colors.primaryLight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  secondaryButtonText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '700',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 24,
    gap: 10,
  },
  statBox: {
    flex: 1,
    backgroundColor: colors.surface,
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    ...colors.cardShadow,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.primary,
  },
  statLabel: {
    fontSize: 11,
    color: colors.textSecondary,
    marginTop: 4,
    textAlign: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  seeAllText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.primary,
  },
  featuredCard: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: colors.border,
    ...colors.cardShadow,
  },
  featuredCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 12,
  },
  iconSquare: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featuredTitleWrapper: {
    flex: 1,
  },
  featuredTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  featuredTagline: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  featuredDesc: {
    fontSize: 13,
    lineHeight: 18,
    color: colors.textSecondary,
    marginBottom: 12,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  miniTag: {
    backgroundColor: colors.surfaceSubtle,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  miniTagText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  footerNote: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    gap: 6,
  },
  footerText: {
    fontSize: 12,
    color: colors.textMuted,
  },
});
