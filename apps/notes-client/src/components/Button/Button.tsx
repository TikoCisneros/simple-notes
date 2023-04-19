import styles from './Button.module.scss';
import { Tooltip } from '../Tooltip';
import { TColor } from '@simple-notes/models';

interface ButtonProps {
  color?: TColor;
  tooltip?: string;
  onClick?: () => void;
}

function Button({
  color = 'yellow',
  tooltip = 'Add tooltip text',
  onClick,
}: ButtonProps) {
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Avoid bubbling
    onClick?.();
  };

  return (
    <Tooltip position="right" content={tooltip}>
      <button
        className={`${styles.button} ${styles[`button--${color}`]}`}
        onClick={clickHandler}
      >
        <span className={styles.button__symbol}>+</span>
      </button>
    </Tooltip>
  );
}

export default Button;
