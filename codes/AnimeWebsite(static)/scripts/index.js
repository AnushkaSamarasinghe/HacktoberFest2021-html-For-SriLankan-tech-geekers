var naruto_description = "<h2>Naruto</h2><p>Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. The story is told in two parts – the first set in Naruto's pre-teen years, and the second in his teens. The series is based on two one-shot manga by Kishimoto: Karakuri (1995), which earned Kishimoto an honorable mention in Shueisha's monthly Hop Step Award the following year, and Naruto</p> ";
var deathnote_description = "<h2>Death Note</h2><p>Death Note is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. The story follows Light Yagami, a teen genius who stumbles across a mysterious otherworldly notebook: the 'Death Note', which belonged to the Shinigami Ryuk and grants the user the supernatural ability to kill anyone whose name is written in its pages. </p>"
var dragonball_description = "<h2>Dragon Ball</h2><p>Dragon Ball is a Japanese media franchise created by Akira Toriyama in 1984. The initial manga, written and illustrated by Toriyama, was serialized in Weekly Shōnen Jump from 1984 to 1995, with the 519 individual chapters collected into 42 tankōbon volumes by its publisher Shueisha. Dragon Ball was initially inspired by the classical 16th century Chinese novel Journey to the West, as well as Hong Kong martial arts films. </p>"
var mobpsycho_description = "<h2>Mob Psycho 100</h2><p>Mob Psycho 100 is a Japanese manga series written and illustrated by ONE. It began publication on Shogakukan's Ura Sunday website in April 2012 and concluded in December 2017. It has been also available online on Shogakukan's mobile app MangaONE since December 2014. Shogakukan compiled its chapters into sixteen tankōbon volumes.</p>"

function my_fun(parameter){
    console.log(document.getElementsByClassName("flex")[2]);
    var html="<div  style='width: 25%;align-self: center;'><img src='images/"+parameter+"/family.jpg' height='auto'><img src='images/"+parameter+"/power.jpg' height='auto'></div>";
    
    html = html +  "<div style='width: 50%;align-self: center;'><img src='images/"+parameter+"/theme.jpg' height='auto'></div>";
    html = html + "<div style='width: 25%;align-self: center;'><img src='images/"+parameter+"/team.jpg' height='auto'><img src='images/"+parameter+"/image.jpg' height='auto'></div>";
    
    document.getElementsByClassName("flex")[2].innerHTML= html;

    var variable = document.getElementById("description-box");
    if (parameter === "naruto"){
        variable.innerHTML = naruto_description;
    }
    else if(parameter === "deathnote"){
        variable.innerHTML = deathnote_description;
    }
    else if(parameter === "Dragon Ball"){
        variable.innerHTML = dragonball_description;
    }
    else{
        variable.innerHTML = mobpsycho_description;
    }
    
}

