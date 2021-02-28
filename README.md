# react-native-modal-progress-bar

modal progressbar

## Installation

- Step 1:
  first you can install lib "react-native-modal":

```sh
yarn add react-native-modal
```

- Step 2:

```sh
yarn add react-native-modal-progress-bar
```

## Usage

```js
import ModalProgressBar from "react-native-modal-progress-bar";

<ModalProgressBar isVisible={true} percent={50}/>
```

### Properties

```typescript

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

```

## License

MIT
