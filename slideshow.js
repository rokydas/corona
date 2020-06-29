image1 = ["PictureBlock1/1.jpg", "PictureBlock1/2.jpg", "PictureBlock1/3.jpg", "PictureBlock1/4.jpg", "PictureBlock1/5.jpg", "PictureBlock1/6.jpg"];
slide1 = document.getElementById("slide1");
image2 = ["PictureBlock2/1.jpg", "PictureBlock2/2.jpg", "PictureBlock2/3.jpg", "PictureBlock2/4.jpg", "PictureBlock2/5.jpg", "PictureBlock2/6.jpg", "PictureBlock2/7.jpg", "PictureBlock2/8.jpg", "PictureBlock2/9.jpg", "PictureBlock2/10.jpg"];
slide2 = document.getElementById("slide2");
i=0;
j=0;

function ImgSlider(){
    if(i==5) i=-1;
    i++;
    slide1.src = image1[i];

    if(j==9) j=-1;
    j++;
    slide2.src = image2[j];

    setTimeout("ImgSlider()", 2000);

}


window.onload = ImgSlider;
