import { Grid, Skeleton } from '@mantine/core'
import CurrencyFormat from 'react-currency-format'
import type { NetAssetsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import SingleStatistic from 'src/components/SingleStatistic'

export const QUERY = gql`
  query NetAssetsQuery {
    netAssets: logsType(type: NetAssets) {
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
        title="Net assets"
        description="Non-cash assets + cash - liabilities"
        value="???"
      />
    </Grid.Col>
  </>
)
export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ netAssets }: CellSuccessProps<NetAssetsQuery>) => {
  return (
    <>
      <Grid.Col span={{ base: 12, xs: 4 }}>
        <SingleStatistic
          title="Net assets"
          description="Non-cash assets + cash - liabilities"
          value={
            <CurrencyFormat
              value={netAssets[netAssets.length - 1].value}
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
