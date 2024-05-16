#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Player{
    name:string;
    fuel:number = 100;
    constructor(name:string){
      this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel-25
        this.fuel = fuel
    } 
    fuelIncrease(){
        this.fuel = 100
    }       
}
class Opponent{
    name:string;
    fuel:number = 100;
    constructor(name:string){
     this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel-25
        this.fuel = fuel
    }

}
console.log(chalk.bold.italic.blue.bgWhite(`\n==================WELCOME=================`));
console.log(chalk.bold.italic.magenta.underline(`\nADVANTURE GAME LET'S PLAY`));


let player = await inquirer.prompt([
    {
        name:"name",
        type:"input",
        message:"PLEASE ENTER YUOR NAME : "
    }
]);
let opponent = await inquirer.prompt([
    {
      name:"select",
      type:"list",
      message:"SELECT YUOR OPPONENT",
      choices:["SKELETON","ASSASSIN","ZOMBIE"]
    }
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);

do{
if(opponent.select ==='SKELETON'){
    let ask = await inquirer.prompt([
        {
            name:"opt",
            type:"list",
            message:"SELECT YUOR OPPONENT",
            choices:["ATTACK","DRINK PORTION","RUN FOR YOUR LIFE..."]
       
        }
    ]);
    if(ask.opt==='ATTACK') {
        let num = Math.floor(Math.random()* 2)
        if (num> 0){
          p1.fuelDecrease()
          console.log(chalk.bold.italic.red(`${p1.name} Fuel is ${p1.fuel}`));
          console.log(chalk.bold.italic.green(`${o1.name} Fuel is ${o1.fuel}`));
           if(p1.fuel <= 0){
            console.log(chalk.bold.italic.cyan.bgWhite.underline(`=======YOU LOOSE,BETTER LUCK NEXT TIME=====`));
            process.exit()
           }
        }
        if(num <= 0){
         o1.fuelDecrease()
        console.log(chalk.bold.italic.green(`${p1.name} Fuel is ${p1.fuel}`));
        console.log(chalk.bold.italic.red(`${o1.name} Fuel is ${o1.fuel}`));
        if(o1.fuel <= 0){
            console.log(chalk.bold.italic.magentaBright(`\n============YOU WIN===========`)); 
            process.exit() 
        }
        }
        }
    if(ask.opt==='DRINK PORTION'){
        p1.fuelIncrease()
        console.log(chalk.bold.yellow.italic(`YOU DRINK HEALTH PORTION YOUR FUEL IS ${p1.fuel}`));
        
        }
    if(ask.opt==='RUN FOR YOUR LIFE...'){
        console.log(chalk.bold.italic.cyan.bgWhite.underline(`========YOU LOOSE,BETTER LUCK NEXT TIME=======`));
        process.exit()
    }
}
if(opponent.select ==='ASSASSIN'){
    let ask = await inquirer.prompt([
        {
            name:"opt",
            type:"list",
            message:"SELECT YUOR OPPONENT",
            choices:["ATTACK","DRINK PORTION","RUN FOR YOUR LIFE..."]
       
        }
    ]);
    if(ask.opt==='ATTACK') {
        let num = Math.floor(Math.random()* 2)
        if (num> 0){
          p1.fuelDecrease()
          console.log(chalk.bold.italic.red(`${p1.name} Fuel is ${p1.fuel}`));
          console.log(chalk.bold.italic.green(`${o1.name} Fuel is ${o1.fuel}`));
           if(p1.fuel <= 0){
            console.log(chalk.bold.italic.cyan.bgWhite.underline(`========YOU LOOSE,BETTER LUCK NEXT TIME=======`));
            process.exit()
           }
        }
        if(num <= 0){
         o1.fuelDecrease()
        console.log(chalk.bold.italic.green(`${p1.name} Fuel is ${p1.fuel}`));
        console.log(chalk.bold.italic.red(`${o1.name} Fuel is ${o1.fuel}`));
        if(o1.fuel <= 0){
            console.log(chalk.bold.italic.magentaBright(`\n===============YOU WIN===========`)); 
            process.exit() 
        }
        }
        }
    if(ask.opt==='DRINK PORTION'){
        p1.fuelIncrease()
        console.log(chalk.bold.yellow.italic(`YOU DRINK HEALTH PORTION YOUR FUEL IS ${p1.fuel}`));
        
        }
    if(ask.opt==='RUN FOR YOUR LIFE...'){
        console.log(chalk.bold.italic.cyan.bgWhite.underline(`========YOU LOOSE,BETTER LUCK NEXT TIME======`));
        process.exit()
    }
}

if(opponent.select ==='ZOMBIE'){
    let ask = await inquirer.prompt([
        {
            name:"opt",
            type:"list",
            message:"SELECT YUOR OPPONENT",
            choices:["ATTACK","DRINK PORTION","RUN FOR YOUR LIFE..."]
       
        }
    ]);
    if(ask.opt==='ATTACK') {
        let num = Math.floor(Math.random()* 2)
        if (num> 0){
          p1.fuelDecrease()
          console.log(chalk.bold.italic.red(`${p1.name} Fuel is ${p1.fuel}`));
          console.log(chalk.bold.italic.green(`${o1.name} Fuel is ${o1.fuel}`));
           if(p1.fuel <= 0){
            console.log(chalk.bold.italic.cyan.bgWhite.underline(`========YOU LOOSE,BETTER LUCK NEXT TIME========`));
            process.exit()
           }
        }
        if(num <= 0){
         o1.fuelDecrease()
        console.log(chalk.bold.italic.green(`${p1.name} Fuel is ${p1.fuel}`));
        console.log(chalk.bold.italic.red(`${o1.name} Fuel is ${o1.fuel}`));
        if(o1.fuel <= 0){
            console.log(chalk.bold.italic.magentaBright(`\n=============YOU WIN=========`)); 
            process.exit() 
        }
        }
        }
    if(ask.opt==='DRINK PORTION'){
        p1.fuelIncrease()
        console.log(chalk.bold.yellow.italic(`YOU DRINK HEALTH PORTION YOUR FUEL IS ${p1.fuel}`));
        
        }
    if(ask.opt==='RUN FOR YOUR LIFE...'){
        console.log(chalk.bold.italic.cyan.bgWhite.underline(`========YOU LOOSE,BETTER LUCK NEXT TIME=======`));
        process.exit()
    }
}

}while(true)


