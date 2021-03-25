import nba from 'nba'

import type { TeamInfo, TeamRoster } from './types'
import db from '../index'
import { upsertCoachData } from './coaches'
import { upsertPlayerData } from './players'

const getTeamInfo = (teamId: number) => {
  return nba.stats.teamInfoCommon({ TeamID: teamId })
}

const getTeamRoster = async (teamId: number) => {
  return nba.stats.commonTeamRoster({ TeamID: teamId })
}

export const updateTeamData = async (teamId: number) => {
  const roster: TeamRoster = await getTeamRoster(teamId)
  const { commonTeamRoster: players, coaches } = roster

  for (const player of players) {
    await upsertPlayerData(player)
  }

  for (const coach of coaches) {
    await upsertCoachData(coach)
  }

  const data: TeamInfo = await getTeamInfo(teamId)
  const [team] = data.teamInfoCommon

  await db.team.update({
    where: { handle: team.teamId.toString() },
    data: {
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

  // console.dir(teamInfo, {colors: true, depth: null})
  console.dir(players, { colors: true, depth: null })
}
