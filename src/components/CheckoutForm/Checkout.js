import * as React from 'react';
import useStyles from "./styles";
import { Paper, Step, StepLabel, Stepper, Typography } from '@mui/material';
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import { useState } from 'react';
import Confirmation from './Confirmation';
import { useStateValue } from '../../StateProvider';


const Checkout = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [{ paymentMessage }, dispatch] = useStateValue();
    const steps = ["Shipping address", "Payment details"];

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const Form = () => activeStep === 0 ? <AddressForm nextStep={nextStep}/> : <PaymentForm backStep={ backStep }nextStep={nextStep}/>


    return (
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component='h1' variant='h4' align='center'>
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} className={classes.steper}>
              {steps.map(step => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                  </Step>
                  ))}

            </Stepper>
            {
              activeStep === steps.length ? (<Confirmation message={paymentMessage}/>) : (<Form/>)
             }
            
          </Paper>
          
        </main>
    )
}

export default Checkout;