import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Modal from 'react-native-modal';

let check = 0;
let heightProgressbar = 20;
let colorBg = "#808080";
let colorProcess = "#35c48c";
let backgroundColorModal = "white";
let backdropColor = "#253B5A";

interface ModalProcessProps {
  hiddenModal?: () => void,
  isVisible: boolean,
  setVisible?: (isShowModal: boolean) => void,
  percent: number
}

const ModalProcess = (props: ModalProcessProps) => {
  // const [percent, setPercent] = useState<number>(0);

  const widthAmin = useRef(new Animated.Value(0)).current;
  const opacityAmin = useRef(new Animated.Value(0)).current;

  // const onAddPercent = () => {
  //   setPercent((num) => num + 5);
  // };

  const onStartWidthAnimation = () => {
    Animated.timing(widthAmin, {
      useNativeDriver: false,
      toValue: props.percent,
      duration: 300,
      easing: Easing.linear,
    }).start();
  };

  useEffect(() => {
    // onAddPercent();
  }, []);

  useEffect(() => {
    if (props.percent > 0 && check === 0 || props.percent <= 0 && check === 1) {
      check = (props.percent > 0 && check === 0) ? 1 : 0;
      Animated.sequence([
        Animated.timing(opacityAmin, {
          useNativeDriver: false,
          toValue: heightProgressbar,
          duration: 600,
          easing: Easing.bounce,
        }),
        Animated.timing(widthAmin, {
          useNativeDriver: false,
          toValue: props.percent,
          duration: 300,
          easing: Easing.linear,
        }),
      ]).start();
    } else
      onStartWidthAnimation();
  }, [props.percent]);


  const widthAni = widthAmin.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <Modal
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      backdropOpacity={0.4}
      backdropColor={backdropColor}
      isVisible={props.isVisible}
      style={styles.modal}
      onModalHide={props.hiddenModal}>
      <View style={styles.wrapModal}>
        <Text style={styles.title}>Modal update progress</Text>
        <Animated.View style={[styles.wrapProcess, { height: opacityAmin }]}>
          <Animated.View style={[styles.process, { width: widthAni }]} />
          <Text style={styles.txtPercent}>{props.percent}%</Text>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  title: { textAlign: "center", fontWeight: "500", fontSize: 17, marginBottom: 30 },
  wrapModal: {
    backgroundColor: backgroundColorModal,
    borderRadius: 12,
    padding: 14,
    height: "20%",
    justifyContent: "center",
  },
  wrapProcess: {
    backgroundColor: colorBg,
    height: 0,
    width: "100%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  process: { backgroundColor: colorProcess, height: heightProgressbar, position: "absolute", left: 0 },
  txtPercent: { color: Colors.white, fontWeight: "bold" }, btn: {
    backgroundColor: "brown",
    justifyContent: "center",
    paddingVertical: 12,
    alignItems: "center",
    width: "60%",
    alignSelf: "center",
    marginVertical: 20,
    borderRadius: 11,
  }, txtWhite: { color: "white", fontWeight: "bold" },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "powderblue",
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10,
  }, modal: { flex: 1, margin: 14 },


});

export default ModalProcess;
