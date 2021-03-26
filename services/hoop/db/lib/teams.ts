// @ts-ignore
import nba from 'nba'

import type { BackupTeamData, TeamData, TeamRoster, Team } from '../types'

import db from '../index'
import { upsertCoachData } from './coaches'
import { upsertPlayerData } from './players'

function getTeamInfo(teamId: number): Promise<TeamData> {
  return nba.stats.teamInfoCommon({ TeamID: teamId })
}

function getTeamRoster(teamId: number): Promise<TeamRoster> {
  return nba.stats.commonTeamRoster({ TeamID: teamId })
}

export const transformTeamData = (team: BackupTeamData) => {
  return {
    ...team,
    createdAt: new Date(team.createdAt),
    updatedAt: new Date(),
    handle: team.handle.toString(),
    established: team.established?.toString(),
  }
}

export const updateTeamData = async (teamId: number) => {
  const { teamInfoCommon } = await getTeamInfo(teamId)
  const [team] = teamInfoCommon

  await db.team.update({
    where: { handle: team.teamId.toString() },
    data: {
      id: team.teamId,
      updatedAt: new Date(),
      name: team.teamName,
      slug: team.teamSlug,
      city: team.teamCity,
      abbreviation: team.teamAbbreviation,
      wins: team.w,
      losses: team.l,
      winPercentage: team.pct,
      conference: team.teamConference,
      division: team.teamDivision,
    },
  })

  const roster = await getTeamRoster(teamId)
  const { commonTeamRoster: players, coaches } = roster

  for (const player of players) {
    await upsertPlayerData(player)
  }

  for (const coach of coaches) {
    await upsertCoachData(coach)
  }
}

export const seedTeamData = async (team: Team) => {
  await db.team.create({
    data: {
      id: team.id,
      createdAt: new Date(),
      updatedAt: new Date(),
      handle: team.handle,
      name: team.name,
      slug: team.slug,
      city: team.city,
      established: team.established,
      abbreviation: team.abbreviation,
      logo: team.logo,
      logoSlug: team.logoSlug,
      wins: team.wins,
      losses: team.losses,
      winPercentage: team.winPercentage,
      conference: team.conference,
      division: team.division,
    },
  })
}
