import type { CoachInfo } from './types'

import db from '../index'

export const upsertCoachData = async (coach: CoachInfo) => {
  await db.coach.upsert({
    where: { handle: coach.coachId.toString() },
    create: {
      createdAt: new Date(),
      updatedAt: new Date(),
      handle: coach.coachId.toString(),
      name: coach.coachName,
      type: coach.coachType,
      isAssistant: coach.isAssistant.toString(),
      teamId: coach.teamId,
    },
    update: {
      updatedAt: new Date(),
      type: coach.coachType,
      isAssistant: coach.isAssistant.toString(),
      teamId: coach.teamId,
    },
  })

  await db.coach.update({
    where: { handle: coach.coachId.toString() },
    data: {
      team: {
        connect: {
          handle: coach.teamId.toString(),
        },
      },
    },
  })
}
