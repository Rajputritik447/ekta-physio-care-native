import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { sendEmail } from './EmailService';

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    condition: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.condition) {
      Alert.alert('Validation', 'Please fill all required fields.');
      return;
    }
  
    // Send data via Google Apps Script
    sendEmail({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      message: formData.message,
    });
  
    // Optionally, reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      condition: '',
      preferredDate: '',
      preferredTime: '',
      message: '',
    });
  };
  

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Book Your Appointment</Text>
        <Text style={styles.subtitle}>
          Take the first step towards recovery. Schedule your consultation 
          with Dr. Lakshay Yadav today and start your journey to better health.
        </Text>
      </View>

      <View style={styles.formCard}>
        <Text style={styles.cardTitle}>Schedule Your Consultation</Text>
        
        <Text style={styles.label}>Full Name *</Text>
        <TextInput
          style={styles.input}
          value={formData.name}
          onChangeText={(text) => handleInputChange("name", text)}
          placeholder="Enter your full name"
        />

        <Text style={styles.label}>Phone Number *</Text>
        <TextInput
          style={styles.input}
          value={formData.phone}
          onChangeText={(text) => handleInputChange("phone", text)}
          placeholder="+91 98765 43210"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          value={formData.email}
          onChangeText={(text) => handleInputChange("email", text)}
          placeholder="your.email@example.com"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Condition/Reason for Visit *</Text>
        <TextInput
          style={styles.input}
          value={formData.condition}
          onChangeText={(text) => handleInputChange("condition", text)}
          placeholder="e.g. Back Pain"
        />

        <Text style={styles.label}>Preferred Date</Text>
        <TextInput
          style={styles.input}
          value={formData.preferredDate}
          onChangeText={(text) => handleInputChange("preferredDate", text)}
          placeholder="YYYY-MM-DD"
        />

        <Text style={styles.label}>Preferred Time</Text>
        <TextInput
          style={styles.input}
          value={formData.preferredTime}
          onChangeText={(text) => handleInputChange("preferredTime", text)}
          placeholder="e.g. 10:00 AM"
        />

        <Text style={styles.label}>Additional Information</Text>
        <TextInput
          style={[styles.input, styles.textarea]}
          value={formData.message}
          onChangeText={(text) => handleInputChange("message", text)}
          placeholder="Please describe your symptoms..."
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Icon name="calendar" size={20} color="white" />
          <Text style={styles.buttonText}>Request Appointment</Text>
        </TouchableOpacity>

        <View style={styles.confirmationTextContainer}>
          <Icon name="check-circle" size={16} color="#007AFF" />
          <Text style={styles.confirmationText}>We'll confirm your appointment within 24 hours</Text>
        </View>
      </View>

      <View style={styles.contactCard}>
          <Text style={styles.cardTitle}>Contact Information</Text>
          <View style={styles.contactRow}>
              <Icon name="phone" size={24} color="#007AFF" />
              <View style={styles.contactTextContainer}>
                  <Text style={styles.contactLabel}>Phone</Text>
                  <Text style={styles.contactValue}>+91 98765 43210</Text>
                  <Text style={styles.contactMeta}>Available 9 AM - 7 PM</Text>
              </View>
          </View>
          <View style={styles.contactRow}>
              <Icon name="mail" size={24} color="#007AFF" />
              <View style={styles.contactTextContainer}>
                  <Text style={styles.contactLabel}>Email</Text>
                  <Text style={styles.contactValue}>dr.Lakshay@physiocare.com</Text>
                  <Text style={styles.contactMeta}>We'll respond within 24 hours</Text>
              </View>
          </View>
          <View style={styles.contactRow}>
              <Icon name="map-pin" size={24} color="#007AFF" />
              <View style={styles.contactTextContainer}>
                  <Text style={styles.contactLabel}>Address</Text>
                  <Text style={styles.contactValue}>123 Medical Plaza,  Meerut - 250002</Text>
              </View>
          </View>
          <View style={styles.contactRow}>
              <Icon name="clock" size={24} color="#007AFF" />
              <View style={styles.contactTextContainer}>
                  <Text style={styles.contactLabel}>Hours</Text>
                  <Text style={styles.contactValue}>Mon - Sat: 9:00 AM - 7:00 PM</Text>
                  <Text style={styles.contactMeta}>Sunday: Closed</Text>
              </View>
          </View>
          <View style={styles.emergencyContainer}>
              <Icon name="alert-circle" size={24} color="red" />
              <View style={styles.contactTextContainer}>
                  <Text style={styles.contactLabel}>Emergency</Text>
                  <Text style={styles.contactValue}>+91 99999 99999</Text>
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
  contactCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 24,
    marginBottom: 16,
  },
  formCard: {
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
  },
  contactLabel: {
    fontWeight: 'bold',
  },
  contactValue: {
    color: '#333',
    flexShrink: 1,
  },
  contactMeta: {
    fontSize: 12,
    color: '#666',
  },
  emergencyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    padding: 12,
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
    borderRadius: 8,
  },
  label: {
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  textarea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  confirmationTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  confirmationText: {
    marginLeft: 8,
    color: '#666',
  },
});

export default AppointmentSection;