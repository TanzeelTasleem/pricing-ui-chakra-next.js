import { CheckCircleIcon, StarIcon, TimeIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Flex, Heading, HStack, Icon, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const PricingCard = () => {
    return (
        <>
            <Box px={2} >
                <Flex  border="transparent"  rounded="10" justifyContent="center" flexWrap={["wrap", "wrap", "nowrap"]} minHeight={250}  >
                    <Flex bg="transparent" direction="column" borderTopLeftRadius={10} borderTopRightRadius={["10", "10", 0]} borderBottomLeftRadius={10} width={["full", "full", "300px"]} border="transparent" bgColor="#f0eafb" color="black" p="5" alignItems="center">
                        <Heading color="black" fontSize="24px" fontWeight="bold">
                            Premium PRO
                        </Heading>
                        <Text fontSize={60} fontWeight="extrabold">
                            $329
                        </Text>
                        <Text fontSize="18px">
                            billed just once
                        </Text>
                        <Button px={20} mt={15} bg='#805AD5' color="white" size='md'>
                            Get Started
                        </Button>
                    </Flex>
                    <Box width="fit-content" borderTopRightRadius={10} borderBottomRightRadius={10} pl={["25"]} pt={["5"]} pr={2} bg="white"   >
                        <Text>Access these features when you get this pricing package for your business.</Text>
                        <VStack mt={5} alignItems="flex-start" spacing={3} pb={["15px","15px" , 0]} >
                            <Text> <Icon as={CheckCircleIcon} color="#6B46C1" mr={3} />International calling and messaging API</Text>
                            <Text> <Icon as={CheckCircleIcon} color="#6B46C1" mr={3} />Additional phone numbers</Text>
                            <Text> <Icon as={CheckCircleIcon} color="#6B46C1" mr={3} />Automated messages via Zapier</Text>
                            <Text> <Icon as={CheckCircleIcon} color="#6B46C1" mr={3} />24/7 support and consulting</Text>
                        </VStack>
                    </Box>
                </Flex>
            </Box>
            <Center pb={10}>
                <Flex gap={10} width="fit-content" flexWrap="wrap" alignItems={"center"} justifyContent="center" color="#6B46C1" pt={20}>
                    <HStack spacing={5} >
                        <Icon as={TimeIcon} width="40px" height="40px" color="#6B46C1" />
                        {/* <Box> */}
                        <Text maxWidth={170} display="inline" fontWeight={"bold"} color="black" textAlign="left">30 days money back  Guarantee</Text>

                        {/* </Box> */}
                    </HStack>
                    <HStack spacing={5} >
                        <Icon as={CheckCircleIcon} width="40px" height="40px" color="#6B46C1" />
                        {/* <Box> */}
                        <Text maxWidth={170} fontWeight={"bold"} color="black" display="inline" textAlign="left">No setup fees 100% hassle-free</Text>

                        {/* </Box> */}
                    </HStack>

                    <HStack spacing={5}>
                        <Icon as={StarIcon} width="40px" height="40px" color="#6B46C1" />
                        <Box>
                            <Text maxWidth={170} fontWeight={"bold"} color="black" display="inline" textAlign="left">No monthly subscription <br />
                                Pay once and for all</Text>
                        </Box>
                    </HStack>


                    {/* <Icon as={CheckCircleIcon} width="40px" height="40px"  color="#6B46C1" />
                   <Text  display="inline" textAlign={"center"}>30 days money back Guarantee</Text>
                   <Icon as={CheckCircleIcon} width="20" p={0} m={0} height="20px"  color="#6B46C1" />
                   <Text width={150} display="inline" textAlign={"left"}>30 days money back Guarantee</Text> */}

                    {/* <Text> <Icon as={CheckCircleIcon} color="#6B46C1" mr={3} />No setup fees 100% hassle-free</Text>
                    <Text> <Icon as={CheckCircleIcon} color="#6B46C1" mr={3} />No monthly subscription Pay once and for all</Text> */}

                </Flex>
            </Center>
        </>
    )
}

export default PricingCard