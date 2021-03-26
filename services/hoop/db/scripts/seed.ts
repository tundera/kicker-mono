#!/usr/bin/env ts-node-script

import db from '../index'

import rawTeams from '../backups/documents/teams.json'
import rawPlayers from '../backups/documents/players.json'
import rawCoaches from '../backups/documents/coaches.json'
import rawSchemes from '../backups/documents/colors.json'

import { seedTeamData, transformTeamData } from '../lib/teams'
import { seedPlayerData, transformPlayerData } from '../lib/players'
import { seedCoachData, transformCoachData } from '../lib/coaches'
import { seedColorSchemes, transformColorSchemeData } from '../lib/colors'

async function main() {
  console.log('Start seeding ...')

  const teams = []

  for (const rawTeam of rawTeams) {
    teams.push(transformTeamData(rawTeam))
  }

  for (const team of teams) {
    await seedTeamData(team)
    console.log(`Updated team with id ${team.id} (${team.name})`)
  }

  console.log('Done seeding teams')

  const players = []

  for (const rawPlayer of rawPlayers) {
    players.push(transformPlayerData(rawPlayer))
  }

  for (const player of players) {
    await seedPlayerData(player)
    console.log(`Updated Player with id ${player.id} (${player.name})`)
  }

  console.log('Done seeding players')

  const coaches = []

  for (const rawCoach of rawCoaches) {
    coaches.push(transformCoachData(rawCoach))
  }

  for (const coach of coaches) {
    await seedCoachData(coach)
    console.log(`Updated Coach with id ${coach.id} (${coach.name})`)
  }

  const schemes = []

  for (const rawScheme of rawSchemes) {
    schemes.push(transformColorSchemeData(rawScheme))
  }

  for (const scheme of schemes) {
    await seedColorSchemes(scheme)
    console.log(`Updated color scheme for team with id ${scheme.teamId}`)
  }

  console.log('Done seeding color schemes')

  console.log('✅ Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
    console.log('Prisma client disconnected')
    process.exit(0)
  })
