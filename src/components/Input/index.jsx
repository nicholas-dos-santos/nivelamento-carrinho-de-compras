import { MyInput } from "./style";

function Input({ ...rest }) {
  return (
    <div>
      <MyInput {...rest} />
    </div>
  );
}

export default Input;
