import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const heroImage = require('../assets/hero-physiotherapy.jpg');

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    // This will be implemented later with React Navigation
    console.log('Scrolling to', sectionId);
  };

  return (
    <ImageBackground source={heroImage} style={styles.heroContainer} imageStyle={styles.heroImage}>
      <View style={styles.overlay} />
      <View style={styles.container}>
        <View style={styles.heroContent}>
          <View style={styles.certifiedContainer}>
            <Icon name="award" size={24} color="#FFD700" />
            <Text style={styles.certifiedText}>Certified Physiotherapist</Text>
          </View>

          <Text style={styles.title}>Dr. Ekta Rajput</Text>
          <Text style={styles.subtitle}>Physiotherapy Expert</Text>

          <Text style={styles.description}>
            Specialized in pain management, sports injuries, and rehabilitation. 
            Helping patients recover faster with personalized treatment plans and 
            advanced physiotherapy techniques.
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.primaryButton]} onPress={() => scrollToSection('appointment')}>
              <Text style={[styles.buttonText, styles.primaryButtonText]}>Book Consultation</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => scrollToSection('about')}>
              <Text style={[styles.buttonText, styles.secondaryButtonText]}>Learn More</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.statsContainer}>
              <View style={styles.stat}>
                  <Text style={styles.statNumber}>500+</Text>
                  <Text style={styles.statLabel}>Patients Treated</Text>
              </View>
              <View style={styles.stat}>
                  <Text style={styles.statNumber}>8+</Text>
                  <Text style={styles.statLabel}>Years Experience</Text>
              </View>
              <View style={styles.stat}>
                  <Text style={styles.statNumber}>95%</Text>
                  <Text style={styles.statLabel}>Success Rate</Text>
              </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    minHeight: 600,
    justifyContent: 'center',
  },
  heroImage: {
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 122, 255, 0.8)',
  },
  container: {
    paddingHorizontal: 16,
  },
  heroContent: {
    alignItems: 'center',
    paddingRight: 24,
  },
  certifiedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  certifiedText: {
    color: '#FFD700',
    fontWeight: '600',
    marginLeft: 8,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 32,
    color: '#FFD700',
    marginBottom: 24,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 28,
    marginBottom: 32,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginHorizontal: 8,
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  statLabel: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});

export default HeroSection;