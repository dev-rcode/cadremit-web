import axios from "axios";


 export async function getSettings(){
    var config = {
        method: 'get',
        url: 'https://corsproxy.io/?https%3A%2F%2Fapi.cadremit.com%2Fv1%2Fadmin%2Fsettings',
        headers: { }
      };
      
     var data = await  axios(config).catch(function (error) {
        console.log(error);
      });   
      return data;
}
