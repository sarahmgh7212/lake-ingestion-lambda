/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

// export const getSourceType = /* GraphQL */ `
//   query GetSourceType($id: ID!) {
//     getSourceType(id: $id) {
//       id
//       name
//       configSchema
//       container
//       taskARN
//       createdAt
//       updatedAt
//     }
//   }
// `;
// export const listSourceTypes = /* GraphQL */ `
//   query ListSourceTypes(
//     $filter: ModelSourceTypeFilterInput
//     $limit: Int
//     $nextToken: String
//   ) {
//     listSourceTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
//       items {
//         id
//         name
//         configSchema
//         container
//         taskARN
//         createdAt
//         updatedAt
//       }
//       nextToken
//     }
//   }
// `;
// export const getSource = /* GraphQL */ `
//   query GetSource($id: ID!) {
//     getSource(id: $id) {
//       id
//       teamId
//       name
//       config
//       sourceType {
//         id
//         name
//         configSchema
//         container
//         taskARN
//         createdAt
//         updatedAt
//       }
//       team {
//         id
//         name
//         createdAt
//         updatedAt
//       }
//       createdAt
//       updatedAt
//     }
//   }
// `;
// export const listSources = /* GraphQL */ `
//   query ListSources(
//     $filter: ModelSourceFilterInput
//     $limit: Int
//     $nextToken: String
//   ) {
//     listSources(filter: $filter, limit: $limit, nextToken: $nextToken) {
//       items {
//         id
//         teamId
//         name
//         config
//         createdAt
//         updatedAt
//       }
//       nextToken
//     }
//   }
// `;
// export const getJob = /* GraphQL */ `
//   query GetJob($id: ID!) {
//     getJob(id: $id) {
//       id
//       pipeId
//       startedAt
//       initAt
//       completedAt
//       failedAt
//       logsARN
//       pipe {
//         id
//         name
//         catalog
//         schedule
//         status
//         createdAt
//         updatedAt
//       }
//       createdAt
//       updatedAt
//     }
//   }
// `;
// export const listJobs = /* GraphQL */ `
//   query ListJobs(
//     $filter: ModelJobFilterInput
//     $limit: Int
//     $nextToken: String
//   ) {
//     listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
//       items {
//         id
//         pipeId
//         startedAt
//         initAt
//         completedAt
//         failedAt
//         logsARN
//         createdAt
//         updatedAt
//       }
//       nextToken
//     }
//   }
// `;
// const getPipe = /* GraphQL */ `
//   query GetPipe($id: ID!) {
//     getPipe(id: $id) {
//       id
//       name
//       catalog
//       schedule
//       status
//       jobs {
//         nextToken
//       }
//       createdAt
//       updatedAt
//     }
//   }
// `;
const listPipes = `
  query ListPipes(
    $filter: ModelPipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        catalog
        schedule
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
// export const getUser = /* GraphQL */ `
//   query GetUser($id: ID!) {
//     getUser(id: $id) {
//       id
//       name
//       role
//       teams {
//         nextToken
//       }
//       invites {
//         nextToken
//       }
//       requestedInvites {
//         nextToken
//       }
//       createdAt
//       updatedAt
//     }
//   }
// `;
// export const listUsers = /* GraphQL */ `
//   query ListUsers(
//     $filter: ModelUserFilterInput
//     $limit: Int
//     $nextToken: String
//   ) {
//     listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
//       items {
//         id
//         name
//         role
//         createdAt
//         updatedAt
//       }
//       nextToken
//     }
//   }
// `;
// export const getTeam = /* GraphQL */ `
//   query GetTeam($id: ID!) {
//     getTeam(id: $id) {
//       id
//       name
//       sources {
//         nextToken
//       }
//       users {
//         nextToken
//       }
//       invites {
//         nextToken
//       }
//       createdAt
//       updatedAt
//     }
//   }
// `;
// export const listTeams = /* GraphQL */ `
//   query ListTeams(
//     $filter: ModelTeamFilterInput
//     $limit: Int
//     $nextToken: String
//   ) {
//     listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
//       items {
//         id
//         name
//         createdAt
//         updatedAt
//       }
//       nextToken
//     }
//   }
// `;
// export const getTeamUser = /* GraphQL */ `
//   query GetTeamUser($id: ID!) {
//     getTeamUser(id: $id) {
//       id
//       teamId
//       userId
//       role
//       team {
//         id
//         name
//         createdAt
//         updatedAt
//       }
//       user {
//         id
//         name
//         role
//         createdAt
//         updatedAt
//       }
//       createdAt
//       updatedAt
//     }
//   }
// `;
// export const listTeamUsers = /* GraphQL */ `
//   query ListTeamUsers(
//     $filter: ModelTeamUserFilterInput
//     $limit: Int
//     $nextToken: String
//   ) {
//     listTeamUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
//       items {
//         id
//         teamId
//         userId
//         role
//         createdAt
//         updatedAt
//       }
//       nextToken
//     }
//   }
// `;
// export const getInvite = /* GraphQL */ `
//   query GetInvite($id: ID!) {
//     getInvite(id: $id) {
//       id
//       userId
//       teamId
//       email
//       requestorId
//       user {
//         id
//         name
//         role
//         createdAt
//         updatedAt
//       }
//       team {
//         id
//         name
//         createdAt
//         updatedAt
//       }
//       createdAt
//       updatedAt
//     }
//   }
// `;
// export const listInvites = /* GraphQL */ `
//   query ListInvites(
//     $filter: ModelInviteFilterInput
//     $limit: Int
//     $nextToken: String
//   ) {
//     listInvites(filter: $filter, limit: $limit, nextToken: $nextToken) {
//       items {
//         id
//         userId
//         teamId
//         email
//         requestorId
//         createdAt
//         updatedAt
//       }
//       nextToken
//     }
//   }
// `;
module.exports = { listPipes };
