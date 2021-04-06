import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum PipeStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}



export declare class SourceType {
  readonly id: string;
  readonly name: string;
  readonly configSchema: string;
  readonly container?: string;
  readonly taskARN?: string;
  constructor(init: ModelInit<SourceType>);
  static copyOf(source: SourceType, mutator: (draft: MutableModel<SourceType>) => MutableModel<SourceType> | void): SourceType;
}

export declare class Source {
  readonly id: string;
  readonly name: string;
  readonly config?: string;
  readonly sourceType?: SourceType;
  readonly team?: (Team | null)[];
  constructor(init: ModelInit<Source>);
  static copyOf(source: Source, mutator: (draft: MutableModel<Source>) => MutableModel<Source> | void): Source;
}

export declare class Team {
  readonly id: string;
  readonly name: string;
  readonly users?: (TeamUser | null)[];
  readonly invites?: (Invite | null)[];
  readonly sourceTeamId?: string;
  constructor(init: ModelInit<Team>);
  static copyOf(source: Team, mutator: (draft: MutableModel<Team>) => MutableModel<Team> | void): Team;
}

export declare class TeamUser {
  readonly id: string;
  readonly team: Team;
  readonly user: User;
  constructor(init: ModelInit<TeamUser>);
  static copyOf(source: TeamUser, mutator: (draft: MutableModel<TeamUser>) => MutableModel<TeamUser> | void): TeamUser;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly teams?: (TeamUser | null)[];
  readonly invites?: (Invite | null)[];
  readonly requestedInvites?: (Invite | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Invite {
  readonly id: string;
  readonly email: string;
  readonly requestorId: string;
  readonly user?: User;
  readonly team: Team;
  readonly requestor?: User;
  constructor(init: ModelInit<Invite>);
  static copyOf(source: Invite, mutator: (draft: MutableModel<Invite>) => MutableModel<Invite> | void): Invite;
}

export declare class Job {
  readonly id: string;
  readonly startedAt?: string;
  readonly initCompletedAt?: string;
  readonly completedAt?: string;
  readonly failedAt?: string;
  readonly logsARN?: string;
  constructor(init: ModelInit<Job>);
  static copyOf(source: Job, mutator: (draft: MutableModel<Job>) => MutableModel<Job> | void): Job;
}

export declare class Pipe {
  readonly id: string;
  readonly name?: string;
  readonly catalog?: string;
  readonly schedule?: string;
  readonly status?: PipeStatus | keyof typeof PipeStatus;
  readonly jobId: string;
  readonly job?: Job;
  constructor(init: ModelInit<Pipe>);
  static copyOf(source: Pipe, mutator: (draft: MutableModel<Pipe>) => MutableModel<Pipe> | void): Pipe;
}