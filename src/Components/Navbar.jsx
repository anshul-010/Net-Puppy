import { Box,Text } from '@chakra-ui/react'
import React from 'react'

export const Navbar = () => {
  return (
    <div>
        <Box backgroundColor="rgb(185, 1, 36)" p="15px" w='98.5vw' display="flex" justifyContent="end">
            <Box  mr='100px' display="flex" w="700px" color='white' justifyContent="space-around">
                <Text fontWeight="bold">INQUIRE</Text>
                <Text fontWeight="bold">APPLY</Text>
                <Text fontWeight="bold">SUPPORT UP</Text>
                <Box borderRight="1px solid white"></Box>
                <Text>PARENTS</Text>
                <Text>ALUMS</Text>
            </Box>
        </Box>
    </div>
  )
}
