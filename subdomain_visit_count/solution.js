var subdomainVisits = function(cpdomains) {
    const domCounts = new Map();
    
    // utlizing a callback functino for each item that is in the cpdomains, forEach method allows use to use callback function on each item
    cpdomains.forEach(pair => {
      [count, domain] = pair.split(' '); // each item is a count and the domain that are seperated with ' '; the count is the first part and domain second part
      if (!domCounts[domain]) domCounts[domain] = 0; // if the counts do not contain the domain then we add teh domain into the the map
      domCounts[domain] += parseInt(count); // if it was already in the hash map, then we increment the count, but we still increment the count by one
      
      while (domain.length > 0) { // we are now looking at the domain itself to find other sub domains
        const index = domain.indexOf('.'); // we split the domain on the '.' and store the index
        if (index === -1) break; // if there is no '.' break the loop
        domain = domain.substring(index + 1); // get a new domain to check after the '.'
        if (!domCounts[domain]) domCounts[domain] = 0; // if this subdomain isn't in the domCounts then initialize it
        domCounts[domain] += parseInt(count); // if it already was then increment, but we still increment the count by one
      }
    });
    
    return Object.keys(domCounts).map(domain => domCounts[domain] + ' ' + domain); // return an array that contains the coutns and the domain
  };