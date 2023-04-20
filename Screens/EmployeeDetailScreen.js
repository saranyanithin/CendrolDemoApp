import { View, Text, StyleSheet } from "react-native";
import axios from "axios";
import { data } from "./data";

function EmployeeDetailScreen({ navigation }) {
  const Data = data;
  const empId = route.params?.id;
  const result = Data.filter((item) => item.id === empId);
  console.log(result);
  return (
    <View>
      <Text>Employee Name: {result[0].employee_name}</Text>
      <Text>Employee Salary: {result[0].employee_salary}</Text>
      <Text>employee Age: {result[0].employee_age}</Text>
    </View>
  );
}

export default EmployeeDetailScreen;

const styles = StyleSheet.create({});
