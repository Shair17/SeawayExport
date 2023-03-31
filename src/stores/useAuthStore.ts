import {create} from 'zustand';
import {combine} from 'zustand/middleware';
import {storage} from '../services/storage';

const STORE_TOKEN_KEY = '@SeawayExport/accessToken';

export type AuthType = {
  token: string | null;
  status: 'loading' | 'unauthenticated' | 'authenticated';
};

const getDefaultValues = (): AuthType => {
  return {
    token: null,
    status: 'loading',
  };
};

export const useAuthStore = create(
  combine(getDefaultValues(), (set, get) => ({
    loadToken: () => {
      const token = storage.getString(STORE_TOKEN_KEY);

      if (!token) {
        set({
          token: null,
          status: 'unauthenticated',
        });
      } else {
        set({
          token,
          status: 'authenticated',
        });
      }
    },
    setToken: (token: AuthType['token']) => {
      if (!token) return;

      storage.set(STORE_TOKEN_KEY, token);

      set({token, status: 'authenticated'});
    },
    removeToken: async () => {
      storage.delete(STORE_TOKEN_KEY);

      set({
        token: null,
        status: 'unauthenticated',
      });
    },
  })),
);
