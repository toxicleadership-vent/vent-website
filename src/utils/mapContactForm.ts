export const mapContactForm = (data: Record<string, string>) => ({
  first_name: data.firstName,
  last_name: data.lastName,
  'e-mail': data.email,
  subject: data.subject,
  message: data.message,
  date: new Date(Date.now()).toISOString(),
})
