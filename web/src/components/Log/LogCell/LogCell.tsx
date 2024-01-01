import type { FindLogById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Log from 'src/components/Log/Log'

export const QUERY = gql`
  query FindLogById($id: Int!) {
    log: log(id: $id) {
      id
      time
      activity
      type
      value
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Log not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ log }: CellSuccessProps<FindLogById>) => {
  return <Log log={log} />
}
