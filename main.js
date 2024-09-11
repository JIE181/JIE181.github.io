var img = document.getElementById("pic");
       var flag = true;
       img.onclick = function (){
           if (flag){
               img.src = "image/psc (1).png";
               flag = false;
           }else{
               img.src = "image/psc.png";
               flag = true;
           }
       }