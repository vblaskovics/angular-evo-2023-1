// Function definition with types:
function getUserInfo(user) {
    return "User name is ".concat(user.name, ", age is ").concat(user.age);
}
// Function with optional parameters:
function getUserInfo2(user, showEmail) {
    return "User name is ".concat(user.name, ", age is ").concat(user.age, ", email is ").concat(showEmail ? user.email : "hidden");
}
// Function with default parameters:
function getUserInfo3(user, showEmail) {
    if (showEmail === void 0) { showEmail = false; }
    return "User name is ".concat(user.name, ", age is ").concat(user.age, ", email is ").concat(showEmail ? user.email : "hidden");
}
getUserInfo3({ name: "Peter", age: 30 }, true);
// Function with rest parameters:
function getUserInfo4(user) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return "User name is ".concat(user.name, ", age is ").concat(user.age, ", email is ").concat(user.email, ", ").concat(rest.join(", "));
}
getUserInfo4({ name: "Peter", age: 30, email: "asd" }, "a", "b", "c");
