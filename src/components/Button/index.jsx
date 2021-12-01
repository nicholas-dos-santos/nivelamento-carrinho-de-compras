import { Btn } from "./style";

function Button({ children, ...rest }) {
  return (
    <>
      <Btn {...rest}>{children}</Btn>
    </>
  );
}

export default Button;
