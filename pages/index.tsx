import { Box, Center, Flex, Icon } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import PricingCard from './componenets/PricingCard'
import Section from './componenets/Section'
import { TriangleUpIcon } from '@chakra-ui/icons'
const Home: NextPage = () => {
  return (
    <Box >
      <Section/>
      <Flex width="full" mx="auto" ml="auto" display="block" position="absolute" top="280" justifyContent={"center"}>
       <PricingCard/>
      </Flex>
    </Box>
  )
}

export default Home
