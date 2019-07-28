const getSumOrMultiByEven = (a, b) => a % 2 === 0 ? a * b : a + b;

const getQuarter = (x, y) => {
    let result = "";

    if (x > 0 && y > 0)	{
        result = "First quarter";
    } else if (x < 0 && y > 0) {
        result = "Second quarter";
    } else if (x < 0 && y < 0) {
        result = "Third quarter";
    } else if (x > 0 && y < 0) {
        result = "Fourth quarter";
    } else if (x === 0 && y === 0) {
        result = "Center";
    } else if (x > 0 && y === 0 ) {
        result = "Positive axis OX";
    } else if (x === 0 && y < 0) {
        result = "Negative axis OY";
    } else if (x === 0 && y > 0 ) {
        result = "Positive axis OY";
    } else if (x < 0 && y === 0) {
        result = "Negative axis OX";
    }

    return result;
};

const getOnlyPositiveSum = (a, b, c) => {
    let result = 0;

    if (a > 0) {
        result += a;
    }
    if (b > 0) {
        result += b;
    }
    if (c > 0) {
        result += c;
    }

    return result;
};

const countExpression = (a, b, c) => a * b * c > a + b + c ? a * b * c + 3 : a + b + c + 3;

const getMarkByRating = rating => {
    let mark;

    if (rating >= 0 && rating <= 19) {
        mark = "F";
    } else if (rating >= 20 && rating <= 39) {
        mark = "E";
    } else if (rating >= 40 && rating <= 59) {
        mark = "D";
    } else if (rating >= 60 && rating <= 74) {
        mark = "C";
    } else if (rating >= 75 && rating <= 89) {
        mark = "B";
    } else if (rating >= 90 && rating <= 100) {
        mark = "A";
    } else {
        throw new Error ("Invalid given rating!");
    }

    return mark;
};

const getSumAndAmountOfEven99Numbers = () => [2450, 49];

const isSimple = number => {

    if (number <= 1) {
        return false;
    }

    for (let i = 2; i < number / 2; i++) {
        if (number % i === 0){
            return false;
        }
    }

    return true;
};

const getSqrtSequentialSelection = number => {

    if (number === 0) {
        return 0;
    } else if (number < 0) {
        throw new Error("Negative number!");
    }

    let count = number;

    let temp;

    for (let i = 0; i <= number; i++) {

        if (number - i * i < count && i * i - number < count) {
            count = number - i * i;
            temp = i;
        }

    }

    return temp;
};

const getSqrtBinarySearch = number => {

    if (number === 0) {
        return 0;
    } else if (number < 0) {
        return "Negative number input!";
    }

    let left = 0;

    let right = number;

    let item = 0;

    do {
        item = (left + right + (left + right) % 2) / 2;

        if (item ** 2 > number) {
            right = item;
        }
        else {
            left = item;
        }

    } while (right - left > 1);

    return number - left ** 2 > right ** 2 - number ? right : left;
};

const getFactorial = number => {
    let result = number;

    for (let i = number - 1; i > 0; i--) {
        result *= i;
    }

    return result;
};

const getTheSumOfDigits = number => {
    let sum = 0;

    while (number >= 1) {
        sum += number % 10;
        number = (number - number % 10) / 10;
    }

    return sum;
};

const reverseNumber = number => {
    let newNum = 0;

    let power;

    do {
        power = 1;

        for (let t = number / 10; t >= 1; t /= 10) {
            power *= 10;
        }

        newNum += number % 10 * power;
        number = (number - number % 10) / 10;

    } while (number >= 1);

    return newNum;
};

const findMinElemArray = array => {

    if (array === undefined || !array.length)  {
        return null;
    }

    let min = array[0];

    for (let i = 1; i < array.length; i++) {

        if (array[i] < min) {
            min = array[i];
        }

    }

    return min;
};

const findMaxElemArray = array => {

    if (array === undefined || !array.length)  {
        return null;
    }

    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
};

const findIndexOfMinElemArray = array => {

    if (array === undefined || !array.length)  {
        return null;
    }

    let min = array[0];

    let minIndex = 0;

    for (let i = 1; i < array.length; i++) {

        if (array[i] < min) {
            min = array[i];
            minIndex = i;
        }

    }

    return minIndex;
};

const findIndexOfMaxElemArray = array => {

    if (array === undefined || !array.length)  {
        return null;
    }

    let max = array[0];

    let maxIndex = 0;

    for (let i = 1;i <array.length; i++) {

        if (array[i] > max) {
            max = array[i];
            maxIndex = i;
        }

    }

    return maxIndex;
};

