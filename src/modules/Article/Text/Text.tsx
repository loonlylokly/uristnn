import Markdown from "markdown-to-jsx";
import { FC } from "react";
import styles from './Text.module.css';

type Props = {
  content: string;
};

const Text: FC<Props> = ({content}) => {
  return (
    <Markdown className={styles.content}>{content}</Markdown>
  );
}

export default Text;