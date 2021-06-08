let slider1 = document.getElementById("SizeSlider");
let output1 = document.getElementById("SizeLabel");

let size;
let density;

slider1.oninput = function() {
    let str = "Size: ";
    size = slider1.value
    if(slider1.value < 10) str += "0";
    str += size;
    output1.innerHTML = str;
}

slider1.oninput(undefined);

let slider2 = document.getElementById("DensitySlider");
let output2 = document.getElementById("DensityLabel");

slider2.oninput = function() {
    let str = "Density: ";
    density = slider2.value;
    if(slider2.value < 100) str += "0";
    if(slider2.value < 10) str += "0";
    str += density + "%";
    output2.innerHTML = str;
}

slider2.oninput(undefined);
