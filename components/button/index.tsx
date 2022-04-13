import React, { FunctionComponent, useState } from "react";
import MuiButton from "@mui/material/Button";
import style from "./style.module.scss";

interface Props {
  color: "primary" | "secondary";
  name: string;
}

const Button: FunctionComponent<Props> = ({ color, name }) => {
  const [age, setAge] = useState(0);

  return (
    <>
      <MuiButton
        color={color}
        variant="contained"
        onClick={() => setAge(age + 1)}
      >
        {name} (age: {age})
      </MuiButton>
      <div className={style.text}>pink text</div>
    </>
  );
};
export { Button };
