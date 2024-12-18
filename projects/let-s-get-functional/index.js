// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
let males = _.filter(array, (customer) => customer.gender === 'male');
return males.length
}

var femaleCount = function(array){
return _.reduce(array, function(acc, customer){
    if (customer.gender === 'female'){
        return acc + 1;
    }
    return acc;
}, 0)  
};

var oldestCustomer = function(array){ 
return _.reduce(array, (oldest, current) => { return current.age > oldest.age ? current : oldest;}).name; 
}

var youngestCustomer = function(array){
return _.reduce(array, (youngest, current) => { return current.age < youngest.age ? current : youngest;}).name; 
}

var averageBalance = function(array){
const totalBalance = array.reduce((sum, customer) => { 
const balance = +customer.balance.replace(/[\$,]/g, '');
return sum + balance
},0);
return totalBalance / array.length;
}

var firstLetterCount = function (array, letter){
    return array.reduce(function(count, customer){
    if(customer.name[0].toLowerCase() === letter.toLowerCase()){
        count++
    }
    return count
    },0);
}

var friendFirstLetterCount = function(array, customer, letter){
    const customerData = array.find(item => item.name === customer);
    if (customerData){
        return customerData.friends.reduce((count, friend) =>{
        if (friend.name[0].toLowerCase()===letter.toLowerCase()){
        count ++    
        }
        return count
        },0);
    }
    return 0;
};

var friendsCount = function(array, name){
  return array.filter(customer =>
  customer.friends.some(friend => friend.name === name)
  ).map(customer => customer.name);
};

var topThreeTags = function(array){

const allTags = array.flatMap(customer => customer.tags);

    const tagFrequency = allTags.reduce((acc, tag) => {
acc[tag] = (acc[tag] || 0) + 1;
    return acc;
 }, {});
  
    
const sortedTags = Object.keys(tagFrequency)
  .sort((a, b) => tagFrequency[b] - tagFrequency[a]);
  
    
  return sortedTags.slice(0, 3);
  
};


var genderCount = function(array){
return array.reduce((acc, person) => {
    acc[person.gender] = (acc[person.gender] || 0) + 1;
    return acc;
}, {});
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
