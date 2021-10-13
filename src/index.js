
import AdminPage from "./page/admin/adminPage";
import ListUserPage from "./page/admin/ListUserPage";
import Error404Page from "./page/Error404Page";
import Home from "./page/HomePage";

import { parseRequestUrl,$ } from "./ultils";

const routes = {
    '/' : Home,
    '/admin':AdminPage,
   '/users': ListUserPage
}
const router = async () => {
    const {resource,id} = parseRequestUrl();
    const parseUrl =  (resource ? `/${resource}` : '/') + (id ? `/:id` :'');
  

  
    // console.log(parseUrl);
    const page = routes[parseUrl] ? routes[parseUrl] : Error404Page;
    // console.log(page); 
    // $('#header').innerHTML = await Header.render();
    // $('#footer').innerHTML = await Footer.render();
    $('#main-content').innerHTML = await page.render();
 
    if(page.afterRender){
        await page.afterRender();
    }
}
    window.addEventListener('DOMContentLoaded', router);
    window.addEventListener('hashchange',router);
// const router =() =>{
//     document.querySelector('#main-content').innerHTML = Home.render();
// }


