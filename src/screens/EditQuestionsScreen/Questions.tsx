import {FlatList, StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import {observer} from 'mobx-react-lite';
import QuestionItem from './QuestionItem';
import {Question, useStore} from '../../stores';
import {sharedValues} from '../../utils';

const Questions = () => {
  const {questions} = useStore();

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
      contentContainerStyle={styles.containerStyleList}
      data={questions.currentSelectedQuestions?.questions}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
  containerStyleList: {
    paddingHorizontal: sharedValues.paddingHorizontalScreen,
  },
});

export default observer(Questions);
