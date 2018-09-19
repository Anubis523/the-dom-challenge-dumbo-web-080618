let count = 0
let isPaused = false

const plus = document.getElementById('+')
const minus = document.getElementById('-')
const heart = document.getElementById('<3')
const likes = document.body.querySelector('.likes')
const commentList = document.body.querySelector('div#list')
const submit = document.getElementById('submit')
const counter = document.body.querySelector('#counter')
const pause = document.body.querySelector('#pause')

function timing () {
  if(!isPaused){
  count += 1
  // console.log(count)
  counter.innerText = count+""
  }
}
//used to test an element w/o an innerText 
function test() {
  alert("It works homie!")
}

plus.addEventListener('click', ()=>{
  if(!isPaused){
    count++
    counter.innerText = count+""
  }
})
minus.addEventListener('click',()=>{
  if(!isPaused){
    count--
    counter.innerText = count+""
  }
})

submit.addEventListener('click', (e) => {
  //add p tag to commentList
  if(!isPaused){
    e.preventDefault()
    let userComment = document.body.querySelector('form#comment-form input').value

    document.body.querySelector('form#comment-form input').value = ""

    let newComment = document.createElement('p')
    newComment.textContent = userComment
    commentList.appendChild(newComment)
  }
})

const timer = setInterval( timing, 1000)

pause.addEventListener('click', () => {
  isPaused = !isPaused
  pause.innerText = isPaused? "resume":"pause"
})
 
let current;
let likeCount;
heart.addEventListener('click', (e) => {
  if(!isPaused){
    e.preventDefault()
    
    if(current === count){
      let lastChild = likes.children[likes.children.length -1]
      likeCount++
      lastChild.innerHTML = `${count} has been liked ${likeCount} times`
    }
    else {
      let tempChild = document.createElement('li')
      likeCount = 1
      tempChild.innerHTML = `${count} has been liked ${likeCount}time`
      likes.appendChild(tempChild)
      current = count
    }
  }  
})

