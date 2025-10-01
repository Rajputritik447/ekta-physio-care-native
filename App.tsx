import React from 'react';
import { ScrollView, StyleSheet, StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Header from './src/components/Header';
import HeroSection from './src/components/HeroSection';
import AboutSection from './src/components/AboutSection';
import ServicesSection from './src/components/ServicesSection';
import TreatmentsSection from './src/components/TreatmentsSection';
import TestimonialsSection from './src/components/TestimonialsSection';
import AppointmentSection from './src/components/AppointmentSection';
import ContactSection from './src/components/ContactSection';
import Footer from './src/components/Footer';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView style={styles.container}>
        <Header />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TreatmentsSection />
        <TestimonialsSection />
        <AppointmentSection />
        <ContactSection />
        <Footer />
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;