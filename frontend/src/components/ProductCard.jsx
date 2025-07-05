import React from "react";
import { Box, VStack, HStack, Text, Image, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
        {/* Product Image - Clickable to view details */}
        <Link to={`/product/${product._id}`}>
          <Image
            src={product.image}
            alt={product.name}
            width="100%"
            height="300px"
            objectFit="cover"
            borderRadius="md"
            cursor="pointer"
            _hover={{ opacity: 0.8 }}
          />
        </Link>

        {/* Product Info - Also clickable */}
        <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
          <VStack spacing={1} cursor="pointer">
            <Text fontSize="xl" fontWeight="bold" textAlign="center">
              {product.name}
            </Text>
            <Text color="gray.600" fontSize="lg">
              ${product.price}
            </Text>
          </VStack>
        </Link>

        {/* Action Buttons - Separate from Link */}
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
