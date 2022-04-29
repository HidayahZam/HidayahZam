import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from "react-native";
import React from "react";

import { GlobalStyles } from "../../constant/Styles";
import { FormStyles } from "../../constant/FormStyles";

// const [text, onChangeText] = React.useState("Useless Text");

function DummyForm() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/images/background.png")}
        resizeMode="cover"
        style={Styles.image}
      >
        {/* <TestLogo style={GlobalStyles.bgImage} /> */}
        <View style={GlobalStyles.FormLayout}>
          {/* <Text>Open up App.js to start working on your app!</Text> */}
          <Text style={FormStyles.title}>Announcement Form</Text>
          <View>
            <View name="Title">
              <View name="Question">
                <Text style={FormStyles.question}>Title</Text>
              </View>
              <View name="answer">
                <TextInput
                  style={FormStyles.input}
                  // onChangeText={onChangeText}
                  placeholder="Insert title"
                />
              </View>
            </View>
            <View name="Date of Event">
              <View name="Question">
                <Text style={FormStyles.question}>Date of Event</Text>
              </View>
              <View name="answer">
                <TextInput
                  style={FormStyles.input}
                  // onChangeText={onChangeText}
                  placeholder="Insert title"
                />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
export default DummyForm;

const Styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
