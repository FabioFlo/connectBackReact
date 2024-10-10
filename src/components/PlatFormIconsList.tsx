import { Platform } from "../hooks/useGames";
import { Text } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}
export const PlatFormIconsList = ({ platforms }: Props) => {
  return (
    <>
      {platforms.map((platform) => (
        <Text>{platform.name}</Text>
      ))}
    </>
  );
};
