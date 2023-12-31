import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useFormContext, Controller } from "react-hook-form";
import { TextField } from '@mui/material';

const AddressInput = ({name, label, required}) => {

    const {control} = useFormContext()

  return (

    <Grid item xs={12} sm={6}>

        <Controller control={control} defaultValue="" name={name} 

        render={({field: { onChange, value}})=>(

            <TextField 

            onChange={onChange}

            value={value}

            required={required}

            label={label}

            fullWidth

            variant="standard"

            />

        )}

        />

    </Grid>

  )

}


export default AddressInput;