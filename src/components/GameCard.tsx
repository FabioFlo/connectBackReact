import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
interface Props {
  game: Game;
}
/* overflow_{'hidden'} nel caso in cui l'immagine sia più grande della card, in questo modo arrotonda tutti gli angoli */
export const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image} padding={10}></Image>
      <CardBody borderRadius={10} overflow={"hidden"}>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};
