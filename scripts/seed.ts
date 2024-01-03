import { Prisma, LogType } from '@prisma/client'
import { db } from 'api/src/lib/db'

// const dataRaw = [
//   {
//     date: 'YYYY-MM-DD',
//     total: 123, // Not required
//     cumulative: 123,
//   },
// ]

export default async () => {
  try {
    // const processed = dataRaw.map((data, index) => {
    //   const date = new Date(data.date)
    //   date.setMilliseconds(date.getMilliseconds() + index)
    //   // console.log(date.toISOString())
    //   return {
    //     time: date.toISOString(),
    //     type: LogType.CashOnHand,
    //     value: data.cumulative,
    //   }
    // })
    // await db.log.createMany({ data: processed })
    // console.log(processed)
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
