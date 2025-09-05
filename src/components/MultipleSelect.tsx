import { StyleSheet } from 'react-native';
import React from 'react';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { AllgeryItemProps } from '../types';
export default function MultipleSelect({
  data,
  label,
  setSelected,
}: AllgeryItemProps) {
  const handleSelect = (val: any) => {
    setSelected(val);
  };

  return (
    <MultipleSelectList
      setSelected={handleSelect}
      data={data}
      save="value"
      label={label}
      boxStyles={styles.boxContainer}
      dropdownStyles={styles.itemContainer}
    />
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  itemContainer: {
    marginHorizontal: 20,
  },
});
