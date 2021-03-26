#!/usr/bin/env ts-node-script

import db from '../index'

import rawSchemes from '../backups/colors.json'

import { seedColorSchemes, transformColorSchemeData } from '../lib/colors'

async function main() {
  console.log('Start seeding ...')

  const schemes = []

  for (const rawScheme of rawSchemes) {
    schemes.push(transformColorSchemeData(rawScheme))
  }

  for (const scheme of schemes) {
    await seedColorSchemes(scheme)
    console.log(`Updated color scheme for team with id ${scheme.teamId}`)
  }

  // const teams = await db.team.findMany()

  // for (const team of teams) {
  //   await db.team.update({
  //     where: { id: team.id },
  //     data: {
  //       colorScheme: {
  //         disconnect: true,
  //       },
  //     },
  //   })
  // }

  // const schemes = await db.colorScheme.findMany()

  // for (const scheme of rawSchemes) {
  //   await db.colorScheme.create({
  //     where: { id: scheme.id },
  //     data: {
  //       team: {
  //         connect: {
  //           id: scheme.teamId,
  //         },
  //       },
  //     },
  //   })
  // }

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
