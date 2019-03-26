import createStore from "unistore";
import axios from "axios";

const url = "https://loszapatos.web.id/";
const url_cors = "https://cors-anywhere.herokuapp.com/";

const initialState = {
 all_product : [],
 username: "",
 password: "",
 token: "",
 isLogin: false,
 isSigned: false,
 isEdited: false,
 isTrans: false,
 buyer_fullname:"",
 buyer_username:"",
 buyer_email: "",
 buyer_address:"",
 buyer_url_image: "",
 buyer_phone: "",
 user_store_name:"",
 user_email: "",
 user_address:"",
 user_url_image: "",
 user_phone: "",
 user_website: "",
 user_description:"",
 item_category: [],
 item_detail : "",
 store_detail : "",
 id : "",
 item_id: "",
 item_name: "",
 category: "",
 price:"",
 size:"",
 color:"",
 quantity:"",
 item_description:"",
 imgurl1:"",
 imgurl2:"",
 imgurl3:"",
 imgurl4:"",
 posted_item: [],
 transaction_history:[],
 transaction_detail :[],
 total_price: "",
 item_num: "",
 cart: [],
 item_qty:"",
 status: "",
};

export const store = createStore(initialState);

export const actions = store => ({
  setField: (state, e) => {
    return { [e.target.name]: e.target.value };
  },

  postLogout: state => {
    store.setState ({ isLogin: false, token: "0", status: "0" });
  },

  postSignupBuyer: async state => {
    const header =  {headers:{"Origin": "https://loszapatos.web.id/", "Content-Type": "application/json"}}
    const data = {
      username:state.username,
      fullname:state.buyer_fullname,
      address:state.buyer_address,
      phone: state.buyer_phone,
      email: state.buyer_email,
      password:state.password,
      url_image: state.buyer_url_image,
    };
    await axios
    .post(url_cors + url + "buyer", data, header)
    .then(function(response){
      if (response.data.status === "success"){
        store.setState({isSigned: true});
        alert('SignUp Success')
      }
    })
    .catch(function(error){
      console.log(error);
      alert('SignUp Failed')
    })
  },

  editBuyerProfile: async state => {
    const header =  {headers:{"Origin": "https://loszapatos.web.id/", "Authorization": "Bearer " + state.token}}
    const data = {
      username:state.username,
      fullname:state.buyer_fullname,
      address:state.buyer_address,
      phone: state.buyer_phone,
      email: state.buyer_email,
      password:state.password,
      url_image: state.buyer_url_image,
    };
    await axios
    .put(url_cors + url + "buyer", data, header)
    .catch(function(error){
      console.log(error);
    })
  },

  editCart: async (state, id) => {
    const header =  {headers:{"Origin": "https://loszapatos.web.id/", "Authorization": "Bearer " + state.token}}
    const data = {
      item_sum:state.item_qty,
    };
    await axios
    .put(url_cors + url + "my_cart/" + id, data, header)
    .catch(function(error){
      console.log(error);
    })
  },

  editUserProfile: async state => {
    const header =  {headers:{"Origin": "https://loszapatos.web.id/", "Authorization": "Bearer " + state.token}}
    const data = {
      store_name:state.username,
      email: state.user_email,
      phone: state.user_phone,
      password:state.password,
      website: state.user_website,
      address:state.user_address,
      url_image: state.user_url_image,
      description:state.user_description,
    };
    await axios
    .put(url_cors + url + "user", data, header)
    .catch(function(error){
      console.log(error);
    })
  },

  postItem: async state => {
    const header =  {headers:{"Origin": "https://loszapatos.web.id/", "Authorization": "Bearer " + state.token}}
    const data = {
      item_name:state.item_name,
      category: state.category,
      price: state.price,
      size:state.size,
      color: state.color,
      qty:state.quantity,
      description: state.item_description,
      imgurl1:state.imgurl1,
      imgurl2:state.imgurl2,
      imgurl3:state.imgurl3,
      imgurl4:state.imgurl4,
    };
    await axios
    .post(url_cors + url + "item", data, header)
    .catch(function(error){
      console.log(error);
    })
  },

  editItem: async (state, id) => {
    const header =  {headers:{"Origin": "https://loszapatos.web.id/", "Authorization": "Bearer " + state.token}}
    const data = {
      item_name:state.item_name,
      category: state.category,
      price: state.price,
      size:state.size,
      color: state.color,
      qty:state.quantity,
      description: state.item_description,
      imgurl1:state.imgurl1,
      imgurl2:state.imgurl2,
      imgurl3:state.imgurl3,
      imgurl4:state.imgurl4,
    };
    await axios
    .put(url_cors + url + "item/" + id, data, header)
    .catch(function(error){
      console.log(error);
    })
  },

  postSignupUser: async state => {
    const header =  {headers:{"Origin": "https://loszapatos.web.id/", "Content-Type": "application/json"}}
    const data = {
      store_name:state.username,
      email: state.user_email,
      phone: state.user_phone,
      password:state.password,
      website: state.user_website,
      address:state.user_address,
      url_image: state.user_url_image,
      description:state.user_description,
    };
    await axios
    .post(url_cors + url + "user", data, header)
    .then(function(response){
      if (response.data.status === "success"){
        store.setState({isSigned: true});
        alert('SignUp Success')
      }
    })
    .catch(function(error){
      console.log(error);
      alert('SignUp Failed')
    })
  },

  postLoginBuyer: async state => {
    const header =  {headers:{"Origin": "https://loszapatos.web.id/", "Content-Type": "application/json"}}
    const data = {
      username:state.username,
      password:state.password
    };
    await axios
    .post(url_cors + url + "login/buyer", data, header)
    .then(function(response){
      if (response.data.hasOwnProperty("token")) {
        store.setState({token: response.data.token,
          isLogin: true,
          status: response.data.data.status
        });
        alert('Login Success')
      }
    })
    .catch(function(error){
      console.log(error);
      alert('Login Failed, Wrong Username or Password')
    })
  },

  postLoginUser: async state => {
    const header =  {headers:{"Origin": "https://loszapatos.web.id/", "Content-Type": "application/json"}}
    const data = {
      store_name:state.username,
      password:state.password
    };
    await axios
    .post(url_cors + url + "login/user", data, header)
    .then(function(response){
      if (response.data.hasOwnProperty("token")) {
        store.setState({token: response.data.token,
          isLogin: true,
          status: response.data.data.status
        });
        alert('Login Success')
      }
    })
    .catch(function(error){
      console.log(error);
      alert('Login Failed, Wrong Store Name or Password')
    })
  },

  setCategory: (state, e) => {
    store.setState({ category: e.target.name });
  },

  getAllProduct: async state => {
    await axios
      .get(url_cors + url + "item")
      .then(function(response) {
        store.setState({all_product: response.data.data});
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  getPostedProduct: async state => {
    const header =  {headers:{"Origin": "https://loszapatos.web.id/", "Authorization": "Bearer " + state.token}}
    await axios
      .get(url_cors + url + "posted_item", header)
      .then(function(response) {
        store.setState({posted_item: response.data.data});
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  getCategoryProduct: async state => {
    await axios
      .get(url_cors + url + "item?category=" + state.category)
      .then(function(response) {
        store.setState({item_category: response.data.data});
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  getDetailProduct: async (state, id) => {
    await axios
      .get(url_cors + url + "item/" + id)
      .then(function(response) {
        store.setState({item_detail: response.data.data});
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  getTransactionHistory: async state => {
    const header =  {headers:{"Origin": "https://loszapatos.web.id/", "Authorization": "Bearer " + state.token}}
    await axios
      .get(url_cors + url + "transaction", header)
      .then(function(response) {
        store.setState({transaction_history: response.data.data});
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  addCart: async (state, id) => {
    const header =  {headers:{"Origin": "https://loszapatos.web.id/", "Authorization": "Bearer " + state.token}}
    const data = {
      item_id:id,
      item_sum:state.item_sum
    };
    await axios
      .post(url_cors + url + "my_cart", data, header)
      .catch(function(error) {
        console.log(error);
      });
  },

  getCart: async state => {
    const header =  {headers:{"Origin": "https://loszapatos.web.id/", "Authorization": "Bearer " + state.token}}
    await axios
      .get(url_cors + url + "my_cart", header)
      .then(function(response) {
        store.setState({cart: response.data.list_item,
          total_price: response.data.total_payment});
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  addTransaction: async state => {
    const postTrans = {
      method: 'post',
      url: url_cors + url + 'transaction',
      headers: {"Origin": "https://loszapatos.web.id/", "Authorization": "Bearer " + store.getState().token},
    }    
    await axios (postTrans)
      .then(function(response){
        if (response.data.status === "transaction success"){
          alert('Transaction Succesful')
        }
      })
      .catch(function(error) {
        console.log(error);
        alert('Transaction Failed')
      });
  },

  getTransactionDetail: async (state, id) => {
    const header = {headers:{"Origin": "https://loszapatos.web.id/", "Authorization": "Bearer " + state.token}}
    await axios
      .get(url_cors + url + "transaction_detail/" + id, header)
      .then(function(response) {
        store.setState({transaction_detail: response.data.list_item,
            total_price: response.data.total_payment
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  deleteProduct: async (state, id) => {
    const header =  {headers:{"Origin": "https://loszapatos.web.id/", "Authorization": "Bearer " + state.token}}
    await axios
      .delete(url_cors + url + "item/" + id, header)
  },

  deleteBuyer: async state => {
    const header =  {headers:{"Origin": "https://loszapatos.web.id/", "Authorization": "Bearer " + state.token}}
    await axios
      .delete(url_cors + url + "buyer", header)
      .then(function(response) {
        store.setState({isLogin: false,
            token: "0"
        });
      })
      
  },

  deleteUser: async state => {
    const header =  {headers:{"Origin": "https://loszapatos.web.id/", "Authorization": "Bearer " + state.token}}
    await axios
      .delete(url_cors + url + "user", header)
      .then(function(response) {
        store.setState({isLogin: false,
            token: "0"
        });
      })
      
  },

  deleteCart: async (state, id) => {
    const header =  {headers:{"Origin": "https://loszapatos.web.id/", "Authorization": "Bearer " + state.token}}
    await axios
      .delete(url_cors + url + "my_cart/" + id, header)
  },

  getDataProduct: async (state, id) => {
    await axios
      .get(url_cors + url + "item/" + id)
      .then(function(response) {
        store.setState({
          item_id:response.data.data.item_id,
          item_name:response.data.data.item_name,
          category: response.data.data.category,
          price: response.data.data.price,
          size:response.data.data.size,
          color: response.data.data.color,
          quantity:response.data.data.qty,
          item_description: response.data.data.description,
          imgurl1:response.data.data.imgurl1,
          imgurl2:response.data.data.imgurl2,
          imgurl3:response.data.data.imgurl3,
          imgurl4:response.data.data.imgurl4,});
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  getStoreProfile: async (state, store_name) => {
    await axios
      .get(url_cors + url + "user?store_name=" + store_name)
      .then(function(response) {
        store.setState({store_detail: response.data.data[0]});
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  getBuyerData: async state => {
    const header =  {headers:{"Origin": "https://loszapatos.web.id/", "Authorization": "Bearer " + state.token}}
        await axios
        .get(url_cors + url + "buyer_profile", header)
        .then(function(response){
         store.setState({buyer_fullname:response.data.data.fullname,
                buyer_username:response.data.data.username,
                buyer_email:response.data.data.email,
                buyer_address:response.data.data.address,
                buyer_phone:response.data.data.phone,
                buyer_url_image:response.data.data.url_image,
        })
          }
        )
  },

  getUserData: async state => {
    const header =  {headers:{"Origin": "https://loszapatos.web.id/", "Authorization": "Bearer " + state.token}}
        await axios
        .get(url_cors + url + "user_profile", header)
        .then(function(response){
         store.setState({user_store_name:response.data.data.store_name,
                user_website:response.data.data.website,
                user_email:response.data.data.email,
                user_address:response.data.data.address,
                user_phone:response.data.data.phone,
                user_url_image:response.data.data.url_image,
        })
          }
        )
  },
});
