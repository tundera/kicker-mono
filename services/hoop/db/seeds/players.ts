import type { PlayerInfo } from './types'

import db from '../index'

export const upsertPlayerData = async (player: PlayerInfo) => {
  await db.player.upsert({
    where: { handle: player.playerId.toString() },
    create: {
      createdAt: new Date(),
      updatedAt: new Date(),
      handle: player.playerId.toString(),
      name: player.player,
      slug: player.playerSlug,
      height: player.height,
      weight: player.weight,
      number: player.num,
      position: player.position,
      teamId: player.teamID,
    },
    update: {
      updatedAt: new Date(),
      height: player.height,
      weight: player.weight,
      number: player.num,
      position: player.position,
      teamId: player.teamID,
    },
  })

  await db.player.update({
    where: { handle: player.playerId.toString() },
    data: {
      team: {
        connect: {
          handle: player.teamID.toString(),
        },
      },
    },
  })
}
