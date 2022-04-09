


// popup part	


document.getElementById('add').addEventListener('click',function(){
	document.querySelector('#addlist').style.display = "block";
	document.getElementById('main').style.filter = 'blur(8px)';
	document.querySelector("p").style.display = 'none';
})
document.getElementById('button2').addEventListener('click',function(){
	document.querySelector('#addlist').style.display = 'none';
	document.getElementById('main').style.filter = 'blur(0px)';
})


const tasklist = []

const addlist = () => {

   document.querySelector('#addlist').style.display = 'none';
   document.getElementById('main').style.filter = 'blur(0px)'
    const name = document.getElementById("input").value; //storing our value 

    console.log(name); //Our user values are going to be 

    const tempObj = {

            taskName: name


        } //Creating  Objects Cards
    tasklist.push(tempObj)
    console.log(tasklist)

    addtaskonscreen() //For adding cards on screen 
}

function addtaskonscreen() {
    const element = document.createElement("div");
    element.setAttribute("class", "child")

    element.innerText = tasklist[tasklist.length - 1].taskName;
    const existingelement = document.getElementById("display");
    existingelement.appendChild(element)
   
}


 // // add button
 //    const element1 = document.createElement('button');
 //    element1.setAttribute('class','add2');

    
 //    element1.innerText = tasklist[tasklist.length - 1].taskName;
 //    const existingelement = document.getElementById("display");
 //    existingelement.appendChild(element1)
