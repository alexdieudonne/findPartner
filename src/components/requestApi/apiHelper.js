import { API_URL } from "./constants";


class ApiHelper {
  constructor() {
    this.accessToken = undefined;
    
  }

  setAccessToken = (accessToken) => {
    this.accessToken = accessToken;
  };

  getAccessToken = () => {
    return this.accessToken;
  };


  getRequest = async (endpoint, token) => {
    try {
      if(token){
        this.setAccessToken(token)
      }
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${this.accessToken}`
        }
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  };

  getRequest1 = async (endpoint) => {
    try {
      //const token = await AsyncStorage.getItem("user")
     //this.setAccessToken(token)
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${this.accessToken}`
        }
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  };

  postRequest = async (endpoint, body) => {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.accessToken}`
        },
        body: JSON.stringify(body)
      });
      
      const responseJson = await response.json();
      console.log(response.status )
      const finalResponse = { data: responseJson, status: response.status };
      return finalResponse;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  patchRequest = async (endpoint, body) => {
    try {
      const response = await fetch(`${API_URL}/${endpoint}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.accessToken}`
        },
        body: JSON.stringify(body)
      });
      const responseJson = await response.json();
      const finalResponse = { data: responseJson, status: response.status };

      if (response.status === 401) {
        this.accessToken = undefined;
      }

      return finalResponse;
    } catch (error) {
      console.error(error);
    }
  };

  deleteRequest = async (endpoint, body) => {
    try {
      const response = await fetch(`${API_URL}/${endpoint}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.accessToken}`
        },
        body: JSON.stringify(body)
      });
      const responseJson = await response.json();
      const finalResponse = { data: responseJson, status: response.status };

      if (response.status === 401) {
        this.accessToken = undefined;
      }

      return finalResponse;
    } catch (error) {
      console.error(error);
    }
  };
}

export const APIHelper = new ApiHelper();