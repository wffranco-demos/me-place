export type PlanType = 'hourly' | 'monthly' | 'annual' | 'custom';

export interface Plan {
  name: string;
  type: PlanType;
  price: {
    current?: number;
    previous?: number;
  };
  currency: string;
  description: string;
  features: string[];
  popular: boolean;
  draft: boolean;
  publishDate: Date;
  expirationDate?: Date;
  button: {
    text: string;
    link: string;
  };
  order?: number;
}

export type PlanGroups = {
  [key in PlanType]?: Plan[];
}
