import React, {useEffect, useState} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {common, commonListTile} from '../config/style';
import {BookingDetailCard} from '../components/BookingDetailCard/BookingDetailCard';
import {MainButton} from '../components/MainButton/MainButton';
import CommonView from './CommonView';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {api} from '../api/api';

const FlightFilter = ({navigation}) => {
    const [isAddDestinationModalVisible, setAddDestinationModalVisible] = useState(false);
    const [isAddDeparturenModalVisible, setAddDepartureModalVisible] = useState(false);
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDestination, setSelectedDestination] = useState<string>("");
    const [selectedFrom, setSelectedFrom] = useState<string>("");
    const [destinations, setDestinations] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch all detination names
                const response = await api.get('/destinations/allNames');
                setDestinations(response.data);
            } catch (error: any) {
                alert(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);


    const handleSearch = async () => {
        setLoading(true);
        if(selectedFrom === null || selectedDestination === null || selectedDate === null) {
            alert('Please fill in all fields');
            return;
        }

        try {
            // Fetch flights
            const searchCriteria: SearchFlightRequest = {
                fromLocation: selectedFrom,
                toLocation: selectedDestination,
                departureDate: selectedDate,
            };
            const response = await api.post('/flight/search', {searchCriteria});
            setLoading(false);
            // Navigate to flight list screen
            navigation.navigate('FlightSearchList', {
                flightList: response.data,
            });
        } catch (error: any) {
            setLoading(false);
            alert(error.message);
        }
    };

    const addDeparture = () => {
        setAddDepartureModalVisible(true);
    };

    const closeAddDepartureModal = () => {
        setAddDepartureModalVisible(false)
    };

    const addDestination = () => {
        setAddDestinationModalVisible(true);
    };


    const closeAddDestinationModal = () => {
        setAddDestinationModalVisible(false);
    };

    const showDatePicker = () => {
        setDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };

    const handleDateConfirm = ({date}: any) => {
        console.log("Selected date:", date);
        setSelectedDate(date);
        hideDatePicker();
    };


    const openDatePicker = () => {
        showDatePicker();
    };

    return (
        <>
            <CommonView>
                <View style={[common.middleArea, common.topArea]}>
                    <Text style={[common.mainTitle, {color: 'white', marginBottom: 12}]}>Book Your Flight</Text>
                </View>
                <View style={[common.centerVertical, {height: '30%', justifyContent: 'space-around'}]}>
                    <BookingDetailCard onPress={addDestination} title='From'
                                       infomation={selectedDestination} iconName='airplane-outline'/>
                    <BookingDetailCard onPress={addDeparture} title='Destination'
                                       infomation={selectedFrom } iconName='planet-outline'/>
                    <BookingDetailCard
                        onPress={openDatePicker}
                        title="Departure Date"
                        infomation={selectedDate}
                        iconName="calendar-outline"
                    />
                </View>
                <View style={[common.centerVertical, {height: '30%', justifyContent: 'space-around'}]}>
                    <MainButton text="Search" onPress={handleSearch}/>
                </View>
            </CommonView>

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
            />

            <Modal
                visible={isAddDestinationModalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={closeAddDestinationModal}
            >
                <View style={common.modalContainer}>
                    <View style={common.modalContent}>
                        {/* Pop-up content */}
                        <Text style={common.modalHeaderText}>Select Destination</Text>

                        {destinations.map((destination, index) => (
                            <TouchableOpacity style={commonListTile.tileContainer}
                                key={index}
                                onPress={() => {
                                    // Handle destination selection
                                    setSelectedDestination(destination);
                                    closeAddDestinationModal();
                                }}
                            >
                                <Text style={commonListTile.tileText}>{destination}</Text>
                            </TouchableOpacity >
                        ))}

                        <TouchableOpacity onPress={closeAddDestinationModal} style={common.modalCloseButton}>
                            <Text style={common.modalCloseButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                visible={isAddDeparturenModalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={closeAddDestinationModal}
            >
                <View style={common.modalContainer}>
                    <View style={common.modalContent}>
                        {/* Pop-up content */}
                        <Text style={common.modalHeaderText}>Select Departure</Text>

                        {destinations.map((destination, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    // Handle destination selection
                                    setSelectedFrom(destination);
                                    closeAddDepartureModal();
                                }}
                            >
                                <Text>{destination}</Text>
                            </TouchableOpacity>
                        ))}

                        <TouchableOpacity onPress={closeAddDepartureModal} style={common.modalCloseButton}>
                            <Text style={common.modalCloseButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
};

export default FlightFilter;