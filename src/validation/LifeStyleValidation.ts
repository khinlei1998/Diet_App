import { LifeStyleFormValues } from '../types';
export const validate = (values: LifeStyleFormValues) => {
  const errors: {
    sunExposure?: string;
    smoking?: string;
    alcoholConsumption?: string;
  } = {};
  if (!values.sunExposure) {
    errors.sunExposure = 'Please answer this question.';
  }
  if (!values.smoking) {
    errors.smoking = 'Please answer this question.';
  }
  if (!values.alcoholConsumption) {
    errors.alcoholConsumption = 'Please answer this question.';
  }

  return errors;
};
