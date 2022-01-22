// CMD category project project

// We will be creating a File System Organizer

//******************************************************************************* Features of the Project **************************************************************************//

//If you have numerous Files in a folder and they are not Properly arranged

//So you can use this tool to arrange them in specific directory according to their extension

// like text files will go into text File Folder .exe files will go into application folder and so on

// so at the end you will have a arranged set of files in specific folders

//In the terminal we will write" node FO.js <--Siddhant-->"

// Argv stands for argument vector

let inputArr = process.argv.slice(2);
// let input = process.argv[2]




//This will only give us the second index of the character that is -- Siddhant
console.log(inputArr)

let command = inputArr[0]

// var input = process.argv , This will give us the entire array that is -- node FO.js Siddhant
// console.log(input)


switch(command){

    case 'tree':
        console.log('Tree implemented')
        break;
    case 'oranganize':
        console.log('Organize implented')
        break;
    case 'help':
        helpfn()
        break;
    default:
        console.log("Please entre a valid input")
        break;

}

function helpfn(){
    console.log(`List of all the commands
               1) Tree command - node FO.js tree <dirname>
               2) Organize Command - node FO.js oraganize <dirname>
               3) Help Command - node FO.js help `)
}



