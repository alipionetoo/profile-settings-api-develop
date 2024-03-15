export const RoleUsers = {
  User: 'user',
  Admin: 'admin',
} as const;

export type RoleUsers = (typeof RoleUsers)[keyof typeof RoleUsers];
