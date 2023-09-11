import { ApiClient, APIInstance } from './http';

export class AuthService {
  private api: APIInstance;
  private token: string | null = null;

  constructor(api: APIInstance = ApiClient) {
    this.api = api;
    this.loadToken();
  }

  private loadToken() {
    this.token = localStorage.getItem('DFMJWTtoken');
    this.api.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
  }

  verifyLoggedIn() {
    return this.api.post('/auth/verify');
  }
}