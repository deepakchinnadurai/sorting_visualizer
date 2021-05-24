
import './Node.css';


    const generateColors = (num) => {
    
    let colors = [];
    for(let i=0; i<num; i++){
        let h = Math.floor(Math.random() * 450);
        colors.push(h);
        
    }
    return (colors);
    }
    

export function sort(array) {
    let animations  = [];
    let auxillaryArray = array.slice();
    bubbleSort(auxillaryArray, animations);
    //const javaScriptSortedArray = array.slice().sort((a, b) => a - b);

    array = auxillaryArray;
    return [animations, array];
}

function bubbleSort(auxillaryArray, animations) {
    const N = auxillaryArray.length;
    let iters = N - 1;
    while(iters > 0) {
        let swapped = false;
        for(let i = 0; i < iters; ++i) {
            animations.push(["comparision1", i, i + 1]);
            animations.push(["comparision2", i, i + 1]);
            if(auxillaryArray[i] < auxillaryArray[i + 1]) {
                swapped = true;
                animations.push(["swap", i, auxillaryArray[i + 1]]);
                animations.push(["swap", i + 1, auxillaryArray[i]]);
                swap(auxillaryArray, i, i + 1);
            }
        }
        if(swapped === false) break;
        iters--;
    }
}

function swap(auxillaryArray, firstIndex, secondIndex) {
    let temp = auxillaryArray[firstIndex];
    auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
    auxillaryArray[secondIndex] = temp;
}
	

export function getMergeSortAnimations(array) {
    let animations  = [];
    let auxillaryArray = array.slice();
    mergeSort(auxillaryArray, 0, auxillaryArray.length - 1, animations);

    array = auxillaryArray;
    return [animations, array];
}

function mergeSort(auxillaryArray, startIndex, endIndex, animations) {
    if(startIndex === endIndex)
        return;
    const middleIndex = Math.floor((startIndex + endIndex)/2);
    mergeSort(auxillaryArray, startIndex, middleIndex, animations);
    mergeSort(auxillaryArray, middleIndex + 1, endIndex, animations);
    merge(auxillaryArray, startIndex, middleIndex, endIndex, animations);
}

function merge(auxillaryArray, startIndex, middleIndex, endIndex, animations) {
    let sortArray = [];
    let i = startIndex;
    let j = middleIndex + 1;
    while(i <= middleIndex && j <= endIndex) {
        //Comparing value at ith and jth index so push them to change their color
        animations.push(["comparision1", i, j]);
        //By changing color we imply that we are comparing those two values and then again we should revert back to their original color so push them again
        animations.push(["comparision2", i, j]);
        if(auxillaryArray[i] >= auxillaryArray[j]) {
            sortArray.push(auxillaryArray[i++]);
        }
        else {
            sortArray.push(auxillaryArray[j++]);
        }
    }
    while(i <= middleIndex) {
        animations.push(["comparision1", i, i]);
        animations.push(["comparision2", i, i]);
        sortArray.push(auxillaryArray[i++]);
    }
    while(j <= endIndex) {
        animations.push(["comparision1", j, j]);
        animations.push(["comparision2", j, j]);
        sortArray.push(auxillaryArray[j++]);
    }
    for (let i = startIndex; i <= endIndex; i++) {
        animations.push(["comparision1", i, i - startIndex]);
        animations.push(["overwrite", i, sortArray[i - startIndex]]);
        animations.push(["comparision2", i, i - startIndex]);
        auxillaryArray[i] = sortArray[i - startIndex];
    }
}

export function getInsert(array) {
    let animations  = [];
    let auxillaryArray = array.slice();
    insertionSort(auxillaryArray, animations);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    console.log("sort works correctly? ",arraysAreEqual(javaScriptSortedArray, auxillaryArray));
    array = auxillaryArray;
    return [animations, array];
}

function insertionSort(auxillaryArray, animations) {
    const N = auxillaryArray.length;
    for (let i = 1; i < N; i++) {
        let key = auxillaryArray[i];
        let j = i - 1;
        animations.push(["comparision1", j, i]);
        animations.push(["comparision2", j, i]);
        while(j >= 0 && auxillaryArray[j] < key) {
            animations.push(["overwrite", j + 1, auxillaryArray[j]]);
            auxillaryArray[j + 1] = auxillaryArray[j];
            j = j - 1;
            if(j >= 0) {
                animations.push(["comparision1", j, i]);
                animations.push(["comparision2", j, i]);
            }     
        }
        animations.push(["overwrite", j + 1, key]);
        auxillaryArray[j + 1] = key;
    }
}

function arraysAreEqual(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
        return false;
    }
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
    return true;
}




export function getQuickSortAnimations(array) {
    let animations  = [];
    let auxillaryArray = array.slice();
    quickSort(auxillaryArray, 0, auxillaryArray.length - 1, animations);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    console.log("sort works correctly? ",arraysAreEqual(javaScriptSortedArray, auxillaryArray));
    array = auxillaryArray;
    return [animations, array];
}

