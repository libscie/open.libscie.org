import type { Prisma, Log } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.LogCreateArgs>({
  log: {
    one: {
      data: { title: 'String', type: 'CashOnHand', value: 9461938.009954756 },
    },
    two: {
      data: { title: 'String', type: 'CashOnHand', value: 1897152.0540306885 },
    },
  },
})

export type StandardScenario = ScenarioData<Log, 'log'>
