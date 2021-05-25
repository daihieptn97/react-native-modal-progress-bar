import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ModalProcess from 'react-native-modal-progress-bar';
import useInterval from './useInterval';

const App = () => {
  const [percent, setPercent] = useState<number>(0);
  const [isShowModal, setShowModal] = useState<boolean>(false);

  const onAddPercent = () => {
    setPercent(percent + 2);
  };

  useEffect(() => {
    if (percent > 0 && isShowModal === false) {
      setShowModal(true);
    }
  }, [percent]);

  useInterval(() => {
    onAddPercent();
  }, percent > 0 && percent < 100 ? 2000 : null);

  return (
    <View style={{ justifyContent: 'center', flex: 1, marginHorizontal: 14 }}>
      <Text>
        Hello
      </Text>
      <TouchableOpacity style={styles.btn} onPress={onAddPercent}>
        <Text style={styles.txtWhite}>Add percent</Text>
      </TouchableOpacity>

      <ModalProcess
        isVisible={isShowModal}
        percent={percent}
        hiddenModal={() => setShowModal(false)}
        title={'Device is update!'}
        subTitle={'Please stay connected to the device!!!'} />

    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'brown',
    justifyContent: 'center',
    paddingVertical: 12,
    alignItems: 'center',
    width: '60%',
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 11,
  },
  txtWhite: { color: 'white', fontWeight: 'bold' },

});

export default App;
