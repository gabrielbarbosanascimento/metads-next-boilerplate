import { MetaIcon } from '../icon';
import ButtonIcon from './button-icon.styles';
type Size = 'LG' | 'SM';

export interface MetaButtonIconTypes
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  size?: Size;
  secondary?: boolean;
  danger?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}

export const MetaButtonIcon: React.FC<MetaButtonIconTypes> = (props) => {
  return (
    <ButtonIcon {...props}>
      <MetaIcon>{props.name}</MetaIcon>
    </ButtonIcon>
  );
};
