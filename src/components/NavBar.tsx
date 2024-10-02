import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";

/* HStack per posizionare orizzontalmente */

export const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={"60px"}></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};
