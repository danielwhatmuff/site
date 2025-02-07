import React from 'react'

import { Box, Text, ResponsiveStack } from 'serverless-design-system'
import { HeroWrapperNew as HeroWrapper } from 'src/fragments'
import HeroTabs from '../../HeroTabs'
import { PL } from 'src/fragments/DesignSystem'

const MeetupsHero = () => (
  <HeroWrapper
    background={[
      'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
      'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
      `linear-gradient(132deg,rgb(0,0,0) 70%,#70221f)`,
    ]}
    height={[380, 380, 530, 510, 530]}
  >
    <Box mb={[2, 2, 7]} pt={[0, 0, 4]}>
      <HeroTabs selected='meetups' />
    </Box>

    <ResponsiveStack mb={[2, 2, 4, 7]} color='white'>
      <Box width={[1, 1, 0.75]}>
        <Text.p
          fontSize={[6, 6, 7, 8]}
          fontFamily='Soleil'
          lineHeight={1}
          letterSpacing={'-0.2'}
          m={0}
        >
          Meetups
        </Text.p>
      </Box>
      <Box width={[1, 1, 4 / 5]} pl={[0, 0, 4]} pr={[0, 0, 0]}>
        <PL mt={[3, 3, 3]} mb={3} color='white'>
          Serverless meetups are hosted locally in cities all over the world.
          Meetups are a great chance to meet other serverless pros and learn
          more about the technology.
        </PL>
      </Box>
    </ResponsiveStack>
  </HeroWrapper>
)

export default MeetupsHero
