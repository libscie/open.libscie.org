import { Group, Paper, SimpleGrid, Text, Grid, Skeleton } from '@mantine/core'
import type {
  FindCashOnHandQuery,
  FindCashOnHandQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import SingleStatistic from 'src/components/SingleStatistic'

export const QUERY = gql`
  query FindCashOnHandQuery {
    cashOnHand: logsType(type: CashOnHand) {
      time
      value
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindCashOnHandQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

const child = <Skeleton height={113.4} radius="md" animate={false} />

export const Success = ({
  cashOnHand,
}: CellSuccessProps<FindCashOnHandQuery, FindCashOnHandQueryVariables>) => {
  return (
    <>
      {/* Component for latest cashOnHand */}
      <Grid.Col span={{ base: 12, xs: 4 }}>
        <SingleStatistic
          title="Cash On Hand"
          value={cashOnHand[cashOnHand.length - 1].value}
        />
      </Grid.Col>
      {/* Component for historical cashOnHand charting */}
      <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
    </>
  )
}
