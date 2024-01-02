import { Group, Paper, Text } from '@mantine/core'

import classes from './SingleStatistic.module.css'

const SingleStatistic = ({ title, value }) => {
  return (
    <Paper withBorder p="md" radius="md" key={title}>
      <Group justify="space-between">
        <Text size="xs" c="dimmed" className={classes.title}>
          {title}
        </Text>
      </Group>
      <Group align="flex-end" gap="xs" mt={25}>
        <Text className={classes.value}>{value}</Text>
      </Group>
    </Paper>
  )
}

export default SingleStatistic
