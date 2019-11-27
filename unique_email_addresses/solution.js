var numUniqueEmails = function(emails) { // This function takes in an array
    let set1 = new Set() // We will be using the JavaScript Set to store the unique email addresses we collect from the array
    for (let emailaddress of emails) { // Now we will iterate through all the email addresses in the array storing emails
        let split = emailaddress.split("@") // for each email address, we split it at the @ sign, we want to work with the local part of the address
        let no_dot = split[0].split(".").join("") // we will need the email without the dot
        let no_add = no_dot.split("+")[0] // then we remove the plus sign
        set1.add(no_add + "@" + split[1]) // then we add to the set the email that has removed the plus sign
    }
    return set1.size
};