import { ArrowDown } from "@/assets/icons/icons";
import theme from "@/constants/theme";
import { BookmarkContext } from "@/contexts/bookmarkContext";
import React, { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import CommonModal from "../global/CommonModal";
import { Container, Typography } from "../ui";

type AddGrandChildFormProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AddGrandChildForm({
  showModal,
  setShowModal,
}: AddGrandChildFormProps) {
  const { childs, grandchilds, addGrandChilds } = useContext(BookmarkContext);
  const [showDropDown, setShowDropDown] = useState(false);
  const [selected, setSelected] = useState(childs[0]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      grandChild: "",
    },
  });

  const onSubmit = (data) => {
    const grandChildData = {
      title: data?.grandChild,
      parent: selected?.child,
    };

    addGrandChilds(grandChildData);
    setShowModal(false);
  };

  return (
    <CommonModal
      showModal={showModal}
      setShowModal={setShowModal}
      isOverlayClose={true}
    >
      <Container
        style={{
          backgroundColor: theme.colors.gray100,
          width: "90%",
          padding: 16,
        }}
      >
        <View style={[styles.row, { paddingVertical: 12 }]}>
          <Typography size="3xl">Add grand Child</Typography>
          <TouchableOpacity onPress={() => setShowModal(false)}>
            <Typography size="3xl" weight="bold">
              X
            </Typography>
          </TouchableOpacity>
        </View>
        <View>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.input, errors.grandChild && styles.errorInput]}
                placeholder="Grand Child Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="grandChild"
          />
          <Typography>Select Parent</Typography>
          <View style={styles.input}>
            {showDropDown ? (
              <Container style={styles.dropDown}>
                {childs?.map((item, idx) => (
                  <TouchableOpacity
                    key={idx}
                    onPress={() => {
                      setSelected(item);
                      setShowDropDown(false);
                    }}
                  >
                    <Typography size="lg">
                      {idx + 1}. {item?.child}
                    </Typography>
                  </TouchableOpacity>
                ))}
              </Container>
            ) : (
              <TouchableOpacity
                onPress={() => setShowDropDown(true)}
                style={styles.row}
              >
                <Typography size="lg" mr={10}>
                  {selected?.child}
                </Typography>
                <ArrowDown height={25} width={25} />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={styles.button}
        >
          <Typography size="2xl" mt={1}>
            Add child
          </Typography>
        </TouchableOpacity>
      </Container>
    </CommonModal>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    fontFamily: "AnekBangla-Regular",
    color: theme.colors.gray900,
    height: 48,
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
  dropDown: {
    backgroundColor: theme.colors.gray100,
    position: "absolute",
    top: 0,
    width: "100%",
    borderWidth: 1,
    borderColor: theme.colors.primaryDefault,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: theme.colors.gray500,
    borderRadius: 8,
    width: "35%",
  },
});
