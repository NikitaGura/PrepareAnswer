import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {PrimaryTextInput, ScreenTitle, ScreenWrapper} from '../../components';
import {Colors, Dictionary} from '../../utils';
import {useStore} from '../../stores';
import {observer} from 'mobx-react-lite';
import {useEffect} from 'react';

const CreateQuestionsScreen = () => {
  const {
    createQuestions: {currentState, inputeStore, clearState},
  } = useStore();

  const BottomLayer = currentState.getBottomLayout();

  useEffect(() => () => clearState(), [clearState]);

  return (
    <ScreenWrapper>
      <ScrollView>
        <ScreenTitle title={Dictionary.createQuestions} />
        <View style={styles.container}>
          <Text style={styles.topText}>{currentState.getTopTitle()}</Text>
          <PrimaryTextInput
            placeholder={currentState.getPlaceholder()}
            value={inputeStore.value}
            updateValue={inputeStore.updateValue}
          />
          <BottomLayer />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  topText: {
    fontSize: 24,
    fontFamily: 'Roboto medium',
    color: Colors.DarkPrimary,
    textAlign: 'center',
    marginVertical: 25,
  },
});

export default observer(CreateQuestionsScreen);
