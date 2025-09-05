import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import allergies from '../data/allergies.json';
import { useDispatch } from 'react-redux';
import MultipleSelect from '../components/MultipleSelect';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from '../components/ProgressBar';
import { setAllergies } from '../redux/action';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type NavigationProps = StackNavigationProp<RootStackParamList, 'Lifestyle'>;

function AllergyScreen() {
  const dispatch = useDispatch();

  const transformedData = allergies.data.map(item => ({
    key: item.id,
    value: item.name,
  }));
  console.log('transformedData', transformedData);
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState('');
  const navigation = useNavigation<NavigationProps>();

  const handleBack = () => {
    dispatch({ type: 'PREV_STEP' });
    navigation.goBack();
  };

  const handleNext = () => {
    console.log('Allergy', selected);
    if (selected.length === 0) {
      setError('Please choose at least one allergy');
      return;
    }
    setError('');
    dispatch({ type: 'NEXT_STEP' });
    dispatch(setAllergies(selected));
    navigation.navigate('Lifestyle');
  };

  return (
    <View style={styles.container}>
      <ProgressBar />
      <Text style={styles.label}>
        Write any specific allerigies or sensitivity towards specific things
        (optional)
      </Text>

      <MultipleSelect
        data={transformedData}
        setSelected={setSelected}
        label="Categories"
      />

      {error && <Text style={styles.error}>{error}</Text>}

      <View style={styles.btnBack}>
        <TouchableOpacity
          style={styles.btnBackContainer}
          onPress={() => handleBack()}
        >
          <Text style={styles.textBack}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNext()} style={styles.btnNext}>
          <Text style={styles.textNext}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AllergyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3F3E6',
  },
  label: {
    marginTop: 30,
    color: '#4F6579',
    fontSize: 18,
    fontWeight: '700',
    padding: 20,
  },
  btnBack: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btnNext: {
    backgroundColor: '#FF614E',
    width: '45%',
    padding: 15,
    borderRadius: 10,
  },
  btnBackContainer: {
    width: '40%',
    padding: 15,
  },
  textBack: {
    textAlign: 'center',
  },
  textNext: {
    textAlign: 'center',
    color: '#fff',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});
