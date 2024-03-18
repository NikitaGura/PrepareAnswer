import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {PrimaryTextInput, ScreenTitle, ScreenWrapper} from '../../components';
import {Colors, Dictionary, sharedValues} from '../../utils';
import {useStore} from '../../stores';
import {observer} from 'mobx-react-lite';
import {useEffect} from 'react';

const CreateQuestionsScreen = () => {
  const {
    createQuestions: {currentState, inputStore: inputStore, clearState},
  } = useStore();

  const BottomLayer = currentState.getBottomLayout();

  useEffect(() => () => clearState(), [clearState]);

  return (
    <ScreenWrapper>
      <ScrollView style={styles.containerStyleScroll}>
        <ScreenTitle title={Dictionary.createQuestions} />
        <View style={styles.container}>
          <Text style={styles.topText}>{currentState.getTopTitle()}</Text>
          <PrimaryTextInput
            placeholder={currentState.getPlaceholder()}
            value={inputStore.value}
            updateValue={inputStore.updateValue}
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
  containerStyleScroll: {
    paddingHorizontal: sharedValues.paddingHorizontalScreen,
  },
});

export default observer(CreateQuestionsScreen);
