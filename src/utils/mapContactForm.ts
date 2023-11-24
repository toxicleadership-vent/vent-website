export const mapContactForm = (data: Record<string, string>) => {
  return ({
    "first_name": data.firstName,
    "last_name": data.lastName,
    "e-mail": data.email,
    "subject": data.subject,
    "message": data.message
  })
}