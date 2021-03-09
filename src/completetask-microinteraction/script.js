// var checkbox = document.getElementById('cbx');
// const strikethrough = document.getElementById('strikethrough');
// checkbox.addEventListener('click', function(){ 
//     console.log('checkbox tapped');
//     strikethrough.classList.add('strikethrough_end');
// });

task_desc = document.querySelectorAll('.task_desc');

task_desc.forEach(function(div) {
    div.querySelector('input').addEventListener('click', function() {
        div.querySelector('.strikethrough').classList.add('strikethrough_end');
    })
})


// checkbox.addEventListener('click', )