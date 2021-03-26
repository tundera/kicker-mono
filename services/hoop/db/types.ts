export * from '@prisma/client'

export interface TeamData {
  teamInfoCommon: TeamInfoCommon[]
  teamSeasonRanks: TeamSeasonRank[]
  availableSeasons: AvailableSeason[]
}

export interface AvailableSeason {
  seasonId: string
}

export interface TeamSeasonRank {
  leagueId: string
  seasonId: string
  teamId: number
  ptsRank: number
  ptsPg: number
  rebRank: number
  rebPg: number
  astRank: number
  astPg: number
  oppPtsRank: number
  oppPtsPg: number
}

export interface TeamInfoCommon {
  teamId: number
  seasonYear: string
  teamCity: string
  teamName: string
  teamAbbreviation: string
  teamConference: string
  teamDivision: string
  teamCode: string
  teamSlug: string
  w: number
  l: number
  pct: number
  confRank: number
  divRank: number
  minYear: string
  maxYear: string
}

export interface TeamRoster {
  commonTeamRoster: PlayerData[]
  coaches: CoachData[]
}

export interface CoachData {
  teamId: number
  season: string
  coachId: number
  firstName: string
  lastName: string
  coachName: string
  isAssistant: number
  coachType: string
  sortSequence?: any
  subSortSequence: number
}

export interface PlayerData {
  teamID: number
  season: string
  leagueID: string
  player: string
  playerSlug: string
  num: string
  position: string
  height: string
  weight: string
  birthDate: string
  age: number
  exp: string
  school: string
  playerId: number
}

export interface BackupTeamData {
  id: number
  createdAt: string
  updatedAt: string
  handle: number
  name: string
  slug: string
  city: string
  abbreviation: string
  logo: string
  logoSlug: string
  wins: number
  losses: number
  winPercentage: number
  conference: string
  division: string
  established: number
}

export interface BackupPlayerData {
  id: number
  createdAt: string
  updatedAt: string
  handle: number
  name: string
  slug: string
  height: string
  weight: number
  number: number | string
  position: string
}

export interface BackupCoachData {
  id: number
  createdAt: string
  updatedAt: string
  handle: number
  name: string
  type: string
  isAssistant: number
}

export interface BackupColorSchemeData {
  id: number
  createdAt: string
  updatedAt: string
  primary: string
  secondary: string
  teamId: number
}

export interface UpdatedTeamData extends TeamInfoCommon {
  players: PlayerData[]
  coaches: CoachData[]
}
