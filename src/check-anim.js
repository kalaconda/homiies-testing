todoItem = document.querySelectorAll('.todoItem');

todoItem.forEach(function(div) {
    div.querySelector('input').addEventListener('click', function() {
        div.querySelector('.strikethrough').classList.add('strikethrough_end');
        console.log('function works');
    })
})

