import { Container, Input, VStack } from "@chakra-ui/react";
import React from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { useProductStore } from "../store/product";
import { useToast } from "@chakra-ui/react";

const CreatePage = () => {
  const [newProduct, setNewProduct] = React.useState({
    name: "",
    price: "",
    image: "",
  });

  const toast = useToast();

  const { createProduct } = useProductStore();

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const response = await createProduct(newProduct);
    if (response.success) {
      toast({
        title: "Product Created",
        description: response.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setNewProduct({ name: "", price: "", image: "" }); // Reset form
    } else {
      toast({
        title: "Error",
        description: response.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
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
            bg={useColorModeValue("white", "gray.700")}
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
                isRequired
              />
              <Input
                placeholder="Product Price"
                name="price"
                type="number"
                step="0.01"
                min="0"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
                isRequired
              />
              <Input
                placeholder="Product Image URL"
                name="image"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
                isRequired
              />
              <Button
                colorScheme="teal"
                width="full"
                onClick={handleAddProduct}
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