const sumOddElemArray = array => {

    if (array === undefined || !array.length || array.length<2) {
        return null;
    }

    let sum = 0;

    for (let i = 1; i < array.length; i += 2) {
        sum += array[i];
    }

    return sum;
};

const reverseArray = array => {

    if (array === undefined || !array.length) {
        return null;
    }

    let newArray = new Array(array.length);

    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i];
    }

    for (let i = 0, j = newArray.length - 1; i < newArray.length / 2, j >= newArray.length / 2; i++, j--) {
        let temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
    }

    return newArray;
};

const amountOddElemArray = array => {

    if (array === undefined || !array.length || array.length<2) {
        return null;
    }

    let amount=0;

    for (let i = 1; i < array.length; i += 2) {
        amount++;
    }

    return amount;
};

const swapHalfArray = array => {

    if (array === undefined || !array.length) {
        return null;
    }

    let newArray = new Array(array.length);

    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i];
    }

    for (let i = 0, j = newArray.length / 2 + (newArray.length / 2) % 1; j < newArray.length, i < newArray.length / 2 - (newArray.length / 2) % 1; j++, i++) {
        let temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
    }

    return newArray;
};

const arrayBubbleSort = array => {

    if (array === undefined || !array.length) {
        return null;
    }

    let newArray = new Array(array.length);

    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i];
    }

    for (let i = 0; i < newArray.length - 1; i++) {
        for (let j = 0; j < newArray.length; j++) {
            if (newArray[j] < newArray[j + 1]) {
                let temp = newArray[j];
                newArray[j] = newArray[j + 1];
                newArray[j + 1] = temp;
            }
        }
    }

    return newArray;
};
//descending
const arrayInsertSort = array => {

    if (array === undefined || !array.length) {
        return null;
    }

    let newArray = new Array(array.length);

    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i];
    }

    for (let i = 0; i < newArray.length; i++) {
        let item = newArray[i];

        let j = i;

        for(; j > 0 && newArray[j - 1] < item; j--) {
            newArray[j] = newArray[j - 1];
        }

        newArray[j] = item;
    }

    return newArray;
};

const part = (array, left, right) => {
    let item = array[(right + left - (right + left) % 2) / 2];

    let i = left;

    let j = right;

    while (i <= j) {

        while (array[i] > item) {
            i++;
        }

        while (array[j] < item) {
            j--;
        }

        if (i <= j) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++;
            j--;
        }

    }

    return i;
};
const arrayQuickSort = (array, left, right) => {

    if (array === undefined || !array.length) {
        return null;
    }

    let newArray = new Array(array.length);

    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i];
    }

    left = typeof left !== "number" ? 0 : left;

    right = typeof right !== "number" ? newArray.length - 1 : right;

    let index;

    if (newArray.length > 1) {
        index = part(newArray, left, right);

        if (left < index - 1) {
            arrayQuickSort(newArray, left, index - 1);
        }

        if (index < right) {
            arrayQuickSort(newArray, index, right);
        }

    }

    return newArray;
};

const arrayShellSort = array => {

    if (array === undefined || !array.length) {
        return null;
    }

    let newArray = new Array(array.length);

    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i];
    }

    let step = (newArray.length - newArray.length % 2) / 2;

    while (step >= 1) {

        for (let i = step; i < newArray.length; i++) {
            const current = newArray[i];

            let j = i;

            while (j > 0 && newArray[j - step] < current) {
                newArray[j] = newArray[j - step];
                j -= step;
            }

            newArray[j] = current;
        }

        step = (step - step % 2) / 2;
    }

    return newArray;
};

let len;

const heapBranch = (array, i) => {
    let left = 2 * i + 1;

    let right = 2 * i + 2;

    let max = i;

    if (left < len && array[left] > array[max]) {
        max = left;
    }

    if (right < len && array[right] > array[max]) {
        max = right;
    }

    if (max !== i) {
        let temp = array[i];
        array[i] = array[max];
        array[max] = temp;

        heapBranch(array, max);
    }
};

const arrayHeapSort = array => {

    if (array === undefined || !array.length) {
        return null;
    }

    let newArray = new Array(array.length);

    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i];
    }

    len = newArray.length;

    for (let i = (len - len % 2) / 2; i >= 0; i -= 1) {
        heapBranch(newArray, i);
    }

    for (let i = len - 1; i >= 0; i--) {
        let temp = newArray[0];
        newArray[0] = newArray[i];
        newArray[i] = temp;
        len--;

        heapBranch(newArray, 0);
    }

    return newArray;
};


