import { MetaIcon } from '../icon';
import FAB from './fab.styles';

export interface MetaFabTypes
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  dark?: boolean;
}

export const MetaFAB: React.FC<MetaFabTypes> = (props) => {
  return (
    <FAB {...props}>
      <MetaIcon>{props.icon}</MetaIcon>
    </FAB>
  );
};
