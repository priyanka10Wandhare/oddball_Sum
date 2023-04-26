# oddball_Sum
oddball sum is javaScript interview question the solved without using reduce function,where we have to sum all the odd numbers from given number for that we have to create a function

//sum of all odd numbers without reduce :

function oddball_sum(nums){
	var sum=0;
	for(var i=0;i<num.length;i++){

	if(nums[i]%2!===0){
	sum=nums[i]+sum;
	}
     
     }
    return sum;
}
 
ddball_sum=([1,2,3,4,5,6]);



//sum of all odd nnumbers with reduce function

function oddball_Sum(nums){
	return nums.reduce(function(total,item){
		if(item%2===1){
			return total+=item;
		}
	return total;
	});
      }
