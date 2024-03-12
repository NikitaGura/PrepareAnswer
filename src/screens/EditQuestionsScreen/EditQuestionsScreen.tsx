import {View, StyleSheet} from 'react-native';
import React from 'react';
import {PlusButton, ScreenTitle, ScreenWrapper} from '../../components';
import {Dictionary} from '../../utils';
import Questions from './Questions';

const EditQuestionsScreen = () => {
  return (
    <ScreenWrapper>
      <View style={styles.headerContainer}>
        <ScreenTitle title={Dictionary.questions} />
        <PlusButton onPress={() => {}} />
      </View>
      <Questions />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default EditQuestionsScreen;
