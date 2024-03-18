import React from 'react';
import {ScreenTitle} from '../../components';
import {Dictionary} from '../../utils';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {observer} from 'mobx-react-lite';
import EditInputs from './EditInputs';
import BottomButtons from './BottomButtons';

const CreateQuestionScreen = () => {
  return (
    <KeyboardAvoidingView
      style={styles.flex}
      keyboardVerticalOffset={60}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        style={styles.flex}
        contentContainerStyle={styles.containerScroll}
        showsVerticalScrollIndicator={false}>
        <ScreenTitle title={Dictionary.editQuestion} />
        <EditInputs />
        <BottomButtons />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  containerScroll: {
    flexGrow: 1,
    padding: 10,
    paddingTop: 15,
  },
});

export default observer(CreateQuestionScreen);
