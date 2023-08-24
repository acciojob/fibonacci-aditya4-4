function fibonacci(n) {
	let first =0;
	let second =1;
	let third = 0;
	if(n ==0){
	  return 0;
	}
	else if(n == 1 || n ==2){
	  return 1;
	}
	
	for(let i=3;i<=n;i++){
	  third = first + second;
	  first = second;
	  second = third;
	}
	return third;
	
}

module.exports = fibonacci;
