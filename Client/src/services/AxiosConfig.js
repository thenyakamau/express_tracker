import Axios from "axios";

let Base_Url = "/api/v1/transactions/";

export function AxiosPostData(type, userData) {
  return new Promise((resolve, reject) => {
    let config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    Axios.post(Base_Url + type, userData, config)
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function AxiosPostOauthData(type, userData, oauthToken) {
  return new Promise((resolve, reject) => {
    let config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + oauthToken,
      },
    };

    Axios.post(Base_Url + type, userData, config)
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function AxiosMultiPartPostData(type, userData) {
  return new Promise((resolve, reject) => {
    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    Axios.post(Base_Url + type, userData, config)
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
}

export function AxiosMultiPartOauthPostData(type, userData, oauthToken) {
  return new Promise((resolve, reject) => {
    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + oauthToken,
      },
    };

    Axios.post(Base_Url + type, userData, config)
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
}

export function AxiosGetData(type, userData) {
  return new Promise((resolve, reject) => {
    let config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    Axios.get(Base_Url + type, userData, config)
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function AxiosGetOauthData(type, userData, oauthToken) {
  return new Promise((resolve, reject) => {
    let config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + oauthToken,
      },
    };

    Axios.get(Base_Url + type, userData, config)
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function AxiosDeleteData(type) {
  return new Promise((resolve, reject) => {
    let config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    Axios.delete(Base_Url + type, config)
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
