import { Grid, Container } from '@mantine/core'
import { ParentSize } from '@visx/responsive'

import { Metadata } from '@redwoodjs/web'

import CashOnHandCell from 'src/components/CashOnHandCell'
import CashOnHandHistory from 'src/components/CashOnHandHistory/CashOnHandHistory'
import LiabilitiesCell from 'src/components/LiabilitiesCell'
import NetAssetsCell from 'src/components/NetAssetsCell'
import NonCashAssetsCell from 'src/components/NonCashAssetsCell'
import SingleStatistic from 'src/components/SingleStatistic'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <Container my="md">
        <Grid>
          <CashOnHandCell />
          <NonCashAssetsCell />
          <LiabilitiesCell />
          <NetAssetsCell />
          {/* <Grid.Col span={{ base: 12, xs: 4 }}>
            <SingleStatistic
              title="Burn rate"
              description="Average spend per month"
              value="???"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <SingleStatistic
              title="Cash Runway"
              description="Cash on hand/burn rate"
              value="???"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <SingleStatistic
              title="Monthly Revenue"
              description="Revenue for last full month"
              value="???"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <SingleStatistic
              title="Pending income"
              description="With contract or in transit."
              value="???"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <SingleStatistic
              title="Liquidity ratio"
              description="Cash / non-cash assets"
              value="???"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <SingleStatistic
              title="Leverage ratio"
              description="Liabilities / assets"
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
              title="Business activity"
              description="Past 30 days"
              value="???"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 8 }}>
            <ParentSize>
              {({ width }) => (
                <CashOnHandHistory width={width} height={130.2} data={[]} />
              )}
            </ParentSize>
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <SingleStatistic
              title="Github pushes"
              description="Past 30 days"
              value="???"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <SingleStatistic
              title="Most recent blog"
              description="On https://libscie.org"
              value="???"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <SingleStatistic
              title="Monthly active users"
              description="For ResearchEquals"
              value="???"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <SingleStatistic
              title="Authors registered"
              description="Registered on ResearchEquals"
              value="???"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <SingleStatistic
              title="Modules published"
              description="Using ResearchEquals"
              value="???"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <SingleStatistic
              title="Collections published"
              description="Using ResearchEquals"
              value="???"
            />
          </Grid.Col> */}
        </Grid>
      </Container>
    </>
  )
}

export default HomePage
