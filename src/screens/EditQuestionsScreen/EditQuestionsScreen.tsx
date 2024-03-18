import {View, StyleSheet} from 'react-native';
import React from 'react';
import {PlusButton, ScreenTitle, ScreenWrapper} from '../../components';
import {Dictionary, sharedValues} from '../../utils';
import Questions from './Questions';
import {useNavigation} from '@react-navigation/native';
import {EditQuestionsNavigationProp, ScreensName} from '../../navigation';
import {AddQuestionStore} from '../../stores';

const EditQuestionsScreen = () => {
  const navigation = useNavigation<EditQuestionsNavigationProp>();

  const navigateToAddQuestionScreen = () => {
    navigation.push(ScreensName.CreateQuestion, {
      addQuestionStore: new AddQuestionStore(),
    });
  };

  return (
    <ScreenWrapper>
      <View style={styles.headerContainer}>
        <ScreenTitle title={Dictionary.questions} />
        <PlusButton onPress={navigateToAddQuestionScreen} />
      </View>
      <Questions />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: sharedValues.paddingHorizontalScreen,
  },
});

export default EditQuestionsScreen;
