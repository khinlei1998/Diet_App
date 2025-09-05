import {
  SET_HEALTH_CONCERNS,
  SET_PRIORITIZE,
  SET_DIET,
  SET_ALLERGIES,
  SET_LIFESTYLE,
  NEXT_STEP,
  PREV_STEP,
  RESET_STEPS,
} from '../redux/action';

const initialState = {
  healthConcerns: [],
  prioritize: [],
  diet: [],
  allergies: [],
  lifestyle: [],
  currentStep: 1,
  totalSteps: 4,
};

const HealthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEALTH_CONCERNS:
      return { ...state, healthConcerns: action.payload };
    case SET_PRIORITIZE:
      return { ...state, prioritize: action.payload };
    case SET_DIET:
      return { ...state, diet: action.payload };
    case SET_LIFESTYLE:
      return { ...state, lifestyle: action.payload };
    case SET_ALLERGIES:
      return { ...state, allergies: action.payload };
    case NEXT_STEP:
      return {
        ...state,
        currentStep: Math.min(state.currentStep + 1, state.totalSteps),
      };
    case PREV_STEP:
      return { ...state, currentStep: Math.max(state.currentStep - 1, 1) };
    case RESET_STEPS:
      return { ...state, currentStep: 1 };
    default:
      return state;
  }
};

export default HealthReducer;
