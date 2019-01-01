import React from 'react'
import {
  Relative,
  ResponsiveStack,
  Flex,
  Background,
  Heading,
  Card,
} from 'serverless-design-system'
import { NewsLetterForm } from 'src/components'
import { Button } from 'src/fragments/DesignSystem'

const SubmitButton = (props) => (
  <Button
    width={0.4}
    height={36}
    fontSize={1}
    color='#fd5750'
    bg='white'
    {...props}
  >
    sign up
  </Button>
)

const Title = ({ component: HeadingComp, color }) => (
  <HeadingComp
    color={color}
    fontFamily='SoleilLt'
    letterSpacing='0'
    lineHeight={2}
  >
    Join 16,000 other developers and keep up to speed on the latest serverless news and releases.
  </HeadingComp>
)

const BlogPrefooter = () => (
  <React.Fragment>
    <Relative
      display={['none', 'none', 'block']}
      top='-370px'
      mb='-290px'
      id='newsletter-box'
      pt='100px'
    >
      <Background
        background={'#fd5750'}
        backgroundSize='cover'
      >
        <ResponsiveStack>
          <Flex
            width={[1, 1, 0.8]}
            p={[1, 1, 5, 7]}
            pr={2}
          >
            <Title component={Heading.h4} color='white' />
          </Flex>
          <Flex
            justifyContent='flex-end'
            alignItems='center'
            width={[1, 1, 0.7]}
            p={[1, 1, 4, 4, 7]}
          >
            <NewsLetterForm
              emailFieldProps={{ width: 1,
                height: 36,
                bg: "#ffffff33",
                fontSize: 1,
                placeholder: "enter email address",
                id: "newsletter-emailfield"
              }}
              btnComponent={SubmitButton}
              wrapperProps={{ width: 1, color: 'white' }}
              formStyles={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            />
          </Flex>
        </ResponsiveStack>
      </Background>
    </Relative>

    <Relative
      m={15}
      display={['block', 'block', 'none']}
      top='-360px'
      mb='-290px'
    >
      <Card border='1px solid #fd5750'>
        <Background>
          <ResponsiveStack
            bg='#ffffffe6'
            py={2}
          >
            <Flex
              width={1}
              px={2}
              pb={2}
            >
              <Title component={Heading.h5} />
            </Flex>
            <NewsLetterForm
              wrapper={Flex.column}
              wrapperProps={{ alignItems: 'center', width: 1, px: 2 }}
              emailFieldProps={{
                bg: "#8c8c8c33",
                placeholder: "enter email address",
                placeholderColor: "gray.3",
                color: "gray.3",
                id: "newsletter-emailfield"
              }}
            />
          </ResponsiveStack>
        </Background>
      </Card>
    </Relative>
  </React.Fragment>
)

export default BlogPrefooter