let todos = [];

function addTodo()
{
  todos.push({
    title:document.querySelector(".inp").value
  });
  render();
}

function del_todo(index)
{
  todos.splice(index,1);
  render();
}


function createTodoComponent(todo,index)
{
  const para = document.createElement("p");
  para.innerHTML= todo.title;
  para.style.display = "inline-block";
  const btn_div = document.createElement("div");
  btn_div.classList.add("btn_div");
  const update_btn = document.createElement("button");
  const delete_btn = document.createElement("button");
  update_btn.innerHTML="Update";
  delete_btn.innerHTML="Delete";
  update_btn.classList.add("update");
  delete_btn.classList.add("delete");
  delete_btn.setAttribute("onclick","del_todo("+ index + ")");
  btn_div.appendChild(update_btn);
  btn_div.appendChild(delete_btn);
  const div = document.createElement("div");
  div.appendChild(para);
  div.appendChild(btn_div);
  div.classList.add("div");
  return div
}


function render(){
  document.querySelector(".todo_div").innerHTML="";
  for(let i=0;i<todos.length;i++)
  {
    const div_ele = createTodoComponent(todos[i],i);
    document.querySelector(".todo_div").appendChild(div_ele);
  }
}

