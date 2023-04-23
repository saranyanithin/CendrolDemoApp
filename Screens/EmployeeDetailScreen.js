import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import axios from "axios";
import { data } from "./data";
import { useState, useEffect } from "react";

function EmployeeDetailScreen({ route, navigation }) {
  const [detail, setDetail] = useState([]);
  const empId = route.params?.id;
  // const result = Data.filter((item) => item.id === empId);
  const URL = "https://dummy.restapiexample.com/api/v1/employee/" + empId;

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => response.data)
      .then((data) => {
        setDetail(data["data"]);
      });
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.view}>
          <Text style={styles.text}>Employee Name: {detail.employee_name}</Text>
          <Text style={styles.text}>
            Employee Salary: {detail.employee_salary}
          </Text>
          <Text style={styles.text}>employee Age: {detail.employee_age}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default EmployeeDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  view: {
    flex: 1,
    backgroundColor: "beige",
    borderWidth: 2.5,
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  scrollView: {
    // backgroundColor: "pink",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
  },
});
