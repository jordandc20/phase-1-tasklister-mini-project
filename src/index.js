document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById('create-task-form')

  form.addEventListener('submit', (e) => {

    /// does it matter where prevent default goes????
    e.preventDefault()

    // grab user entry > add new list item with this text
    let todo = document.getElementById('new-task-description').value
    let who = document.getElementById('new-task-who').value
    let priority = document.getElementById('new-task-priority').value

    let li = document.createElement('li')
    li.innerText = todo
    if (priority === 'high') { li.style.color = 'red' } else if (priority === 'med') { li.style.color = 'yellow' } else (li.style.color = 'green')

    let p = document.createElement('p')
    p.innerText = ` - user: ${who}`

    let btn = document.createElement('button')
    btn.innerText = ' X '
    btn.style.padding = '3px'
    ///if add the listener at this point, you can have a simpler function for the delete step
   // btn.addEventListener('click',deletebtn)


    document.getElementById('tasks').appendChild(li)
    li.appendChild(p)
    li.appendChild(btn)

    form.reset()
  }
  )

//  if place listener in parent, it listens to all events in its children. so if want to specify only listen to clicks on its descendant buttons need a conditional?
  document.getElementById('tasks').addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
      e.target.parentNode.remove()
    }
  }
  )
 /*  function deletebtn(e) {
    e.target.parentNode.remove()
  } */


});


