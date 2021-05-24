import React,{ Component,currentState } from 'react'
import './Node.css';
import {Node} from './Node';
import { rgbValue, generateColors, sort,getheapSortAnimations, getMergeSortAnimations ,getInsert,getQuickSortAnimations,getSelectionSortAnimations} from './helper'



let WINDOW_WIDTH = window.innerWidth;
let WINDOW_HEIGHT = window.innerHeight;



const SECONDARY_COLOR = 'red'; 

export class BoxContainer extends Component{

static defaultProps = {
	num : 250,
	
}
constructor(props){
	super(props)
	this.state = {
	colors : generateColors(this.props.num),
	bg:"green",
    speed:0.5,
    
	}	
}


  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
 };


  reload = (colors) =>{
      this.setState({colors:generateColors(this.props.num)});
      
  }


  bubbleSort() {

    const [animations,sortArray] = sort(this.state.colors);
    for (let i = 0; i < animations.length; i++) {
        const isColorChange = animations[i][0] == "comparision1" || animations[i][0] == "comparision2";
        const arrayBars = document.getElementsByClassName('array-bar');
        if(isColorChange === true) {
            const color = (animations[i][0] == "comparision1") ? SECONDARY_COLOR : this.state.bg;
            const [comparision, barOneIndex, barTwoIndex] = animations[i];
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;
            
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i * this.state.speed);
        }
        else {
            const [swap,barIndex, newHeight] = animations[i];
            if (barIndex === -1) {
                continue;
            }
            const barStyle = arrayBars[barIndex].style;
            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
            },i * this.state.speed);  
        }
    }
     
}



// mergeSort() {

//     const [animations,sortArray] = getMergeSortAnimations(this.state.colors);
//     for (let i = 0; i < animations.length; i++) {
//         const isColorChange = animations[i][0] == "comparision1" || animations[i][0] == "comparision2";
//         const arrayBars = document.getElementsByClassName('array-bar');
//         if(isColorChange === true) {
//             const color = (animations[i][0] == "comparision1") ? SECONDARY_COLOR : this.state.bg;
//             const [comparision, barOneIndex, barTwoIndex] = animations[i];
//             const barOneStyle = arrayBars[barOneIndex].style;
//             const barTwoStyle = arrayBars[barTwoIndex].style;
            
//             setTimeout(() => {
//                 barOneStyle.backgroundColor = color;
//                 barTwoStyle.backgroundColor = color;
//             },i * this.state.speed);
//         }
//         else {
//             const [swap,barIndex, newHeight] = animations[i];
//             if (barIndex === -1) {
//                 continue;
//             }
//             const barStyle = arrayBars[barIndex].style;
//             setTimeout(() => {
//                 barStyle.height = `${newHeight}px`;
//             },i * this.state.speed);  
//         }
//     }
     
// }

mergeSort() {
    
    const [animations,sortArray] = getMergeSortAnimations(this.state.colors);
    
    for (let i = 0; i < animations.length; i++) {
        const isColorChange = animations[i][0] == "comparision1" || animations[i][0] == "comparision2";
        const arrayBars = document.getElementsByClassName('array-bar');
        if(isColorChange === true) {
            const [comparision, barOneIndex, barTwoIndex] = animations[i];
            const color = (animations[i][0] == "comparision1") ? SECONDARY_COLOR : this.state.bg;
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;
            //If we don't multiply by the index then every animations[i] wait for exactly ANIMATION_SPEED_MS and immediately change into final state
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i * this.state.speed);
            
        }
        else {
            setTimeout(() => {
                const [swap, barOneInx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneInx].style;
                barOneStyle.height = `${newHeight}px`;
              },i * this.state.speed);
        }
    }

}




insertionSort() {
    
    const [animations,sortArray] = getInsert(this.state.colors);
    for (let i = 0; i < animations.length; i++) {
        const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
        const arrayBars = document.getElementsByClassName('array-bar');
        if(isColorChange === true) {
            const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : this.state.bg;
            const [temp, barOneIndex, barTwoIndex] = animations[i];
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i * this.state.speed);
        }
        else {
            const [temp, barIndex, newHeight] = animations[i];
            const barStyle = arrayBars[barIndex].style;
            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
            },i * this.state.speed);  
        }
    }
}





