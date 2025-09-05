import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import CheckBox from 'react-native-check-box';
import Tooltip from 'react-native-tooltip-2';
import Icon from 'react-native-vector-icons/AntDesign';
import { CheckBoxCompProps } from '../types';
import { Diet } from '../types';
export default function CheckBoxComp({
  input,
  handleTooltipPress,
  visibleToolTipId,
  setVisibleToolTipId,
  diet,
  meta: { touched, error },
}: CheckBoxCompProps) {
  return (
    <>
      {diet.data.map((item: Diet) => {
        const isChecked =
          Array.isArray(input.value) &&
          input.value.includes(item.id.toString());

        return (
          <View style={styles.container} key={item.id}>
            <View style={styles.subContainer}>
              <CheckBox
                onClick={() => {
                  const updatedValue = isChecked
                    ? input.value.filter(value => value !== item.id.toString())
                    : [...input.value, item.id.toString()];
                  input.onChange(updatedValue);
                }}
                isChecked={isChecked}
              />
              <Text style={styles.label}>{item.name}</Text>

              <TouchableOpacity
                style={styles.btnToggle}
                onPress={() => handleTooltipPress(item.id)}
              >
                <Icon name="questioncircle" size={24} color="blue" />
              </TouchableOpacity>
            </View>
            <View style={styles.tipContainer}>
              <Tooltip
                content={
                  <View style={styles.tipTopContainer}>
                    <Text style={styles.tipLabel}>{item.tool_tip}</Text>
                  </View>
                }
                isVisible={Number(visibleToolTipId) === item.id}
                onClose={() => setVisibleToolTipId(null)}
                backgroundColor="transparent"
              />
            </View>
          </View>
        );
      })}
      {touched && <Text style={styles.error}>{error}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  subContainer: {
    flexDirection: 'row',
  },
  label: {
    marginLeft: 20,
  },
  btnToggle: {
    marginLeft: 20,
  },
  tipTopContainer: {
    padding: 10,
    maxWidth: 200,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  tipLabel: {
    fontSize: 14,
    marginBottom: 10,
  },
  tipContainer: {
    flex: 1,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});
