	var barSpacing = 0;
	var barWidth = 0;
	var chartHeight = 0;
	var chartHeightArea = 0;
	var chartScale = 0;
	var maxValue = 0;
	var highestYlabel = 0;
	var valueMultiplier = 0;

$(document).ready(function(){
	//chart
	window.chartHeight = Number($(".chart-area").height());
	window.barWidth = $(".chart-area .chart-bar").width();
	window.highestYlabel = Number($(".chart-y-axis p").first().html());
	window.chartHeightArea = window.chartHeight - Number($("p.axis-value").first().height());
	window.chartScale = chartHeightArea/window.highestYlabel;
	window.barSpacing = Number($(".chart-area").attr("bar-spacing"));
	positionBars();
	$('#mapForm').change(function(){
		var selectedContinent = $('#mapForm option:selected').val();
		if(selectedContinent == "ALL") {
			$('a.dot').slideDown(1000);
		} else {
			$('a.dot[continent = "' + selectedContinent + '"]').slideDown(1000);
			$('a.dot[continent != "' + selectedContinent + '"]').slideUp(1000);
		}
	});

	$('a.dot').click(function(){
		$('a.dot').removeClass('selected');
		$(this).addClass('selected');
		var continent = ".continent_detail#" + $(this).attr('continent');
		var htmlCode = $(continent).html();
		$('.detail_container').fadeOut(500, function(){
			$('.detail_container .continent_detail').html(htmlCode);
			$('.detail_container').fadeIn(500);
		})
	})
});

function positionBars() {
	//create a function to position the bars
	$(".chart-area .chart-bar").each(function(index) {
		var barPosition = (window.barWidth * index) + (window.barSpacing * index) + window.barSpacing;
		$(this).css("left", barPosition + "px");
		$(this).html("<p>" + $(this).attr("bar-value") + "</p>");
		$(".chart-x-axis").append('<p style="left:' + (barPosition - window.barWidth/2) + 'px;">' + $(this).attr('label') + '</p>');
		var barValue = Number($(this).attr('bar-value'));
		if(barValue > window.maxValue){
			window.maxValue = barValue;
			window.valueMultiplier = window.maxValue/window.highestYlabel;
		}
	});
	animateChart();
}

function animateChart(){
	$('.chart-area .chart-bar').each(function(index){
		var revisedValue = Number($(this).attr('bar-value')) * window.chartScale;
		var newDelay = 125 * index;
		$(this).delay(newDelay).animate({height: revisedValue}, 1000, function(){
			$(this).children('p').delay(500).fadeIn(250);
		});
	});
}

function pauseToggle() {
	var video = document.getElementById("video");
	if(video.paused) {
		video.play();
	} else {
		video.pause();
	}
}

window.onload = function() {
	var can_rt = document.getElementById('can_rtp');
	if (can_rt && can_rt.getContext) {
		var ctx = can_rt.getContext("2d");
		if (ctx) {
			//setup drawing information
			ctx.strokeStyle = "#ffffcc";
			ctx.fillStyle = "#222222";
			ctx.lineWidth = 20;
			
			//draw a rectangle
			ctx.fillRect(0,0,200,218);
			ctx.strokeRect(0,0,200,218);

			var str_t = "T";
			ctx.font = "150pt Helvetica";
			ctx.fillStyle = "#ffffcc";
			ctx.fillText(str_t, 40, 180);

		}
	}

	var can_re = document.getElementById('can_rep');
	if (can_re && can_re.getContext) {
		var ctx = can_re.getContext("2d");
		if (ctx) {
			//setup drawing information
			ctx.strokeStyle = "#ffffcc";
			ctx.fillStyle = "#222222";
			ctx.lineWidth = 20;
			
			//draw a rectangle
			ctx.fillRect(0,0,200,218);
			ctx.strokeRect(0,0,200,218);

			var str_t = "E";
			ctx.font = "150pt Helvetica";
			ctx.fillStyle = "#ffffcc";
			ctx.fillText(str_t, 30, 180);

		}
	}

	var can_ra = document.getElementById('can_rap');
	if (can_ra && can_ra.getContext) {
		var ctx = can_ra.getContext("2d");
		if (ctx) {
			//setup drawing information
			ctx.strokeStyle = "#ffffcc";
			ctx.fillStyle = "#222222";
			ctx.lineWidth = 20;
			
			//draw a rectangle
			ctx.fillRect(0,0,200,218);
			ctx.strokeRect(0,0,200,218);

			var str_t = "A";
			ctx.font = "150pt Helvetica";
			ctx.fillStyle = "#ffffcc";
			ctx.fillText(str_t, 32, 180);

		}
	} 
}