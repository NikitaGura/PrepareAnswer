import {View, StyleSheet} from 'react-native';
import React from 'react';
import {observer} from 'mobx-react-lite';
import {PrimaryButton} from '../../components';
import {Dictionary} from '../../utils';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  CreateQuestionNavigationProp,
  CreateQuestionRouteProps,
} from '../../navigation';

const BottomButtons = () => {
  const {params} = useRoute<CreateQuestionRouteProps>();
  const navigation = useNavigation<CreateQuestionNavigationProp>();

  const onSavePress = () => {
    params.addQuestionStore.form.actions.submit();
    navigation.pop();
  };

  return (
    <View style={styles.bottomContent}>
      <PrimaryButton
        disabled={!params.addQuestionStore.form.computed.isValid}
        onPress={onSavePress}
        title={Dictionary.saveQuestion}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContent: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 40,
    minHeight: 200,
    paddingHorizontal: '20%',
  },
});

export default observer(BottomButtons);
