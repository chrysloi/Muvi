import { Text, TouchableOpacity, View } from "react-native";

const Button = (props) => {
  const { title, color, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: "#fab430",
          borderRadius: 5,
          height: 40,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Text style={{ color: "#26272b" }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
