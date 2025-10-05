
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Header = ({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePress = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  }

  return (
    <View style={styles.header}>
      {/* Top bar with contact info */}
      <View style={styles.topBar}>
        <View style={styles.container}>
          <View style={styles.topBarContent}>
            <View style={styles.contactInfo}>
              <Icon name="phone" size={16} color="white" />
              <Text style={styles.contactText}>+91 98765 43210</Text>
            </View>
            {/* <View style={styles.contactInfo}>
              <Icon name="mail" size={16} color="white" />
              <Text style={styles.contactText}>dr.Lakshay@physiocare.com</Text>
            </View> */}
            <View style={styles.contactInfo}>
              <Icon name="map-pin" size={16} color="white" />
              <Text style={styles.contactText}>Meerut, Uttar Pradesh</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Main navigation */}
      <View style={styles.mainNav}>
        <View style={styles.container}>
          <View style={styles.mainNavContent}>
            <Text style={styles.logo}>Lakshay Physio Care</Text>

            {/* Mobile menu button */}
            <TouchableOpacity onPress={() => setIsMenuOpen(!isMenuOpen)}>
              <Icon name={isMenuOpen ? 'x' : 'menu'} size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Mobile menu */}
      {isMenuOpen && (
        <View style={styles.mobileMenu}>
          <TouchableOpacity style={styles.mobileNavLink} onPress={() => handlePress('home')}>
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mobileNavLink} onPress={() => handlePress('about')}>
            <Text>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mobileNavLink} onPress={() => handlePress('services')}>
            <Text>Services</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mobileNavLink} onPress={() => handlePress('treatments')}>
            <Text>Treatments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mobileNavLink} onPress={() => handlePress('testimonials')}>
            <Text>Testimonials</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mobileNavLink} onPress={() => handlePress('contact')}>
            <Text>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.mobileButton]} onPress={() => handlePress('appointment')}>
            <Text style={styles.buttonText}>Book Appointment</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 122, 255, 0.1)',
  },
  topBar: {
    backgroundColor: '#007AFF', // Primary color
  },
  container: {
    paddingHorizontal: 16,
  },
  topBarContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 8,
    justifyContent: 'space-between',
    marginTop : 40,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  contactText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 12,
  },
  mainNav: {
    height: 64,
  },
  mainNavContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF', // Primary color
  },
  button: {
    backgroundColor: '#007AFF', // Medical color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  mobileMenu: {
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 122, 255, 0.1)',
  },
  mobileNavLink: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  mobileButton: {
    marginTop: 16,
  }
});

export default Header;
