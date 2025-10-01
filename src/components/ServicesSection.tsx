import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ServicesSection = () => {
  const services = [
    {
      icon: 'activity',
      title: "Pain Management",
      description: "Comprehensive pain relief through targeted physiotherapy techniques, manual therapy, and exercise programs.",
      features: ["Chronic pain relief", "Acute pain management", "Joint pain treatment", "Muscle pain therapy"]
    },
    {
      icon: 'shield',
      title: "Sports Injury Recovery",
      description: "Specialized rehabilitation for athletes and sports enthusiasts to return to peak performance safely.",
      features: ["Injury assessment", "Recovery protocols", "Performance enhancement", "Injury prevention"]
    },
    {
      icon: 'shield',
      title: "Post-Surgical Rehabilitation",
      description: "Expert care following orthopedic surgeries to ensure optimal healing and recovery.",
      features: ["Post-op recovery", "Mobility restoration", "Strength building", "Scar tissue management"]
    },
    {
      icon: 'brain',
      title: "Neurological Rehabilitation",
      description: "Specialized treatment for neurological conditions to improve function and quality of life.",
      features: ["Stroke recovery", "Balance training", "Coordination improvement", "Motor skill development"]
    },
    {
      icon: 'heart',
      title: "Cardiopulmonary Therapy",
      description: "Respiratory and cardiac rehabilitation to improve breathing and cardiovascular health.",
      features: ["Breathing exercises", "Cardiac rehabilitation", "Endurance training", "Respiratory therapy"]
    },
    {
      icon: 'smile',
      title: "Pediatric Physiotherapy",
      description: "Gentle, age-appropriate treatments for children with developmental or injury-related conditions.",
      features: ["Developmental delays", "Pediatric injuries", "Movement disorders", "Growth-related issues"]
    },
    {
      icon: 'users',
      title: "Geriatric Care",
      description: "Specialized physiotherapy for older adults focusing on mobility, balance, and independence.",
      features: ["Fall prevention", "Mobility enhancement", "Strength maintenance", "Pain management"]
    },
    {
      icon: 'plus-circle',
      title: "Manual Therapy",
      description: "Hands-on techniques including joint mobilization, soft tissue massage, and manipulation.",
      features: ["Joint mobilization", "Soft tissue massage", "Trigger point therapy", "Myofascial release"]
    },
    {
      icon: 'zap',
      title: "Electrotherapy",
      description: "Advanced electrotherapy modalities for pain relief and tissue healing acceleration.",
      features: ["TENS therapy", "Ultrasound therapy", "Electrical stimulation", "Laser therapy"]
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Our Services</Text>
        <Text style={styles.subtitle}>
          Comprehensive physiotherapy services tailored to your specific needs. 
          We offer evidence-based treatments to help you recover faster and stronger.
        </Text>
      </View>

      <View>
        {services.map((service, index) => (
          <View key={index} style={styles.serviceCard}>
            <View style={styles.iconContainer}>
              <Icon name={service.icon} size={32} color="white" />
            </View>
            <Text style={styles.serviceTitle}>{service.title}</Text>
            <Text style={styles.serviceDescription}>{service.description}</Text>

            <View style={styles.featuresContainer}>
              {service.features.map((feature, featureIndex) => (
                <View key={featureIndex} style={styles.feature}>
                  <View style={styles.featureDot} />
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>

            <TouchableOpacity style={styles.learnMoreButton}>
              <Text style={styles.learnMoreButtonText}>Learn More</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={styles.ctaCard}>
        <Text style={styles.ctaTitle}>Not Sure Which Service You Need?</Text>
        <Text style={styles.ctaSubtitle}>
          Book a consultation with Dr. Ekta Rajput to discuss your condition 
          and receive a personalized treatment recommendation.
        </Text>
        <View style={styles.ctaButtonContainer}>
          <TouchableOpacity style={[styles.button, styles.primaryButton]}>
            <Text style={[styles.buttonText, styles.primaryButtonText]}>Schedule Consultation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
            <Text style={[styles.buttonText, styles.secondaryButtonText]}>Contact Us</Text>
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
  serviceCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 24,
    marginBottom: 16,
    alignItems: 'center',
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  serviceDescription: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 16,
  },
  featuresContainer: {
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#007AFF',
    marginRight: 8,
  },
  featureText: {
    color: '#666',
    flexShrink: 1,
  },
  learnMoreButton: {
    borderColor: '#007AFF',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  learnMoreButtonText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  ctaCard: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
    marginTop: 32,
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  ctaSubtitle: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginBottom: 24,
  },
  ctaButtonContainer: {
    flexDirection: 'column',
    width: '100%',
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
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

export default ServicesSection;