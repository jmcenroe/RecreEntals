import axios from "axios";

// Export an object containing method used 


export default {
  checkAuth: function() {
    return axios.get('/auth/check');
  },

  getUser: function() {
      return axios.get('/auth/getUser');
  },

  addUser: function (data) {
    return axios.post('/auth/adduser',data);
  },
  getCategories: function() {
    return axios.get('/api/categories');
  },
  getProductByCategory: function (category) {
    return axios.get('/api/items/' + category);
  }

    
};
