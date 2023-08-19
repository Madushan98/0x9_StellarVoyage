import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { BookingInfoResponse } from '../types/booking.type';
import BookingSummmaryCardSmall from '../components/BookingSummaryCardSmall/BookingSummmaryCardSmall';
const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulating data fetching with useEffect
  useEffect(() => {
    const fetchData = async () => {
      // Simulate fetching data from an API
      // Replace this with your actual data fetching logic
      try {
        // Fetch bookings data
        const response = await fetch('your-api-endpoint');
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Render individual booking items
  const renderBookingItem = ({ item }: { item: BookingInfoResponse }) => (
    <View style={styles.bookingItem}>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={bookings}
          keyExtractor={(item) => item.flightId.toString()}
          renderItem={renderBookingItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookingItem: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default Bookings;