import { Container, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Text, Button } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { useProductStore } from "../store/product";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Container maxW={"1140px"} px={4}>
        <Flex
          h={"16"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDirection={{
            base: "column",
            sm: "row",
          }}
        >
          <Text
            bgGradient={"linear(to-l, #7928CA, #FF0080)"}
            bgClip={"text"}
            fontWeight={"extrabold"}
            textTransform={"uppercase"}
            fontSize={{ base: "22", sm: "28" }}
            letterSpacing={"tight"}
          >
            <Link to={"/"}>Product Store</Link>
          </Text>
          <HStack spacing={2} alignItems={"center"}>
            <Link to={"/create"}>
              <Button>
                <PlusSquareIcon fontSize={20} />
              </Button>
            </Link>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? (
                <IoIosMoon />
              ) : (
                <IoIosSunny size="20px" />
              )}
            </Button>
          </HStack>
        </Flex>
      </Container>
    </div>
  );
};

export default NavBar;