let arr = [3, 6, 2, 545, 75468, 67, 44, 32, 645, 7, 4, 6, 5346, 457, 5, 734, 53, -5, 7749, -1, 98, 98, 7, 7, -4, -88,];

arrayHeapSort(arr);//using

const sliceArray = (array, startIndex, finishIndex) => {
    let newArray;

    if(!finishIndex) {
        newArray = new Array(array.length - startIndex);

        for (let i = 0; i < newArray.length; i++) {
            newArray[i] = array[i + startIndex];
        }

        return newArray;
    }
    else {
        newArray = new Array(finishIndex - startIndex);

        for (let i = 0, j = startIndex; i < newArray.length, j < finishIndex; i++, j++) {
            newArray[i] = array[j];
        }

        return newArray;
    }
};

const pushElem = (array, elem) => {
    let newArray = new Array(array.length + 1);

    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i];
    }

    newArray[newArray.length - 1] = elem;

    return newArray;
};

const merge = (first, second) => {
    let array = [];

    let i = 0, j = 0;

    while (i < first.length && j < second.length) {
        array = pushElem(array,(first[i] < second[j]) ? first[i++] : second[j++]);
    }

    return [
        ...array,
        ...sliceArray(first, i),
        ...sliceArray(second, j)
    ];
};

const arrayMergeSort = array => {

    if (array === undefined || !array.length) {
        return null;
    }

    let newArray = new Array(array.length);

    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i];
    }

    if (newArray.length <= 1) {
        return newArray;
    }

    const middle = (newArray.length - newArray.length % 2) / 2;

    const arrLeft = sliceArray(newArray, 0, middle);

    const arrRight = sliceArray(newArray, middle);

    return merge(arrayMergeSort(arrLeft), arrayMergeSort(arrRight));
};

const getDayName = number => {

    if (number < 1 || number > 7) {
        return "Wrong number!";
    }

    const arrayDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    return arrayDays[number - 1];
};

const getDistanceBetweenTwoPoints = (startPoint, finishPoint) => {
    return getSqrtBinarySearch((finishPoint.x - startPoint.x) ** 2 + (finishPoint.y - startPoint.y) ** 2);
};

//extra homework
const getTwoMinElem = array => {

    if (array === undefined || !array.length) {
        return null;
    }

    let min1 = array[0], min2 = array[0];

    let indexMin1;

    for (let i = 0; i <array.length; i++) {

        if (array[i] < min1) {
            min1 = array[i];
            indexMin1 = i;
        }

    }

    let newArray = new Array(array.length - 1);

    let i = 0, j = 0;

    while (i < array.length) {

        if (i === indexMin1) {
            i++;
        }
        else {
            newArray[j] = array[i];

            if (newArray[j] < min2) {
                min2 = newArray[j];
            }

            i++;
            j++;
        }

    }

    for (let i = 0; i < newArray.length; i++) {

        if (newArray[i] < min2) {
            min2 = newArray[i];
        }

    }

    return [min1, min2];
};

const getAverageArray = array => {

    if (array === undefined || !array.length) {
        return null;
    }

    let average = 0;

    for (let i = 0; i < array.length; i++) {
        average += array[i];
    }

    return average / array.length;
};

const getMaxColumnMatrix = matrix => {

    if (matrix === undefined || !matrix.length) {
        return null;
    }

    let array = new Array(matrix[0].length);

    let max;

    for (let i = 0; i < matrix[0].length; i++){
        max = matrix[0][i];

        for (let j = 0; j < matrix.length; j++) {

            if (matrix[j][i] > max) {
                max = matrix[j][i];
            }

        }

        array[i] = max;
    }

    return array;
};

const getPositiveAndNegativeArrays = array => {

    if (array === undefined || !array.length) {
        return null;
    }

    let positive = [], negative = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i] > 0) {
            positive = pushElem(positive, array[i]);
        }
        else if (array[i] < 0) {
            negative = pushElem(negative, array[i]);
        }

    }
    return {
        positive: positive,
        negative: negative
    };
};

const countSimpleArrayNumbers = array => {

    if (array === undefined || !array.length) {
        return null;
    }

    let count = 0;

    let anotherCount = 0;

    for (let i = 0; i < array.length; i++) {

        for (let j = 2; j < array[i]; j++) {

            if (array[i] % j === 0) {
                anotherCount++;
            }

        }

        if (anotherCount === 0 && array[i] > 1) {
            count++;
        }

        anotherCount = 0;
    }

    return count;
};