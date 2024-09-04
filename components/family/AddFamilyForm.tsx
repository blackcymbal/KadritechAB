import theme from "@/constants/theme";
import { BookmarkContext } from "@/contexts/bookmarkContext";
import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Typography } from "../ui";

export default function AddFamilyForm({ setShowModal }) {
  const { parent, addParent, childs, addChilds } = useContext(BookmarkContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      parent: "",
    },
  });

  const {
    control: controlChild,
    handleSubmit: handleSubmitChild,
    formState: { errors: errosChild },
  } = useForm({
    defaultValues: {
      child: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    addParent(data?.parent);
  };

  const onSubmitChild = (data) => {
    addChilds(data);
  };

  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.section}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.parent && styles.errorInput]}
              placeholder="Parent"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="parent"
        />
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={styles.button}
        >
          <Typography size="2xl" mt={1}>
            Add Parent
          </Typography>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Controller
          control={controlChild}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errosChild.child && styles.errorInput]}
              placeholder="Child"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="child"
        />
        <TouchableOpacity
          onPress={handleSubmitChild(onSubmitChild)}
          style={styles.button}
        >
          <Typography size="2xl" mt={1}>
            Add Child
          </Typography>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={styles.grandChildbutton}
      >
        <Typography size="2xl" mt={1}>
          Add GrandChild
        </Typography>
      </TouchableOpacity>
      {/* <AddGrandChildForm showModal={showModal} setShowModal={setShowModal} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    height: 48,
    flexDirection: "row",
    marginBottom: 8,
    gap: 12,
  },
  input: {
    fontSize: 16,
    fontFamily: "AnekBangla-Regular",
    color: theme.colors.gray900,
    height: 48,
    width: "60%",
    borderRadius: 8,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 12,
    justifyContent: "center",
  },
  errorInput: {
    borderColor: theme.colors.error500,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: theme.colors.gray500,
    borderRadius: 8,
    width: "35%",
  },
  grandChildbutton: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: theme.colors.gray500,
    borderRadius: 8,
    height: 48,
    width: "50%",
  },
});
