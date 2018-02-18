import axios from "axios";

// Export an object containing method used to hit NYT API


export default {
  checkAuth: function() {
    return axios.get('/auth/check');
  },

  getUser: function() {
      return axios.get('/auth/getUser');
  }

    
};
