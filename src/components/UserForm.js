import React, {Component} from 'react';
import FormPersonalDetails from './FormPersonalDetails';
import FormBusinessDetails from './FormBusinessDetails';
import FormSupportDetails from './FormSupportDetails';
import Confirm from './Confirm';
import Success from './Success';
import TrainerHelper from '../services/TrainerHelper';

 class UserForm extends Component{
     constructor(props) {
         super(props)

         this.state = {
            step: 1,
            currentRegionDistricts: [],
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

         this.fetchAllRegionDistricts = this.fetchAllRegionDistricts.bind(this);
     }
    
     async fetchAllRegionDistricts(regionCode) {
        try {
          await TrainerHelper.getAllDistrictsByRegionCode(regionCode)
            .then((res) => {
              console.log(res);
              this.setState({
                currentRegionDistricts: res
              });
            })
        } catch (err) {
          console.error(err.message);
        }
      }

      onSubmitForm = () => {
          const {
            trainer_name,
            telephone,
            email,
            digital_address,
            gender,
            business_name,
            region,
            district,
            town,
            registered,
            registration_number,
            has_tin,
            association_member,
            nvti_cert,
            rcvd_nbssi_support,
            want_nbssi_support,
            support_description,
            years_practicing,
            trained_apprentice,
            want_train_apprentice,
            no_apprentices,
            additional_support
          } = this.state;
          const data = {

          }
      }
     
    //Continue button
    nextStep = () => {
        this.setState((prevState) => {
            return {step: prevState.step + 1 }
          });
    };
    //Back button
    prevStep = () => {
        this.setState((prevState) => {
            return {step: prevState.step - 1}
          });
        }
    //Form values
    inputChange = input => e => {
        if(input === 'region'){
            this.fetchAllRegionDistricts(e.target.value);
        }
        this.setState({
            [input]: e.target.value
        });
    };

    render() {
        const {step} = this.state;
        const { trainer_name, gender, telephone, email, digital_address, business_name, region, district, town, registered, registration_number, has_tin, tin_number, association_member, nvti_cert, rcvd_nbssi_support, want_nbssi_support, support_description, years_practicing, trained_apprentice, want_train_apprentice, no_apprentices, additional_support, currentRegionDistricts } = this.state;
        const values = { currentRegionDistricts ,trainer_name, gender, telephone, email, digital_address, business_name, region, district, town, registered, registration_number, has_tin, tin_number, association_member, nvti_cert, rcvd_nbssi_support, want_nbssi_support, support_description, years_practicing, trained_apprentice, want_train_apprentice, no_apprentices, additional_support };

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
                    onSubmitForm = {this.onSubmitForm}
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