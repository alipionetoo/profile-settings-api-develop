import { AccessTokenRequest } from '../../infrastructure/axios/entities/access-token.request';

export function tokenToAccessTokenRequestUseCase(
  token: string,
): AccessTokenRequest {
  return {
    accessToken: token,
  };
}
