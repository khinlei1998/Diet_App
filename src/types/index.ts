export type RootStackParamList = {
  Home: undefined;
  HealthConcerns: undefined;
  Lifestyle: undefined;
  Diet: undefined;
  Allergy: undefined;
};

export type CheckBoxCompProps = {
  input: {
    onChange: (value: boolean) => void;
    value: boolean;
  };
  label: string;
  handleTooltipPress: (id: number) => void;
  tooltip: string;
  visibleToolTipId: string | null;
  setVisibleToolTipId: React.Dispatch<React.SetStateAction<string | null>>;
  id: string;
  diet: { data: Diet[] };
  meta: { touched: boolean; error?: string };
};

type Concern = {
  id: number;
  name: string;
};

export type Diet = {
  id: number;
  name: number;
  tooltip: number;
};

export type RenderItemProps = {
  concern_data: { data: Concern[] };
  input: any;
  meta: { touched: boolean; error?: string };
};
export type HealthConcernsFormValues = {
  health_concern: string[];
};

export type DietFormValues = {
  diet: string[];
};

export type LifeStyleFormValues = {
  sunExposure: string;
  smoking: string;
  alcoholConsumption: string;
};
export type LifeStyleItemProps = {
  input: any;
  meta: { touched: boolean; error?: string };
  radioButtons: any;
};
type Lifestyle = {
  key: number;
  value: string;
};
export type AllgeryItemProps = {
  data: Lifestyle[];
  label: string;
  setSelected: (selected: string[]) => void;
};
