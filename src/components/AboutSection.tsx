import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const doctorImage = require('../assets/doctor-portrait.jpg');

const AboutSection = () => {
  const qualifications = [
    "BPT - Bachelor of Physiotherapy",
    "MPT - Master of Physiotherapy (Orthopedics)",
    "Certified in Dry Needling",
    "Sports Injury Specialist",
    "Manual Therapy Certification"
  ];

  const expertise = [
    "Orthopedic Rehabilitation",
    "Sports Injury Recovery",
    "Post-Surgical Care",
    "Chronic Pain Management",
    "Neurological Conditions",
    "Pediatric Physiotherapy"
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>About Dr. Ekta Rajput</Text>
        <Text style={styles.subtitle}>
          Dedicated to helping patients achieve optimal health through evidence-based 
          physiotherapy treatments and personalized care.
        </Text>
      </View>

      <View style={styles.doctorCard}>
        <Image source={doctorImage} style={styles.doctorImage} />
        <Text style={styles.doctorName}>Dr. Ekta Rajput</Text>
        <Text style={styles.doctorSpecialty}>Physiotherapy Specialist</Text>
        <Text style={styles.doctorQuote}>
          "My mission is to help every patient regain their mobility, 
          reduce pain, and improve their quality of life through 
          comprehensive physiotherapy care."
        </Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Icon name="award" size={32} color="#FFD700" />
          <Text style={styles.statValue}>8+</Text>
          <Text style={styles.statLabel}>Years Experience</Text>
        </View>
        <View style={styles.statCard}>
          <Icon name="heart" size={32} color="#FFD700" />
          <Text style={styles.statValue}>500+</Text>
          <Text style={styles.statLabel}>Happy Patients</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Icon name="graduation-cap" size={24} color="#007AFF" />
          <Text style={styles.cardTitle}>Professional Background</Text>
        </View>
        <Text style={styles.cardText}>
          Dr. Ekta Rajput is a highly qualified physiotherapist with over 8 years 
          of experience in treating various musculoskeletal and neurological conditions. 
          She completed her Master's in Physiotherapy with specialization in Orthopedics 
          and has since dedicated her career to helping patients recover from injuries 
          and improve their physical health.
        </Text>

        <Text style={styles.listTitle}>Qualifications:</Text>
        {qualifications.map((q, i) => (
          <View key={i} style={styles.listItem}>
            <Icon name="check-circle" size={20} color="#FFD700" />
            <Text style={styles.listText}>{q}</Text>
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Icon name="target" size={24} color="#007AFF" />
          <Text style={styles.cardTitle}>Areas of Expertise</Text>
        </View>
        <View style={styles.expertiseContainer}>
          {expertise.map((area, index) => (
            <View key={index} style={styles.listItem}>
              <Icon name="check-circle" size={20} color="#FFD700" />
              <Text style={styles.listText}>{area}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={[styles.card, styles.ctaCard]}>
        <Text style={[styles.cardTitle, { color: 'white' }]}>
          Ready to Start Your Recovery Journey?
        </Text>
        <Text style={styles.ctaText}>
          Take the first step towards better health. Schedule a consultation 
          to discuss your condition and create a personalized treatment plan.
        </Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Book Consultation Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f8ff',
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
  doctorCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
    marginBottom: 16,
  },
  doctorImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  doctorName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  doctorSpecialty: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: '600',
    marginBottom: 16,
  },
  doctorQuote: {
    textAlign: 'center',
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 8,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    color: '#666',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 24,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  cardText: {
    color: '#666',
    marginBottom: 16,
  },
  listTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  listText: {
    marginLeft: 8,
    color: '#666',
    flexShrink: 1,
  },
  expertiseContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  ctaCard: {
    backgroundColor: '#007AFF',
  },
  ctaText: {
    color: 'white',
    marginBottom: 16,
  },
  ctaButton: {
    backgroundColor: '#FFD700',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  ctaButtonText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

export default AboutSection;