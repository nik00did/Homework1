{
	console.log("conditional statements:");
	//1
	let a=5, b=10;
	let result1 = a%2 === 0 ? a*b : a+b;
	console.log(result1);
	//2
	let x=10, y=-20;
	if (x>0 && y>0)	console.log("First quater.")
	else if (x<0 && y>0) console.log("Second quater.");
	else if (x<0 && y<0) console.log("Third quater.");
	else if (x>0 && y<0) console.log("Fourth quater.")
	//3
	let f1=5, f2=-2, f3=10;
	let result3=0;
	if (f1>0) result3+=f1;
	if (f2>0) result3+=f2;
	if (f3>0) result3+=f3;
	console.log(result3);
	//4
	let A=1, B=2, C=3;
	result4 = A*B*C>A+B+C ? A*B*C + 3 : A+B+C + 3;//let result4 = Math.max(A*B*C,A+B+C)+3;
	console.log(result4);
	//5
	let rating=95;
	let mark;
	if (rating>=0 && rating<=19) mark="F";
	else if (rating>=20 && rating<=39) mark="E";
	else if (rating>=40 && rating<=59) mark="D";
	else if (rating>=60 && rating<=74) mark="C";
	else if (rating>=75 && rating<=89) mark="B";
	else if (rating>=90 && rating<=100) mark="A";
	console.log(mark);
}
{
	console.log("Cycles:");
	//1
	let sum=0, counter=0;
	for(let i=2; i<=98;i+=2) {
		sum+=i;
		counter++;
	}
	console.log(sum);
	console.log(counter);
	//2
	let number=7;
	let answer=true;
	for(let  i=2; i<number; i++){
		if(number%i===0){
			answer=false;
			break;
		}  
	}
	answer=answer?true:false;
	console.log(answer);
	//3
	//sequance
	let k=36;
	let count=Infinity;
	let temp;
	for(let i=0; i<=k; i++){
		if(k-i*i<count && i*i-k<count){
			count=k-i*i;
			temp=i;
		}
	}
	console.log("sequance");
	console.log(temp);
	//binary
	let m=0;
	let right=k;
	let left=0;
	for(let i=0;i<=right;i+=0.001)
	{
		
		temp=i;
		// console.log("____________________");
		// console.log(i);
		m=(right+left)/2;	
		if (k<m*m) {
			right=m;
		}
		else {
			if (m*m==k) {break;}
			i=m-1;
			left=m;
		}
		//console.log(i);
	}
	console.log("binary");//not finished
	console.log(temp);
	//4
	let n = 3;
	for(let i=n-1; i>0; i--) n*=i;
	console.log(n);
	//5
	sum=0;
	for(let i=1;i<=n;i++) sum+=i;
	console.log(sum);
	//6
	number=12345;
	let newNum=0;
	let power;	
	do{
		power=1;
		for(let t=number/10;t>=1;t=t/10) power*=10;
		newNum+=number%10*power;
		number=(number-number%10)/10;
	}while(number>=1);
	console.log(newNum);
}
{//array
	//1
	let arrMin=[1,2,3,4,-5,8,-3,0,6];
	let min=Infinity;
	for(let i=0; i<arrMin.length; i++){
		if(arrMin[i]<min) min=arrMin[i];
	}
	console.log(min);
	//2
	let arrMax=[4,1,2,3,4,5,8,120,-5,-3,-2,5];
	let max=-Infinity;
	for(let i=0;i<arrMax.length;i++){
		if(arrMax[i]>max) max=arrMax[i];
	}
	console.log(max);
	//3
	min=Infinity;
	let minIndex=0;
	for(let i=0; i<arrMin.length; i++){
		if(arrMin[i]<min){
			min=arrMin[i];
			minIndex=i;
		}
	}
	console.log(minIndex);
	//4
	max=-Infinity;
	let maxIndex=0;
	for(let i=0;i<arrMax.length;i++){
		if(arrMax[i]>max){
			max=arrMax[i];
			maxIndex=i;
		}
	}
	console.log(maxIndex);
	//5
	let arraySumOdd=[1,2,3,4,5,6,7,8,9];
	let sumOdd=0;
	for(let i=1; i<arraySumOdd.length;i+=2) sumOdd+=arraySumOdd[i];
	console.log(sumOdd);
	//6
	//console.log([1,2,3,4,5,6,7].reverse());
	let arrReverse=[1,2,3,4,5,6,7,8];
	for(let i=0, j=arrReverse.length-1;i<arrReverse.length/2, j>arrReverse.length/2;i++,j--){
		let temp=arrReverse[i];
		arrReverse[i]=arrReverse[j];
		arrReverse[j]=temp;
	}
	console.log(arrReverse);
	//7
	let arrayOddElem=[1,2,3,4,5,6,7,8,9,190];
	let amountOddElem=0;
	for(let i=1;i<arrayOddElem.length;i+=2) amountOddElem++;;
	console.log(amountOddElem);
	//8
	let arrayChange=[1,2,3,4,5,6,7];
	for(let i=0, j=arrayChange.length/2+(arrayChange.length/2)%1;j<arrayChange.length,i<arrayChange.length/2-(arrayChange.length/2)%1;j++,i++){
		let temp=arrayChange[i];
		arrayChange[i]=arrayChange[j];
		arrayChange[j]=temp;
	}
	console.log(arrayChange);
	//9
	let arrayBubbleSort=[1,5,3,88,3,763,11,654,5676,5436455,4,0,-4,567];
	for(let i=0;i<arrayBubbleSort.length-1;i++){
		for(let j=0;j<arrayBubbleSort.length;j++){
			if(arrayBubbleSort[j]<arrayBubbleSort[j+1]){
				let temp=arrayBubbleSort[j];
				arrayBubbleSort[j]=arrayBubbleSort[j+1];
				arrayBubbleSort[j+1]=temp;
			}
		}
	}
	console.log(arrayBubbleSort);//descending

	let arraySelectSort=[1,5,3,88,3,763,11,654,5676,5436455,4,0,-4,567];
	maxIndex=0;
	for(let i=0;i<arraySelectSort.length-1;i++){
		maxIndex=i;
		for(let j=i+1;j<arraySelectSort.length;j++) if(arraySelectSort[maxIndex]<arraySelectSort[j]) maxIndex=j;
		if(maxIndex!==i) {
			let temp=arraySelectSort[i];
			arraySelectSort[i]=arraySelectSort[maxIndex];
			arraySelectSort[maxIndex]=temp;
			//[arraySelectSort[i],arraySelectSort[maxIndex]]=[arraySelectSort[maxIndex],arraySelectSort[i]];
		}
	}
	console.log(arraySelectSort);//descending

	let arrayInsertSort=[1,5,3,88,3,763,11,654,5676,5436455,4,0,-4,567];
	for(let i=0;i<arrayInsertSort.length;i++){
		let item=arrayInsertSort[i];
		let j=i;
		for(;j>0 && arrayInsertSort[j-1]<item;j--) arrayInsertSort[j]=arrayInsertSort[j-1];
		arrayInsertSort[j]=item;
	}
	console.log(arrayInsertSort);//descending
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