quickSort() {
    
    const [animations,sortArray] = getQuickSortAnimations(this.state.colors);
    for (let i = 0; i < animations.length; i++) {
        const isColorChange = animations[i][0] == "comparision1" || animations[i][0] == "comparision2";
        const arrayBars = document.getElementsByClassName('array-bar');
        if(isColorChange === true) {
            const color = (animations[i][0] == "comparision1") ? SECONDARY_COLOR : this.state.bg;
            const [comparision, barOneIndex, barTwoIndex] = animations[i];
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i * this.state.speed);
        }
        else {
            const [swap, barIndex, newHeight] = animations[i];
            if (barIndex === -1) {
                continue;
            }
            const barStyle = arrayBars[barIndex].style;
            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
            },i * this.state.speed);  
        }        }
    }





    selectionSort() {
        
        const [animations,sortArray] = getSelectionSortAnimations(this.state.colors);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange === true) {
                const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : this.state.bg;
                const [temp, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * this.state.speed);
            }
            else {
                const [temp, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * this.state.speed);  
            }
        }
    } 





    heapSort() {
        
        const [animations,sortArray] = getheapSortAnimations(this.state.colors);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange === true) {
                const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : this.state.bg;
                const [temp, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * this.state.speed);
            }
            else {
                const [temp, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * this.state.speed);  
            }
        }
    } 
render() {
  const array = this.state.colors;
  const SORT_BUTTONS = 6;
  const TOTAL_BUTTONS = 1 + SORT_BUTTONS;
  return(
      <>
       <div className="node">
      <div className="array-container" style={{position:'absolute', right:`20px`}}>
          {array.map((value, idx) => (
              <div
                  className="array-bar"
                  key={idx}
                  style={{
                  backgroundColor: this.state.bg,
                  height: `${value}px`
                  }}
              ></div>
          ))}
      </div>
      </div>
      <div className="button" > 
          <button title="O(N^2) Time Complexity" id = "bubbleSort" style={{position:'relative',top:"200px",backgroundColor:"black",color:"white",left:"1000px",borderRadius:"20px"}} onClick={() => this.bubbleSort()}>
              Bubble Sort
          </button>
          <div>
          <button title="O(N^2) Time Complexity" id = "bubbleSort" style={{position:'relative',top:"200px",backgroundColor:"black",color:"white",left:"1000px",borderRadius:"20px"}} onClick={() => this.mergeSort()}>
              Merge Sort
          </button>
          </div>
          <div>
          <button title="O(N^2) Time Complexity" id = "bubbleSort" style={{position:'relative',top:"200px",backgroundColor:"black",color:"white",left:"1000px",borderRadius:"20px"}} onClick={() => this.insertionSort()}>
              Insertion Sort
          </button>
          </div>
          <div>
          <button title="O(N^2) Time Complexity" id = "bubbleSort" style={{position:'relative',top:"200px",backgroundColor:"black",color:"white",left:"1000px",borderRadius:"20px"}} onClick={() => this.quickSort()}>
              Quick Sort
          </button>
          </div>
          <div>
          <button title="O(N^2) Time Complexity" id = "bubbleSort" style={{position:'relative',top:"200px",backgroundColor:"black",color:"white",left:"1000px",borderRadius:"20px"}} onClick={() => this.selectionSort()}>
              Selection Sort
          </button>
          </div>
          <div>
          <button title="O(N^2) Time Complexity" id = "bubbleSort" style={{position:'relative',top:"200px",backgroundColor:"black",color:"white",left:"1000px",borderRadius:"20px"}} onClick={() => this.heapSort()}>
              Heap Sort
          </button>
          </div>
          <div>
          <button title="O(N^2) Time Complexity" id = "bubbleSort" style={{position:'relative',top:"200px",backgroundColor:"black",color:"white",left:"1000px",borderRadius:"20px"}} onClick={() => this.reload(this.state.colors)}>
              Restart
          </button>
          </div>
    
      </div>
    
<div className="button2">
<React.Fragment>
          <form>
            <label htmlFor="speed">Animation Speed</label>
            <input
              type="text"
              name="speed"
              //value={this.state.speed}
              onChange={this.handleChange}
            />
           
          </form>
          
          <h3>Speed: {this.state.speed + 0.5}</h3>
        </React.Fragment>

</div>
      </>
  );
}

}



