import teams from 'nba/data/teams.json'

import db from '../index'
import { updateTeamData } from './teams'

async function main() {
  console.log('Start seeding ...')

  for (const team of teams) {
    await updateTeamData(team.teamId)
    console.log(`Updated team with id ${team.teamId} (${team.teamName})`)
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
