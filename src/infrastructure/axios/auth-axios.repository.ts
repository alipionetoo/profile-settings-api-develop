import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { AuthResponse } from './entities/auth.response';
import { AccessTokenRequest } from './entities/access-token.request';

@Injectable()
export class AuthAxiosRepository {
  constructor(private readonly httpService: HttpService) {}

  URL_BASE = 'http://localhost:3001/';
  AUTH_URL = 'auth/user/';
  REFRESH_TOKEN = 'valid-token';

  async validToken(
    accessTokenRequest: AccessTokenRequest,
  ): Promise<AxiosResponse<AuthResponse>> {
    return this.httpService.axiosRef.post(
      this.URL_BASE + this.AUTH_URL + this.REFRESH_TOKEN,
      accessTokenRequest,
    );
  }
}
