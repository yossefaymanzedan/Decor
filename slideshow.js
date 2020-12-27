const text1_options = [
    "Home Decoration",
    "Modern decor",
    "2020 Moderns",
    "Stylish decor"
]
const color_options =["rgba(137, 207, 235, 0.568)", "rgba(172, 255, 47, 0.4)", "rgba(0, 0, 0, 0.35)", "#6CE5B1"];
const image_options = [
    "https://www.crismatec.com/python/de/modern-minimalist-design-of-the-home-decorating-interior-that_house-interior-elements.jpg",
    "https://bandbdecor.com/wp-content/uploads/2019/11/home-decor-lounge-interior-design-background-hd-wallpaper-lounge-designs-hd-1322704315.jpg",
    "https://i.dedeman.ro/media/catalog/product/cache/dedeman/image/9df78eab33525d08d6e5fb8d27136e95/8/0/8041346-100.jpg",
    "https://c4.wallpaperflare.com/wallpaper/973/1004/995/interior-design-room-carpets-couch-wallpaper-preview.jpg" 
]
var i = 0 ;
var x = 3
const currentOptionText1 = document.getElementById("current-option-text1");
const currentOptionImage = document.getElementById("image");
const carousel = document.getElementById("carousel-wrapper");
const mainMenu = document.getElementById("menu");
const optionPrevious = document.getElementById("previous-option");
const optionNext = document.getElementById("next-option");
currentOptionText1.innerText = text1_options[i];
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
mainMenu.style.background = color_options[i];
optionNext.onclick = function() {
    i = i + 1;
    i = i % text1_options.length;
    currentOptionText1.dataset.nextText = text1_options[i];
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-next");
    setTimeout(() => {
        currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    setTimeout(() => {
        currentOptionText1.innerText = text1_options[i];
        carousel.classList.remove("anim-next");
    }, 650)
};

optionPrevious.onclick = function () {
    if (i === 0) {
        
       i = 4;
      

     }
    /* i = i - 1;
    i = i % text1_options.length; */
    i = i - 1;
    i = i % text1_options.length;
    
    currentOptionText1.dataset.previousText = text1_options[i];
    mainMenu.style.background = color_options[i];

    carousel.classList.add("anim-previous");
    setTimeout(() => {
        currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    setTimeout(() => {
        currentOptionText1.innerText = text1_options[i];
        carousel.classList.remove("anim-previous");
    }, 650);

}

