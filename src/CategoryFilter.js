import React from 'react';
import { Box, Button, Grid, Heading, IconButton, Divider } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

function CategoryFilter({ onClose }) {
  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        width="100vw"
        height="100vh"
        bg="rgba(0, 0, 0, 0.5)"
        zIndex="998"
        onClick={onClose}
      />

      <Box
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        bg="white"
        p="6"
        pt="10"
        borderRadius="xl"
        boxShadow="lg"
        width="400px"
        textAlign="center"
        zIndex="1000"
      >
        <IconButton
          icon={<CloseIcon />}
          aria-label="Close"
          position="absolute"
          top="2"
          right="2"
          onClick={onClose}
          size="sm"
          variant="ghost"
        />
        
        <Divider mb="4" borderColor="gray.400" />
        <Heading as="h2" size="sm" mb="4" color="gray.700">
          사용자님의 관심사를 알려주세요.
        </Heading>
        <Divider mb="6" borderColor="gray.400" />
        
        <Grid templateColumns="repeat(3, 1fr)" gap={4} justifyItems="center" justifyContent="center">
          {['STUDY', 'HEALTH', 'SOCIAL', 'DEVELOP', 'DAILY', 'MENTAL', 'MONEY', 'VOLUNTEER', 'CHALLENGE'].map((category) => (
            <Button
              key={category}
              bg="gray.500"
              color="white"
              borderRadius="full"
              width="90px"
              height="90px"
              fontSize="sm"
              fontWeight="bold"
              _hover={{ bg: 'gray.600' }}
              boxShadow="md"
              _focus={{ boxShadow: 'outline' }}
              variant="solid"
            >
              {category}
            </Button>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default CategoryFilter;
