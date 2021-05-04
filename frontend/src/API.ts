/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSourceTypeInput = {
  id?: string | null,
  name: string,
  configSchema?: string | null,
  container?: string | null,
  taskARN?: string | null,
};

export type ModelSourceTypeConditionInput = {
  name?: ModelStringInput | null,
  configSchema?: ModelStringInput | null,
  container?: ModelStringInput | null,
  taskARN?: ModelStringInput | null,
  and?: Array< ModelSourceTypeConditionInput | null > | null,
  or?: Array< ModelSourceTypeConditionInput | null > | null,
  not?: ModelSourceTypeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type SourceType = {
  __typename: "SourceType",
  id?: string,
  name?: string,
  configSchema?: string | null,
  container?: string | null,
  taskARN?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateSourceTypeInput = {
  id: string,
  name?: string | null,
  configSchema?: string | null,
  container?: string | null,
  taskARN?: string | null,
};

export type DeleteSourceTypeInput = {
  id?: string | null,
};

export type CreateSourceInput = {
  id?: string | null,
  teamId: string,
  name: string,
  config?: string | null,
  sourceSourceTypeId?: string | null,
};

export type ModelSourceConditionInput = {
  teamId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  config?: ModelStringInput | null,
  and?: Array< ModelSourceConditionInput | null > | null,
  or?: Array< ModelSourceConditionInput | null > | null,
  not?: ModelSourceConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Source = {
  __typename: "Source",
  id?: string,
  teamId?: string,
  name?: string,
  config?: string | null,
  sourceType?: SourceType,
  team?: Team,
  createdAt?: string,
  updatedAt?: string,
};

export type Team = {
  __typename: "Team",
  id?: string,
  name?: string,
  sources?: ModelSourceConnection,
  users?: ModelTeamUserConnection,
  invites?: ModelInviteConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelSourceConnection = {
  __typename: "ModelSourceConnection",
  items?:  Array<Source | null > | null,
  nextToken?: string | null,
};

export type ModelTeamUserConnection = {
  __typename: "ModelTeamUserConnection",
  items?:  Array<TeamUser | null > | null,
  nextToken?: string | null,
};

export type TeamUser = {
  __typename: "TeamUser",
  id?: string,
  teamId?: string,
  userId?: string,
  role?: UserRole,
  team?: Team,
  user?: User,
  createdAt?: string,
  updatedAt?: string,
};

export enum UserRole {
  READER = "READER",
  MANAGER = "MANAGER",
  OWNER = "OWNER",
}


export type User = {
  __typename: "User",
  id?: string,
  name?: string,
  role?: UserRole,
  teams?: ModelTeamUserConnection,
  invites?: ModelInviteConnection,
  requestedInvites?: ModelInviteConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelInviteConnection = {
  __typename: "ModelInviteConnection",
  items?:  Array<Invite | null > | null,
  nextToken?: string | null,
};

export type Invite = {
  __typename: "Invite",
  id?: string,
  userId?: string | null,
  teamId?: string,
  email?: string,
  requestorId?: string,
  user?: User,
  team?: Team,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateSourceInput = {
  id: string,
  teamId?: string | null,
  name?: string | null,
  config?: string | null,
  sourceSourceTypeId?: string | null,
};

export type DeleteSourceInput = {
  id?: string | null,
};

export type CreateJobInput = {
  id?: string | null,
  pipeId: string,
  startedAt?: string | null,
  initAt?: string | null,
  completedAt?: string | null,
  failedAt?: string | null,
  logsARN?: string | null,
};

export type ModelJobConditionInput = {
  pipeId?: ModelIDInput | null,
  startedAt?: ModelStringInput | null,
  initAt?: ModelStringInput | null,
  completedAt?: ModelStringInput | null,
  failedAt?: ModelStringInput | null,
  logsARN?: ModelStringInput | null,
  and?: Array< ModelJobConditionInput | null > | null,
  or?: Array< ModelJobConditionInput | null > | null,
  not?: ModelJobConditionInput | null,
};

export type Job = {
  __typename: "Job",
  id?: string,
  pipeId?: string,
  startedAt?: string | null,
  initAt?: string | null,
  completedAt?: string | null,
  failedAt?: string | null,
  logsARN?: string | null,
  pipe?: Pipe,
  createdAt?: string,
  updatedAt?: string,
};

export type Pipe = {
  __typename: "Pipe",
  id?: string,
  name?: string | null,
  catalog?: string | null,
  schedule?: string | null,
  status?: PipeStatus | null,
  jobs?: ModelJobConnection,
  createdAt?: string,
  updatedAt?: string,
};

export enum PipeStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}


export type ModelJobConnection = {
  __typename: "ModelJobConnection",
  items?:  Array<Job | null > | null,
  nextToken?: string | null,
};

export type UpdateJobInput = {
  id: string,
  pipeId?: string | null,
  startedAt?: string | null,
  initAt?: string | null,
  completedAt?: string | null,
  failedAt?: string | null,
  logsARN?: string | null,
};

export type DeleteJobInput = {
  id?: string | null,
};

export type CreatePipeInput = {
  id?: string | null,
  name?: string | null,
  catalog?: string | null,
  schedule?: string | null,
  status?: PipeStatus | null,
};

export type ModelPipeConditionInput = {
  name?: ModelStringInput | null,
  catalog?: ModelStringInput | null,
  schedule?: ModelStringInput | null,
  status?: ModelPipeStatusInput | null,
  and?: Array< ModelPipeConditionInput | null > | null,
  or?: Array< ModelPipeConditionInput | null > | null,
  not?: ModelPipeConditionInput | null,
};

export type ModelPipeStatusInput = {
  eq?: PipeStatus | null,
  ne?: PipeStatus | null,
};

export type UpdatePipeInput = {
  id: string,
  name?: string | null,
  catalog?: string | null,
  schedule?: string | null,
  status?: PipeStatus | null,
};

export type DeletePipeInput = {
  id?: string | null,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  role: UserRole,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  role?: ModelUserRoleInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelUserRoleInput = {
  eq?: UserRole | null,
  ne?: UserRole | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  role?: UserRole | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateTeamInput = {
  id?: string | null,
  name: string,
};

export type ModelTeamConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTeamConditionInput | null > | null,
  or?: Array< ModelTeamConditionInput | null > | null,
  not?: ModelTeamConditionInput | null,
};

export type UpdateTeamInput = {
  id: string,
  name?: string | null,
};

export type DeleteTeamInput = {
  id?: string | null,
};

export type CreateTeamUserInput = {
  id?: string | null,
  teamId: string,
  userId: string,
  role: UserRole,
};

export type ModelTeamUserConditionInput = {
  teamId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  role?: ModelUserRoleInput | null,
  and?: Array< ModelTeamUserConditionInput | null > | null,
  or?: Array< ModelTeamUserConditionInput | null > | null,
  not?: ModelTeamUserConditionInput | null,
};

export type UpdateTeamUserInput = {
  id: string,
  teamId?: string | null,
  userId?: string | null,
  role?: UserRole | null,
};

export type DeleteTeamUserInput = {
  id?: string | null,
};

export type CreateInviteInput = {
  id?: string | null,
  userId?: string | null,
  teamId: string,
  email: string,
  requestorId: string,
};

export type ModelInviteConditionInput = {
  userId?: ModelIDInput | null,
  teamId?: ModelIDInput | null,
  email?: ModelStringInput | null,
  requestorId?: ModelIDInput | null,
  and?: Array< ModelInviteConditionInput | null > | null,
  or?: Array< ModelInviteConditionInput | null > | null,
  not?: ModelInviteConditionInput | null,
};

export type UpdateInviteInput = {
  id: string,
  userId?: string | null,
  teamId?: string | null,
  email?: string | null,
  requestorId?: string | null,
};

export type DeleteInviteInput = {
  id?: string | null,
};

export type ModelSourceTypeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  configSchema?: ModelStringInput | null,
  container?: ModelStringInput | null,
  taskARN?: ModelStringInput | null,
  and?: Array< ModelSourceTypeFilterInput | null > | null,
  or?: Array< ModelSourceTypeFilterInput | null > | null,
  not?: ModelSourceTypeFilterInput | null,
};

export type ModelSourceTypeConnection = {
  __typename: "ModelSourceTypeConnection",
  items?:  Array<SourceType | null > | null,
  nextToken?: string | null,
};

export type ModelSourceFilterInput = {
  id?: ModelIDInput | null,
  teamId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  config?: ModelStringInput | null,
  and?: Array< ModelSourceFilterInput | null > | null,
  or?: Array< ModelSourceFilterInput | null > | null,
  not?: ModelSourceFilterInput | null,
};

export type ModelJobFilterInput = {
  id?: ModelIDInput | null,
  pipeId?: ModelIDInput | null,
  startedAt?: ModelStringInput | null,
  initAt?: ModelStringInput | null,
  completedAt?: ModelStringInput | null,
  failedAt?: ModelStringInput | null,
  logsARN?: ModelStringInput | null,
  and?: Array< ModelJobFilterInput | null > | null,
  or?: Array< ModelJobFilterInput | null > | null,
  not?: ModelJobFilterInput | null,
};

export type ModelPipeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  catalog?: ModelStringInput | null,
  schedule?: ModelStringInput | null,
  status?: ModelPipeStatusInput | null,
  and?: Array< ModelPipeFilterInput | null > | null,
  or?: Array< ModelPipeFilterInput | null > | null,
  not?: ModelPipeFilterInput | null,
};

export type ModelPipeConnection = {
  __typename: "ModelPipeConnection",
  items?:  Array<Pipe | null > | null,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  role?: ModelUserRoleInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelTeamFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTeamFilterInput | null > | null,
  or?: Array< ModelTeamFilterInput | null > | null,
  not?: ModelTeamFilterInput | null,
};

export type ModelTeamConnection = {
  __typename: "ModelTeamConnection",
  items?:  Array<Team | null > | null,
  nextToken?: string | null,
};

export type ModelTeamUserFilterInput = {
  id?: ModelIDInput | null,
  teamId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  role?: ModelUserRoleInput | null,
  and?: Array< ModelTeamUserFilterInput | null > | null,
  or?: Array< ModelTeamUserFilterInput | null > | null,
  not?: ModelTeamUserFilterInput | null,
};

export type ModelInviteFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  teamId?: ModelIDInput | null,
  email?: ModelStringInput | null,
  requestorId?: ModelIDInput | null,
  and?: Array< ModelInviteFilterInput | null > | null,
  or?: Array< ModelInviteFilterInput | null > | null,
  not?: ModelInviteFilterInput | null,
};

export type CreateSourceTypeMutationVariables = {
  input?: CreateSourceTypeInput,
  condition?: ModelSourceTypeConditionInput | null,
};

export type CreateSourceTypeMutation = {
  createSourceType?:  {
    __typename: "SourceType",
    id: string,
    name: string,
    configSchema?: string | null,
    container?: string | null,
    taskARN?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSourceTypeMutationVariables = {
  input?: UpdateSourceTypeInput,
  condition?: ModelSourceTypeConditionInput | null,
};

export type UpdateSourceTypeMutation = {
  updateSourceType?:  {
    __typename: "SourceType",
    id: string,
    name: string,
    configSchema?: string | null,
    container?: string | null,
    taskARN?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSourceTypeMutationVariables = {
  input?: DeleteSourceTypeInput,
  condition?: ModelSourceTypeConditionInput | null,
};

export type DeleteSourceTypeMutation = {
  deleteSourceType?:  {
    __typename: "SourceType",
    id: string,
    name: string,
    configSchema?: string | null,
    container?: string | null,
    taskARN?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSourceMutationVariables = {
  input?: CreateSourceInput,
  condition?: ModelSourceConditionInput | null,
};

export type CreateSourceMutation = {
  createSource?:  {
    __typename: "Source",
    id: string,
    teamId: string,
    name: string,
    config?: string | null,
    sourceType?:  {
      __typename: "SourceType",
      id: string,
      name: string,
      configSchema?: string | null,
      container?: string | null,
      taskARN?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSourceMutationVariables = {
  input?: UpdateSourceInput,
  condition?: ModelSourceConditionInput | null,
};

export type UpdateSourceMutation = {
  updateSource?:  {
    __typename: "Source",
    id: string,
    teamId: string,
    name: string,
    config?: string | null,
    sourceType?:  {
      __typename: "SourceType",
      id: string,
      name: string,
      configSchema?: string | null,
      container?: string | null,
      taskARN?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSourceMutationVariables = {
  input?: DeleteSourceInput,
  condition?: ModelSourceConditionInput | null,
};

export type DeleteSourceMutation = {
  deleteSource?:  {
    __typename: "Source",
    id: string,
    teamId: string,
    name: string,
    config?: string | null,
    sourceType?:  {
      __typename: "SourceType",
      id: string,
      name: string,
      configSchema?: string | null,
      container?: string | null,
      taskARN?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateJobMutationVariables = {
  input?: CreateJobInput,
  condition?: ModelJobConditionInput | null,
};

export type CreateJobMutation = {
  createJob?:  {
    __typename: "Job",
    id: string,
    pipeId: string,
    startedAt?: string | null,
    initAt?: string | null,
    completedAt?: string | null,
    failedAt?: string | null,
    logsARN?: string | null,
    pipe:  {
      __typename: "Pipe",
      id: string,
      name?: string | null,
      catalog?: string | null,
      schedule?: string | null,
      status?: PipeStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateJobMutationVariables = {
  input?: UpdateJobInput,
  condition?: ModelJobConditionInput | null,
};

export type UpdateJobMutation = {
  updateJob?:  {
    __typename: "Job",
    id: string,
    pipeId: string,
    startedAt?: string | null,
    initAt?: string | null,
    completedAt?: string | null,
    failedAt?: string | null,
    logsARN?: string | null,
    pipe:  {
      __typename: "Pipe",
      id: string,
      name?: string | null,
      catalog?: string | null,
      schedule?: string | null,
      status?: PipeStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteJobMutationVariables = {
  input?: DeleteJobInput,
  condition?: ModelJobConditionInput | null,
};

export type DeleteJobMutation = {
  deleteJob?:  {
    __typename: "Job",
    id: string,
    pipeId: string,
    startedAt?: string | null,
    initAt?: string | null,
    completedAt?: string | null,
    failedAt?: string | null,
    logsARN?: string | null,
    pipe:  {
      __typename: "Pipe",
      id: string,
      name?: string | null,
      catalog?: string | null,
      schedule?: string | null,
      status?: PipeStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePipeMutationVariables = {
  input?: CreatePipeInput,
  condition?: ModelPipeConditionInput | null,
};

export type CreatePipeMutation = {
  createPipe?:  {
    __typename: "Pipe",
    id: string,
    name?: string | null,
    catalog?: string | null,
    schedule?: string | null,
    status?: PipeStatus | null,
    jobs?:  {
      __typename: "ModelJobConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePipeMutationVariables = {
  input?: UpdatePipeInput,
  condition?: ModelPipeConditionInput | null,
};

export type UpdatePipeMutation = {
  updatePipe?:  {
    __typename: "Pipe",
    id: string,
    name?: string | null,
    catalog?: string | null,
    schedule?: string | null,
    status?: PipeStatus | null,
    jobs?:  {
      __typename: "ModelJobConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePipeMutationVariables = {
  input?: DeletePipeInput,
  condition?: ModelPipeConditionInput | null,
};

export type DeletePipeMutation = {
  deletePipe?:  {
    __typename: "Pipe",
    id: string,
    name?: string | null,
    catalog?: string | null,
    schedule?: string | null,
    status?: PipeStatus | null,
    jobs?:  {
      __typename: "ModelJobConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    role: UserRole,
    teams?:  {
      __typename: "ModelTeamUserConnection",
      nextToken?: string | null,
    } | null,
    invites?:  {
      __typename: "ModelInviteConnection",
      nextToken?: string | null,
    } | null,
    requestedInvites?:  {
      __typename: "ModelInviteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    role: UserRole,
    teams?:  {
      __typename: "ModelTeamUserConnection",
      nextToken?: string | null,
    } | null,
    invites?:  {
      __typename: "ModelInviteConnection",
      nextToken?: string | null,
    } | null,
    requestedInvites?:  {
      __typename: "ModelInviteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    role: UserRole,
    teams?:  {
      __typename: "ModelTeamUserConnection",
      nextToken?: string | null,
    } | null,
    invites?:  {
      __typename: "ModelInviteConnection",
      nextToken?: string | null,
    } | null,
    requestedInvites?:  {
      __typename: "ModelInviteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTeamMutationVariables = {
  input?: CreateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type CreateTeamMutation = {
  createTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    sources?:  {
      __typename: "ModelSourceConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelTeamUserConnection",
      nextToken?: string | null,
    } | null,
    invites?:  {
      __typename: "ModelInviteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTeamMutationVariables = {
  input?: UpdateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type UpdateTeamMutation = {
  updateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    sources?:  {
      __typename: "ModelSourceConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelTeamUserConnection",
      nextToken?: string | null,
    } | null,
    invites?:  {
      __typename: "ModelInviteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTeamMutationVariables = {
  input?: DeleteTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type DeleteTeamMutation = {
  deleteTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    sources?:  {
      __typename: "ModelSourceConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelTeamUserConnection",
      nextToken?: string | null,
    } | null,
    invites?:  {
      __typename: "ModelInviteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTeamUserMutationVariables = {
  input?: CreateTeamUserInput,
  condition?: ModelTeamUserConditionInput | null,
};

export type CreateTeamUserMutation = {
  createTeamUser?:  {
    __typename: "TeamUser",
    id: string,
    teamId: string,
    userId: string,
    role: UserRole,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserRole,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTeamUserMutationVariables = {
  input?: UpdateTeamUserInput,
  condition?: ModelTeamUserConditionInput | null,
};

export type UpdateTeamUserMutation = {
  updateTeamUser?:  {
    __typename: "TeamUser",
    id: string,
    teamId: string,
    userId: string,
    role: UserRole,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserRole,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTeamUserMutationVariables = {
  input?: DeleteTeamUserInput,
  condition?: ModelTeamUserConditionInput | null,
};

export type DeleteTeamUserMutation = {
  deleteTeamUser?:  {
    __typename: "TeamUser",
    id: string,
    teamId: string,
    userId: string,
    role: UserRole,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserRole,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateInviteMutationVariables = {
  input?: CreateInviteInput,
  condition?: ModelInviteConditionInput | null,
};

export type CreateInviteMutation = {
  createInvite?:  {
    __typename: "Invite",
    id: string,
    userId?: string | null,
    teamId: string,
    email: string,
    requestorId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserRole,
      createdAt: string,
      updatedAt: string,
    } | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInviteMutationVariables = {
  input?: UpdateInviteInput,
  condition?: ModelInviteConditionInput | null,
};

export type UpdateInviteMutation = {
  updateInvite?:  {
    __typename: "Invite",
    id: string,
    userId?: string | null,
    teamId: string,
    email: string,
    requestorId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserRole,
      createdAt: string,
      updatedAt: string,
    } | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInviteMutationVariables = {
  input?: DeleteInviteInput,
  condition?: ModelInviteConditionInput | null,
};

export type DeleteInviteMutation = {
  deleteInvite?:  {
    __typename: "Invite",
    id: string,
    userId?: string | null,
    teamId: string,
    email: string,
    requestorId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserRole,
      createdAt: string,
      updatedAt: string,
    } | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSourceTypeQueryVariables = {
  id?: string,
};

export type GetSourceTypeQuery = {
  getSourceType?:  {
    __typename: "SourceType",
    id: string,
    name: string,
    configSchema?: string | null,
    container?: string | null,
    taskARN?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSourceTypesQueryVariables = {
  filter?: ModelSourceTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSourceTypesQuery = {
  listSourceTypes?:  {
    __typename: "ModelSourceTypeConnection",
    items?:  Array< {
      __typename: "SourceType",
      id: string,
      name: string,
      configSchema?: string | null,
      container?: string | null,
      taskARN?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSourceQueryVariables = {
  id?: string,
};

export type GetSourceQuery = {
  getSource?:  {
    __typename: "Source",
    id: string,
    teamId: string,
    name: string,
    config?: string | null,
    sourceType?:  {
      __typename: "SourceType",
      id: string,
      name: string,
      configSchema?: string | null,
      container?: string | null,
      taskARN?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSourcesQueryVariables = {
  filter?: ModelSourceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSourcesQuery = {
  listSources?:  {
    __typename: "ModelSourceConnection",
    items?:  Array< {
      __typename: "Source",
      id: string,
      teamId: string,
      name: string,
      config?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetJobQueryVariables = {
  id?: string,
};

export type GetJobQuery = {
  getJob?:  {
    __typename: "Job",
    id: string,
    pipeId: string,
    startedAt?: string | null,
    initAt?: string | null,
    completedAt?: string | null,
    failedAt?: string | null,
    logsARN?: string | null,
    pipe:  {
      __typename: "Pipe",
      id: string,
      name?: string | null,
      catalog?: string | null,
      schedule?: string | null,
      status?: PipeStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListJobsQueryVariables = {
  filter?: ModelJobFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListJobsQuery = {
  listJobs?:  {
    __typename: "ModelJobConnection",
    items?:  Array< {
      __typename: "Job",
      id: string,
      pipeId: string,
      startedAt?: string | null,
      initAt?: string | null,
      completedAt?: string | null,
      failedAt?: string | null,
      logsARN?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPipeQueryVariables = {
  id?: string,
};

export type GetPipeQuery = {
  getPipe?:  {
    __typename: "Pipe",
    id: string,
    name?: string | null,
    catalog?: string | null,
    schedule?: string | null,
    status?: PipeStatus | null,
    jobs?:  {
      __typename: "ModelJobConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPipesQueryVariables = {
  filter?: ModelPipeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPipesQuery = {
  listPipes?:  {
    __typename: "ModelPipeConnection",
    items?:  Array< {
      __typename: "Pipe",
      id: string,
      name?: string | null,
      catalog?: string | null,
      schedule?: string | null,
      status?: PipeStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    role: UserRole,
    teams?:  {
      __typename: "ModelTeamUserConnection",
      nextToken?: string | null,
    } | null,
    invites?:  {
      __typename: "ModelInviteConnection",
      nextToken?: string | null,
    } | null,
    requestedInvites?:  {
      __typename: "ModelInviteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      role: UserRole,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTeamQueryVariables = {
  id?: string,
};

export type GetTeamQuery = {
  getTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    sources?:  {
      __typename: "ModelSourceConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelTeamUserConnection",
      nextToken?: string | null,
    } | null,
    invites?:  {
      __typename: "ModelInviteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTeamsQueryVariables = {
  filter?: ModelTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamsQuery = {
  listTeams?:  {
    __typename: "ModelTeamConnection",
    items?:  Array< {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTeamUserQueryVariables = {
  id?: string,
};

export type GetTeamUserQuery = {
  getTeamUser?:  {
    __typename: "TeamUser",
    id: string,
    teamId: string,
    userId: string,
    role: UserRole,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserRole,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTeamUsersQueryVariables = {
  filter?: ModelTeamUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamUsersQuery = {
  listTeamUsers?:  {
    __typename: "ModelTeamUserConnection",
    items?:  Array< {
      __typename: "TeamUser",
      id: string,
      teamId: string,
      userId: string,
      role: UserRole,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetInviteQueryVariables = {
  id?: string,
};

export type GetInviteQuery = {
  getInvite?:  {
    __typename: "Invite",
    id: string,
    userId?: string | null,
    teamId: string,
    email: string,
    requestorId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserRole,
      createdAt: string,
      updatedAt: string,
    } | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInvitesQueryVariables = {
  filter?: ModelInviteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInvitesQuery = {
  listInvites?:  {
    __typename: "ModelInviteConnection",
    items?:  Array< {
      __typename: "Invite",
      id: string,
      userId?: string | null,
      teamId: string,
      email: string,
      requestorId: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSourceTypeSubscription = {
  onCreateSourceType?:  {
    __typename: "SourceType",
    id: string,
    name: string,
    configSchema?: string | null,
    container?: string | null,
    taskARN?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSourceTypeSubscription = {
  onUpdateSourceType?:  {
    __typename: "SourceType",
    id: string,
    name: string,
    configSchema?: string | null,
    container?: string | null,
    taskARN?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSourceTypeSubscription = {
  onDeleteSourceType?:  {
    __typename: "SourceType",
    id: string,
    name: string,
    configSchema?: string | null,
    container?: string | null,
    taskARN?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSourceSubscription = {
  onCreateSource?:  {
    __typename: "Source",
    id: string,
    teamId: string,
    name: string,
    config?: string | null,
    sourceType?:  {
      __typename: "SourceType",
      id: string,
      name: string,
      configSchema?: string | null,
      container?: string | null,
      taskARN?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSourceSubscription = {
  onUpdateSource?:  {
    __typename: "Source",
    id: string,
    teamId: string,
    name: string,
    config?: string | null,
    sourceType?:  {
      __typename: "SourceType",
      id: string,
      name: string,
      configSchema?: string | null,
      container?: string | null,
      taskARN?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSourceSubscription = {
  onDeleteSource?:  {
    __typename: "Source",
    id: string,
    teamId: string,
    name: string,
    config?: string | null,
    sourceType?:  {
      __typename: "SourceType",
      id: string,
      name: string,
      configSchema?: string | null,
      container?: string | null,
      taskARN?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateJobSubscription = {
  onCreateJob?:  {
    __typename: "Job",
    id: string,
    pipeId: string,
    startedAt?: string | null,
    initAt?: string | null,
    completedAt?: string | null,
    failedAt?: string | null,
    logsARN?: string | null,
    pipe:  {
      __typename: "Pipe",
      id: string,
      name?: string | null,
      catalog?: string | null,
      schedule?: string | null,
      status?: PipeStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateJobSubscription = {
  onUpdateJob?:  {
    __typename: "Job",
    id: string,
    pipeId: string,
    startedAt?: string | null,
    initAt?: string | null,
    completedAt?: string | null,
    failedAt?: string | null,
    logsARN?: string | null,
    pipe:  {
      __typename: "Pipe",
      id: string,
      name?: string | null,
      catalog?: string | null,
      schedule?: string | null,
      status?: PipeStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteJobSubscription = {
  onDeleteJob?:  {
    __typename: "Job",
    id: string,
    pipeId: string,
    startedAt?: string | null,
    initAt?: string | null,
    completedAt?: string | null,
    failedAt?: string | null,
    logsARN?: string | null,
    pipe:  {
      __typename: "Pipe",
      id: string,
      name?: string | null,
      catalog?: string | null,
      schedule?: string | null,
      status?: PipeStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePipeSubscription = {
  onCreatePipe?:  {
    __typename: "Pipe",
    id: string,
    name?: string | null,
    catalog?: string | null,
    schedule?: string | null,
    status?: PipeStatus | null,
    jobs?:  {
      __typename: "ModelJobConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePipeSubscription = {
  onUpdatePipe?:  {
    __typename: "Pipe",
    id: string,
    name?: string | null,
    catalog?: string | null,
    schedule?: string | null,
    status?: PipeStatus | null,
    jobs?:  {
      __typename: "ModelJobConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePipeSubscription = {
  onDeletePipe?:  {
    __typename: "Pipe",
    id: string,
    name?: string | null,
    catalog?: string | null,
    schedule?: string | null,
    status?: PipeStatus | null,
    jobs?:  {
      __typename: "ModelJobConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    role: UserRole,
    teams?:  {
      __typename: "ModelTeamUserConnection",
      nextToken?: string | null,
    } | null,
    invites?:  {
      __typename: "ModelInviteConnection",
      nextToken?: string | null,
    } | null,
    requestedInvites?:  {
      __typename: "ModelInviteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    role: UserRole,
    teams?:  {
      __typename: "ModelTeamUserConnection",
      nextToken?: string | null,
    } | null,
    invites?:  {
      __typename: "ModelInviteConnection",
      nextToken?: string | null,
    } | null,
    requestedInvites?:  {
      __typename: "ModelInviteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    role: UserRole,
    teams?:  {
      __typename: "ModelTeamUserConnection",
      nextToken?: string | null,
    } | null,
    invites?:  {
      __typename: "ModelInviteConnection",
      nextToken?: string | null,
    } | null,
    requestedInvites?:  {
      __typename: "ModelInviteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTeamSubscription = {
  onCreateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    sources?:  {
      __typename: "ModelSourceConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelTeamUserConnection",
      nextToken?: string | null,
    } | null,
    invites?:  {
      __typename: "ModelInviteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTeamSubscription = {
  onUpdateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    sources?:  {
      __typename: "ModelSourceConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelTeamUserConnection",
      nextToken?: string | null,
    } | null,
    invites?:  {
      __typename: "ModelInviteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTeamSubscription = {
  onDeleteTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    sources?:  {
      __typename: "ModelSourceConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelTeamUserConnection",
      nextToken?: string | null,
    } | null,
    invites?:  {
      __typename: "ModelInviteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTeamUserSubscription = {
  onCreateTeamUser?:  {
    __typename: "TeamUser",
    id: string,
    teamId: string,
    userId: string,
    role: UserRole,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserRole,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTeamUserSubscription = {
  onUpdateTeamUser?:  {
    __typename: "TeamUser",
    id: string,
    teamId: string,
    userId: string,
    role: UserRole,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserRole,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTeamUserSubscription = {
  onDeleteTeamUser?:  {
    __typename: "TeamUser",
    id: string,
    teamId: string,
    userId: string,
    role: UserRole,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserRole,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateInviteSubscription = {
  onCreateInvite?:  {
    __typename: "Invite",
    id: string,
    userId?: string | null,
    teamId: string,
    email: string,
    requestorId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserRole,
      createdAt: string,
      updatedAt: string,
    } | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInviteSubscription = {
  onUpdateInvite?:  {
    __typename: "Invite",
    id: string,
    userId?: string | null,
    teamId: string,
    email: string,
    requestorId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserRole,
      createdAt: string,
      updatedAt: string,
    } | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInviteSubscription = {
  onDeleteInvite?:  {
    __typename: "Invite",
    id: string,
    userId?: string | null,
    teamId: string,
    email: string,
    requestorId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserRole,
      createdAt: string,
      updatedAt: string,
    } | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
