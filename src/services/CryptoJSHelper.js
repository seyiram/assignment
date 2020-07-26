import CryptoJS from "crypto-js";

const key = "Fg7EZ/RRa0Y=";
const CryptoJSHelper = {
  decrypt: (data) => {
    const keyHex = CryptoJS.enc.Base64.parse(key);
    const decrypted = CryptoJS.DES.decrypt(
      {
        ciphertext: CryptoJS.enc.Base64.parse(data),
      },
      keyHex,
      {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      }
    );
    const result = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
    return result;
  },
  encrypt: (data) => {
    const keyHex = CryptoJS.enc.Base64.parse(key);
    const dataJsonString = JSON.stringify(data);
    const encrypted = CryptoJS.DES.encrypt(
      dataJsonString
      ,
      keyHex,
      {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      }
    );
    const encryptedData = encrypted.toString();
    return encryptedData;
  }
};

export default CryptoJSHelper;