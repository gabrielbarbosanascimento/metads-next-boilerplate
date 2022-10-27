import IconStyles, { MetaIconProps } from './icon.styles';

export const MetaIcon: React.FC<MetaIconProps> = (props) => {
  return (
    <IconStyles className="material-icons" size={props.size}>
      {props.children}
    </IconStyles>
  );
};
