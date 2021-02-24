if (!environment.output.googleUsers.users) {
    next(null, []);
}

const itemsToIndex = [];
environment.output.googleUsers.users.forEach(async function(user) {
    const itemToIndex = {
        type: "user",
        key: user.primaryEmail.replace("@", "_").replace(".", "_"),
        name: user.name.fullName,
        tag: ["google", "user"],
        attribute: {
            firstname: user.name.givenName,
            lastname: user.name.familyName,
            email: user.primaryEmail,
            org: user.orgUnitPath,
            is_admin: user.isAdmin,
            last_login_time: user.lastLoginTime,
            creation_time: user.creationTime
        }
    };
    itemsToIndex.push(itemToIndex);
})

next(null, itemsToIndex);