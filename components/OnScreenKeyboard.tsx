import { Ionicons } from '@expo/vector-icons';
import {
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { Colors } from '../constants/Colors';

type OnScreenKeyboardProps = {
  onKeyPressed: (key: string) => void;
  greenLetters: string[];
  yellowLetters: string[];
  grayLetters: string[];
};

export const ENTER = 'ENTER';
export const BACKSPACE = 'BACKSPACE';

const keys = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  [ENTER, 'z', 'x', 'c', 'v', 'b', 'n', 'm', BACKSPACE],
];

const OnScreenKeyboard = ({
  onKeyPressed,
  greenLetters,
  yellowLetters,
  grayLetters,
}: OnScreenKeyboardProps) => {
  const { width } = useWindowDimensions();
  const keyWidth = (width - 60) / keys[0].length;
  const keyHeight = 60;

  const isSpecialKey = (key: string) => [ENTER, BACKSPACE].includes(key);
  const isLetters = (key: string) =>
    [...greenLetters, ...yellowLetters, ...grayLetters].includes(key);

  return (
    <View style={styles.container}>
      {keys.map((row, rowIndex) => (
        <View key={`row-${rowIndex}`} style={styles.row}>
          {row.map((key, keyIndex) => (
            <Pressable
              key={`key-${keyIndex}`}
              style={({ pressed }) => [
                styles.key,
                { width: keyWidth, height: keyHeight, backgroundColor: '#ddd' },
                isSpecialKey(key) && { width: keyWidth * 1.5 },
                {
                  backgroundColor: greenLetters.includes(key)
                    ? Colors.light.green
                    : yellowLetters.includes(key)
                    ? Colors.light.yellow
                    : grayLetters.includes(key)
                    ? Colors.light.gray
                    : '#ddd',
                },
                pressed && { backgroundColor: '#868686' },
              ]}
              onPress={() => onKeyPressed(key)}
            >
              <Text
                style={[
                  styles.keyText,
                  key === ENTER && { fontSize: 12 },
                  isLetters(key) && { color: '#fff' },
                ]}
              >
                {isSpecialKey(key) ? (
                  key === ENTER ? (
                    'ENTER'
                  ) : (
                    <Ionicons
                      name='backspace-outline'
                      size={24}
                      color='black'
                    />
                  )
                ) : (
                  key
                )}
              </Text>
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
};

export default OnScreenKeyboard;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    gap: 4,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
  key: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  keyText: {
    fontWeight: 'bold',
    fontSize: 19,
    textTransform: 'uppercase',
  },
});