
// document.getElementById('btn-logout').addEventListener('click', () => {
//     const { user, token } = JSON.parse(localStorage.getItem('token'))
//     const refreshToken = token.refresh.token;
//     const data = {
//         refreshToken: refreshToken
//     }
//     let url = 'http://localhost:3000/auth/logout';
//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     }).then(respone => respone.json())
//         .then((data) => {
//             window.location.href = 'http://localhost:3000'
//             localStorage.removeItem('token');
//             alert('Đăng xuất thành công!')
//         })

// })



