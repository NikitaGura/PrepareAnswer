import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../utils';
import {Questions, useStore} from '../../stores';
import {observer} from 'mobx-react-lite';
import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {MainScreenQuestionsNavigationProp, ScreensName} from '../../navigation';

type Props = {
  questions: Questions;
};

const ItemListQuestion = ({questions}: Props) => {
  const {number, title} = questions;

  const {
    questions: {selectQuestions},
  } = useStore();

  const navigation = useNavigation<MainScreenQuestionsNavigationProp>();

  const onSelectQuestions = useCallback(() => {
    selectQuestions(questions);
    navigation.push(ScreensName.Modal);
  }, [navigation, questions, selectQuestions]);

  return (
    <TouchableOpacity onPress={onSelectQuestions} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.circle}>
        <Text style={styles.number}>{number}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.LightBluePrimary25,
    borderRadius: 15,
    marginVertical: 10,
    padding: 10,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: Colors.DarkPrimary75,
    fontSize: 20,
    fontFamily: 'Roboto Medium',
  },
  circle: {
    borderRadius: 45,
    width: 45,
    height: 45,
    backgroundColor: Colors.PrimaryBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 20,
    color: Colors.GrayLightPrimary,
    fontFamily: 'Roboto Bold',
  },
});

export default observer(ItemListQuestion);
