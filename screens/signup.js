import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}> Create Account</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <View style={styles.inputPrefix}>
            <Image
              source={require("../assets/person.png")}
              style={styles.prefixLogo}
            />
          </View>
          <TextInput style={styles.input} placeholder="First Name" />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputPrefix}>
            <Image
              source={require("../assets/person.png")}
              style={styles.prefixLogo}
            />
          </View>
          <TextInput style={styles.input} placeholder="Last Name" />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputPrefix}>
            <Image
              source={require("../assets/email.png")}
              style={styles.prefixLogo}
            />
          </View>
          <TextInput style={styles.input} placeholder="E-mail" />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputPrefix}>
            <Image
              source={require("../assets/password.png")}
              style={styles.prefixLogo}
            />
          </View>
          <TextInput style={styles.input} placeholder="Password" />
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.createAccount}>
          <Text>Already Have an Account? </Text>
          <Text style={styles.createAccountText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 2.2,
    backgroundColor: "darkturquoise",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
    elevation: 10,
  },
  form: { width: "100%", flex: 4, paddingHorizontal: 20 },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 15,
  },
  inputPrefix: {
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  prefixLogo: {
    width: 25,
    height: 20,
    resizeMode: "contain",
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    marginLeft: 5,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "darkturquoise",
    borderRadius: 10,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  createAccountText: {
    color: "darkturquoise",
    textDecorationLine: "underline",
  },
  createAccount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});

export default SignUpScreen;
