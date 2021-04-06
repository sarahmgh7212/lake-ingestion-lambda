// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PipeStatus = {
  "DISABLED": "DISABLED",
  "ENABLED": "ENABLED"
};

const { SourceType, Source, Team, TeamUser, User, Invite, Job, Pipe } = initSchema(schema);

export {
  SourceType,
  Source,
  Team,
  TeamUser,
  User,
  Invite,
  Job,
  Pipe,
  PipeStatus
};