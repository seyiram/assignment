import axiosConfig from './axiosConfig';
import CryptoJSHelper from './CryptoJSHelper';


const TrainerHelper = {
    getAllRegions: async () => {
        const requestUrl = "/webresources/region/wapp/regions";
        const { axios, axiosHeaderConfig} = axiosConfig();
        const response = await axios.get(requestUrl, axiosHeaderConfig)
        const decryptedResponse = CryptoJSHelper.decrypt(response.data);
        return decryptedResponse;
    },
    getAllDistrictsByRegionCode: async (regionCode) => {
        const requestUrl = `webresources/district/wapp/districts/${regionCode}`;
        const { axios, axiosHeaderConfig} = axiosConfig();
        const response = await axios.get(requestUrl, axiosHeaderConfig)
        const decryptedResponse = CryptoJSHelper.decrypt(response.data);
        return decryptedResponse;
    },
    getAllGender: async () => {
        const requestUrl = "/webresources/dropdown/wapp/dropdowns/gender";
        const { axios, axiosHeaderConfig} = axiosConfig();
        const response = await axios.get(requestUrl, axiosHeaderConfig);
        const decryptedResponse = CryptoJSHelper.decrypt(response.data);
        return decryptedResponse;
    },
    addNewTrainer: async (newTrainer) => {
        const { axios, axiosHeaderConfig} = axiosConfig();
        const requestUrl = "webresources/scp/wapp/scptrainer";
        const response = await axios.post(requestUrl, CryptoJSHelper.encrypt(newTrainer), axiosHeaderConfig);
        return response.status;
    }
}

export default TrainerHelper;