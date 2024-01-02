import type {
  FindCashOnHandQuery,
  FindCashOnHandQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

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

export const Success = ({
  cashOnHand,
}: CellSuccessProps<FindCashOnHandQuery, FindCashOnHandQueryVariables>) => {
  return <div>{JSON.stringify(cashOnHand)}</div>
}
