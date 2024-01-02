import { Grid, Container } from '@mantine/core'

import { Metadata } from '@redwoodjs/web'

import CashOnHandCell from 'src/components/CashOnHandCell'
import SingleStatistic from 'src/components/SingleStatistic'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <Container my="md">
        <Grid>
          <CashOnHandCell />
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <SingleStatistic
              title="Non-cash assets"
              description="Term deposits, etc."
              value="???"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <SingleStatistic
              title="Liabilities"
              description="Negative assets (e.g., debt)"
              value="€0"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <SingleStatistic
              title="Net assets"
              description="Non-cash assets + cash - liabilities"
              value="???"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <SingleStatistic
              title="MAU"
              description="Monthly Active Users"
              value="???"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <SingleStatistic
              title="MRR"
              description="Monthly Recurring Revenue"
              value="???"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <SingleStatistic
              title="Burn rate"
              description="Average spend per month"
              value="???"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <SingleStatistic
              title="Cash runway"
              description="Months based on cash"
              value="???"
            />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  )
}

export default HomePage
