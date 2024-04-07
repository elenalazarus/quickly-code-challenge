export default function loginDataCreator(loginState) {
    const data = {
        email: loginState["email-address"],
        password: loginState["password"]
    }
    return data;
}