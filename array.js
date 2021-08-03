// give an array of integers return the indices 
// of two number  that add up to given target 
// T:complexity :o(n^2)
// S:complexity :o(1)
const target = 11;
const numArray =[1,2,3,4,5,6];
const findTwoSum = (num, tar) => {
	for(let p = 0; p< num.length;p++){
		const numbertofinnd = target-num[p]
		for(let p2= p+1; p2<num.length;p2++){
			if(num[p2] === numbertofinnd){
				return [p,p2]
			}

		}
	}
}
console.log(findTwoSum(numArray,target))