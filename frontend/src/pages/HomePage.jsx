import React, { useEffect } from "react";
import {
  Container,
  VStack,
  Text,
  SimpleGrid,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products, deleteProduct, updateProduct } =
    useProductStore();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [editingProduct, setEditingProduct] = React.useState(null);
  const [editForm, setEditForm] = React.useState({
    name: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleDeleteProduct = async (pid) => {
    const result = await deleteProduct(pid);
    if (result.success) {
      toast({
        title: "Product Deleted",
        description: result.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error",
        description: result.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleEditProduct = (pid) => {
    const product = products.find((p) => p._id === pid);
    if (product) {
      setEditingProduct(product);
      setEditForm({
        name: product.name,
        price: product.price.toString(),
        image: product.image,
      });
      onOpen();
    }
  };

  const handleUpdateProduct = async () => {
    if (!editingProduct) return;

    const result = await updateProduct(editingProduct._id, editForm);
    if (result.success) {
      toast({
        title: "Product Updated",
        description: result.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onClose();
      setEditingProduct(null);
      setEditForm({ name: "", price: "", image: "" });
    } else {
      toast({
        title: "Error",
        description: result.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Container maxW="container.xl" p={12}>
        <VStack spacing={8}>
          <Text
            fontSize={"30"}
            fontWeight="bold"
            bgGradient="linear(to-r, teal.500, blue.500)"
            bgClip="text"
            textAlign="center"
          >
            Current Products
          </Text>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={8}
            width="100%"
            justifyContent="center"
            alignItems="center"
            minChildWidth="300px"
          >
            {products && products.length > 0 ? (
              products.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  onEdit={handleEditProduct}
                  onDelete={handleDeleteProduct}
                />
              ))
            ) : (
              <VStack
                spacing={4}
                justifyContent="center"
                alignItems="center"
                display={"flex"}
                width={"100%"}
                textAlign={"center"}
              >
                <Text fontSize="lg" color="gray.500">
                  No products available.
                </Text>
                <Text fontSize={"xl"} textAlign={"center"} fontWeight={"bold"}>
                  <Link to={"/create"}>
                    <Text
                      as={"span"}
                      color="teal.500"
                      fontWeight="bold"
                      _hover={{ textDecoration: "underline" }}
                      textDecoration="none"
                    >
                      Add Your First Product
                    </Text>
                  </Link>
                </Text>
              </VStack>
            )}
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Edit Product Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input
                placeholder="Product Name"
                value={editForm.name}
                onChange={(e) =>
                  setEditForm({ ...editForm, name: e.target.value })
                }
              />
              <Input
                placeholder="Product Price"
                type="number"
                value={editForm.price}
                onChange={(e) =>
                  setEditForm({ ...editForm, price: e.target.value })
                }
              />
              <Input
                placeholder="Product Image URL"
                value={editForm.image}
                onChange={(e) =>
                  setEditForm({ ...editForm, image: e.target.value })
                }
              />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleUpdateProduct}>
              Update
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HomePage;
