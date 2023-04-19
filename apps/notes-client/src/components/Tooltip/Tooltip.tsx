import { ReactNode } from 'react';
import styles from './Tooltip.module.scss';

interface TooltipProps {
  position: 'top' | 'bottom' | 'right' | 'left';
  content: string;
  children: ReactNode;
}

const Tooltip = ({ position = 'top', children, content }: TooltipProps) => (
  <div className={`${styles['tooltip']} ${styles[`tooltip--${position}`]}`}>
    {children}
    <span className={styles['tooltip__content']}>{content}</span>
  </div>
);

export default Tooltip;
