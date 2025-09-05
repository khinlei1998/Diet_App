import { HealthConcernsFormValues } from '../types';
export const validate = (values: HealthConcernsFormValues) => {
  const errors: { health_concern?: string } = {};
  if (!values.health_concern || values.health_concern.length === 0) {
    errors.health_concern = 'Please select at least one health concern';
  }

  return errors;
};
