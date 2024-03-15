export const CustomEnum = {
  FIRST_VALUE: 'FIRST_VALUE',
  SECOND_VALUE: 'SECOND_VALUE',
} as const;

export type CustomEnum = (typeof CustomEnum)[keyof typeof CustomEnum];
