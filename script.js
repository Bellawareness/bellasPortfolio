const Iam = {
  Name: "A collaboration with 5 team members from Generation, to create a restaurant's menu using HTML & CSS. ",
  Skills : "JavaScript code that returns a string with no vowels. Utilized procreate to create background and CSS to style HTML. ",
    project :" HTML, CSS and bootstrap to create a responsive website.",
  
  //removed the link because I wanted it clickable
  //link : //"https://bellawareness.github.io/bellasPortfolio/",
  
  //a function to call list and input info needed for homework 
  
  myPortfoilo : function() {
    return "•" + "The Team Work Project: " + this.Name  +  "•" + " JavaScript Project: " + this.Skills + "•" + "HTML Project:" + this.project ; 
  }
};


var i = 0;
var txt = Iam.myPortfoilo();
var speed = 60;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("thediv").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}