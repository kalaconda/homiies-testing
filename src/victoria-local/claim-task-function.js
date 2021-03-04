// https://stackoverflow.com/questions/1279957/how-to-move-an-element-into-another-element
// onclick = function(){ destination.appendChild(source); }


//onclick = function(){ task.appendChild(task-content); }

/*onclick = function changeclass() {

    var NAME = document.getElementsByClassName("request")
    
    NAME.className="task"
    
    } */

    document.getElementById("request").classList.add('task');

    document.getElementById("request").classList.remove('request');
    
    if ( document.getElementById("MyElement").classList.contains('MyClass') )
    
    document.getElementById("MyElement").classList.toggle('MyClass');