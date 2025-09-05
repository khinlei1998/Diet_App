import React from 'react';
import { StyleSheet, Text } from 'react-native';
import RadioButtonsGroup from 'react-native-radio-buttons-group';
import { LifeStyleItemProps } from '../types';

export default function RadioButton({
  input,
  radioButtons,
  meta: { touched, error },
}: LifeStyleItemProps) {
  const handleRadioButtonPress = (selectedButton: string) => {
    input.onChange(selectedButton);
  };
  return (
    <>
      <RadioButtonsGroup
        radioButtons={radioButtons}
        onPress={handleRadioButtonPress}
        selectedId={input.value}
        containerStyle={styles.container}
      />
      {touched && <Text style={styles.error}>{error}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});
