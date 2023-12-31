import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum, timeTag } from 'src/lib/formatters'

import type { DeleteLogMutationVariables, FindLogById } from 'types/graphql'

const DELETE_LOG_MUTATION = gql`
  mutation DeleteLogMutation($id: Int!) {
    deleteLog(id: $id) {
      id
    }
  }
`

interface Props {
  log: NonNullable<FindLogById['log']>
}

const Log = ({ log }: Props) => {
  const [deleteLog] = useMutation(DELETE_LOG_MUTATION, {
    onCompleted: () => {
      toast.success('Log deleted')
      navigate(routes.logs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteLogMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete log ' + id + '?')) {
      deleteLog({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Log {log.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{log.id}</td>
            </tr>
            <tr>
              <th>Time</th>
              <td>{timeTag(log.time)}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{log.title}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{formatEnum(log.type)}</td>
            </tr>
            <tr>
              <th>Value</th>
              <td>{log.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editLog({ id: log.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(log.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Log
