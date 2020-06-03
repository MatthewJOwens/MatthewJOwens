let token = "717282084921540608/toj6IbyAhI6n12Uu0lTTDLtfyWX1tN1cUWPyS7Iqw-Gjz9gPvfGm519pAQ5cY7VHbbiH"
let api = "https://discordapp.com/api/webhooks/"

function submitForm(event) {
  event.preventDefault()
  let formData = event.target
  let newForm = {
    name: formData.name.value,
    email: formData.email.value,
    subject: formData.subject.value,
    message: formData.message.value
  }

  let request = new XMLHttpRequest();
  request.open('POST', api + token);
  request.setRequestHeader('Content-Type', 'application/json');

  let params = {
    username: event.name,
    avatar_url: "",
    content: "Name: " + newForm.name + " \nEmail: " + newForm.email + " \nSubject: " + newForm.subject + " \nMessage: " + newForm.message
  };
  request.send(JSON.stringify(params));
  formData.reset();
}