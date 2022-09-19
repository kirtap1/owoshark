var num = 0
function change(){
    let image = document.getElementById('shark')
    if(num == 0){
        image.src = 'images/shark2.png'
        num = 1
    }
    else{
        image.src = 'images/shark1.png'
        num = 0
    }
}