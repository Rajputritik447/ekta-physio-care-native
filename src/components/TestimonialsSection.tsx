import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      condition: "Chronic Back Pain",
      rating: 5,
      image: "PS",
      testimonial: "Dr. Ekta completely transformed my life. I had been suffering from chronic back pain for 3 years, and within 6 weeks of treatment, I was pain-free. Her approach is professional yet caring, and she explains everything clearly.",
      duration: "Treated for 6 weeks"
    },
    {
      name: "Rajesh Kumar",
      condition: "Post-Surgery Knee Recovery",
      rating: 5,
      image: "RK",
      testimonial: "After my knee surgery, I was worried about recovery. Dr. Ekta's rehabilitation program was excellent. She guided me through every step, and now I'm back to playing cricket! Highly recommend her expertise.",
      duration: "Treated for 10 weeks"
    },
    {
      name: "Anita Desai",
      condition: "Frozen Shoulder",
      rating: 5,
      image: "AD",
      testimonial: "I couldn't lift my arm above my head for months. Dr. Ekta's treatment plan was thorough and effective. Her manual therapy techniques and exercises helped me regain full range of motion. Grateful for her care!",
      duration: "Treated for 12 weeks"
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Patient Success Stories</Text>
        <Text style={styles.subtitle}>
          Read what our patients have to say about their recovery journey 
          and experience with our physiotherapy treatments.
        </Text>
      </View>

      <View style={styles.overallRatingCard}>
        <View style={styles.ratingStars}>
            {[1, 2, 3, 4, 5].map((star) => (
                <Icon key={star} name="star" size={32} color="#FFD700" />
            ))}
        </View>
        <Text style={styles.overallRatingText}>5.0 / 5.0</Text>
        <Text style={styles.reviewsText}>Based on 200+ patient reviews</Text>
        <Text style={styles.recommendationText}>100% of patients would recommend Dr. Ekta</Text>
      </View>

      <View>
        {testimonials.map((testimonial, index) => (
          <View key={index} style={styles.testimonialCard}>
            <Icon name="message-square" size={24} style={styles.quoteIcon} />
            <View style={styles.ratingStars}>
                {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="star" size={16} color={star <= testimonial.rating ? '#FFD700' : '#ccc'} />
                ))}
            </View>
            <Text style={styles.testimonialText}>"{testimonial.testimonial}"</Text>
            <View style={styles.patientInfo}>
                <View style={styles.patientAvatar}>
                    <Text style={styles.avatarText}>{testimonial.image}</Text>
                </View>
                <View>
                    <Text style={styles.patientName}>{testimonial.name}</Text>
                    <Text style={styles.patientCondition}>{testimonial.condition}</Text>
                    <Text style={styles.treatmentDuration}>{testimonial.duration}</Text>
                </View>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.ctaCard}>
        <Text style={styles.ctaTitle}>Ready to Start Your Recovery Story?</Text>
        <Text style={styles.ctaSubtitle}>
          Join hundreds of satisfied patients who have successfully recovered 
          from their conditions with personalized physiotherapy care.
        </Text>
        <View style={styles.ctaButtonContainer}>
            <TouchableOpacity style={[styles.button, styles.primaryButton]}>
                <Text style={[styles.buttonText, styles.primaryButtonText]}>Book Your Consultation</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
                <Text style={[styles.buttonText, styles.secondaryButtonText]}>Ask Questions</Text>
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
  overallRatingCard: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
    marginBottom: 32,
  },
  ratingStars: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  overallRatingText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 8,
  },
  reviewsText: {
    fontSize: 18,
    color: 'white',
  },
  recommendationText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
  },
  testimonialCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 24,
    marginBottom: 16,
  },
  quoteIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
    color: 'rgba(0, 122, 255, 0.2)',
  },
  testimonialText: {
    fontStyle: 'italic',
    color: '#666',
    marginBottom: 16,
  },
  patientInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  patientAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    color: 'white',
    fontWeight: 'bold',
  },
  patientName: {
    fontWeight: 'bold',
  },
  patientCondition: {
    color: '#007AFF',
    fontWeight: '500',
  },
  treatmentDuration: {
    fontSize: 12,
    color: '#666',
  },
  ctaCard: {
    backgroundColor: '#f0f8ff',
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
    marginTop: 32,
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  ctaSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
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
    backgroundColor: '#007AFF',
  },
  secondaryButton: {
    borderColor: '#007AFF',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  primaryButtonText: {
    color: 'white',
  },
  secondaryButtonText: {
    color: '#007AFF',
  },
});

export default TestimonialsSection;