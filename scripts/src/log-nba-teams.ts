#!/usr/bin/env ts-node-script

import nba from 'nba'

const logTeamData = async (teamId: number) => {
  const {teamInfoCommon: team} = await nba.stats.teamInfoCommon({ TeamID: teamId })

  console.dir(team[0].teamName, {colors: true, depth: null})
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
