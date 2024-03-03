import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  PrimaryButton,
  PrimaryTextInput,
  ScreenTitle,
  ScreenWrapper,
} from '../../components';
import {Colors, Dictionary} from '../../utils';

const CreateQuestionsScreen = () => {
  return (
    <ScreenWrapper>
      <ScrollView>
        <ScreenTitle title={Dictionary.createQuestions} />
        <View style={styles.container}>
          <Text style={styles.topText}>
            {Dictionary.pleaseWriteNameOfQuestions}
          </Text>
          <PrimaryTextInput placeholder={Dictionary.typeName} />
          <PrimaryButton
            style={styles.nextButton}
            styleText={styles.nextButtonText}
            title={Dictionary.next}
            onPress={() => {}}
          />
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
  nextButton: {
    marginTop: 50,
  },
  nextButtonText: {
    fontSize: 28,
  },
});

export default CreateQuestionsScreen;
