import AddFamilyForm from "@/components/family/AddFamilyForm";
import AddGrandChildForm from "@/components/family/AddGrandChildForm";
import FamilyTree from "@/components/family/FamilyTree";
import { Container } from "@/components/ui";
import theme from "@/constants/theme";
import React, { useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet } from "react-native";

export default function HomeScreen() {
  const [newCategory, setNewCategory] = useState("");
  const [showModal, setShowModal] = useState(false);

  console.log("showModal", showModal);

  return (
    <Container style={styles.container}>
      <SafeAreaView />
      <AddFamilyForm setShowModal={setShowModal} />
      <FamilyTree />
      <AddGrandChildForm showModal={showModal} setShowModal={setShowModal} />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    backgroundColor: theme.colors.gray50,
  },
  title: { fontSize: 24, marginBottom: 20 },
  category: { fontSize: 18, marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
});
