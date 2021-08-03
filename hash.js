// give an array of integers return the indices 
// of two number  that add up to given target
// S:complexity :o(n^2)
// T:complexity :o(1)
const target = 11;
const numArray = [1,2,3,4,5,6];
const hashMapNumberToFind = (num,tar) => {
	const numMap = {};
	for(let p=0;p<num.length;p++){
		const currentMap = numMap[num[p]];
		if(currentMap>=0){
			return [currentMap,p];
		}
		else{
			const numbertofind = tar - num[p];
			numMap[numbertofind]=p;
		}
	}
	return null;
}
console.log(hashMapNumberToFind(numArray, target))