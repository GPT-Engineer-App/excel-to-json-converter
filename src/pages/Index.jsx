import React from "react";
import { Box, Button, Container, Heading, Text, VStack, Image, Input, useToast, Stack, Icon, HStack } from "@chakra-ui/react";
import { FaFileExcel, FaArrowRight, FaCloudUploadAlt } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleFileUpload = () => {
    toast({
      title: "File uploaded.",
      description: "We've started converting your Excel file to JSON!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10} as="section" textAlign="center" mt={10} mb={10}>
        <Image src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdHJhbnNmb3JtYXRpb258ZW58MHx8fHwxNzA5NzY2OTk2fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" alt="Data Transformation" />
        <Heading as="h1" size="xl" fontWeight="bold">
          Mr. DataTransformer
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Effortlessly convert your Excel files to JSON with just a few clicks.
        </Text>
      </VStack>

      <VStack spacing={5} as="section" mt={10} mb={20}>
        <Stack direction={["column", "row"]} spacing={4} align="center">
          <Input placeholder="Upload your Excel file" size="lg" type="file" accept=".xlsx, .xls" p={2} />
          <Button leftIcon={<FaCloudUploadAlt />} colorScheme="teal" size="lg" onClick={handleFileUpload}>
            Upload & Convert
          </Button>
        </Stack>
        <HStack spacing={2} justifyContent="center">
          <Icon as={FaFileExcel} w={6} h={6} color="green.500" />
          <Icon as={FaArrowRight} w={6} h={6} />
          <Text fontWeight="semibold">JSON</Text>
        </HStack>
      </VStack>

      <Box as="footer" textAlign="center">
        <Text fontSize="sm" color="gray.500">
          © {new Date().getFullYear()} Mr. DataTransformer. All rights reserved.
        </Text>
      </Box>
    </Container>
  );
};

export default Index;
