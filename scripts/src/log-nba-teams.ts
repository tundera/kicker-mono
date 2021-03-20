#!/usr/bin/env ts-node-script

import nba from 'nba'

import {TeamInfo} from '../types'

const logTeamData = async (teamId: number) => {
  const teamInfo: TeamInfo = await nba.stats.teamInfoCommon({ TeamID: teamId })
  const commonTeamRoster = await nba.stats.commonTeamRoster({ TeamID: teamId })

  // console.dir(teamInfo, {colors: true, depth: null})
  console.dir(commonTeamRoster, {colors: true, depth: null})
}

const main = async () => {
  try {
    await logTeamData(1610612763)
  } catch (err) {
    throw new Error(err)
  }
}

main().finally(() => {
  console.log('\nDone! 🥳')
})
