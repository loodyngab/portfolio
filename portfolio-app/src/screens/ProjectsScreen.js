import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Linking,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsScreen() {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState('Semua');

  const categories = ['Semua', ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))];

  const filteredProjects =
    selectedFilter === 'Semua'
      ? projects
      : projects.filter((item) => item.category === selectedFilter);

  const handleOpenGithub = async (url, title) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(
          'Tautan Repositori',
          `Membuka repositori GitHub untuk:\n${title}\n\nURL: ${url}`
        );
      }
    } catch (error) {
      Alert.alert(
        'Tautan Repositori',
        `Membuka repositori GitHub untuk:\n${title}\n\nURL: ${url}`
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Koleksi Proyek</Text>
          <Text style={styles.headerSubtitle}>
            Daftar aplikasi mobile, web platform, dan sistem server yang pernah dikembangkan
          </Text>
        </View>

        {/* Filter Pills */}
        <View style={styles.filterRow}>
          {categories.map((category) => {
            const isActive = selectedFilter === category;
            return (
              <TouchableOpacity
                key={category}
                style={[styles.filterChip, isActive && styles.filterChipActive]}
                onPress={() => setSelectedFilter(category)}
                activeOpacity={0.8}
              >
                <Text
                  style={[styles.filterChipText, isActive && styles.filterChipTextActive]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Projects List */}
        <View style={styles.projectsContainer}>
          {filteredProjects.map((project) => (
            <View key={project.id} style={styles.projectCard}>
              {/* Card Header */}
              <View style={styles.cardHeader}>
                <View style={styles.titleArea}>
                  <Text style={styles.projectTitle}>{project.title}</Text>
                  <Text style={styles.projectTagline}>{project.tagline}</Text>
                </View>

                {project.featured && (
                  <View style={styles.featuredBadge}>
                    <Ionicons name="star" size={12} color="#D97706" />
                    <Text style={styles.featuredBadgeText}>Unggulan</Text>
                  </View>
                )}
              </View>

              {/* Description */}
              <Text style={styles.projectDescription}>{project.description}</Text>

              {/* Tech Stack Chips */}
              <View style={styles.techWrapper}>
                <Text style={styles.techLabel}>Teknologi Digunakan:</Text>
                <View style={styles.techRow}>
                  {project.technologies.map((tech, idx) => (
                    <View key={idx} style={styles.techBadge}>
                      <Text style={styles.techBadgeText}>{tech}</Text>
                    </View>
                  ))}
                </View>
              </View>

              {/* Card Footer: GitHub Link Button */}
              <View style={styles.cardFooter}>
                <TouchableOpacity
                  style={styles.githubButton}
                  activeOpacity={0.85}
                  onPress={() => handleOpenGithub(project.githubUrl, project.title)}
                >
                  <Ionicons name="logo-github" size={18} color="#FFFFFF" />
                  <Text style={styles.githubButtonText}>Lihat di GitHub</Text>
                  <Ionicons name="open-outline" size={16} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* Bottom Info Note */}
        <View style={styles.bottomNote}>
          <Ionicons name="git-branch-outline" size={16} color={colors.textMuted} />
          <Text style={styles.bottomNoteText}>
            Kode sumber terbuka tersedia untuk keperluan demonstrasi
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
    marginBottom: 16,
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
  filterRow: {
    flexDirection: 'row',
    marginBottom: 18,
    gap: 8,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  filterChipActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  filterChipText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  filterChipTextActive: {
    color: '#FFFFFF',
  },
  projectsContainer: {
    gap: 16,
  },
  projectCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
    ...colors.cardShadow,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  titleArea: {
    flex: 1,
    marginRight: 8,
  },
  projectTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  projectTagline: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
    marginTop: 2,
  },
  featuredBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  featuredBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#B45309',
  },
  projectDescription: {
    fontSize: 13,
    lineHeight: 19,
    color: colors.textSecondary,
    marginBottom: 14,
  },
  techWrapper: {
    marginBottom: 16,
  },
  techLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  techRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  techBadge: {
    backgroundColor: colors.surfaceSubtle,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  techBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  cardFooter: {
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
    paddingTop: 12,
  },
  githubButton: {
    backgroundColor: colors.github,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 11,
    paddingHorizontal: 16,
    borderRadius: 12,
    gap: 8,
  },
  githubButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  bottomNote: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    gap: 6,
  },
  bottomNoteText: {
    fontSize: 12,
    color: colors.textMuted,
  },
});
