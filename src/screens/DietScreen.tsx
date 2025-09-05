import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import diets from '../data/Diets.json';
import { useNavigation } from '@react-navigation/native';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { connect, useDispatch } from 'react-redux';
import CheckBoxComp from '../components/CheckBoxComp';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import ProgressBar from '../components/ProgressBar';
import { DietFormValues } from '../types';
import { validate } from '../validation/DietValidation';
import { setDiet } from '../redux/action';
type NavigationProps = StackNavigationProp<RootStackParamList, 'Allergy'>;

function DietScreen({ handleSubmit }: InjectedFormProps<DietFormValues>) {
  const dispatch = useDispatch();

  const [visibleToolTipId, setVisibleToolTipId] = useState<number | null>(null);

  const navigation = useNavigation<NavigationProps>();

  const onSubmit = (values: DietFormValues) => {
    console.log('Diet', values);
    dispatch({ type: 'NEXT_STEP' });
    dispatch(setDiet(values.diet));
    navigation.navigate('Allergy');
  };

  const handleTooltipPress = (id: number) => {
    setVisibleToolTipId(visibleToolTipId === id ? null : id);
  };
  const handleBack = () => {
    dispatch({ type: 'PREV_STEP' });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ProgressBar />
      <Text style={styles.dietText}>Select the diet You follow</Text>

      <Field
        name={'diet'}
        component={CheckBoxComp}
        diet={diets}
        handleTooltipPress={handleTooltipPress} // Pass function reference without calling it
        visibleToolTipId={visibleToolTipId}
        setVisibleToolTipId={setVisibleToolTipId}
      />

      <View style={styles.btnBack}>
        <TouchableOpacity
          style={styles.btnBackContainer}
          onPress={() => handleBack()}
        >
          <Text style={styles.textBack}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={styles.btnNext}
        >
          <Text style={styles.textNext}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const DietScreenWrap = reduxForm({
  form: 'DietForm',
  validate,
})(DietScreen);
export default connect(null, null)(DietScreenWrap);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3F3E6',
    flex: 1,
  },
  dietText: {
    marginTop: 30,
    color: '#4F6579',
    fontSize: 18,
    fontWeight: '700',
    padding: 10,
  },
  dietItem: {
    flexDirection: 'row',
    marginBottom: 20,
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
});
