{
	console.log("conditional statements:");
	//1
	const func1 = (a,b) => a%2 === 0 ? a*b : a+b
	console.log(func1(10,5));
	//2
	const quater = (x,y) => {
		if (x>0 && y>0)	return "First quater.";
		else if (x<0 && y>0) return "Second quater.";
		else if (x<0 && y<0) return "Third quater.";
		else if (x>0 && y<0) return "Fourth quater.";
	}
	console.log(quater(10,-20));
	//3
	const onlyPositiveSum = (a,b,c) => {
		let result=0;
		if (a>0) result+=a;
		if (b>0) result+=b;
		if (c>0) result+=c;
		return result;
	}
	console.log(onlyPositiveSum(10,-15,8));
	//4
	const countExpression = (a,b,c) => a*b*c>a+b+c ? a*b*c + 3 : a+b+c + 3;//let result4 = Math.max(a*b*c,a+b+c)+3;
	console.log(countExpression(1,1,1));
	//5
	const getMark = rating => {
		let mark;
		if (rating>=0 && rating<=19) mark="F";
		else if (rating>=20 && rating<=39) mark="E";
		else if (rating>=40 && rating<=59) mark="D";
		else if (rating>=60 && rating<=74) mark="C";
		else if (rating>=75 && rating<=89) mark="B";
		else if (rating>=90 && rating<=100) mark="A";
		return mark;
	}
	console.log(getMark(95));
}
{
	console.log("Cycles:");
	//1
	const sumAndAmountOfEvenNumbers = () => {
		let sum=0, counter=0;
		for(let i=2; i<=98;i+=2) {
			sum+=i;
			counter++;
		}
		return {sum:sum,counter:counter};
	}
	console.log(sumAndAmountOfEvenNumbers());
	//2
	const isSimple = number => {
		let answer=true;
		for(let  i=2; i<number; i++){
			if(number%i===0){
				answer=false;
				break;
			}  
		}
		return answer=answer?true:false;
	}
	console.log(isSimple(7));
	//3
	//sequance
	const sqrtSequentialSelection = (k) => {
		let count=Infinity;
		let temp;
		for(let i=0; i<=k; i++){
			if(k-i*i<count && i*i-k<count){
				count=k-i*i;
				temp=i;
			}
		}
		return temp;
	}
	console.log(sqrtSequentialSelection(30));
	//binary
	const sqrtBinarySearch = () => {
		// let m=0;
		// let right=k;
		// let left=0;
		// for(let i=0;i<=right;i+=0.001){
		
		// 	temp=i;
		// 	// console.log("____________________");
		// 	// console.log(i);
		// 	m=(right+left)/2;	
		// 	if (k<m*m) {
		// 		right=m;
		// 	}
		// 	else {
		// 		if (m*m==k) {break;}
		// 		i=m-1;
		// 		left=m;
		// 	}
		// 	//console.log(i);
		// }
	}
	//4
	const factorial = n => {
		for(let i=n-1; i>0; i--) n*=i;
		return n;
	}
	console.log(factorial(3));
	//5
	const sumOfNumeral = n => {
		let sum=0;
		while(n>=1){
			sum+=n%10;
			n=(n-n%10)/10;
		}
		return sum;
	}
	console.log(sumOfNumeral(1234));
	//6
	const reverseNumber = number => {
		let newNum=0;
		let power;	
		do{
			power=1;
			for(let t=number/10;t>=1;t=t/10) power*=10;
			newNum+=number%10*power;
			number=(number-number%10)/10;
		}while(number>=1);
		return newNum;
	}
	console.log(reverseNumber(12345));
}
{//array
	//1
	const findMinElem = array => {
		let min=Infinity;
		for(let i=0; i<array.length; i++) if(array[i]<min) min=array[i];
		return min;
	}
	console.log(findMinElem([4,1,2,3,4,5,8,120,-5,-3,-2,5]));
	//2
	const findMaxElem = array => {
		let max=-Infinity;
		for(let i=0;i<array.length;i++) if(array[i]>max) max=array[i];
		return max;
	}
	console.log([4,1,2,3,4,5,8,120,-5,-3,-2,5]);
	//3
	const findIndexOfMinElem = array => {
		let min=Infinity;
		let minIndex=0;
		for(let i=0; i<array.length; i++){
			if(array[i]<min){
				min=array[i];
				minIndex=i;
			}
		}
		return minIndex;
	}
	console.log(findIndexOfMinElem([4,1,2,3,4,5,8,120,-5,-3,-2,5]));
	//4
	const findIndexOfMaxElem = array => {
		let max=-Infinity;
		let maxIndex=0;
		for(let i=0;i<array.length;i++){
			if(array[i]>max){
				max=array[i];
				maxIndex=i;
			}
		}
		return maxIndex;
	}
	console.log(findIndexOfMaxElem([4,1,2,3,4,5,8,120,-5,-3,-2,5]));
	//5
	const sumOddElem = array => {
		let sum=0;
		for(let i=1; i<array.length;i+=2) sum+=array[i];
		return sum;
	}
	console.log(sumOddElem([4,1,2,3,4,5,8,120,-5,-3,-2,5]));
	//6
	//console.log([1,2,3,4,5,6,7].reverse());
	const reverseOfArray = array => {
		for(let i=0, j=array.length-1;i<array.length/2, j>array.length/2;i++,j--){
			let temp=array[i];
			array[i]=array[j];
			array[j]=temp;
		}
		return array;
	}
	console.log(reverseOfArray([1,2,3,4,5,6,7,8]));
	//7
	const amountOddElem = array => {
		let amount=0;
		for(let i=1;i<array.length;i+=2) array++;
		return amount;
	}
	console.log(amountOddElem([1,2,3,4,5,6,7,8,9,190]));
	//8
	const changeHalfArray = array => {
		for(let i=0, j=array.length/2+(array.length/2)%1;j<array.length,i<array.length/2-(array.length/2)%1;j++,i++){
			let temp=array[i];
			array[i]=array[j];
			array[j]=temp;
		}
		return array;
	}
	console.log(changeHalfArray([1,2,3,4,5,6,7]));
	//9
	const arrayBubbleSort = array => {
		for(let i=0;i<array.length-1;i++){
			for(let j=0;j<array.length;j++){
				if(array[j]<array[j+1]){
					let temp=array[j];
					array[j]=array[j+1];
					array[j+1]=temp;
				}
			}
		}
		return array;
	}
	console.log(arrayBubbleSort([1,5,3,88,3,763,11,654,5676,5436455,4,0,-4,567]));
	//descending
	const arrayInsertSort = array => {
		for(let i=0;i<array.length;i++){
			let item=array[i];
			let j=i;
			for(;j>0 && array[j-1]<item;j--) array[j]=array[j-1];
			array[j]=item;
		}
		return array;
	}
	console.log(arrayInsertSort([1,5,3,88,3,763,11,654,5676,5436455,4,0,-4,567]));
	//10
	let arrayQuickSort=[1,5,3,88,3,763,11,654,5676,5436455,4,0,-4,567];
	//not finished
	let arrayShellSort=[1,5,3,88,3,763,11,654,5676,5436455,4,0,-4,567];
	//not finished

}
{//functions
	//1
	const getDayName = number => {
		switch(number){
			case 1: return "Monday";
			case 2: return "Tuesday";
			case 3: return "Wednesday";
			case 4: return "Thursday";
			case 5: return "Friday";
			case 6: return "Saturday";
			case 7: return "Sunday";
			default: return "Wrong number!";
		}
	}
	console.log(getDayName(0));
	//2
	let point1={x:10,y:-20};
	let point2={x:20,y:0};
	const getDistanceBetweenTwoPoints = (point1,point2) => ((point2.x-point1.x)**2+(point2.y-point1.y))**0.5;
	console.log(getDistanceBetweenTwoPoints(point1,point2));
}