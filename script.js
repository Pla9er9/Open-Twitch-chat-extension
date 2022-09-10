const filter = (element) => {
    
    listOfWords = {
        "i-word":"incel",
        "v-word": "virgin",
        "s-word": "simp"
    };

    for (const property in listOfWords) {
        if (element.includes(property)){
            element = element.replace(property, listOfWords[property]);
            console.log(element);
        }
        else{
            continue;
        }
    }
    return element;  

}

setInterval( () => {
    var elements = document.getElementsByClassName('text-fragment');
    innerHTMLs = [];
    for ( var i = 0; i < elements.length; ++i ){
        elements[i].innerHTML = filter(elements[i].innerHTML.toString());
    }
}, 100);