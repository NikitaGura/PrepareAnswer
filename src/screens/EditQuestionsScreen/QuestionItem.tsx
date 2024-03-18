import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {memo} from 'react';
import {Question} from '../../models';
import {Colors} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {EditQuestionsNavigationProp, ScreensName} from '../../navigation';

type Props = {
  question: Question;
};

const QuestionItem = ({question}: Props) => {
  const navigation = useNavigation<EditQuestionsNavigationProp>();

  const onPress = () => {
    navigation.push(ScreensName.EditQuestion);
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{question.question}</Text>
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
    paddingVertical: 20,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: Colors.DarkPrimary75,
    fontSize: 20,
    fontFamily: 'Roboto Medium',
  },
});

export default memo(QuestionItem);
