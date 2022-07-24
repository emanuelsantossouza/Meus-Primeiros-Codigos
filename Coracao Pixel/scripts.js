let n = 0

function animacao(){
    if(n === 0){
        $(".coracao").css("width", "300px")
        $(".coracao").css("height", "300px")
        n+=1
    }else if (n === 1){
        $(".coracao").css("widht", "301px")
        $(".coracao").css("height", "301px")
        n+=1
    }else if (n === 2){
        $(".coracao").css("widht", "302px")
        $(".coracao").css("height", "302px")
        n+=1
    }else if (n === 3){
        $(".coracao").css("widht", "303px")
        $(".coracao").css("height", "303px")
        n+=1
    }else if (n === 4){
        $(".coracao").css("widht", "302px")
        $(".coracao").css("height", "302px")
        n+=1
    }else if (n === 5){
        $(".coracao").css("widht", "301px")
        $(".coracao").css("height", "301px")
        n+=1
    }else if (n === 6){
        $(".coracao").css("widht", "299px")
        $(".coracao").css("height", "299px")
        n+=1
    }

    setInterval(animacao , 200)
}
