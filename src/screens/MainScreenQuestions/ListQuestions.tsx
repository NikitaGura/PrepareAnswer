import {observer} from 'mobx-react-lite';
import React, {useCallback} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Questions} from '../../models';
import {useStore} from '../../stores';
import ItemListQuestions from './ItemListQuestions';

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
});

export default observer(ListQuestions);
