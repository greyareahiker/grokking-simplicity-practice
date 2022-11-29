const mailing_list = []

function add_contact(email) {
  mailing_list.push(email)
}

function submit_form_handler(event) {
  const form = event.target
  const email = form.elements["email"].value
  add_contact(email)
}
