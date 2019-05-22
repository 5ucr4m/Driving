import React, { Component, Fragment } from "react";
import { TouchableOpacity } from "react-native";
import rgba from "hex-to-rgba";
import VectorIcon from "react-native-vector-icons/FontAwesome";

import Text from "../../components/Text";

import { Container } from "./styles";
import Card from "../../components/Card";
import {
  Content,
  Block,
  Badge,
  BadgeIcon,
  Menu,
  Icon,
  Line,
  CardGradient
} from "../../styles";

import { theme, mocks } from "../../constants";

class Welcome extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Fragment>
        <Container showsVerticalScrollIndicator={false}>
          {this.renderMonthly(navigation)}
          {this.renderAwards()}
          {this.renderTrips()}
        </Container>
        {this.renderTripButtom(navigation)}
      </Fragment>
    );
  }

  renderMonthly(nav) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => nav.navigate("Rewards")}
      >
        <Card shadow>
          <Icon source={require("../../assets/images/Icon/More.png")} />
          <Block>
            <Block center>
              <Text h1 spacing={1.7} color="primary">
                R$11,71
              </Text>
              <Text spacing={0.7}>Recompensa total no mês</Text>
            </Block>
            <Line hLine />
            <Block row>
              <Block center>
                <Text
                  size={20}
                  spacing={0.6}
                  color="primary"
                  style={{ marginBottom: 6 }}
                >
                  8,1
                </Text>
                <Text body spacing={0.7}>
                  Pontuação do
                </Text>
                <Text body spacing={0.7}>
                  Motorista
                </Text>
              </Block>
              <Line vLine />
              <Block center>
                <Text
                  size={20}
                  spacing={0.6}
                  color="primary"
                  style={{ marginBottom: 6 }}
                >
                  37
                </Text>
                <Text body spacing={0.7}>
                  Nível do
                </Text>
                <Text body spacing={0.7}>
                  Motorista
                </Text>
              </Block>
            </Block>
          </Block>
        </Card>
      </TouchableOpacity>
    );
  }

  renderAwards() {
    return (
      <CardGradient
        shadow
        end={{ x: 1, y: 0 }}
        colors={["#FF9988", theme.colors.accent]}
      >
        <Block row>
          <Block middle flex={0.4}>
            <BadgeIcon
              size={74}
              radius={40}
              color={rgba(theme.colors.white, "0.2")}
            >
              <BadgeIcon
                size={52}
                radius={30}
                color={rgba(theme.colors.white, "0.2")}
              >
                <VectorIcon name="trophy" color="white" size={29} />
              </BadgeIcon>
            </BadgeIcon>
          </Block>
          <Block middle>
            <Text color="white" spacing={0.4} medium size={theme.sizes.base}>
              Wohoo!
            </Text>
            <Text color="white" spacing={0.4} medium size={theme.sizes.base}>
              Dirija com Segurança!
            </Text>
          </Block>
        </Block>
      </CardGradient>
    );
  }

  renderTrip = trip => (
    <Card shadow key={`trip-${trip.id}`}>
      <Block
        row
        style={{
          justifyContent: "space-between",
          marginBottom: theme.sizes.base * 2
        }}
      >
        <Text spacing={0.5} caption>
          {trip.date}
        </Text>
        <Text spacing={0.5} caption color="primary">
          {trip.score}
        </Text>
        <Text spacing={0.5} caption>
          {trip.distance}
        </Text>
      </Block>
      <Block row center>
        <BadgeIcon
          size={14}
          radius={10}
          color={rgba(theme.colors.accent, "0.2")}
        >
          <BadgeIcon size={8} radius={5} color={theme.colors.accent} />
        </BadgeIcon>
        <Text color="gray" spacing={0.5} style={{ marginLeft: 8 }}>
          {trip.from}
        </Text>
      </Block>
      <Block row center>
        <BadgeIcon
          size={14}
          radius={10}
          color={rgba(theme.colors.white, "0.2")}
        >
          <BadgeIcon size={4} radius={2} color={theme.colors.gray} />
        </BadgeIcon>
      </Block>
      <Block row center>
        <BadgeIcon
          size={14}
          radius={10}
          color={rgba(theme.colors.primary, "0.2")}
        >
          <BadgeIcon size={8} radius={5} color={theme.colors.primary} />
        </BadgeIcon>
        <Text color="gray" spacing={0.5} style={{ marginLeft: 8 }}>
          {trip.to}
        </Text>
      </Block>
    </Card>
  );

  renderTrips() {
    return (
      <Block>
        <Text
          spacing={0.4}
          transform="uppercase"
          style={{ marginBottom: theme.sizes.base }}
        >
          Viagens Recentes
        </Text>
        {mocks.trips.map(this.renderTrip)}
      </Block>
    );
  }

  renderTripButtom(nav) {
    return (
      <BadgeIcon
        button
        color={rgba(theme.colors.primary, "0.1")}
        size={144}
        radius={100}
      >
        <TouchableOpacity onPress={() => nav.navigate("Trip")}>
          <BadgeIcon color={theme.colors.primary} size={82} radius={100}>
            <VectorIcon name="car" color="white" size={30} />
          </BadgeIcon>
        </TouchableOpacity>
      </BadgeIcon>
    );
  }
}

Welcome.navigationOptions = {
  headerTitle: <Text header>Bem Vindo</Text>,
  headerRight: (
    <TouchableOpacity>
      <Content>
        <Menu
          resizeMode="contain"
          source={require("../../assets/images/Icon/Menu.png")}
        />
        <Badge color="accent" />
      </Content>
    </TouchableOpacity>
  )
};

export default Welcome;
