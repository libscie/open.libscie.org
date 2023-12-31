import EditLogCell from 'src/components/Log/EditLogCell'

type LogPageProps = {
  id: number
}

const EditLogPage = ({ id }: LogPageProps) => {
  return <EditLogCell id={id} />
}

export default EditLogPage
