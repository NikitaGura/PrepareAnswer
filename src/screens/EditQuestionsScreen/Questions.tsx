import {FlatList, StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import {observer} from 'mobx-react-lite';
import {useRoute} from '@react-navigation/native';
import {EditQuestionsRouteProps} from '../../navigation';
import {Question} from '../../models';
import QuestionItem from './QuestionItem';

const Questions = () => {
  const {
    params: {editQuestionsStore},
  } = useRoute<EditQuestionsRouteProps>();

  const {questions} = editQuestionsStore;

  const renderItem = useCallback(
    ({item}: {item: Question}) => <QuestionItem question={item} />,
    [],
  );
  const keyExtractor = useCallback(({id}: Question) => id.toString(), []);

  return (
    <FlatList
      style={styles.list}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      data={questions.questions}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
});

export default observer(Questions);
