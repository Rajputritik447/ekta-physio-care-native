import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const treatmentImage = require('../assets/treatment-room.jpg');

const TreatmentsSection = () => {
  const conditions = [
    { name: "Back Pain", category: "Orthopedic", duration: "4-8 weeks" },
    { name: "Neck Pain", category: "Orthopedic", duration: "3-6 weeks" },
    { name: "Knee Injuries", category: "Sports", duration: "6-12 weeks" },
    { name: "Shoulder Pain", category: "Orthopedic", duration: "4-10 weeks" },
    { name: "Tennis Elbow", category: "Sports", duration: "3-8 weeks" },
    { name: "Sciatica", category: "Neurological", duration: "4-12 weeks" },
  ];

  const treatmentApproach = [
    {
      title: "Initial Assessment",
      description: "Comprehensive evaluation of your condition, medical history, and physical examination.",
      icon: 'clipboard'
    },
    {
      title: "Personalized Plan",
      description: "Custom treatment plan designed specifically for your condition and recovery goals.",
      icon: 'edit'
    },
    {
      title: "Progress Monitoring",
      description: "Regular assessment and plan adjustments to ensure optimal recovery progress.",
      icon: 'clock'
    }
  ];

  const getCategoryStyle = (category: string) => {
    const styles: Record<string, { backgroundColor: string; color: string }> = {
      "Orthopedic": { backgroundColor: 'rgba(0, 122, 255, 0.1)', color: '#007AFF' },
      "Sports": { backgroundColor: 'rgba(255, 215, 0, 0.1)', color: '#FFD700' },
      "Neurological": { backgroundColor: 'rgba(128, 0, 128, 0.1)', color: 'purple' },
    };
  
    return styles[category] || { backgroundColor: '#eee', color: '#333' };
  };
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Conditions We Treat</Text>
        <Text style={styles.subtitle}>
          Specialized treatment for a wide range of conditions using evidence-based 
          physiotherapy techniques and personalized care plans.
        </Text>
      </View>

      <View style={styles.card}>
        <Image source={treatmentImage} style={styles.treatmentImage} />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Modern Treatment Facility</Text>
          <Text style={styles.cardText}>
            Our clinic is equipped with state-of-the-art physiotherapy equipment 
            and modern treatment rooms designed to provide the best possible 
            care environment for our patients.
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Our Treatment Approach</Text>
        {treatmentApproach.map((step, index) => (
          <View key={index} style={styles.approachStep}>
            <View style={styles.approachIconContainer}>
              <Icon name={step.icon} size={24} color="white" />
            </View>
            <View style={styles.approachTextContainer}>
              <Text style={styles.approachTitle}>{step.title}</Text>
              <Text style={styles.approachDescription}>{step.description}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Common Conditions Treated</Text>
        {conditions.map((condition, index) => (
          <View key={index} style={styles.conditionRow}>
            <View style={styles.conditionInfo}>
              <Icon name="check-circle" size={20} color="#007AFF" />
              <View>
                <Text style={styles.conditionName}>{condition.name}</Text>
                <Text style={styles.conditionDuration}>Typical recovery: {condition.duration}</Text>
              </View>
            </View>
            <View style={[styles.badge, getCategoryStyle(condition.category)]}>
              <Text style={{color: getCategoryStyle(condition.category).color}}>{condition.category}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={[styles.card, styles.metricsCard]}>
        <Text style={[styles.cardTitle, { color: 'white' }]}>Treatment Success</Text>
        <View style={styles.metricsContainer}>
            <View style={styles.metric}>
                <Text style={styles.metricValue}>95%</Text>
                <Text style={styles.metricLabel}>Patient Satisfaction</Text>
            </View>
            <View style={styles.metric}>
                <Text style={styles.metricValue}>85%</Text>
                <Text style={styles.metricLabel}>Pain Reduction</Text>
            </View>
            <View style={styles.metric}>
                <Text style={styles.metricValue}>90%</Text>
                <Text style={styles.metricLabel}>Mobility Improvement</Text>
            </View>
            <View style={styles.metric}>
                <Text style={styles.metricValue}>6-8</Text>
                <Text style={styles.metricLabel}>Avg. Sessions</Text>
            </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
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
  cardBody: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cardText: {
    color: '#666',
  },
  treatmentImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  approachStep: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  approachIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  approachTextContainer: {
    flex: 1,
  },
  approachTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  approachDescription: {
    color: '#666',
  },
  conditionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  conditionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  conditionName: {
    fontWeight: '500',
    marginLeft: 12,
  },
  conditionDuration: {
    color: '#666',
    fontSize: 12,
    marginLeft: 12,
  },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  metricsCard: {
    backgroundColor: '#007AFF',
  },
  metricsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  metric: {
    alignItems: 'center',
    width: '45%',
    marginBottom: 16,
  },
  metricValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  metricLabel: {
    color: 'white',
  },
});

export default TreatmentsSection;