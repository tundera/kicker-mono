#!/usr/bin/env ts-node-script

import teams from 'nba/data/teams.json'

import db from '../index'
import { updateTeamData } from '../lib/teams'

export async function main() {
  console.log('Start updating ...')

  for (const team of teams) {
    await updateTeamData(team.teamId)
    console.log('updated team:', team.teamId)

    setTimeout(() => {
      console.log('team id:', team.teamId)
    }, 10000)
  }

  console.log('Updates finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
