import theme from "@/constants/theme";
import { BookmarkContext } from "@/contexts/bookmarkContext";
import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Container, Typography } from "../ui";
import EachCategory from "./EachCategory";

export default function BookmarkListByCategory() {
  const { bookmarks } = useContext(BookmarkContext);

  const categorizedBookmarks = bookmarks.reduce((acc, bookmark) => {
    const { category } = bookmark;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(bookmark);
    return acc;
  }, {});

  const categorizedArray = Object.keys(categorizedBookmarks).map(
    (category) => ({
      category,
      bookmarks: categorizedBookmarks[category],
    })
  );

  return (
    <Container>
      {categorizedArray?.map((data, idx) => (
        <View key={idx} style={{ marginTop: 8 }}>
          <Typography size="xl" weight="semiBold">
            {data?.category}
          </Typography>
          <View style={styles.boxView}>
            <FlatList
              data={data?.bookmarks}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <EachCategory category={item} />}
            />
          </View>
        </View>
      ))}
    </Container>
  );
}

const styles = StyleSheet.create({
  boxView: {
    borderWidth: 1,
    borderColor: theme.colors.black,
    padding: 16,
    maxHeight: 200,
  },
});
