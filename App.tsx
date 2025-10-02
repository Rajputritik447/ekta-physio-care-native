
import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, StatusBar, useColorScheme, View } from 'react-native';
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
  const scrollViewRef = useRef<ScrollView>(null);
  const [layouts, setLayouts] = useState<{[key: string]: number}>({});

  const handleLayout = (section: string, event: any) => {
    const layout = event.nativeEvent.layout;
    console.log('Layout for', section, layout.y);
    setLayouts(prev => ({...prev, [section]: layout.y}));
  }

  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to', sectionId, layouts[sectionId]);
    console.log('Layouts state:', layouts);
    if (layouts[sectionId] !== undefined) {
      scrollViewRef.current?.scrollTo({ y: layouts[sectionId], animated: true });
    }
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView style={styles.container} ref={scrollViewRef}>
        <Header scrollToSection={scrollToSection} />
        <View onLayout={(event) => handleLayout('home', event)}><HeroSection scrollToSection={scrollToSection} /></View>
        <View onLayout={(event) => handleLayout('about', event)}><AboutSection scrollToSection={scrollToSection} /></View>
        <View onLayout={(event) => handleLayout('services', event)}><ServicesSection scrollToSection={scrollToSection} /></View>
        <View onLayout={(event) => handleLayout('treatments', event)}><TreatmentsSection /></View>
        <View onLayout={(event) => handleLayout('testimonials', event)}><TestimonialsSection /></View>
        <View onLayout={(event) => handleLayout('appointment', event)}><AppointmentSection /></View>
        <View onLayout={(event) => handleLayout('contact', event)}><ContactSection scrollToSection={scrollToSection} /></View>
        <Footer scrollToSection={scrollToSection} />
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
