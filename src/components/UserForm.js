import React, {Component} from 'react';
import axios from 'axios';
import FormPersonalDetails from './FormPersonalDetails';
import FormBusinessDetails from './FormBusinessDetails';
import FormSupportDetails from './FormSupportDetails';
import Confirm from './Confirm';
import Success from './Success';

 class UserForm extends Component{
    state = {
        step: 1,
        trainer_name: '',
        gender: '',
        telephone: '',
        email: '',
        digital_address: '',
        business_name: '',
        region: '',
        district: '',
        town: '',
        registered: '',
        registration_number: '',
        has_tin: '',
        tin_number: '',
        association_member: '',
        nvti_cert: '',
        rcvd_nbssi_support: '',
        want_nbssi_support: '',
        support_description: '',
        years_practicing: '',
        trained_apprentice: '',
        want_train_apprentice: '',
        no_apprentices: '',
        additional_support: '',

    }
    //Continue button
    nextStep = () => {
        const { step } = this.state;
        this.setState({step: step + 1});
    };
    //Back button
    prevStep = () => {
        const step = this.state;
        this.setState({ step: step - 1});
    };
    //Form values
    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

    
    

    render() {
        const {step} = this.state;
        const { trainer_name, gender, telephone, email, digital_address, business_name, region, district, town, registered, registration_number, has_tin, tin_number, association_member, nvti_cert, rcvd_nbssi_support, want_nbssi_support, support_description, years_practicing, trained_apprentice, want_train_apprentice, no_apprentices, additional_support } = this.state;
        const values = { trainer_name, gender, telephone, email, digital_address, business_name, region, district, town, registered, registration_number, has_tin, tin_number, association_member, nvti_cert, rcvd_nbssi_support, want_nbssi_support, support_description, years_practicing, trained_apprentice, want_train_apprentice, no_apprentices, additional_support };

        //Form Steps
        switch(step) {
            case 1:
                return(
                    <FormPersonalDetails 
                        nextStep = {this.nextStep}
                        inputChange = {this.inputChange}
                        values = {values}
                    />
                ); 
            case 2:
                return(
                    <FormBusinessDetails 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        inputChange = {this.inputChange}
                        values = {values}
                    />
                );
            case 3:
                return(
                    <FormSupportDetails
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    inputChange = {this.inputChange}
                    values = {values} 
                    />
                );
            case 4: 
                return(
                    <Confirm 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    values = {values}
                    />
                );
            case 5:
                return(
                    <Success 
                    
                    />
                );
            default: 
            return(
                <h1>Nothing here</h1>
            )
                
        }
    }
}

export default UserForm;