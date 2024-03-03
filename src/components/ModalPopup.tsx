import {ReactNode, useEffect} from 'react';
import {Modal, Pressable, StyleSheet} from 'react-native';
import {useStore} from '../stores';
import {observer} from 'mobx-react-lite';

type Props = {
  children: ReactNode;
};

const ModalPopup = ({children}: Props) => {
  const {
    modalPopup: {hide, visible},
  } = useStore();

  useEffect(() => () => hide(), [hide]);

  return (
    <Modal
      visible={visible}
      onRequestClose={hide}
      transparent
      animationType="fade">
      <Pressable style={styles.container} onPress={hide} />
      {children}
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    opacity: 0.5,
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default observer(ModalPopup);
