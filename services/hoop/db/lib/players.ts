import type { PlayerData, Player, BackupPlayerData } from '../types'

import db from '../index'

export const transformPlayerData = (player: BackupPlayerData) => {
  return {
    ...player,
    id: Number(player.id),
    createdAt: new Date(player.createdAt),
    updatedAt: new Date(),
    handle: player.handle.toString(),
    weight: player.weight.toString(),
    height: player.height.toString(),
    number: player.number.toString(),
  }
}

export const upsertPlayerData = async (player: PlayerData) => {
  await db.player.upsert({
    where: { id: player.playerId },
    create: {
      id: player.playerId,
      createdAt: new Date(),
      updatedAt: new Date(),
      handle: player.playerId.toString(),
      name: player.player,
      slug: player.playerSlug,
      height: player.height,
      weight: player.weight,
      number: player.num,
      position: player.position,
    },
    update: {
      id: player.playerId,
      updatedAt: new Date(),
      height: player.height,
      weight: player.weight,
      number: player.num,
      position: player.position,
    },
  })

  // Connect players to or remove players from teams
  if (player.teamID) {
    await db.player.update({
      where: { id: player.playerId },
      data: {
        team: {
          connect: {
            id: player.teamID,
          },
        },
      },
    })
  } else {
    await db.player.update({
      where: { id: player.playerId },
      data: {
        team: {
          disconnect: true,
        },
      },
    })
  }
}

export const seedPlayerData = async (player: Omit<Player, 'teamId'>) => {
  // Create player in database
  await db.player.create({
    data: {
      id: player.id,
      createdAt: new Date(),
      updatedAt: new Date(),
      handle: player.handle,
      name: player.name,
      slug: player.slug,
      height: player.height,
      weight: player.weight,
      number: player.number,
      position: player.position,
    },
  })
}