function quickSort(auxillaryArray, startIndex, endIndex, animations) {
    let pivotIndex;
    if (startIndex < endIndex) {
        pivotIndex = partitionArray(auxillaryArray, startIndex, endIndex, animations);
        quickSort(auxillaryArray, startIndex, pivotIndex - 1, animations);
        quickSort(auxillaryArray, pivotIndex + 1, endIndex, animations);
    }
}

function partitionArray(auxillaryArray, startIndex, endIndex, animations) {
    let pivotIndex = randomIntFromInterval(startIndex, endIndex);
    
    animations.push(["comparision1", pivotIndex, endIndex]);
    animations.push(["swap", pivotIndex, auxillaryArray[endIndex]]);
    animations.push(["swap", endIndex, auxillaryArray[pivotIndex]]);
    animations.push(["comparision2", pivotIndex, endIndex]);
    swap(auxillaryArray, pivotIndex, endIndex);

    let lessTailIndex = startIndex;

    for(let i = startIndex; i < endIndex; ++i) {
        animations.push(["comparision1", i, endIndex]);
        animations.push(["comparision2", i, endIndex]);
        if(auxillaryArray[i] <= auxillaryArray[endIndex]) {
            animations.push(["comparision1", i, lessTailIndex]);
            animations.push(["swap", i, auxillaryArray[lessTailIndex]]);
            animations.push(["swap", lessTailIndex, auxillaryArray[i]]);
            animations.push(["comparision2", i, lessTailIndex]);
            swap(auxillaryArray, i, lessTailIndex);
            lessTailIndex++;
        }
    }
    animations.push(["comparision1", lessTailIndex, endIndex]);
    animations.push(["swap", endIndex, auxillaryArray[lessTailIndex]]);
    animations.push(["swap", lessTailIndex, auxillaryArray[endIndex]]);
    animations.push(["comparision2", lessTailIndex, endIndex]);
    
    swap(auxillaryArray, lessTailIndex, endIndex);
    return lessTailIndex;
}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getSelectionSortAnimations(array) {
    let animations  = [];
    let auxillaryArray = array.slice();
    selectionSort(auxillaryArray, animations);
    array = auxillaryArray;
    return [animations, array];
}

function selectionSort(auxillaryArray, animations) {
    const N = auxillaryArray.length;
    for (let i = 0; i < N - 1; i++) {
        let minIndex = i; //Finding minimum element in unsorted array
        for (let j = i + 1; j < N; j++) {
            animations.push(["comparision1", j, minIndex]);
            animations.push(["comparision2", j, minIndex]);
            if (auxillaryArray[j] < auxillaryArray[minIndex]) {
                minIndex = j;
            }
        }
        animations.push(["swap", minIndex, auxillaryArray[i]]);
        animations.push(["swap", i, auxillaryArray[minIndex]]);
        // Swap the found minimum element with the first element
        swap(auxillaryArray, minIndex, i);
    }
}







    export function getheapSortAnimations(array) {
        const animations = [];
        buildMaxHeap(array, animations);
        for (let endIndex = array.length-1; endIndex >= 0; endIndex--) {
          animations.push([0, endIndex, array[0], array[endIndex]]);
         //animations.push(["swap", 0, endIndex]); 
         swap(array,0, endIndex);
          siftDown(0, endIndex - 1, array, animations);
        }
        // return array;
        return [animations,array];
      }
      function buildMaxHeap(array, animations) {
        const lastParentIndex = Math.floor((array.length - 1) / 2);
        for (let i = lastParentIndex; i >= 0; i--) {
          siftDown(i, array.length - 1, array, animations);
        }
      }
      function siftDown(currentIndex, endIndex, heap, animations) {
        let childOneIndex = currentIndex * 2 + 1;
        while (childOneIndex <= endIndex) {
           animations.push([childOneIndex, endIndex, -1, -1]);
          animations.push([childOneIndex, endIndex, -1, -1]);
        //animations.push(["comparision1", childOneIndex, endIndex]);
        //animations.push(["comparision2", childOneIndex, endIndex]);
          let childTwoIndex =
            currentIndex * 2 + 2 <= endIndex ? currentIndex * 2 + 2 : -1;
          let indexToSwap;
          if (childTwoIndex !== -1 && heap[childTwoIndex] > heap[childOneIndex]) {
            indexToSwap = childTwoIndex;
          } else {
            indexToSwap = childOneIndex;
          }
          if (heap[indexToSwap] > heap[currentIndex]) {
            animations.push([
              currentIndex,
              indexToSwap,
              heap[currentIndex],
              heap[indexToSwap]
            ]);
           // animations.push(["swap", heap[indexToSwap], heap[currentIndex]]);
            swap(heap,currentIndex, indexToSwap);
            currentIndex = indexToSwap;
            childOneIndex = currentIndex * 2 + 1;
          } else {
            return;
          }
        }
      }
    export {  generateColors }
    