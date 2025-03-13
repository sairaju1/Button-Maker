function changeButton(){
    let r1=document.getElementById("bgColorInput").value;
    let r2=document.getElementById("fontColorInput").value;
    let r3=document.getElementById("fontSizeInput").value;
    let r4=document.getElementById("fontWeightInput").value;
    let r5=document.getElementById("paddingInput").value;
    let r6=document.getElementById("borderRadiusInput").value;
    let r7=document.getElementById("customButton");
      r7.style.backgroundColor=r1;
      r7.style.color=r2;
      r7.style.fontSize=r3;
      r7.style.fontWeight=r4;
      r7.style.padding=r5;
      r7.style.borderRadius=r6;
    }