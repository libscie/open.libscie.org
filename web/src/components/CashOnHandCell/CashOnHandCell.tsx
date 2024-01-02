import { Grid, Skeleton } from '@mantine/core'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import CurrencyFormat from 'react-currency-format'
import type {
  FindCashOnHandQuery,
  FindCashOnHandQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import SingleStatistic from 'src/components/SingleStatistic'

import CashOnHandHistory from '../CashOnHandHistory/CashOnHandHistory'

export const QUERY = gql`
  query FindCashOnHandQuery {
    cashOnHand: logsType(type: CashOnHand) {
      time
      value
    }
  }
`

export const Loading = () => (
  <>
    <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
    {/* Component for historical cashOnHand charting */}
    <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
  </>
)

export const Empty = () => <></>

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
          value={
            <CurrencyFormat
              value={cashOnHand[cashOnHand.length - 1].value}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'€'}
            />
          }
        />
      </Grid.Col>
      {/* Component for historical cashOnHand charting */}
      <Grid.Col span={{ base: 12, xs: 8 }}>
        <ParentSize>
          {({ width }) => (
            <CashOnHandHistory width={width} height={113.4} data={cashOnHand} />
          )}
        </ParentSize>
      </Grid.Col>
    </>
  )
}
