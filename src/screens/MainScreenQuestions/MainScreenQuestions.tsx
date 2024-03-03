import {FlatList, StyleSheet, View} from 'react-native';
import {
  ModalPopup,
  PlusButton,
  ScreenTitle,
  ScreenWrapper,
} from '../../components';
import {Dictionary} from '../../utils';
import ItemListQuestion from './ItemListQuestions';
import {useCallback} from 'react';
import PopupSelectedQuestion from './PopupSelectedQuestion';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../stores';
import {Questions} from '../../models';

const MainScreenQuestions = () => {
  const {
    questions: {list},
  } = useStore();

  const renderItem = useCallback(
    ({item}: {item: Questions}) => <ItemListQuestion questions={item} />,
    [],
  );

  return (
    <ScreenWrapper>
      <View style={styles.headerContainer}>
        <ScreenTitle title={Dictionary.titleMainScreenQuestions} />
        <PlusButton onPress={() => {}} />
      </View>
      <FlatList
        data={list}
        style={styles.listItem}
        renderItem={renderItem}
        keyExtractor={({id}) => id.toString()}
      />
      <ModalPopup>
        <PopupSelectedQuestion selectedQuestionListTitle="test" />
      </ModalPopup>
    </ScreenWrapper>
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

export default observer(MainScreenQuestions);
