var names=["Foto Família","Mateus Pena","Rafael Pena" ,"Germano Pena","Rose Pena"];
var images=["imagem/familiapena.jpg","imagem/mateuspena.jpg","imagem/rafaelpena.jpg","imagem/germanopena.jpg","imagem/rosepena.jpg"];
        
var i = 0;
function update()
{
    i++;
    var numberOfFamilyMemberInArray= 4
    if( i > numberOfFamilyMemberInArray )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("familyMemberImage").src= updatedImage;
    document.getElementById("familyMemberName").innerHTML= updatedName;      
}
 