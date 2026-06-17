function validateSignup(username, email, password) {
    if (!username || !email || !password) {
        return "All fields are required";
    }

    if (!email.includes("@")) {
        return "Invalid email address";
    }

    return "Signup successful";
}
