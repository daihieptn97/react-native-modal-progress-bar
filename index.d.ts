interface ModalProcessProps {
  hiddenModal?: () => void;
  isVisible: boolean;
  setVisible?: (isShowModal: boolean) => void;
  percent: number;
}
declare const ModalProgressBar: (props: ModalProcessProps) => JSX.Element;
export default ModalProgressBar;
