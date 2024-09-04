import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

function useAsyncStorage<TValue>(
  key: string,
  initValue: TValue,
  parse?: (item: unknown) => TValue
): [TValue, (value: TValue) => void, () => void] {
  // const [stateValue, setStateValue] = useState<TValue>(() => {
  //   try {
  //     const item = AsyncStorage.getItem(key);

  //     if (!item) {
  //       return initValue;
  //     }

  //     if (parse) {
  //       return parse(JSON.parse(item));
  //     }

  //     return JSON.parse(item);
  //   } catch (error) {
  //     return initValue;
  //   }
  // });

  const [stateValue, setStateValue] = useState<TValue>(initValue);

  useEffect(() => {
    const loadItem = async () => {
      try {
        const item = await AsyncStorage.getItem(key);
        if (item !== null) {
          const parsedItem = parse ? parse(JSON.parse(item)) : JSON.parse(item);
          setStateValue(parsedItem);
        }
      } catch (error) {
        console.log("Error loading data from AsyncStorage", error);
      }
    };

    loadItem();
  }, [key, parse]);

  const setValue = useCallback(
    async (value: TValue) => {
      try {
        setStateValue(value);
        await AsyncStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        //
      }
    },
    [key]
  );

  const deleteValue = useCallback(
    async () => await AsyncStorage.removeItem(key),
    [key]
  );

  return [stateValue, setValue, deleteValue];
}

export default useAsyncStorage;
