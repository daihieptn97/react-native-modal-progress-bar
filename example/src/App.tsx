import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ModalProcess from 'react-native-modal-progress-bar';

const App = () => {
  const [percent, setPercent] = useState<number>(0);

  const onAddPercent = () => {
    setPercent(percent + 5);
  };

  useEffect(() => {
    // setInterval(() => {
    //   onAddPercent();
    // }, 2000);
  });

  return (
    <View style={{ justifyContent: 'center', flex: 1, marginHorizontal: 14 }}>
      <Text>
        Hello
      </Text>
      <TouchableOpacity style={styles.btn} onPress={onAddPercent}>
        <Text style={styles.txtWhite}>Add percent</Text>
      </TouchableOpacity>

      <ModalProcess isVisible={percent > 0} percent={percent} title={'Cập nhập thiết bị'}
                    subTitle={'Vui longf khong nagt ket noi mang de thucj hien chuwc nang nay'} />

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
