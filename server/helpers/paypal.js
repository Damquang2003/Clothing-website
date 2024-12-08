const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AYb6e5usY6i1eYeT0HONUwnRwCFKpSnK0pfRcluE7IGzUAxEADjyJZxdATyhbrD6X-0_Fn_i5WFehyG1",
  client_secret:
    "ENgD1who8MrBZnvQQJTzpc2vQ-iH4V-83y8E40jfStP-0q66IHYMYtdkh4Jj4bKQpdbFne8FJwpJGZNS",
});

module.exports = paypal;
