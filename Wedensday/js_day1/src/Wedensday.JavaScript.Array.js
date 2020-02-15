// https://docs.google.com/document/d/1eEJbwvOn19fy9MoasclKURqpk3rRVSHZ4S0hGsQUG3s/edit

// (a)
// Create the two arrays below, spelled exactly as they are given. This will form the start for all the following questions.

var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

// (b)
// Create a new array called all, which should be a concatenation of the two 
// arrays given above, starting with the boys and ending with the girls.

let fullarray = boys.concat(girls);

// (c)
// The array type has a cool method to reduce an array into a single string join() (you will love this method)
// - Create a comma separated string containing all the names from the all-array, separated by commas.
console.log(fullarray.join(", "));

// - Create a hyphen (-) separated string containing all the names from the all-array, separated by hyphens.
console.log(fullarray.join("-"));

// (d)
// Add the names Lone and Gitte to the end of the array (remember, all can be done in one-liners)
fullarray.push('Lone', 'Gitte');
console.log(fullarray);

// (e)
// Add the names Hans and Kurt to the start of the array
fullarray.unshift("Hans", "Kurt");
console.log(fullarray);

// (f)
// Remove the first name in the array (Hans)
fullarray.shift();
console.log(fullarray);

// (g)
// Remove the last name from the array (Gitte)
fullarray.pop();
console.log(fullarray);

// (h)
// Remove Ole and Janne from the middle of the array
fullarray.splice(4, 1,);
fullarray.splice(3, 1,);
console.log(fullarray);

// (i)
// Sanne thinks it’s unfair that the boys have to come first, reverse the all array, so that the girls come first.
fullarray.reverse();
console.log(fullarray);

// (j)
// Peter thinks that this is just as unfair and suggests that the array should be sorted. Sort the array.
fullarray.sort();
console.log(fullarray);

// (l)
// Convert all the names in the array to uppercase.
console.log(fullarray.map(a => a.toUpperCase()));

// (m)
// Create a new array containing all the names that start with either “l” or “L” (hint: use the filter function with a sufficient callback)
const result = fullarray.filter(word => word.startsWith("l") || word.startsWith("L"));

console.log(result);