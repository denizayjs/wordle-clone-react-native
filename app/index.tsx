import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '@/assets/images/wordle-icon.svg';
import { Link } from 'expo-router';
import { format } from 'date-fns';
import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';
import ThemeText from '@/components/ThemeText';

export default function Index() {
  const colorScheme = useColorScheme();
  const backgroundColor = Colors[colorScheme ?? 'light'].background;
  const textColor = Colors[colorScheme ?? 'light'].text;

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.header}>
        <Icon width={100} height={70} />
        <ThemeText style={styles.title}>Wordle</ThemeText>
        <ThemeText style={styles.text}>
          Get 6 changes to guess a 5-letter word.
        </ThemeText>
      </View>
      <View style={styles.menu}>
        <Link
          href={'/game'}
          style={[
            styles.btn,
            // styles.primaryItem,
            { backgroundColor: colorScheme === 'light' ? '#000' : '#4a4a4a' },
          ]}
          asChild
        >
          <TouchableOpacity>
            <Text style={[styles.btnText, styles.primaryText]}>Play</Text>
          </TouchableOpacity>
        </Link>
        <TouchableOpacity style={[styles.btn, { borderColor: textColor }]}>
          <ThemeText style={[styles.btnText]}>Log In</ThemeText>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { borderColor: textColor }]}>
          <ThemeText style={[styles.btnText]}>Subscribe</ThemeText>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <ThemeText style={styles.footerDate}>
          {format(new Date(), 'MMMM d, yyyy ')}
        </ThemeText>
        <ThemeText style={styles.footerText}>No. 1151</ThemeText>
        <ThemeText style={styles.footerText}>Edited by Deniz AY</ThemeText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 50,
    gap: 40,
  },
  header: {
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 40,
    fontFamily: 'FrankRuhlLibre_800ExtraBold',
  },
  text: {
    fontSize: 26,
    textAlign: 'center',
    fontFamily: 'FrankRuhlLibre_500Medium',
  },
  menu: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderColor: '#000',
    borderWidth: 1,
    width: '60%',
    maxWidth: 200,
  },
  btnText: {
    fontSize: 16,
    padding: 14,
    fontWeight: 'semibold',
    color: '#333',
  },
  //   primaryItem: { backgroundColor: '#000' },
  primaryText: { color: '#fff' },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 14,
  },
  footerDate: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
