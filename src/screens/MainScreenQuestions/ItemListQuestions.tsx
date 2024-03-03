import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../utils';
import {useStore} from '../../stores';
import {observer} from 'mobx-react-lite';
import {Questions} from '../../models';
import {useCallback} from 'react';

type Props = {
  questions: Questions;
};

const ItemListQuestion = ({questions}: Props) => {
  const {number, title} = questions;

  const {
    modalPopup: {show},
    questions: {selectListQuestions},
  } = useStore();

  const onSelectQuetions = useCallback(() => {
    selectListQuestions(questions);
    show();
  }, [questions, selectListQuestions, show]);

  return (
    <TouchableOpacity onPress={onSelectQuetions} style={styles.container}>
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
