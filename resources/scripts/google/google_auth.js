var body = {
    "scope": "https://www.googleapis.com/auth/admin.directory.user.readonly"
}

var claimSet = {
    "issuer": environment.output.googleSettings._google_serviceaccount_email,
    "subject": environment.output.googleSettings._google_serviceaccount_impersonate_email,
    "audience": "https://oauth2.googleapis.com/token",
    "expiresIn": 60*60,
    "algorithm" : "RS256"
}

var pkey = environment.output.googleSettings._google_serviceaccount_privatekey.replace(/\\n/g, "\n");
var signedJWT = jwt.sign(body,pkey,claimSet);
next (null, signedJWT);