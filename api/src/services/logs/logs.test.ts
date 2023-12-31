import type { Log } from '@prisma/client'

import { logs, log, createLog, updateLog, deleteLog } from './logs'
import type { StandardScenario } from './logs.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('logs', () => {
  scenario('returns all logs', async (scenario: StandardScenario) => {
    const result = await logs()

    expect(result.length).toEqual(Object.keys(scenario.log).length)
  })

  scenario('returns a single log', async (scenario: StandardScenario) => {
    const result = await log({ id: scenario.log.one.id })

    expect(result).toEqual(scenario.log.one)
  })

  scenario('creates a log', async () => {
    const result = await createLog({
      input: { title: 'String', type: 'CashOnHand', value: 6207505.8939008955 },
    })

    expect(result.title).toEqual('String')
    expect(result.type).toEqual('CashOnHand')
    expect(result.value).toEqual(6207505.8939008955)
  })

  scenario('updates a log', async (scenario: StandardScenario) => {
    const original = (await log({ id: scenario.log.one.id })) as Log
    const result = await updateLog({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a log', async (scenario: StandardScenario) => {
    const original = (await deleteLog({ id: scenario.log.one.id })) as Log
    const result = await log({ id: original.id })

    expect(result).toEqual(null)
  })
})
