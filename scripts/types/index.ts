export interface TeamInfo {
  teamInfoCommon: TeamInfoCommon[];
  teamSeasonRanks: TeamSeasonRank[];
  availableSeasons: AvailableSeason[];
}

export interface AvailableSeason {
  seasonId: string;
}

export interface TeamSeasonRank {
  leagueId: string;
  seasonId: string;
  teamId: number;
  ptsRank: number;
  ptsPg: number;
  rebRank: number;
  rebPg: number;
  astRank: number;
  astPg: number;
  oppPtsRank: number;
  oppPtsPg: number;
}

export interface TeamInfoCommon {
  teamId: number;
  seasonYear: string;
  teamCity: string;
  teamName: string;
  teamAbbreviation: string;
  teamConference: string;
  teamDivision: string;
  teamCode: string;
  teamSlug: string;
  w: number;
  l: number;
  pct: number;
  confRank: number;
  divRank: number;
  minYear: string;
  maxYear: string;
}