//you are given  a array of positive 
// integers of each positive integers where 
// the each  inetger respresnt the height 
//  of a vertical line  on a chart .
//  find two line x-axis forms a container 
//  that would hold the greates amount of 
// of water return the max area of water
// would it to be hold
// T:complexity :o(1)
// S:complexity :o(n)
const height_of_verticle_line = [1,8,6,2,9,4];
const getMaxArea = (height) => {
	let p1 =0, p2 = height.length-1;
	 let maxArea = 0
	while(p1<p2){
		const calculate_height = Math.min(height[p1], height[p2]);
		const clculate_width = p2-p1;
		const area = calculate_height* clculate_width;
		maxArea= Math.max(maxArea,area);
		if(height[p1] <= height[p2]){
			p1++;
		}
		else{
			p2--;
		}
	 
	}return maxArea;

}
console.log(getMaxArea(height_of_verticle_line))