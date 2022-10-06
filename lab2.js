const styleButton = document.getElementsByClassName("style-button")[0];
styleButton.addEventListener("click", function () {
    if (styleButton.value === "1"){
        styleButton.value = "0";
        styleButton.disabled = true;
        const test = document.getElementsByClassName(styleButton.id + "-test")[0];
        const example = document.getElementsByClassName(styleButton.id + "-example")[0];
        const testClasses = test.className.split(' ');
        let color;
        testClasses.forEach(function(name){
            if (name !== "test" && name !== styleButton.id + "-test"){
                color = name;
            }
        });
        example.style.color = color;
    }
})
