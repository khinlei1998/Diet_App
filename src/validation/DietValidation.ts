import { DietFormValues } from '../types';
export const validate = (values: DietFormValues) => {
  const errors: { diet?: string } = {};
  if (!values.diet || values.diet.length === 0) {
    errors.diet = 'Please select at least one Diet data';
  }

  return errors;
};
