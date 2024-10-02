import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import { ColorModeSwitch } from "./ColorModeSwitch";

/* HStack per posizionare orizzontalmente */

export const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10"}>
      <Image src={logo} boxSize={"60px"}></Image>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};
