const fs=require("fs");
const {Command} =require("commander");

const program=new Command();
const file="todo.json";

program
    .name("todo app")
    .description("You can add and remove your task")
    .version("1.0.0")

function loadtodo(){
    if (!fs.existsSync(file)) {
        return [];
    }
    const data = fs.readFileSync(file,'utf-8');
    return JSON.parse(data);
}

function savetodo(data){
    fs.writeFileSync(file,JSON.stringify(data,null,2));
}

program.command("list")
                    .description("list all the todos in app")
                    .action(()=>{
                        const todo=loadtodo();
                        if(todo.length==0){
                            console.log("No todos");
                        }
                        else{
                            for(let i=0;i<todo.length;i++){
                                console.log(`${todo[i].task} - ${todo[i].done ? 'done' : 'remaining'}`)
                            }
                        }
                    })


program.command("add")
                    .argument('<task>','Task to add')
                    .description("Add the task which you want to do")
                    .action((task)=>{
                        const todos=loadtodo();
                        todos.push({'task':task,'done':false})
                        savetodo(todos);
                        console.log("task added...");
                    })
                    
program.command("delete")
                    .argument('<index>','index to be deleted')
                    .description("you can delete you task by giving index")
                    .action((index)=>{
                        const todos=loadtodo();
                        if(index<0 && index>todos.length){
                            console.log("Invalid Index")
                        }
                        else{
                            todos.splice(index,1);
                            savetodo(todos);
                            console.log("task removed");
                        }
                    })


program.command("done")
                    .argument('<index>','indexof task which is done')
                    .description("Mark the task as done")
                    .action((index)=>{
                        const todos=loadtodo();
                        if(index<0 && index>todos.length){
                            console.log("Invalid Index")
                        }
                        else{
                            todos[index].done=true;
                            savetodo(todos);
                            console("Marked as done")
                        }
                    })

program.parse()