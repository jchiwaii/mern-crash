import { Container, Input, VStack } from "@chakra-ui/react";
import React from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

const CreatePage = () => {
  const [newProduct, setNewProduct] = React.useState({
    name: "",
    price: "",
    image: "",
  });

  const handleProduct = (e) => {
    e.preventDefault();
    // Logic to handle product creation
    console.log("Product created:", newProduct);
  };

  return (
    <div>
      <Container maxW="container.sm" mt={8}>
        <VStack spacing={4}>
          <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={4}>
            Create New Product
          </Heading>
          <Box
            w={"full"}
            bg={useColorModeValue("white", "gray.700")} // Fixed: proper useColorModeValue usage
            p={6}
            rounded="lg"
            boxShadow="md"
            as="form"
            borderRadius="md"
          >
            <VStack spacing={4}>
              <Input
                placeholder="Product Name"
                name="name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
              <Input
                placeholder="Product Price"
                name="price"
                type="number"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
              <Input
                placeholder="Product Image URL"
                name="image"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
              />
              <Button
                colorScheme="teal"
                width="full"
                onClick={handleProduct}
                type="submit"
              >
                Create Product
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </div>
  );
};

export default CreatePage;
