import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { BookingInfoResponse } from '../types/booking.type';
import { api } from '../api/api';
import * as SecureStore from 'expo-secure-store';
import CommonView from './CommonView';
import { common } from '../config/style';
import { BookingListCard } from '../components/BookingListCard/BookingListCard';
import image from '../config/image';
const Bookings = () => {
  const [bookings, setBookings] = useState<BookingInfoResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const userId = await SecureStore.getItemAsync('user').then((user) => {
                    return user ? JSON.parse(user).id : null;
                }); 
      try {
        // Fetch bookings data
        const response = await api.get(`/booking/${userId}`);
        setBookings(response.data);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Render individual booking items
  const renderBookingItem = ({ item }: { item: BookingInfoResponse }) => (
    <View style={styles.listContainer}>
      <BookingListCard destination={item.to} from={item.from} 
      DepartureDate={item.departureDate} DepartureTime={item.departureTime} 
      price={item.totalPrice.toString()} passangerCount={item.passengers.toString()} image={image.Magf}  />
    </View>
  );

  return (
    <CommonView>
       <View style={[common.middleArea, common.topArea]}>
                    <Text style={[common.mainTitle, { color: "white", marginBottom: 12 }]}>Bookings</Text>
                    
                </View>
    <View style={styles.container}>
         
{loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (     
        <FlatList
          data={bookings}
          keyExtractor={(item) => item.bookingId.toString()}
          renderItem={renderBookingItem}
        />
      )}
    </View>
      </CommonView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer:{
    width:"100%",
    display:'flex',
    flexDirection:"column",
    alignItems:"center"
  }
});

export default Bookings;