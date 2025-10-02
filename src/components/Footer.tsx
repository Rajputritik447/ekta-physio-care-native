
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Footer = ({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) => {

  return (
    <View style={styles.footerContainer}>
      <View style={styles.mainContent}>
        <View style={styles.clinicInfo}>
          <Text style={styles.clinicName}>Ekta Physio Care</Text>
          <Text style={styles.clinicDescription}>
            Leading physiotherapy clinic in Mumbai, dedicated to helping 
            patients recover from injuries, manage pain, and improve their 
            quality of life through personalized treatment plans.
          </Text>
          <View style={styles.contactInfo}>
            <Icon name="phone" size={16} color="#FFD700" />
            <Text style={styles.contactText}>+91 98765 43210</Text>
          </View>
          <View style={styles.contactInfo}>
            <Icon name="mail" size={16} color="#FFD700" />
            <Text style={styles.contactText}>dr.ekta@physiocare.com</Text>
          </View>
          <View style={styles.contactInfo}>
            <Icon name="map-pin" size={16} color="#FFD700" />
            <Text style={styles.contactText}>Bandra West, Mumbai - 400050</Text>
          </View>
        </View>

        <View style={styles.linksContainer}>
          <View style={styles.quickLinks}>
            <Text style={styles.linksTitle}>Quick Links</Text>
            <TouchableOpacity onPress={() => scrollToSection('home')}><Text style={styles.link}>Home</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => scrollToSection('about')}><Text style={styles.link}>About Dr. Ekta</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => scrollToSection('services')}><Text style={styles.link}>Our Services</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => scrollToSection('treatments')}><Text style={styles.link}>Treatments</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => scrollToSection('testimonials')}><Text style={styles.link}>Patient Reviews</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => scrollToSection('contact')}><Text style={styles.link}>Contact Us</Text></TouchableOpacity>
          </View>

          <View style={styles.servicesLinks}>
            <Text style={styles.linksTitle}>Services</Text>
            <Text style={styles.link}>Pain Management</Text>
            <Text style={styles.link}>Sports Injury Recovery</Text>
            <Text style={styles.link}>Post-Surgical Rehab</Text>
            <Text style={styles.link}>Neurological Rehab</Text>
            <Text style={styles.link}>Manual Therapy</Text>
            <Text style={styles.link}>Electrotherapy</Text>
          </View>
        </View>
      </View>

      <View style={styles.clinicHoursCard}>
        <View style={styles.clinicHoursInfo}>
            <Icon name="clock" size={24} color="#FFD700" />
            <View style={{marginLeft: 12}}>
                <Text style={styles.clinicHoursTitle}>Clinic Hours</Text>
                <Text style={styles.clinicHoursText}>Mon-Sat: 9 AM - 7 PM</Text>
            </View>
        </View>
        <View style={{alignItems: 'center'}}>
            <Text style={styles.emergencyTitle}>Emergency Contact</Text>
            <Text style={styles.emergencyText}>+91 99999 99999</Text>
        </View>
        <TouchableOpacity style={styles.appointmentButton} onPress={() => scrollToSection('appointment')}>
            <Text style={styles.appointmentButtonText}>Book Appointment</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.copyrightContainer}>
        <Text style={styles.copyrightText}>© 2024 Ekta Physio Care. All rights reserved.</Text>
        <View style={styles.madeWithContainer}>
            <Text style={styles.copyrightText}>Made with </Text>
            <Icon name="heart" size={16} color="red" />
            <Text style={styles.copyrightText}> for better health</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#333',
    padding: 16,
  },
  mainContent: {
    flexDirection: 'column',
    marginBottom: 32,
  },
  clinicInfo: {
    marginBottom: 16,
  },
  clinicName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 8,
  },
  clinicDescription: {
    color: '#ccc',
    marginBottom: 16,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  contactText: {
    color: '#eee',
    marginLeft: 8,
  },
  linksContainer: {
    flexDirection: 'row',
  },
  quickLinks: {
    flex: 1,
  },
  servicesLinks: {
    flex: 1,
  },
  linksTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 12,
  },
  link: {
    color: '#ccc',
    marginBottom: 8,
  },
  clinicHoursCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 32,
  },
  clinicHoursInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
  },
  clinicHoursTitle: {
    fontWeight: 'bold',
    color: 'white',
  },
  clinicHoursText: {
    color: '#ccc',
  },
  emergencyTitle: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
  emergencyText: {
    color: '#eee',
    marginBottom: 16,
  },
  appointmentButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  appointmentButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  copyrightContainer: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
    paddingTop: 16,
    alignItems: 'center',
  },
  copyrightText: {
    color: '#aaa',
    textAlign: 'center',
  },
  madeWithContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8,
  }
});

export default Footer;
