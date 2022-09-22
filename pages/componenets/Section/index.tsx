import { Box, Center, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Section = () => {
    return (
        <Box bg='#6B46C1' textAlign="center" pt="70px" h='397px' color='white'>
            <Heading p={3}>
                Simple pricing for your business
            </Heading>
            <Text fontSize="lg">
                Plans that are carefully crafted to suit your business.
            </Text>
        </Box>
    )
}

export default Section