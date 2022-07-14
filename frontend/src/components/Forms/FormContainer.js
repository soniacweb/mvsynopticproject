import React from "react";
import { MainFormContainer } from "./Forms.styles";

const FormContainer = ({ children }) => {
  return (
    <MainFormContainer component={"div"}>
      {" "}
      {/* <FormGroup className="justify-content-md-center">{children}</FormGroup> */}
      {children}
    </MainFormContainer>
  );
};

export default FormContainer;
