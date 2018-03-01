import axios from "axios";

// Export an object containing method used 


export default {
  checkAuth: function() {
    return axios.get('/auth/check');
  },

  getUser: function(id) {
      return axios.get('/auth/getUser/'+id);
  },

  addUser: function (data) {
    return axios.post('/auth/adduser',data);
  },
  getCategoriesWithCount: function() {
    return axios.get('/api/categoriescount');
  },
  getProductByCategory: function (category) {
    return axios.get('/api/items/' + category);
  },
  getCategories: function() {
    return axios.get('/api/categories');
  },
  addItem: function(data) {
    return axios.post('/api/additem',data);
  },

  searchItem: function(searchterm) {
    return axios.get('/api/item/' + searchterm);
  },

  getProductByUser: function(userid) {
    return axios.get('/api/item/user/' + userid);
  },

  removeItem: function(itemid) {
    return axios.delete('/api/item/' + itemid);
  },
  getOneProduct: function(itemid) {
    return axios.get('/api/singleitem/'+itemid);
  },
  sendMessage: function(data) {
    return axios.post('/api/sendmail', data);
  },
  newMessage: function(data) {
    return axios.post('/api/message', data)
  },
  getAllConversations: function(userid) {
    return axios.get('/api/conversations/'+userid);
  },
  getConversation: function(conversationid) {
    return axios.get('/api/conversation/'+conversationid);
  },
  getReservations: function(id) {
    return axios.get('/api/reservations/'+id);
  },
  makeReservation: function(data) {
    return axios.post('/api/newreservation',data);
  }

    
};
