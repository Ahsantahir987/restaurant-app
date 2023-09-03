import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome Back!</Text>
      </View>
      <View style={styles.form}>
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
        <TouchableOpacity style={styles.forget}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.createAccount}>
          <Text>Don't Have Account? </Text>
          <Text style={styles.createAccountText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
  forget: {
    width: "100%",
    alignItems: "flex-end",
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
  forgotPasswordText: {
    marginTop: 10,
    color: "darkturquoise",
    textDecorationLine: "underline",
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

export default LoginScreen;
