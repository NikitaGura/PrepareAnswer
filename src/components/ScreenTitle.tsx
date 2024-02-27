import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../utils';

type Props = {
  title: string;
};

const ScreenTitle = ({title}: Props) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.contianerBorder}>
        <View style={styles.borderBlack} />
        <View style={styles.borderGray} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    color: Colors.DarkPrimary,
  },
  contianerBorder: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  borderBlack: {
    height: 6,
    width: 90,
    backgroundColor: Colors.DarkPrimary,
  },
  borderGray: {
    height: 1,
    width: 110,
    backgroundColor: Colors.DarkPrimary75,
  },
});

export default ScreenTitle;
