import React from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Container } from "../ui";

const { width, height } = Dimensions.get("screen");

type CommonModalProps = {
  children: JSX.Element | JSX.Element[];
  showModal: boolean;
  setShowModal: (val: boolean) => void;
  isOverlayClose?: boolean;
  wrapperStyle?: object;
};

export default function CommonModal({
  children,
  showModal,
  setShowModal,
  isOverlayClose,
  wrapperStyle,
}: CommonModalProps) {
  const closeModal = () => {
    if (isOverlayClose) {
      setShowModal(false);
    }
  };

  return (
    showModal && (
      <View style={{ ...styles.modal, ...wrapperStyle }}>
        <TouchableWithoutFeedback onPress={() => closeModal()}>
          <Container
            style={{
              width: width,
              height: height,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableWithoutFeedback onPress={() => {}}>
              {children}
            </TouchableWithoutFeedback>
          </Container>
        </TouchableWithoutFeedback>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.40)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
  },
});
