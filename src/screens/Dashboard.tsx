import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { Navigation } from "../types";
import { logoutUser } from "../api/auth-api";

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>Começo</Header>
    <Paragraph>
      teste
    </Paragraph>
    <Button mode="outlined" onPress={() => logoutUser()}>
      Sair
    </Button>
  </Background>
);

export default memo(Dashboard);
