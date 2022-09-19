const filter = (element) => {
    
    listOfWords = {
        //For example: 
        "b-word":"banned-Word",
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
