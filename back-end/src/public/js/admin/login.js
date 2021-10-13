// document.getElementById('login').addEventListener('click', async (e) => {

//     let url = "http://localhost:3000/auth/login";
//     const value = {
//         email: document.getElementById('exampleInputEmail').value,
//         password: document.getElementById('exampleInputPassword').value
//     };
//     // console.log(value);
//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(value)
//     }).then(response => response.json())
//         .then(data => {
//             // console.log(data);
//             const { user, token } = data;
//             localStorage.setItem('token', JSON.stringify(data));
//             // const beaerToken = token.access.token;
//             if(user && token){
//                     window.location.href = "http://localhost:3000/admin-page"
//             }
//             // fetch('http://localhost:3000/admin-page', {
//             //     method: 'GET',
//             //     headers: {
//             //         'Content-Type': 'application/json',
//             //         'Authorization': 'Bearer ' + beaerToken,
//             //     },
//             // }).then(res => res.json()).then( () => {
//             //     window.location.hash = "/admin-page"
//             // })
//         });



// });



