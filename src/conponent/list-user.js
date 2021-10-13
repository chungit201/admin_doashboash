import AuthAPI from "../api/auth";
const listUser = {
    async render() {
        const { data: users } = await AuthAPI.getAllUsers();
        const results = { users };
        const listuser = results.users.results;
        let index = 1
        console.log(listUser);
         return   `
        <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">email</th>
            <th scope="col">Role</th>
            <th scope="col" colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>
        ${listuser.map(item=>{
            return `
            <tr>
            <th scope="row">${index++}</th>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.role}</td>
            <td><a href=""><i class="far fa-edit"></i></a>   <a href=""><i class="fas fa-trash"></i></a></td>
          </tr>
            `
        })}
          
        
        </tbody>
      </table>
        `
    }
}
export default listUser
