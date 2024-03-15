import { RoleUsers } from './role.users.enum';

export class AuthResponse {
  id: number;
  email: string;
  accessToken: string;
  role?: RoleUsers;
}
