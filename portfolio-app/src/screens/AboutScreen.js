import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { portfolioData } from '../data/portfolioData';

export default function AboutScreen() {
  const { education, skills } = portfolioData;

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Mobile & Frontend':
        return 'phone-portrait-outline';
      case 'Backend Development':
        return 'server-outline';
      case 'Database Management':
        return 'cube-outline';
      case 'Server & DevOps':
      case 'Tools & DevOps':
        return 'terminal-outline';
      case 'Creative & Editing':
      case 'Multimedia & Editing':
      case 'Editing':
        return 'color-palette-outline';
      default:
        return 'code-working-outline';
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Title */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Tentang Saya</Text>
          <Text style={styles.headerSubtitle}>
            Profil akademik & keahlian teknis di bidang teknologi informasi
          </Text>
        </View>

        {/* Education Section */}
        <View style={styles.sectionHeaderRow}>
          <Ionicons name="school" size={20} color={colors.primary} />
          <Text style={styles.sectionTitle}>Latar Belakang Pendidikan</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.eduTopRow}>
            <View style={styles.eduIconWrapper}>
              <Ionicons name="book-outline" size={22} color={colors.primary} />
            </View>
            <View style={styles.eduTitleWrapper}>
              <Text style={styles.eduDegree}>{education.degree}</Text>
              <Text style={styles.eduInstitution}>{education.institution}</Text>
            </View>
          </View>

          <View style={styles.eduMetaRow}>
            <View style={styles.metaBadge}>
              <Ionicons name="calendar-outline" size={14} color={colors.textSecondary} />
              <Text style={styles.metaBadgeText}>{education.period}</Text>
            </View>

            <View style={[styles.metaBadge, styles.gpaBadge]}>
              <Ionicons name="ribbon-outline" size={14} color="#047857" />
              <Text style={styles.gpaBadgeText}>IPK {education.gpa}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.eduDescription}>{education.description}</Text>
        </View>

        {/* Technical Skills Section */}
        <View style={[styles.sectionHeaderRow, { marginTop: 24 }]}>
          <Ionicons name="construct" size={20} color={colors.primary} />
          <Text style={styles.sectionTitle}>Keterampilan Teknis (Skills)</Text>
        </View>

        {skills.map((skillGroup, index) => (
          <View key={index} style={styles.skillCard}>
            <View style={styles.skillGroupHeader}>
              <View style={styles.skillIconWrapper}>
                <Ionicons
                  name={getCategoryIcon(skillGroup.category)}
                  size={18}
                  color={colors.primary}
                />
              </View>
              <Text style={styles.skillGroupTitle}>{skillGroup.category}</Text>
            </View>

            <View style={styles.chipContainer}>
              {skillGroup.items.map((skill, sIdx) => (
                <View key={sIdx} style={styles.skillChip}>
                  <View style={styles.chipDot} />
                  <Text style={styles.skillChipText}>{skill}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}

        {/* Highlight Focus Area */}
        <View style={styles.focusCard}>
          <View style={styles.focusHeader}>
            <Ionicons name="sparkles-outline" size={20} color="#D97706" />
            <Text style={styles.focusTitle}>Fokus & Minat Karir</Text>
          </View>
          <Text style={styles.focusText}>
            {education.focus ||
              'Tertarik mendalami arsitektur web modern, integrasi IoT (Internet of Things), serta manajemen backend dan database yang andal.'}
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
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  headerSubtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 4,
    lineHeight: 18,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
    ...colors.cardShadow,
  },
  eduTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  eduIconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eduTitleWrapper: {
    flex: 1,
  },
  eduDegree: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  eduInstitution: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 2,
  },
  eduMetaRow: {
    flexDirection: 'row',
    marginTop: 14,
    gap: 8,
  },
  metaBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceSubtle,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    gap: 6,
  },
  metaBadgeText: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  gpaBadge: {
    backgroundColor: '#ECFDF5',
  },
  gpaBadgeText: {
    fontSize: 12,
    color: '#047857',
    fontWeight: '700',
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 14,
  },
  eduDescription: {
    fontSize: 13,
    lineHeight: 20,
    color: colors.textSecondary,
  },
  skillCard: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
    ...colors.cardShadow,
  },
  skillGroupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 10,
  },
  skillIconWrapper: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skillGroupTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceSubtle,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.borderLight,
    gap: 6,
  },
  chipDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primary,
  },
  skillChipText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  focusCard: {
    backgroundColor: '#FFFBEB',
    borderRadius: 18,
    padding: 16,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  focusHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  focusTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#92400E',
  },
  focusText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#78350F',
  },
});
