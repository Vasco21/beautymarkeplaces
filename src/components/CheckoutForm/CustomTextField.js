import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useController, useForm } from "react-hook-form";

function FormInput({ label, name, required }) {
  console.log(name);
  const { control } = useForm();
  const {
    field: { onChange, onBlur, value, ref }
    
  } = useController({
    name,
    label,
    control,
    rules: { required: true },
    defaultValue: "",
  });

  return (
    <Grid item xs={12} sm={6}>
      <TextField 
        control={control}
        onChange={onChange} // send value to hook form 
        onBlur={onBlur} // notify when input is touched/blur
        value={value} // input value
        name={name} // send down the input name
        required={required}
        inputRef={ref} // send input ref, so we can focus on input when error appear
      />
    </Grid>
  );
}

export default FormInput;
