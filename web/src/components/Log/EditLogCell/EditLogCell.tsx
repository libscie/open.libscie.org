import type { EditLogById, UpdateLogInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LogForm from 'src/components/Log/LogForm'

export const QUERY = gql`
  query EditLogById($id: Int!) {
    log: log(id: $id) {
      id
      time
      title
      type
      value
    }
  }
`
const UPDATE_LOG_MUTATION = gql`
  mutation UpdateLogMutation($id: Int!, $input: UpdateLogInput!) {
    updateLog(id: $id, input: $input) {
      id
      time
      title
      type
      value
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ log }: CellSuccessProps<EditLogById>) => {
  const [updateLog, { loading, error }] = useMutation(UPDATE_LOG_MUTATION, {
    onCompleted: () => {
      toast.success('Log updated')
      navigate(routes.logs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: UpdateLogInput, id: EditLogById['log']['id']) => {
    updateLog({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Log {log?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <LogForm log={log} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
