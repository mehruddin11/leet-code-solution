//you are given  a array of positive 
// integers of each positive integers where 
// the each  inetger respresnt the height 
//  of a vertical line  on a chart .
//  find two line x-axis forms a container 
//  that would hold the greates amount of 
// of water return the max area of water
// would it to be hold
// T:complexity :o(n^2)
// S:complexity :o(1)
const height_of_verticle_line = [1,8,6,2,9,4];

const getMaxArea = (height) => {
	let maxArea =0;
	for(let p=0 ; p<height.length; p++){
		for(let p2=p+1; p2<height.length;p2++){
			const calculate_height = Math.min(height[p], height[p2]);
			const clculate_width =p2-p;
			const area = clculate_width* calculate_height;
			maxArea = Math.max(maxArea,area)
		}

	}return maxArea;
}
console.log(getMaxArea(height_of_verticle_line))
