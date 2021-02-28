import { TextStyle, ViewStyle } from 'react-native';
import { ModalProps } from 'react-native-modal';
interface ModalProcessProps {
  wrapProcess: ViewStyle;
  onBackdropPress?: () => void;
  subTitleStyle?: TextStyle;
  styleTitle?: TextStyle;
  styleModal?: ViewStyle;
  hiddenModal?: () => void;
  isVisible: boolean;
  setVisible?: (isShowModal: boolean) => void;
  percent: number;
  heightProgressbar?: number;
  colorBg?: string;
  colorProcess?: string;
  backgroundColorModal?: string;
  backdropColor?: string;
  title: string;
  subTitle?: string;
  propsModal?: ModalProps;
  styleWrapContentModal?: ViewStyle;
}
declare const ModalProcess: (props: ModalProcessProps) => JSX.Element;
export default ModalProcess;
