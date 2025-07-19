const fs= require("fs");

function main(fileName){

    fs.readFile(fileName,'utf-8',function(err,data){
        if(err){
            console.error("Error in reading file:",err);
        }
        else{
            let count=0;
            for(let i=0;i<data.length;i++){
                if(data[i]==" "){
                    count++;
                }
            }
            if(data==""){
                console.log(count);
            }
            else{
                console.log(count+1);
            }
        }
    })
}

main(process.argv[2]);