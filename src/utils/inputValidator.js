

export const isInputValid = (fields, signupState) => {
    const passwordMinlength = fields.find(field => field.id === 'password').minlength;
    if (signupState['email-address'] !== signupState['confirm-email-address']) {
      throw new Error("Emails do not match")
    } else if (signupState['password'].length < passwordMinlength) {
      throw new Error(`Minimum ${passwordMinlength} characters required for password field.`)
    } else if (signupState['password'] !== signupState['confirm-password']) {
      throw new Error("Passwords do not match")
    }
}