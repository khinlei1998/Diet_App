import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from '../components/ProgressBar';
import concern from '../data/Healthconcern.json';
import { setHealthConcerns } from '../redux/action';
import { validate } from '../validation/HealthConcernValidation';
import { RenderItemProps, RootStackParamList } from '../types';
import { HealthConcernsFormValues } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProps = StackNavigationProp<RootStackParamList, 'Home'>;

function HealthConcernsScreen({
  handleSubmit,
}: InjectedFormProps<HealthConcernsFormValues>) {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProps>();

  const handleSelectConcern = (label: string, input: any) => {
    const updatedConcerns = input.value.includes(label)
      ? input.value.filter((item: string) => item !== label)
      : [...input.value, label].slice(0, 5);

    input.onChange(updatedConcerns);
  };

  const renderItem = ({
    concern_data,
    input,
    meta: { touched, error },
  }: RenderItemProps) => {
    return (
      <>
        {concern_data.data.map(item => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.item,
              {
                backgroundColor: input.value.includes(item.name)
                  ? '#2F425D'
                  : '#D3F3E6',
              },
            ]}
            onPress={() => handleSelectConcern(item.name, input)}
          >
            <Text
              style={{
                color: input.value.includes(item.name) ? '#FFF' : '#000',
                textAlign: 'center',
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}

        {touched && (
          <Text style={{ color: 'red', fontSize: 12, marginTop: 5 }}>
            {error}
          </Text>
        )}
      </>
    );
  };

  const onSubmit = (values: HealthConcernsFormValues) => {
    console.log('Health Value', values);
    dispatch({ type: 'NEXT_STEP' });
    dispatch(setHealthConcerns(values.health_concern));
    navigation.navigate('Diet');
  };

  const handleBack = () => {
    dispatch({ type: 'PREV_STEP' });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ProgressBar />
      <Text style={styles.healthConcern}>
        Select the top health concerns (up to 5)
      </Text>
      <View style={styles.concernItem}>
        <Field
          name={'health_concern'}
          component={renderItem}
          concern_data={concern}
        />
      </View>

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

const HealthConcernForm = reduxForm({
  form: 'concernForm',
  validate,
})(HealthConcernsScreen);

export default HealthConcernForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#D3F3E6',
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
  healthConcern: {
    fontWeight: '700',
    marginBottom: 10,
  },
  concernItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
  },
});
