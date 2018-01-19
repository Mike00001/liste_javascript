document.querySelector("button").addEventListener("click", function () {
    var nomDessert = prompt("Ajouter élément :");
    
    var dessertElt = document.createElement("li");
    dessertElt.textContent = nomDessert;
    dessertElt.addEventListener("click",function(e){
        var nouveauNom = prompt("Modifiez le nom du dessert : ", e.target.textContent);
    e.target.textContent = nouveauNom;
    
    });

    document.getElementById("desserts").appendChild(dessertElt);

});
