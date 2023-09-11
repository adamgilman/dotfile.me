import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ApiClient, APIInstance } from './http';
import { VerifyLoggedIn } from 'dto'

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

  async verifyLoggedIn(): Promise<VerifyLoggedIn> {
    const data = await this.api.post('/auth/verify');
    return data.data;
  }
}