// uppercase,lowercase,number,special char
// have a class password and its methods generate strong,weak,very strong password

class password{
    constructor(){
        this.letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
        't','u','v','w','x','y','z']
        this.numbers=[1,2,3,4,5,6,7,8,9,0]
        this.specialchar=['!','@','#','$','%','^','&','*','(',')','+','-','?','/','\\','[',']','{','}']
    }

    randomize(range){
        return Math.floor(Math.random()*range)
    }


    letter(){
        return this.letters[this.randomize(this.letters.length)]
    }
    uppercase(){
        return this.letters[this.randomize(this.letters.length)].toUpperCase()
    }
    number(){
        return this.numbers[this.randomize(this.numbers.length)]
    }
    specialC(){
        return this.specialchar[this.randomize(this.specialchar.length)]
    }


    shuffle(arr){
        let string=''
        while(arr.length>0){
            let i=this.randomize(arr.length)
            string+=arr.splice(i,1)
            // console.log(string)
        }
        return string
    }

    generate(len){

        this.output=[]
        
        this.output.push(this.letter())
        this.output.push(this.uppercase())
        this.output.push(this.number().toString())
        this.output.push(this.specialC())

        for(let j=len-4;j>0;j--){
            let i=this.randomize(4)

            switch(i.toString()){
                case '0':
                    this.output.push(this.letter());
                    break;
                case '1':
                    this.output.push(this.uppercase());
                    break;
                case '2':
                    this.output.push(this.number().toString());
                    break;
                case '3':
                    this.output.push(this.specialC());
                    break;
            }
        }
        let shuffled=this.shuffle(this.output)
       
     return shuffled 
    }
}
let lett=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
        't','u','v','w','x','y','z']
let a='slsa'

let exe=()=>{
    s= new password()
// console.log(s.letters)

// console.log(s.letter())
// console.log(s.uppercase())
// console.log(s.number())
// console.log(s.specialC())
console.log(s.generate(10))
let val=document.getElementsByTagName('input')[0].value
document.getElementsByTagName('label')[0].innerHTML=`Password : ${s.generate(val)}`

}