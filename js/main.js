$(document).ready(function() {

	// Toggle Drop Down Menu
	$("#menu-btn").click(function() {
		$("#menu-dropdown").toggle(200);
	});

	// Hide Drop Down Menu on Page load
	$("#menu-dropdown").hide();

	// Hide Drop Down Menu When Clicking Anywhere on the Desktop
	$("#desktop").click(function() {
		$("#menu-dropdown").hide(200);
	});

	// Click Events for Opening Applications

		// Word Processor
		$(".open-word").click(function() {
			$("#word-window").dialog({
				width: "800", height: "500",
				// Init tinymce editor
				open: function(event, ui) {
					tinymce.init({
						selector: "textarea",
						plugins: [
							"advlist autolink lists link image charmap print preview anchor",
							"searchreplace visualblocks code fullscreen",
							"insertdatetime media contextmenu paste"
						],
						toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"
					});
				} // end init tinymce editor
			});
			$("#menu-dropdown").hide();
		});

		// Spreadsheets
		$(".open-sheets").click(function() {
			$("#sheets-window").dialog({
				width: "1000", height: "500"
			});
			$("#sheets-window").html("<object data='https://www.ethercalc.org/_new'>");
			$("#menu-dropdown").hide();
		});

		// Image Editor
		$(".open-images").click(function() {
			$("#images-window").dialog({
				width: "800", height: "500"
			});
			$("#images-window").html("<object data='https://www.sumopaint.com/app/'>");
			$("#menu-dropdown").hide();
		});

		// Email
		$(".open-email").click(function() {
			$("#email-window").dialog({
				width: "400", height: "400"
			});
			$("#email-window").html("<object data='https://accounts.zoho.com/login?&servicename=ZohoMobile&serviceurl=https://mobile.zoho.com'>");
			$("#menu-dropdown").hide();
		});

		// Calculator
		$(".open-calc").click(function() {
			$("#calc-window").dialog({
				width: "500", height: "500"
			});
			$("#calc-window").html("<object data='https://www.polymer-project.org/0.5/components/paper-calculator/demo.html'>");
			$("#menu-dropdown").hide();
		});

		// Maps
		$(".open-maps").click(function() {
			$("#maps-window").dialog({
				width: "1000", height: "525"
			});
			$("#maps-window").html("<object data='https://www.here.com/'>");
			$("#menu-dropdown").hide();
		});

		// Weather
		$(".open-weather").click(function() {
			$("#weather-window").dialog({
				width: "950", height: "500"
			});
			$("#weather-window").html("<object data='https://forecast.io/'>");
			$("#menu-dropdown").hide();
		});

		// Read Me
		$(".open-readme").click(function() {
			$("#readme-window").dialog({
				width: "500", height: "450"
			});
			$("#menu-dropdown").hide();
		});

}); // end document.ready

var totalImages = 6;
function ChangeBg() {
	var num = Math.ceil( Math.random() * totalImages );
	image = "url('images/background/"+num+".jpg')";
	document.body.style.backgroundImage = image;
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.backgroundPosition = "center center";
	document.body.style.backgroundSize = "cover";
	document.body.style.backgroundAttachment = "fixed";
}

// Change background on page reload
	ChangeBg();

function dateTime() {
	// Date
		var currentTime = new Date();
		var month = currentTime.getMonth() + 1;
		var day = currentTime.getDate();
		var year = currentTime.getFullYear();

	// Time
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var am_pm = "AM";

		if (minutes < 10) {
			minutes = "0" + minutes;
		}

		if (hours > 11) {
			am_pm = "PM";
		}

		if (hours > 12) {
			hours = hours - 12;
		}

	// Display Date and Time
		document.getElementById("date-time").innerHTML = hours + ":" + minutes + " " + am_pm + "<br>" + month + "/" + day + "/" + year;
}

// Display Date and Time
	dateTime();

// Refresh Date and Time Every 60 Seconds
	setInterval(dateTime, 60000);
