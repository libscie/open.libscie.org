import type { Prisma, Log } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.LogCreateArgs>({
  log: {
    one: { data: { type: 'CashOnHand', value: 4032807.671876664 } },
    two: { data: { type: 'CashOnHand', value: 5119160.101305109 } },
  },
})

export type StandardScenario = ScenarioData<Log, 'log'>
