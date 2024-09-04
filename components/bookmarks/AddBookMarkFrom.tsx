import theme from "@/constants/theme";
import { BookmarkContext } from "@/contexts/bookmarkContext";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import CommonModal from "../global/CommonModal";
import { Button, Container, ErrorMessage, Typography } from "../ui";
import { bookmarkSchema } from "./Schemas";

type AddBookMarkFromProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AddBookMarkFrom({
  showModal,
  setShowModal,
}: AddBookMarkFromProps) {
  const { addCategory, categories, addBookmark } = useContext(BookmarkContext);
  const [newCategory, setNewCategory] = useState("");

  const [showDropDown, setShowDropDown] = useState(false);
  const [selected, setSelected] = useState(categories[0]);
  const [showAddField, setShowAddField] = useState(false);

  useEffect(() => {
    setSelected(categories[0]);
  }, [categories]);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(bookmarkSchema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    const requestData = {
      ...data,
      category: selected?.title,
    };

    addBookmark(requestData);

    setShowModal(false);
  };

  return (
    <CommonModal
      showModal={showModal}
      setShowModal={setShowModal}
      isOverlayClose={true}
    >
      <Container
        py={4}
        style={{
          width: "100%",
          backgroundColor: "white",
          borderRadius: 8,
        }}
      >
        <Typography size="xl" weight="medium">
          Add BookMark
        </Typography>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="title"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.title && styles.errorInput]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Title"
            />
          )}
        />
        {errors.title?.message && (
          <ErrorMessage
            message={errors.title?.message}
            style={styles.errorText}
          />
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="url"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.url && styles.errorInput]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Url"
            />
          )}
        />
        {errors.url?.message && (
          <ErrorMessage
            message={errors.url?.message}
            style={styles.errorText}
          />
        )}
        <View
          style={{
            flexDirection: "row",
            gap: 4,
          }}
        >
          <View style={{ flex: 4 }}>
            {showAddField ? (
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                name="category"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={[styles.input, errors.category && styles.errorInput]}
                    onBlur={onBlur}
                    onChangeText={(text) => {
                      setNewCategory(text);
                      onChange(text);
                    }}
                    value={newCategory}
                    placeholder="New Category Name"
                  />
                )}
              />
            ) : (
              <Container style={styles.input}>
                {showDropDown ? (
                  <Container style={styles.dropDown}>
                    {categories.map((item, idx) => (
                      <TouchableOpacity
                        key={idx}
                        onPress={() => {
                          setSelected(item);
                          setShowDropDown(false);
                        }}
                      >
                        <Typography size="lg">
                          {idx + 1}. {item?.title}
                        </Typography>
                      </TouchableOpacity>
                    ))}
                  </Container>
                ) : (
                  <TouchableOpacity onPress={() => setShowDropDown(true)}>
                    <Typography size="lg">{selected?.title}</Typography>
                  </TouchableOpacity>
                )}
              </Container>
            )}
          </View>

          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.add}
              onPress={() => {
                if (showAddField) {
                  addCategory(newCategory);
                  setShowAddField(false);
                } else {
                  setShowAddField(true);
                }
              }}
            >
              <Typography size="3xl" mt={1}>
                +
              </Typography>
            </TouchableOpacity>
          </View>
        </View>

        <Button
          active={isValid ? true : false}
          onPress={handleSubmit(onSubmit)}
        >
          Save
        </Button>
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
  errorText: {
    marginBottom: 8,
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
  add: {
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: theme.colors.black,
  },
});
