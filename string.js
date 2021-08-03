//given two string S, and T return the 
// true if they equal when both are typed
// out and any # appears 
// in the string count as backspace 
//for ex s:'ab#c' --> ac
// t: az#c --> 
// s=== t condition statisfy return true'
// T:o(n+n); --> o(2n) ---> o(n)
const shuffleS= 'abcde##';
const shuffleT = 'abcde#';
const buildString = (string) => {
	let build = []
	for(p=0;p<string.length;p++){ //o(n)
		if(string[p]!== '#'){
			build.push(string[p])
			console.log({build})

		}else{
			build.pop()
		}
	}
	return build;
} 
const findTrueString = (s,t)=>{
	const findS = buildString(s);
	console.log({findS})
	const findT = buildString(t);
	console.log({findT})
	if(findS.length!== findT.length)return false;
	for(let p=0;p<findT.length;p++){	//on(n)
		if(findS[p]!==findT[p]){
			return false
		}
	}
	return true;
}
console.log(findTrueString(shuffleS,shuffleT));