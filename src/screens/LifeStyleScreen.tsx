import { View, Text, StyleSheet } from 'react-native';
import React, { useMemo } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { connect, useDispatch, useSelector } from 'react-redux';
import RadioButton from '../components/RadioButton';
import { setLifeStyle } from '../redux/action';
import ProgressBar from '../components/ProgressBar';
import { validate } from '../validation/LifeStyleValidation';
import { LifeStyleFormValues } from '../types';

function LifeStyleScreen({
  handleSubmit,
}: InjectedFormProps<LifeStyleFormValues>) {
  const dispatch = useDispatch();

  const diets = useSelector(state => state.health.diet);
  const allergy = useSelector(state => state.health.allergies);
  const healthConcerns = useSelector(state => state.health.healthConcerns);

  console.log(
    'Diets Data ',
    diets,
    'allergy Data ',
    allergy,
    'healthconcen Data',
    healthConcerns,
  );

  const radioButtons1 = useMemo(
    () => [
      { id: '1', label: 'Yes', value: 'yes' },
      { id: '2', label: 'No', value: 'no' },
    ],
    [],
  );

  const radioButtons2 = useMemo(
    () => [
      { id: '1', label: 'Yes', value: 'yes' },
      { id: '2', label: 'No', value: 'no' },
    ],
    [],
  );

  const radioButtons3 = useMemo(
    () => [
      { id: '1', label: '0 - 1', value: '0-1' },
      { id: '2', label: '2 - 5', value: '2-5' },
      { id: '3', label: '5+', value: '5+' },
    ],
    [],
  );

  const onSubmit = (formData: LifeStyleFormValues) => {
    console.log('lifestyle Data', formData);
    dispatch(setLifeStyle(formData));
  };

  return (
    <View style={styles.container}>
      <ProgressBar />
      {/* Question 1 */}
      <Text style={styles.question}>
        Is your daily exposure to sun limited? *
      </Text>
      <Field
        name="sunExposure"
        component={RadioButton}
        radioButtons={radioButtons1}
      />

      {/* Question 2 */}
      <Text style={styles.question}>
        Do you currently smoke (tobacco or marijuana)? *
      </Text>
      <Field
        name="smoking"
        component={RadioButton}
        radioButtons={radioButtons2}
      />

      {/* Question 3 */}
      <Text style={styles.question}>
        On average, how many alcoholic beverages do you have in a week? *
      </Text>
      <Field
        name="alcoholConsumption"
        component={RadioButton}
        radioButtons={radioButtons3}
      />
      <Text style={styles.button} onPress={handleSubmit(onSubmit)}>
        Get my personalized vitamin
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3F3E6',
    flex: 1,
    padding: 10,
  },

  question: {
    fontSize: 18,
    marginTop: 20,
    color: '#4F6579',
    fontWeight: '700',
  },
  button: {
    fontSize: 18,
    marginTop: 20,
    color: '#fff',
    backgroundColor: '#FF614E',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    fontWeight: '500',
    position: 'absolute',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
  },
});

const LiseStyleScreenWrap = reduxForm({
  form: 'LifeStyleForm',
  validate,
})(LifeStyleScreen);
export default connect(null, null)(LiseStyleScreenWrap);
