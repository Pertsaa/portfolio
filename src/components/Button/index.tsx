import { ButtonHTMLAttributes, FC } from 'react';

import { StyledButton } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  target?: string;
}

const Button: FC<ButtonProps> = (props) => {
  if (props.href) {
    return (
      <StyledButton as="a" href={props.href} target={props.target}>
        {props.children}
      </StyledButton>
    );
  }

  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
