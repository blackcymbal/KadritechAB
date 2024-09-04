import theme from "@/constants/theme";
import { Alert } from "react-native";
import Toast, { ToastType } from "react-native-toast-message";

type ShowAlertProps = {
  message: string;
  type: "Error" | "Success";
};

type ShowToastProps = {
  message: string;
  type: ToastType;
};

export default function ShowAlert({ message, type }: ShowAlertProps) {
  Alert.alert(type, message, [
    {
      text: "OK",
    },
  ]);
}

export function ShowToast({ message, type }: ShowToastProps) {
  Toast.show({
    type: type,
    text1: type === "success" ? "Success" : type === "error" ? "Error" : "Info",
    text2: message,
    text1Style: {
      color:
        type === "success"
          ? theme.colors.success700
          : type === "error"
          ? theme.colors.error700
          : theme.colors.black,
      fontSize: 18,
    },
    text2Style: {
      color:
        type === "success"
          ? theme.colors.success700
          : type === "error"
          ? theme.colors.error700
          : theme.colors.grayDefault,
      fontSize: 14,
    },
  });
}
