$(document).ready(function(){
	
	var wow = new WOW({ })
	 wow.init();
 myMap();
	

});


//google Map
function myMap() {
	var mapProp= {
	  center:new google.maps.LatLng(30.033333,31.233334),
	  zoom:5,
	};
	var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
	}
//mixitup plugin
var containerEl = document.querySelector('.mixitup');

var mixer = mixitup(containerEl);



let carouselOffSet=$(".carousel-caption").offset().top;

let counter=$(".counter").offset().top;

$(window).scroll(function(){
	let scrollTop=$(window).scrollTop();
	//console.log("carouselOffSet"+carouselOffSet+"scrollTop"+scrollTop);
	if(scrollTop > carouselOffSet){
		$("nav").css("background-color","rgba(0,0,0,0.6)");
	}
	else{
		$("nav").css("background-color","transparent");
	}
	
	if(scrollTop>500){
		$("#butup").fadeIn(500);
	}
	else{
		$("#butup").fadeOut(500);
	}
	
	if(scrollTop > counter-100){
		
		
		$({ countNum: $('.code1').html() }).animate({ countNum: 195 }, {
		    duration: 2000,
		    easing: 'linear',
		    step: function () {
		    $('.code1').html(Math.floor(this.countNum));
		},
		complete: function () {
		    $('.code1').html(this.countNum);
		}
		});
		
		
		$({ countNum: $('.code2').html() }).animate({ countNum: 975 }, {
		    duration: 2000,
		    easing: 'linear',
		    step: function () {
		    $('.code2').html(Math.floor(this.countNum));
		},
		complete: function () {
		    $('.code2').html(this.countNum);
		}
		});

		$({ countNum: $('.code3').html() }).animate({ countNum: 45 }, {
		    duration: 2000,
		    easing: 'linear',
		    step: function () {
		    $('.code3').html(Math.floor(this.countNum));
		},
		complete: function () {
		    $('.code3').html(this.countNum);
		}
		});

		$({ countNum: $('.code4').html() }).animate({ countNum: 125 }, {
		    duration: 2000,
		    easing: 'linear',
		    step: function () {
		    $('.code4').html(Math.floor(this.countNum));
		},
		complete: function () {
		    $('.code4').html(this.countNum);
		}
		});

		
		
		
		
	}
})

$("#butup").click(function(){
	$("body,html").animate({scrollTop:0},1000);
})




for(var i=1;i<=7;i++){
	
var links=document.links[i];
 
$(links).click(function(){
	
	let aHref=$(this).attr("href");
	
	let offSet=$(aHref).offset().top;
	
	$("body,html").animate({scrollTop:offSet-50},1000);
	
})

}




















