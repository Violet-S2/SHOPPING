jQuery(document).ready(function(){
    /* 전체 카테고리 */
    let full_nav_text = document.getElementById('nav_text_btn');
    let full_nav_bak = document.getElementById('full_nav_bak');

    full_nav_text.addEventListener('click', function() {
    if (full_nav_bak.style.display == "block") {
        full_nav_bak.style.display = "none";
    } else {
        full_nav_bak.style.display = "block";
    }
    });

    /* 슬라이더 버튼 스크립트*/
    
    $('.con1').mouseover(function(){
        $('.slide_button').stop().fadeIn();
    }).mouseout(function(){
        $('.slide_button').stop().fadeOut(300);
    });
    

    /* 슬라이더 */
    
    let add = 0;
    let num = 0;
    let back = 0;
    let next = 0;
    
    setInterval(function(){

        back = add+1;
        //alert(back +"/ text /"+add);
        
        let slide_back = document.getElementById('slide_back_button');
        slide_back.addEventListener('click', function(){
            if(back < 7){
                $(".slide").animate({marginLeft: -(back-1) * 100 + "%"}, 400);
                add = back-1;
            }
        });

        next = add+1;

        let slide_next = document.getElementById('slide_next_button');
        slide_next.addEventListener('click', function(){
            if(next < 5){
                //alert(next +"/ test /"+ add);
                $(".slide").animate({marginLeft: -(next+1) * 100 + "%"}, 400);
                add = next+1;
            }if(next == 5){
                $(".slide").animate({marginLeft: -0 * 100 + "%"}, 400);
                add = next-5;
            }
        });

        add++;

        $(".slide").animate({marginLeft: -add * 100 + "%"}, 1800);
        if(add == 6){
            setTimeout(function(){
                $(".slide").animate({marginLeft:0}, 0);
                add = 0;
            }, 800)
        }
    }, 5000); 
    

    /* 스크롤 감지 스크립트 */
    $(window).scroll(function(){
        var height = $(window).scrollTop();
        /* nav_block 스크립트 */
        
        if( '0' < height &&  height  <'140'){
            $('.nav').css('position','relative');
            $('.nav').css('float','left');
            $('.nav').css('top','37px');
            $('.nav').css('left','210px');
            $('.full_nav').css('position','relative');
            $('.full_nav').css('float','left');
            $('.full_nav').css('top','35px');
            $('.full_nav').css('left','130px');
            $('.nav_bak').css('width','0%');
            $('.search').css('position','relative');
            $('.search').css('margin','60px 0 0 410px');
            $('.main_nav > li > a').css('color','#000000');
        }
        if( '110' < height && height  <'2000'){
                $('.nav').css('position','fixed');
                $('.nav').css('top','12px');
                $('.nav').css('left','405px');
                $('.full_nav').css('position','fixed');
                $('.full_nav').css('top','9px');
                $('.full_nav').css('left','185px');
                $('.search').css('position','fixed');
                $('.search').css('z-index','10');
                $('.search').css('margin','16px 0 0 1100px');
                $('.nav_bak').css('width','100%');
        }

        /* 메뉴바 오른쪽 버전
        if( '0' < height &&  height  <'140'){
                $('.nav').css('position','relative');
                $('.nav').css('float','left');
                $('.nav').css('top','37px');
                $('.nav').css('left','250px');
                $('.full_nav').css('position','relative');
                $('.full_nav').css('float','left');
                $('.full_nav').css('top','35px');
                $('.full_nav').css('left','170px');
                $('.nav_bak').css('width','0%');
                $('.search').css('position','relative');
                $('.search').css('margin','60px 0 0 450px');
                $('.main_nav > li > a').css('color','#000000');
        }
        if( '110' < height && height  <'2000'){
                $('.nav').css('position','fixed');
                $('.nav').css('top','12px');
                $('.nav').css('left','760px');
                $('.full_nav').css('position','fixed');
                $('.full_nav').css('top','9px');
                $('.full_nav').css('left','530px');
                $('.search').css('position','fixed');
                $('.search').css('z-index','10');
                $('.search').css('margin','18px 0 0 150px');
                $('.nav_bak').css('width','100%');
                //window.scrollTo({top:0, left:0, behavior : "smooth"});
        }
        */
    });
    
});