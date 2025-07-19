const fs=require("fs");
const {Command} =require("commander");

const program=new Command()

program
    .name("couter")
    .description("CLI to do file based tasks")
    .version("0.8.0");

program.command("count")
                    .description("Count the number of words in a file")
                    .argument('<file>','file to count')
                    .action((file)=>{
                        fs.readFile(file,'utf-8',function(err,data){
                            if(err){
                                console.error("Error in reaing file:",err);
                            }
                            else{
                                let words=data.split(" ").length+1;
                                console.log(words);
                            }
                        })
                    })


program.parse();