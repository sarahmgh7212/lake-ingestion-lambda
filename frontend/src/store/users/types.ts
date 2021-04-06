import { User } from '@/models';
import { namespacedTypes } from '@/libs/store';
import { Subscription } from 'zen-observable-ts';
export const NAMESPACE = 'users';
export type UserMap = { [key: string]: User };

export interface UsersBaseState {
  users: UserMap;
  subscription: Subscription | null;
}

export enum MutationTypes {
  SET_USERS = 'SET_USERS',
  SET_SUBSCRIPTION = 'SET_SUBSCRIPTION',
  UPSERT_USER = 'UPSER_USER',
  DELETE_USER = 'DELETE_USER',
}

export enum ActionTypes {
  INIT_LIST = 'INIT_LIST',
  SUBSCRIBE = 'SUBSCRIBE',
  UNSUBSCRIBE = 'UNSUBSCRIBE',

  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',

  CLEAR = 'CLEAR',
}
