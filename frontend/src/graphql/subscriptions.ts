/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSourceType = /* GraphQL */ `
  subscription OnCreateSourceType {
    onCreateSourceType {
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
export const onUpdateSourceType = /* GraphQL */ `
  subscription OnUpdateSourceType {
    onUpdateSourceType {
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
export const onDeleteSourceType = /* GraphQL */ `
  subscription OnDeleteSourceType {
    onDeleteSourceType {
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
export const onCreateSource = /* GraphQL */ `
  subscription OnCreateSource {
    onCreateSource {
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
export const onUpdateSource = /* GraphQL */ `
  subscription OnUpdateSource {
    onUpdateSource {
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
export const onDeleteSource = /* GraphQL */ `
  subscription OnDeleteSource {
    onDeleteSource {
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
export const onCreateJob = /* GraphQL */ `
  subscription OnCreateJob {
    onCreateJob {
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
export const onUpdateJob = /* GraphQL */ `
  subscription OnUpdateJob {
    onUpdateJob {
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
export const onDeleteJob = /* GraphQL */ `
  subscription OnDeleteJob {
    onDeleteJob {
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
export const onCreatePipe = /* GraphQL */ `
  subscription OnCreatePipe {
    onCreatePipe {
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
export const onUpdatePipe = /* GraphQL */ `
  subscription OnUpdatePipe {
    onUpdatePipe {
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
export const onDeletePipe = /* GraphQL */ `
  subscription OnDeletePipe {
    onDeletePipe {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
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
export const onCreateTeamUser = /* GraphQL */ `
  subscription OnCreateTeamUser {
    onCreateTeamUser {
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
export const onUpdateTeamUser = /* GraphQL */ `
  subscription OnUpdateTeamUser {
    onUpdateTeamUser {
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
export const onDeleteTeamUser = /* GraphQL */ `
  subscription OnDeleteTeamUser {
    onDeleteTeamUser {
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
export const onCreateInvite = /* GraphQL */ `
  subscription OnCreateInvite {
    onCreateInvite {
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
export const onUpdateInvite = /* GraphQL */ `
  subscription OnUpdateInvite {
    onUpdateInvite {
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
export const onDeleteInvite = /* GraphQL */ `
  subscription OnDeleteInvite {
    onDeleteInvite {
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
