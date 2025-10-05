import { Alert } from 'react-native';

interface AppointmentData {
  name: string;
  email: string;
  phone: string;
  condition: string;
  preferredDate: string;
  preferredTime?: string;
  message?: string;
}

export const sendEmail = async (appointmentData: AppointmentData) => {
  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbzWLTX93zFfwFyte-uanP8AV0GuD25cLFyHaOMXlWiLNi78xUALqpqh80iVhALFPSgM/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointmentData),
      }
    );

    const data = await response.json();

    if (data.status === 'success') {
      Alert.alert('Success', 'Appointment request sent successfully!');
    } else {
      Alert.alert('Error', 'Failed to send appointment request: ' + data.message);
    }
  } catch (error) {
    console.error('Error sending appointment request:', error);
    Alert.alert('Error', 'Something went wrong while sending your request.');
  }
};
