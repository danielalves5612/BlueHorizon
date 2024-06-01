import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Login: undefined;
  Porto: undefined;
};

type PortoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Porto'>;
type PortoScreenRouteProp = RouteProp<RootStackParamList, 'Porto'>;

type Props = {
  navigation: PortoScreenNavigationProp;
  route: PortoScreenRouteProp;
};

const PortoScreen: React.FC<Props> = ({ navigation, route }) => {
  const [selectedPort, setSelectedPort] = useState<string>('Santos');
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState<boolean>(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Escolha o porto:</Text>
      <Picker
        selectedValue={selectedPort}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedPort(itemValue)}
      >
        <Picker.Item label="Porto de Santos" value="Santos" />
        <Picker.Item label="Porto de Rio de Janeiro" value="Rio de Janeiro" />
        <Picker.Item label="Porto de Manaus" value="Manaus" />
        <Picker.Item label="Porto de Itapoá" value="Itapoá" />
        <Picker.Item label="Porto de Navegantes" value="Navegantes" />
      </Picker>

      <Text style={styles.label}>Escolha a data:</Text>
      <View>
        <TouchableOpacity onPress={() => setShow(true)} style={styles.dateButton}>
          <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}
      </View>

      <Text style={styles.label}>Nível de pH:</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { backgroundColor: 'red', width: '33%' }]} />
        <View style={[styles.progress, { backgroundColor: 'yellow', width: '33%' }]} />
        <View style={[styles.progress, { backgroundColor: 'green', width: '34%' }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0066CC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: 250,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  dateButton: {
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dateText: {
    color: '#000',
  },
  progressBar: {
    flexDirection: 'row',
    height: 20,
    width: '100%',
    backgroundColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
  },
});

export default PortoScreen;
