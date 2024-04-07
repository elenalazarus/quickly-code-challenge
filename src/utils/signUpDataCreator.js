
export default function signUpDataCreator(signupState) {
    const data = {
        user: {
            first_name: signupState["firstname"],
            last_name: signupState["lastname"],
            email: signupState["email-address"],
            password: signupState["password"]
        },
        company: {
            activity: {
                early_pay_intent: signupState["early-pay-intent"],
                expected_activity: signupState["expected-activity"]
            },
            early_pay_intent: signupState["early-pay-intent"],
            industry: {
                value: signupState["industry"],
                label: signupState["industry"]
            },
            business_type: {
                label: signupState["business-type"],
                value: signupState["business-type"]
            },
            website: signupState["website"],
            business_registration: signupState["business-registration"],
            phone: signupState["phone-number"],
            business_number: signupState["business-number"],
            has_trade_name: signupState["trade-name"],
            legal_name: signupState["legalname"],
            expected_activity: signupState["expected-activity"]
        }
    }
    return data;
}