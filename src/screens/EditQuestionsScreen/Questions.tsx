import {FlatList, StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import {observer} from 'mobx-react-lite';
import {Question} from '../../models';
import QuestionItem from './QuestionItem';
import {useStore} from '../../stores';

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
      data={questions.currentSelectedQuestion?.questions}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
});

export default observer(Questions);
