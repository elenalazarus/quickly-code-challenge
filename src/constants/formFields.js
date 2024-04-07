// Collections of fields that are part of Login and Signup forms

const loginFields = [
    {
        labelText: "Email address",
        labelFor: "email-address",
        id: "email-address",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Email address"
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "Password"
    }
]

const signupFields = [
    {
        labelText: "First Name",
        labelFor: "firstname",
        id: "firstname",
        name: "firstname",
        type: "text",
        isRequired: true,
        placeholder: "First Name"
    },
    {
        labelText: "Last Name",
        labelFor: "lastname",
        id: "lastname",
        name: "lastname",
        type: "text",
        isRequired: true,
        placeholder: "Last Name"
    },
    {
        labelText: "Email address",
        labelFor: "email-address",
        id: "email-address",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Email address"
    },
    {
        labelText: "Confirm email address",
        labelFor: "confirm-email-address",
        id: "confirm-email-address",
        name: "confirm-email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Confirm email address"
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "new-password",
        isRequired: true,
        placeholder: "Password",
        minlength: 6
    },
    {
        labelText: "Confirm Password",
        labelFor: "confirm-password",
        id: "confirm-password",
        name: "confirmpassword",
        type: "password",
        autoComplete: "confirm-password",
        isRequired: true,
        placeholder: "Confirm Password"
    },
    {
        labelText: "Do you intend to do early payments?",
        labelFor: "early-pay-intent",
        id: "early-pay-intent",
        name: "early-pay-intent",
        type: "checkbox"
    },
    {
        labelText: "Expected Activity",
        labelFor: "expected-activity",
        id: "expected-activity",
        name: "expected-activity",
        type: "text",
        isRequired: true,
        placeholder: "Expected Activity"
    },
    {
        labelText: "Industry",
        labelFor: "industry",
        id: "industry",
        name: "industry",
        type: "text",
        isRequired: true,
        placeholder: "Industry"
    },
    {
        labelText: "Business Type",
        labelFor: "business-type",
        id: "business-type",
        name: "business-type",
        type: "text",
        isRequired: true,
        placeholder: "Business Type"
    },
    {
        labelText: "Website",
        labelFor: "website",
        id: "website",
        name: "website",
        type: "text",
        isRequired: true,
        placeholder: "Website"
    },
    {
        labelText: "Business Registration",
        labelFor: "business-registration",
        id: "business-registration",
        name: "business-registration",
        type: "text",
        isRequired: true,
        placeholder: "Business Registration"
    },
    {
        labelText: "Phone Number",
        labelFor: "phone-number",
        id: "phone-number",
        name: "phone-number",
        type: "tel",
        isRequired: true,
        placeholder: "Phone Number"
    },
    {
        labelText: "Business Number",
        labelFor: "business-number",
        id: "business-number",
        name: "business-number",
        type: "tel",
        isRequired: true,
        placeholder: "Business Number"
    },
    {
        labelText: "Does your company have a trade name?",
        labelFor: "trade-name",
        id: "trade-name",
        name: "trade-name",
        type: "checkbox",
    },
    {
        labelText: "Legal Name",
        labelFor: "legalname",
        id: "legalname",
        name: "legalname",
        type: "text",
        isRequired: true,
        placeholder: "Legal Name"
    },

]

export { loginFields, signupFields }