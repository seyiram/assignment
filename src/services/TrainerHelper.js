import axiosConfig from './axiosConfig';

const TrainerHelper = {
    getAllRegions: async () => {
        const requestUrl = "/webresources/region/wapp/regions";
        const { axios, axiosHeaderConfig} = axiosConfig();
        const response = await axios.get(requestUrl, axiosHeaderConfig)
        console.log(response);
        return response;
    },
    getAllDistrictsByRegionCode: async (regionCode) => {
        const requestUrl = `webresources/district/wapp/districts/${regionCode}`;
        const { axios, axiosHeaderConfig} = axiosConfig();
        const response = await axios.get(requestUrl, axiosHeaderConfig)
        console.log(response);
        return response;
    },
    getAllGender: async () => {
        const requestUrl = "/webresources/dropdown/wapp/dropdowns/gender";
        const { axios, axiosHeaderConfig} = axiosConfig();
        const response = await axios.get(requestUrl, axiosHeaderConfig)
        console.log(response);
        return response;
    },
    // addNewTrainer: async () => {
    //     const requestUrl = "webresources/scp/wapp/scptrainer";
    // }
}

export default TrainerHelper;