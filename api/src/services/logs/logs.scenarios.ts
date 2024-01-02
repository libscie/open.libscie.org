import type { Prisma, Log } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.LogCreateArgs>({
  log: {
    one: { data: { type: 'CashOnHand', value: 7664344.460220506 } },
    two: { data: { type: 'CashOnHand', value: 1341032.70375743 } },
  },
})

export type StandardScenario = ScenarioData<Log, 'log'>
