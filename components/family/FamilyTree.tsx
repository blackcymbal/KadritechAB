import theme from "@/constants/theme";
import { BookmarkContext } from "@/contexts/bookmarkContext";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Typography } from "../ui";

export default function FamilyTree() {
  const { parent, childs, grandchilds } = useContext(BookmarkContext);

  const childByParent = grandchilds.reduce((acc, child) => {
    const { parent } = child;
    if (!acc[parent]) {
      acc[parent] = [];
    }
    acc[parent].push(child);
    return acc;
  }, {});

  return (
    <View style={{ alignItems: "center" }}>
      <Typography size="3xl">Family Tree</Typography>
      {!!parent && (
        <>
          <Typography size="2xl" weight="bold">
            {parent}
          </Typography>
          <View style={{ alignItems: "center", width: "100%" }}>
            <View style={styles.verticleLine} />
            <View style={styles.horizontalLine} />
          </View>
          <View style={{ flexDirection: "row" }}>
            {childs?.map((data, idx) => (
              <View
                key={idx}
                style={{ alignItems: "center", paddingHorizontal: 4 }}
              >
                <View style={styles.verticleLine} />
                <Typography size="xl" px={2} weight="semiBold">
                  {data?.child}
                </Typography>
                <View style={styles.verticleLine} />
                <View style={styles.horizontalLine} />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  {childByParent[data?.child]?.map((item, index) => (
                    <View
                      key={index}
                      style={{ alignItems: "center", paddingHorizontal: 4 }}
                    >
                      <View style={styles.verticleLine} />
                      <Typography key={index}>{item?.title}</Typography>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  verticleLine: {
    height: 40,
    width: 1,
    backgroundColor: theme.colors.gray900,
  },
  horizontalLine: {
    width: "100%",
    height: 1,
    backgroundColor: theme.colors.gray900,
  },
});
