document.getElementById('theme-btn').addEventListener('click',function(event){
    function setRandomColor() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    document.body.style.backgroundColor= setRandomColor();       
})