export const SET_HEALTH_CONCERNS = 'SET_HEALTH_CONCERNS';
export const SET_PRIORITIZE = 'SET_PRIORITIZE';
export const SET_DIET = 'SET_DIET';
export const SET_ALLERGIES = 'SET_ALLERGIES';
export const SET_LIFESTYLE = 'SET_LIFESTYLE';
export const NEXT_STEP = 'NEXT_STEP';
export const PREV_STEP = 'PREV_STEP';
export const RESET_STEPS = 'RESET_STEPS';

export const setHealthConcerns = concerns => ({
  type: SET_HEALTH_CONCERNS,
  payload: concerns,
});

export const setPrioritize = prioritize => ({
  type: SET_PRIORITIZE,
  payload: prioritize,
});

export const setDiet = diet => ({
  type: SET_DIET,
  payload: diet,
});
export const setLifeStyle = lifestyle => ({
  type: SET_LIFESTYLE,
  payload: lifestyle,
});

export const setAllergies = allergies => ({
  type: SET_ALLERGIES,
  payload: allergies,
});
