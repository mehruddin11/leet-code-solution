// A palendrom is string that reads the same 
//  from forward and backword 
// ex --> 'aba ' or "a" or "raccar"

// question 
// given a string determine if it is a plendrome 
// considering character and ignore case 
// sensitivity
//fisrt case
let str = "raccar";
const findValidPalendrome = (s)=>{
	let left =0, right = s.length-1;
	while(left < right){
		if(s[left] !== s[right]){
			console.log(s[left], s[right])
			return false;
		}
		left++;
		right--;
	}
	return true
};
console.log(findValidPalendrome(str))
strcomplex = 'A Man , a plan , a cannal : pnama'
const complexvalidPalendrom = (s)=>{
	let left=0, right=s.length-1;
	s = s.replace(/[^ A-Z a-z 0-9]/g, "").toLowerCase();
	console.log(s)
	while(left< right){
		if(s[left]!== s[right]){
			return false
		}
		left ++;
		right --;
	}
	return true
}
console.log(complexvalidPalendrom(strcomplex))
