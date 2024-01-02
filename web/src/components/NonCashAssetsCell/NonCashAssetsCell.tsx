import { Grid, Skeleton } from '@mantine/core'
import CurrencyFormat from 'react-currency-format'
import type { NonCashAssetsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import SingleStatistic from 'src/components/SingleStatistic'

export const QUERY = gql`
  query NonCashAssetsQuery {
    nonCashAssets: logsType(type: NonCashAssets) {
      id
      type
      activity
      time
      value
    }
  }
`

const child = <Skeleton height={130.2} radius="md" animate={true} />

export const Loading = () => (
  <>
    <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
  </>
)

export const Empty = () => (
  <>
    <Grid.Col span={{ base: 12, xs: 4 }}>
      <SingleStatistic
        title="Non-cash assets"
        description="Term deposits, etc."
        value="???"
      />
    </Grid.Col>
  </>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  nonCashAssets,
}: CellSuccessProps<NonCashAssetsQuery>) => {
  return (
    <>
      <Grid.Col span={{ base: 12, xs: 4 }}>
        <SingleStatistic
          title="Non-cash assets"
          description="Term deposits, etc."
          value={
            <CurrencyFormat
              value={nonCashAssets[nonCashAssets.length - 1].value}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'€'}
            />
          }
        />
      </Grid.Col>
    </>
  )
}
