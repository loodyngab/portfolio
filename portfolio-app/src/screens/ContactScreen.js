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
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { portfolioData } from '../data/portfolioData';

export default function ContactScreen() {
  const { contact, profile } = portfolioData;

  const [messageText, setMessageText] = useState('');
  const [senderName, setSenderName] = useState('');

  const handleOpenLink = async (url, type) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(
          'Informasi Kontak',
          `Membuka ${type}:\n${url}`
        );
      }
    } catch (error) {
      Alert.alert(
        'Informasi Kontak',
        `Membuka ${type}:\n${url}`
      );
    }
  };

  const handleSendEmailDirect = () => {
    const subject = encodeURIComponent(`Halo dari Pengunjung Portofolio (${senderName || 'Rekan'})`);
    const body = encodeURIComponent(messageText || 'Halo! Saya melihat portofolio Anda dan tertarik untuk berdiskusi.');
    const emailUrl = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    handleOpenLink(emailUrl, 'Email Client');
  };

  const contactMethods = [
    contact.email && {
      id: 'email',
      title: 'Kirim Email',
      subtitle: contact.email,
      icon: 'mail-outline',
      bgColor: '#FEE2E2',
      iconColor: colors.email,
      action: () => handleOpenLink(`mailto:${contact.email}`, 'Email'),
      cta: 'Kirim Pesan',
    },
    contact.github && {
      id: 'github',
      title: 'GitHub Profile',
      subtitle: contact.github.replace('https://', ''),
      icon: 'logo-github',
      bgColor: '#F3F4F6',
      iconColor: colors.github,
      action: () => handleOpenLink(contact.github, 'GitHub'),
      cta: 'Kunjungi Profil',
    },
    contact.linkedin && {
      id: 'linkedin',
      title: 'LinkedIn',
      subtitle: contact.linkedin.replace('https://', ''),
      icon: 'logo-linkedin',
      bgColor: '#E0F2FE',
      iconColor: colors.linkedin,
      action: () => handleOpenLink(contact.linkedin, 'LinkedIn'),
      cta: 'Terhubung',
    },
    contact.whatsapp && {
      id: 'whatsapp',
      title: 'WhatsApp Chat',
      subtitle: contact.whatsapp.replace('https://wa.me/', '+'),
      icon: 'logo-whatsapp',
      bgColor: '#DCFCE7',
      iconColor: '#16A34A',
      action: () => handleOpenLink(contact.whatsapp, 'WhatsApp'),
      cta: 'Mulai Chat',
    },
  ].filter(Boolean);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Hubungi Saya</Text>
          <Text style={styles.headerSubtitle}>
            Terbuka untuk kesempatan magang, proyek kolaborasi, maupun diskusi seputar
            teknologi.
          </Text>
        </View>

        {/* Availability Badge */}
        <View style={styles.availabilityCard}>
          <View style={styles.availDot} />
          <View style={styles.availTextWrapper}>
            <Text style={styles.availTitle}>Status Ketersediaan</Text>
            <Text style={styles.availSubtitle}>{profile.status}</Text>
          </View>
        </View>

        {/* Contact Methods List */}
        <View style={styles.contactList}>
          {contactMethods.map((method) => (
            <TouchableOpacity
              key={method.id}
              style={styles.contactCard}
              activeOpacity={0.8}
              onPress={method.action}
            >
              <View style={[styles.iconCircle, { backgroundColor: method.bgColor }]}>
                <Ionicons name={method.icon} size={22} color={method.iconColor} />
              </View>

              <View style={styles.contactDetails}>
                <Text style={styles.contactTitle}>{method.title}</Text>
                <Text style={styles.contactSubtitle} numberOfLines={1}>
                  {method.subtitle}
                </Text>
              </View>

              <View style={styles.arrowCircle}>
                <Ionicons name="arrow-forward" size={16} color={colors.primary} />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Message Form */}
        <View style={styles.formCard}>
          <View style={styles.formHeader}>
            <Ionicons name="paper-plane-outline" size={20} color={colors.primary} />
            <Text style={styles.formTitle}>Kirim Pesan Cepat</Text>
          </View>
          <Text style={styles.formSubtitle}>
            Tulis pesan singkat untuk langsung diteruskan ke aplikasi email Anda:
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Nama Anda"
            placeholderTextColor={colors.textMuted}
            value={senderName}
            onChangeText={setSenderName}
          />

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Tulis pesan atau tawaran proyek Anda di sini..."
            placeholderTextColor={colors.textMuted}
            value={messageText}
            onChangeText={setMessageText}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />

          <TouchableOpacity
            style={styles.sendButton}
            activeOpacity={0.85}
            onPress={handleSendEmailDirect}
          >
            <Ionicons name="send" size={16} color="#FFFFFF" />
            <Text style={styles.sendButtonText}>Kirim via Email</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            © {new Date().getFullYear()} {profile.name}
          </Text>
          <Text style={styles.footerSubText}>
            Dibuat menggunakan React Native & Expo
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
  availabilityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECFDF5',
    borderRadius: 16,
    padding: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#A7F3D0',
    gap: 12,
  },
  availDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.accent,
  },
  availTextWrapper: {
    flex: 1,
  },
  availTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#065F46',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  availSubtitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#047857',
    marginTop: 2,
  },
  contactList: {
    gap: 12,
    marginBottom: 24,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 14,
    ...colors.cardShadow,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactDetails: {
    flex: 1,
  },
  contactTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  contactSubtitle: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  arrowCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
    ...colors.cardShadow,
  },
  formHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  formTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  formSubtitle: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 14,
    lineHeight: 16,
  },
  input: {
    backgroundColor: colors.surfaceSubtle,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 13,
    color: colors.textPrimary,
    borderWidth: 1,
    borderColor: colors.borderLight,
    marginBottom: 10,
  },
  textArea: {
    height: 90,
  },
  sendButton: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    gap: 8,
    marginTop: 4,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  footerContainer: {
    alignItems: 'center',
    marginTop: 28,
  },
  footerText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  footerSubText: {
    fontSize: 11,
    color: colors.textMuted,
    marginTop: 4,
  },
});
