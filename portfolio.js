function bigMenu(x){
				
        var elements = document.getElementsByClassName("menu-column");

        for (var i = 0; i < elements.length; i++) {
            elements[i].style.width=("18.33333333%");
        }

        x.style.width = "45%";

}

function normalMenu(){

        var elements = document.getElementsByClassName("menu-column");

        for (var i = 0; i < elements.length; i++) {
            elements[i].style.width=("25%");
        }

}	