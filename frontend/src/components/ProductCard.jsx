import React from "react";
import { Box, VStack, HStack, Text, Image, IconButton } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <Box
      p={4}
      borderWidth={1}
      borderRadius="md"
      boxShadow="md"
      _hover={{ boxShadow: "lg" }}
      width="100%"
    >
      <VStack spacing={3}>
        {/* Product Image - No longer clickable */}
        <Image
          src={product.image}
          alt={product.name}
          width="100%"
          height="300px"
          objectFit="cover"
          borderRadius="md"
        />

        {/* Product Info - No longer clickable */}
        <VStack spacing={1}>
          <Text fontSize="xl" fontWeight="bold" textAlign="center">
            {product.name}
          </Text>
          <Text color="gray.600" fontSize="lg">
            ${product.price}
          </Text>
        </VStack>

        {/* Action Buttons */}
        <HStack spacing={2}>
          <IconButton
            icon={<EditIcon />}
            colorScheme="blue"
            aria-label="Edit Product"
            onClick={() => onEdit(product._id)}
            size="sm"
          />
          <IconButton
            icon={<DeleteIcon />}
            colorScheme="red"
            aria-label="Delete Product"
            onClick={() => onDelete(product._id)}
            size="sm"
          />
        </HStack>
      </VStack>
    </Box>
  );
};

export default ProductCard;
