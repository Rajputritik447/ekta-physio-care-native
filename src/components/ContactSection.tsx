import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ContactSection = () => {
  const openMap = () => {
    const address = '123 Medical Plaza, Bandra West, Mumbai - 400050';
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    Linking.openURL(url);
  };

  const openPhone = (phoneNumber: string) => {
    Linking.openURL(`tel:${phoneNumber}`);
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Visit Our Clinic</Text>
        <Text style={styles.subtitle}>
          Conveniently located in the heart of Mumbai with easy access 
          by public transport. We're here to help you on your recovery journey.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Contact Details</Text>
        <View style={styles.contactRow}>
            <Icon name="map-pin" size={24} color="#007AFF" />
            <View style={styles.contactTextContainer}>
                <Text style={styles.contactLabel}>Address</Text>
                <Text style={styles.contactValue}>Ekta Physio Care Clinic, 123 Medical Plaza, 2nd Floor, Linking Road, Bandra West, Mumbai - 400050, Maharashtra</Text>
            </View>
        </View>
        <View style={styles.contactRow}>
            <Icon name="phone" size={24} color="#007AFF" />
            <View style={styles.contactTextContainer}>
                <Text style={styles.contactLabel}>Phone</Text>
                <Text style={styles.contactValue}>Primary: +91 98765 43210</Text>
                <Text style={styles.contactValue}>Emergency: +91 99999 99999</Text>
            </View>
        </View>
        <View style={styles.contactRow}>
            <Icon name="mail" size={24} color="#007AFF" />
            <View style={styles.contactTextContainer}>
                <Text style={styles.contactLabel}>Email</Text>
                <Text style={styles.contactValue}>dr.ekta@physiocare.com</Text>
                <Text style={styles.contactValue}>info@ektaphysiocare.com</Text>
            </View>
        </View>
        <View style={styles.contactRow}>
            <Icon name="clock" size={24} color="#007AFF" />
            <View style={styles.contactTextContainer}>
                <Text style={styles.contactLabel}>Operating Hours</Text>
                <Text style={styles.contactValue}>Monday - Friday: 9:00 AM - 7:00 PM</Text>
                <Text style={styles.contactValue}>Saturday: 9:00 AM - 5:00 PM</Text>
                <Text style={styles.contactValue}>Sunday: Closed</Text>
            </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>How to Reach Us</Text>
        <View style={styles.transportRow}>
            <Icon name="train" size={24} color="#007AFF" />
            <View style={styles.transportTextContainer}>
                <Text style={styles.transportLabel}>By Train</Text>
                <Text style={styles.transportValue}>Bandra Station (Western Line) - 10 min walk</Text>
            </View>
        </View>
        <View style={styles.transportRow}>
            <Icon name="truck" size={24} color="#007AFF" />
            <View style={styles.transportTextContainer}>
                <Text style={styles.transportLabel}>By Bus</Text>
                <Text style={styles.transportValue}>Multiple bus routes, nearest stop: Linking Road</Text>
            </View>
        </View>
        <View style={styles.transportRow}>
            <Icon name="navigation" size={24} color="#007AFF" />
            <View style={styles.transportTextContainer}>
                <Text style={styles.transportLabel}>By Car</Text>
                <Text style={styles.transportValue}>Parking available nearby, valet service provided</Text>
            </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.mapPlaceholder}>
            <Icon name="map" size={64} color="#007AFF" />
            <Text style={styles.mapText}>Interactive Map</Text>
            <Text style={styles.mapAddress}>123 Medical Plaza, Bandra West, Mumbai - 400050</Text>
            <TouchableOpacity style={styles.mapButton} onPress={openMap}>
                <Text style={styles.mapButtonText}>Open in Google Maps</Text>
            </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Nearby Landmarks</Text>
        <View style={styles.landmarkRow}>
            <Text style={styles.landmarkName}>Bandstand Promenade</Text>
            <Text style={styles.landmarkDistance}>5 min walk</Text>
        </View>
        <View style={styles.landmarkRow}>
            <Text style={styles.landmarkName}>Linking Road Market</Text>
            <Text style={styles.landmarkDistance}>2 min walk</Text>
        </View>
        <View style={styles.landmarkRow}>
            <Text style={styles.landmarkName}>Bandra-Worli Sea Link</Text>
            <Text style={styles.landmarkDistance}>10 min drive</Text>
        </View>
      </View>

      <View style={[styles.card, styles.ctaCard]}>
        <Text style={[styles.cardTitle, {color: 'white'}]}>Ready to Visit?</Text>
        <Text style={styles.ctaText}>We're conveniently located in Bandra West with easy access from all parts of Mumbai. Call us now to book your appointment or get directions to our clinic.</Text>
        <View style={styles.ctaButtonContainer}>
            <TouchableOpacity style={[styles.button, styles.primaryButton]} onPress={() => openPhone('+919876543210')}>
                <Text style={[styles.buttonText, styles.primaryButtonText]}>Call Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
                <Text style={[styles.buttonText, styles.secondaryButtonText]}>Book Online</Text>
            </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    maxWidth: 600,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 24,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  contactTextContainer: {
    marginLeft: 16,
    flexShrink: 1,
  },
  contactLabel: {
    fontWeight: 'bold',
  },
  contactValue: {
    color: '#333',
  },
  transportRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  transportTextContainer: {
    marginLeft: 16,
  },
  transportLabel: {
    fontWeight: '500',
  },
  transportValue: {
    color: '#666',
  },
  mapPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f8ff',
    borderRadius: 8,
    padding: 32,
  },
  mapText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  mapAddress: {
    color: '#666',
    textAlign: 'center',
    marginVertical: 8,
  },
  mapButton: {
    borderColor: '#007AFF',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
  },
  mapButtonText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  landmarkRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  landmarkName: {
    color: '#666',
  },
  landmarkDistance: {
    fontWeight: '500',
    color: '#007AFF',
  },
  ctaCard: {
    backgroundColor: '#007AFF',
  },
  ctaText: {
    color: 'white',
    marginBottom: 16,
    textAlign: 'center',
  },
  ctaButtonContainer: {
    width: '100%',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#FFD700',
  },
  secondaryButton: {
    borderColor: 'white',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  primaryButtonText: {
    color: '#007AFF',
  },
  secondaryButtonText: {
    color: 'white',
  },
});

export default ContactSection;