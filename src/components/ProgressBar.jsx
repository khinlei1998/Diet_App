import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';

export const ProgressBar = () => {
  const currentStep = useSelector(state => state.health.currentStep);
  const totalSteps = useSelector(state => state.health.totalSteps);

  const progress = currentStep / totalSteps;

  return (
    <View style={styles.wrapper}>
      <View style={styles.barBackground}>
        <View style={[styles.barFill, { flex: progress }]} />
        <View style={{ flex: 1 - progress }} />
      </View>
      <Text style={styles.label}>{`${currentStep} / ${totalSteps}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { marginVertical: 20, alignItems: 'center' },
  barBackground: {
    flexDirection: 'row',
    height: 8,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  barFill: {
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  label: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
});

export default ProgressBar;
