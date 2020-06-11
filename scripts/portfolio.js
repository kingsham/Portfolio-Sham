$('.navbar a').on('click', function(event){
    console.log(this.hash);
    if(this.hash !== ''){
        event.preventDefault();

        const hash=this.hash;
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800
        );
    }
});

$('.btn').on('click', function(event){
    console.log(this.hash);
    if(this.hash !== ''){
        event.preventDefault();

        const hash=this.hash;
        $('html, body').animate(
            {
                scrollTop: $('#about').offset().top
            },
            800
        );
    }
});
window.addEventListener('scroll', function(){
    if(this.window.scrollY >150){
        this.document.querySelector('.navbar').style.opacity=0.9;
    }
    else{
        this.document.querySelector('.navbar').style.opacity=1;
    }

    });