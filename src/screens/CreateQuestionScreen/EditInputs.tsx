import {View, StyleSheet} from 'react-native';
import React from 'react';
import {PrimaryTextInput} from '../../components';
import {observer} from 'mobx-react-lite';
import {Dictionary} from '../../utils';
import {useRoute} from '@react-navigation/native';
import {CreateQuestionRouteProps} from '../../navigation';

const EditInputs = () => {
  const {params} = useRoute<CreateQuestionRouteProps>();

  return (
    <View>
      <View style={styles.space} />
      <PrimaryTextInput
        minHeight={80}
        placeholder={Dictionary.typeQuestion}
        value={params.addQuestionStore.questionField?.state.value}
        updateValue={params.addQuestionStore.questionField?.actions.onChange}
      />
      <View style={styles.space} />
      <PrimaryTextInput
        minHeight={80}
        placeholder={Dictionary.typeAnswer}
        value={params.addQuestionStore.answerField?.state.value}
        updateValue={params.addQuestionStore.answerField?.actions.onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  space: {
    height: 10,
  },
});

export default observer(EditInputs);
