import {observer} from 'mobx-react-lite';
import React, {useCallback} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Questions, useStore} from '../../stores';
import ItemListQuestions from './ItemListQuestions';
import {sharedValues} from '../../utils';

const ListQuestions = () => {
  const {
    questions: {list},
  } = useStore();

  const renderItem = useCallback(
    ({item}: {item: Questions}) => <ItemListQuestions questions={item} />,
    [],
  );
  const keyExtractor = useCallback(({id}: Questions) => id.toString(), []);

  return (
    <FlatList
      data={list}
      style={styles.listItem}
      contentContainerStyle={styles.contentContainerStyle}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  listItem: {
    marginTop: 20,
    height: '100%',
  },
  contentContainerStyle: {
    paddingHorizontal: sharedValues.paddingHorizontalScreen,
  },
});

export default observer(ListQuestions);
