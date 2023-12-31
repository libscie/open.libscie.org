import LogCell from 'src/components/Log/LogCell'

type LogPageProps = {
  id: number
}

const LogPage = ({ id }: LogPageProps) => {
  return <LogCell id={id} />
}

export default LogPage
