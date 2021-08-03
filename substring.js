//given a substring find the  length of the 
// longest subsring without repeating a
// character
// ex -->abccab --> longestsubstng:3
// ex --> ccccccc---> 1

// ex ---> abcbda --->4 
const stringdata = 'abccdef';
// T:complexity :o(n^2)
// S:complexity :o(1)
const longestSubstring = (s) => {
	if(s.length<=1) return s.length;
	let longest =0;
	for(let left =0; left <s.length;left++){
		let seenChar = {}, currentLength = 0;

		for(let right = left; right <s.length; right++){
			const currentNum = s[right];
			if(!seenChar[currentNum]){
				currentLength ++;
				seenChar[currentNum] =true;
				longest= Math.max(longest, currentLength);
			}else{
				break;
			}
		}
	}
	return longest;
}
console.log(longestSubstring(stringdata))