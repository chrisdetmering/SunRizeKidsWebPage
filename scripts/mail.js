window.addEventListener('DOMContentLoaded', (event) => {
  var form = document.getElementById('myForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (checkForm(e)) {
      sendAjaxRequest(form)
      form.reset()
    }

  })
});

function checkForm(e) {
  var userName = e.target["user_name"].value;
  var userEmail = e.target["user_email"].value;
  var userMessage = e.target["message"].value;

  if (userName === "") {
    alert('Name can\'t be blank');
  }

  if (userMessage === "") {
    alert('Message can\'t be blank');
  }

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) {
    return (true)
  } else {
    alert('Invalid Email')
  }

}

function sendAjaxRequest(form) {
  console.log(form)
  var formData = new FormData(form)
  formData.append('service_id', 'gmail');
  formData.append('template_id', 'contact_form');
  formData.append('user_id', 'user_YJ0zhFsZUexPPbQe5QN4x');

  var httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', 'https://api.emailjs.com/api/v1.0/email/send-form', true);
  httpRequest.onreadystatechange = handleChange

  function handleChange() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        alert('Email sent!');
      } else {
        alert('Ops! Something went wrong. Try again');
      }
    }
  }

  httpRequest.send(formData);
}
