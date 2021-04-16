import { Team } from "@/models";
import { Subscription } from "zen-observable-ts";
import { namespacedTypes } from "@/libs/store";

export const NAMESPACE = "teams";

export type TeamMap = { [key: string]: Team };

export interface TeamsBaseState {
  teams: TeamMap;
  subscription: Subscription | null;
}

export enum MutationTypes {
  SET_SOURCES = "SET_SOURCES",
  SET_SUBSCRIPTION = "SET_SUBSCRIPTION",
  UPSERT_SOURCE = "UPSER_SOURCE",
  DELETE_SOURCE = "DELETE_SOURCE",
}

export const NamespacedMutationTypes = namespacedTypes(
  NAMESPACE,
  MutationTypes
);

export enum ActionTypes {
  INIT_LIST = "INIT_LIST",
  SUBSCRIBE = "SUBSCRIBE",
  UNSUBSCRIBE = "UNSUBSCRIBE",

  CREATE = "CREATE",
  UPDATE = "UPDATE",
  DELETE = "DELETE",

  CLEAR = "CLEAR",
}

export const NamespacedActionTypes = namespacedTypes(NAMESPACE, ActionTypes);
