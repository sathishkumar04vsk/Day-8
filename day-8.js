// 1)The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

//     title, which is a String representing the title of the movie
//     studio, which is a String representing the studio that made the movie
//     rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

//a.Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

function movie(title,studio,rating){

    title:"Maanadu";
    studio:"Zeestudio";
    rating:"PG9";
    
}

//b.The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

 movie=(title,studio,rating){
    
    title:"Jaibeem";
    studio:"Sonymusic";
    rating:"PG13";

}

//c.Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

function  getPG(movie=[],mov) {
    movie=[];
     pgMov = new movie[mov.length]; 
    var newArrayIndex = 0; 
    for (var i = 0; i < mov.length; i++) { 
     if (mov[i].rating.equals("PG")) { 
      pgMov[newArrayIndex] = mov[i]; 
      newArrayIndex++; 
     } 
    } 
    return pgMov; 
   }


//d.Write a piece of code that creates an instance of the class Movie with the title 
//“Casino Royale”, the studio “Eon Productions”, and the rating “PG-13”.

 mov = new movie("Casino Royale","Eon Productions","PG-13"); 


//2)Convert the UML diagram to Typescript class. - use number for double



//type colorData = "Red" | "Yellow" | "Blue" | "Green"
class Circle{
    radius = 1.0;
    color = "Red";

    constructor(radius:number, color:colorData){
        if(typeof(radius)!=="undefined") { this.radius = radius }
        if(typeof(color)!=="undefined") { this.color = color }
    }
    
    getRadius():number{
        return this.radius
    }

   
    setRadius(radius:number){
        this.radius = radius
    }

    
    getColor():colorData{
        return this.color
    }

    
    setColor(color:colorData){
        this.color = color
    }

    
    toString():String{
        return `Radius: ${this.radius} Color: ${this.color}`
    }

    
    getArea():number{
        return ((Math.PI)*this.radius*this.radius)
    }

    
    getCircumference():number{
        return (2*(Math.PI)*this.radius)
    }
}


let c1 = new Circle()
console.log("Constructor with no params: "+ c1.toString())


let c2 = new Circle(3.5)
console.log("Constructor with one param: "+ c2.toString())


let c3 = new Circle(2.2, 'Yellow')
console.log("getRadius: "+c3.getRadius())
c3.setRadius(3.3)
console.log("Radius value after setRadius: " +c3.getRadius())
console.log("getColor: "+c3.getColor())
c3.setColor("Blue")
console.log("Color Value after setColor: " + c3.getColor())
console.log(c3.toString())
console.log("Area: "+c3.getArea())
console.log("Circumference: "+c3.getCircumference())

//3)Write a “person” class to hold all the details.


person={

    Name:"john doe",
    Age:21,
    qualification:"BE",
    Gender:"Male",
    Address:"1/33 Amman kovil s.t vandavasi",
    Employe_Id:1141

}


