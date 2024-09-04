import theme from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RenderHtml, {
  CustomBlockRenderer,
  TChildrenRenderer,
  TNode,
} from "react-native-render-html";
import { CheckMarkIcon } from "../../assets/icons/icons";

const CustomComponent: CustomBlockRenderer = function CustomComponent({
  TDefaultRenderer,
  tnode,
  ...defaultRendererProps
}) {
  const childrenChunks: TNode[][] = tnode.children.map((child: TNode) => [
    child,
  ]);

  return (
    <TDefaultRenderer tnode={tnode} {...defaultRendererProps}>
      <View style={styles.container}>
        {childrenChunks.map((data, key) => (
          <View key={key} style={styles.eachItem}>
            <CheckMarkIcon
              width={20}
              height={20}
              color={theme.colors.primary700}
            />
            <Text>
              <TChildrenRenderer tchildren={data} />
            </Text>
          </View>
        ))}
      </View>
    </TDefaultRenderer>
  );
};

const tagsStyles = {
  ul: {
    marginLeft: -24,
    fontSize: 16,
    fontFamily: "AnekBangla-Regular",
  },
};

const renderers = {
  ul: CustomComponent,
};

type CustomHtmlListProps = {
  html: string;
  width: number;
};

const CustomHtmlList = ({ html, width }: CustomHtmlListProps) => {
  return (
    <RenderHtml
      contentWidth={width}
      tagsStyles={tagsStyles}
      source={{ html: html }}
      renderers={renderers}
    />
  );
};

export default CustomHtmlList;

const styles = StyleSheet.create({
  container: { gap: 16 },
  eachItem: {
    flexDirection: "row",
    gap: 12,
    width: "90%",
  },
});
