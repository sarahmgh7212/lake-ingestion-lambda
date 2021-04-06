/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSourceType = /* GraphQL */ `
  mutation CreateSourceType(
    $input: CreateSourceTypeInput!
    $condition: ModelSourceTypeConditionInput
  ) {
    createSourceType(input: $input, condition: $condition) {
      id
      name
      configSchema
      container
      taskARN
      createdAt
      updatedAt
    }
  }
`;
export const updateSourceType = /* GraphQL */ `
  mutation UpdateSourceType(
    $input: UpdateSourceTypeInput!
    $condition: ModelSourceTypeConditionInput
  ) {
    updateSourceType(input: $input, condition: $condition) {
      id
      name
      configSchema
      container
      taskARN
      createdAt
      updatedAt
    }
  }
`;
export const deleteSourceType = /* GraphQL */ `
  mutation DeleteSourceType(
    $input: DeleteSourceTypeInput!
    $condition: ModelSourceTypeConditionInput
  ) {
    deleteSourceType(input: $input, condition: $condition) {
      id
      name
      configSchema
      container
      taskARN
      createdAt
      updatedAt
    }
  }
`;
export const createSource = /* GraphQL */ `
  mutation CreateSource(
    $input: CreateSourceInput!
    $condition: ModelSourceConditionInput
  ) {
    createSource(input: $input, condition: $condition) {
      id
      name
      config
      sourceType {
        id
        name
        configSchema
        container
        taskARN
        createdAt
        updatedAt
      }
      team {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSource = /* GraphQL */ `
  mutation UpdateSource(
    $input: UpdateSourceInput!
    $condition: ModelSourceConditionInput
  ) {
    updateSource(input: $input, condition: $condition) {
      id
      name
      config
      sourceType {
        id
        name
        configSchema
        container
        taskARN
        createdAt
        updatedAt
      }
      team {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSource = /* GraphQL */ `
  mutation DeleteSource(
    $input: DeleteSourceInput!
    $condition: ModelSourceConditionInput
  ) {
    deleteSource(input: $input, condition: $condition) {
      id
      name
      config
      sourceType {
        id
        name
        configSchema
        container
        taskARN
        createdAt
        updatedAt
      }
      team {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createJob = /* GraphQL */ `
  mutation CreateJob(
    $input: CreateJobInput!
    $condition: ModelJobConditionInput
  ) {
    createJob(input: $input, condition: $condition) {
      id
      pipe {
        id
        name
        catalog
        schedule
        status
        jobId
        createdAt
        updatedAt
      }
      startedAt
      initCompletedAt
      completedAt
      failedAt
      logsARN
      createdAt
      updatedAt
    }
  }
`;
export const updateJob = /* GraphQL */ `
  mutation UpdateJob(
    $input: UpdateJobInput!
    $condition: ModelJobConditionInput
  ) {
    updateJob(input: $input, condition: $condition) {
      id
      pipe {
        id
        name
        catalog
        schedule
        status
        jobId
        createdAt
        updatedAt
      }
      startedAt
      initCompletedAt
      completedAt
      failedAt
      logsARN
      createdAt
      updatedAt
    }
  }
`;
export const deleteJob = /* GraphQL */ `
  mutation DeleteJob(
    $input: DeleteJobInput!
    $condition: ModelJobConditionInput
  ) {
    deleteJob(input: $input, condition: $condition) {
      id
      pipe {
        id
        name
        catalog
        schedule
        status
        jobId
        createdAt
        updatedAt
      }
      startedAt
      initCompletedAt
      completedAt
      failedAt
      logsARN
      createdAt
      updatedAt
    }
  }
`;
export const createPipe = /* GraphQL */ `
  mutation CreatePipe(
    $input: CreatePipeInput!
    $condition: ModelPipeConditionInput
  ) {
    createPipe(input: $input, condition: $condition) {
      id
      name
      catalog
      schedule
      status
      jobId
      job {
        id
        startedAt
        initCompletedAt
        completedAt
        failedAt
        logsARN
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePipe = /* GraphQL */ `
  mutation UpdatePipe(
    $input: UpdatePipeInput!
    $condition: ModelPipeConditionInput
  ) {
    updatePipe(input: $input, condition: $condition) {
      id
      name
      catalog
      schedule
      status
      jobId
      job {
        id
        startedAt
        initCompletedAt
        completedAt
        failedAt
        logsARN
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePipe = /* GraphQL */ `
  mutation DeletePipe(
    $input: DeletePipeInput!
    $condition: ModelPipeConditionInput
  ) {
    deletePipe(input: $input, condition: $condition) {
      id
      name
      catalog
      schedule
      status
      jobId
      job {
        id
        startedAt
        initCompletedAt
        completedAt
        failedAt
        logsARN
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      teams {
        nextToken
      }
      invites {
        nextToken
      }
      requestedInvites {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      teams {
        nextToken
      }
      invites {
        nextToken
      }
      requestedInvites {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      teams {
        nextToken
      }
      invites {
        nextToken
      }
      requestedInvites {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
      name
      users {
        nextToken
      }
      invites {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
      id
      name
      users {
        nextToken
      }
      invites {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
      id
      name
      users {
        nextToken
      }
      invites {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTeamUser = /* GraphQL */ `
  mutation CreateTeamUser(
    $input: CreateTeamUserInput!
    $condition: ModelTeamUserConditionInput
  ) {
    createTeamUser(input: $input, condition: $condition) {
      id
      teamId
      userId
      team {
        id
        name
        createdAt
        updatedAt
      }
      user {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTeamUser = /* GraphQL */ `
  mutation UpdateTeamUser(
    $input: UpdateTeamUserInput!
    $condition: ModelTeamUserConditionInput
  ) {
    updateTeamUser(input: $input, condition: $condition) {
      id
      teamId
      userId
      team {
        id
        name
        createdAt
        updatedAt
      }
      user {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTeamUser = /* GraphQL */ `
  mutation DeleteTeamUser(
    $input: DeleteTeamUserInput!
    $condition: ModelTeamUserConditionInput
  ) {
    deleteTeamUser(input: $input, condition: $condition) {
      id
      teamId
      userId
      team {
        id
        name
        createdAt
        updatedAt
      }
      user {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createInvite = /* GraphQL */ `
  mutation CreateInvite(
    $input: CreateInviteInput!
    $condition: ModelInviteConditionInput
  ) {
    createInvite(input: $input, condition: $condition) {
      id
      userId
      teamId
      email
      requestorId
      user {
        id
        name
        createdAt
        updatedAt
      }
      team {
        id
        name
        createdAt
        updatedAt
      }
      requestor {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateInvite = /* GraphQL */ `
  mutation UpdateInvite(
    $input: UpdateInviteInput!
    $condition: ModelInviteConditionInput
  ) {
    updateInvite(input: $input, condition: $condition) {
      id
      userId
      teamId
      email
      requestorId
      user {
        id
        name
        createdAt
        updatedAt
      }
      team {
        id
        name
        createdAt
        updatedAt
      }
      requestor {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteInvite = /* GraphQL */ `
  mutation DeleteInvite(
    $input: DeleteInviteInput!
    $condition: ModelInviteConditionInput
  ) {
    deleteInvite(input: $input, condition: $condition) {
      id
      userId
      teamId
      email
      requestorId
      user {
        id
        name
        createdAt
        updatedAt
      }
      team {
        id
        name
        createdAt
        updatedAt
      }
      requestor {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
