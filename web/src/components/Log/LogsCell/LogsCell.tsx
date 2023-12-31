import type { FindLogs } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Logs from 'src/components/Log/Logs'

export const QUERY = gql`
  query FindLogs {
    logs {
      id
      time
      title
      type
      value
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No logs yet. '}
      <Link to={routes.newLog()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ logs }: CellSuccessProps<FindLogs>) => {
  return <Logs logs={logs} />
}
