import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const imgSvg = require("./testimg.svg");
const imgPng = require("./testimg.png");

const tintColor = "#FF7B1D";

export default function App() {
  return (
    <View style={styles.container}>
      <Title>SVG tintColor repro</Title>
      <Case>
        <Bold>tintColor defined in styles</Bold>
        <Row>
          <Box>
            <Text style={styles.text}>SVG</Text>
            <Image source={imgSvg} style={[styles.image, { tintColor }]} />
          </Box>
          <Box>
            <Text style={styles.text}>PNG</Text>
            <Image source={imgPng} style={[styles.image, { tintColor }]} />
          </Box>
        </Row>
      </Case>
      <Case>
        <Bold>tintColor defined as prop</Bold>
        <Row>
          <Box>
            <Text style={styles.text}>SVG</Text>
            <Image source={imgSvg} style={styles.image} tintColor={tintColor} />
          </Box>
          <Box>
            <Text style={styles.text}>PNG</Text>
            <Image source={imgPng} style={styles.image} tintColor={tintColor} />
          </Box>
        </Row>
      </Case>
      <StatusBar style="auto" />
    </View>
  );
}

// ----------------------------------------------
// Just boilerplate code below, ignore it please.
//
//

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

function Bold({ children }) {
  return <Text style={styles.bold}>{children}</Text>;
}

function Row({ children }) {
  return <View style={styles.row}>{children}</View>;
}

function Case({ children }) {
  return <View style={styles.case}>{children}</View>;
}

function Box({ children }) {
  return <View style={styles.box}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 64,
  },
  case: {
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    gap: 24,
  },
  box: {
    gap: 12,
    paddingTop: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "600",
  },
  image: {
    width: 100,
    height: 100,
  },
});
