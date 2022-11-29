let mailing_list = []

function add_contact(list, email) {
  const list_copy = list
  list_copy.push(email)
  return list_copy
}

function submit_form_handler(event) {
  const form = event.target
  const email = form.elements["email"].value
  mailing_list = add_contact(mailing_list, email)
}
