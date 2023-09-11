import { setLoggedIn } from '../../redux/auth/authSlice';

interface ITokenParams {
  token: string;
  email: string;
}

export const setTokenAndState = (params: ITokenParams) => {
  localStorage.setItem('DFMJWTtoken', params.token);
  return setLoggedIn({
    email: params.email,
    loggedIn: true,
  });
}