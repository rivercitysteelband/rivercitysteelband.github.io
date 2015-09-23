
$(function() {

      $('.flexslider').flexslider({
            animation: "fade",
          controlNav: false,
          directionNav: false,
          slideshowSpeed: 1500,
          animationSpeed: 200,
          touch: true
      })
	$('iframe#calendar-iframe').attr('src', "https://www.google.com/calendar/embed?mode=AGENDA&height=600&wkst=1&bgcolor=%23ffffff&src=bib1nadeq9tc8sg5aqiivahqt8%40group.calendar.google.com&color=%49A7E9&ctz=Australia%2FBrisbane")
	//$('iframe#calendar-iframe').attr('src', 'https://www.google.com/calendar/embed?mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=bib1nadeq9tc8sg5aqiivahqt8%40group.calendar.google.com&amp;color=%49A7E9&amp;ctz=Australia%2FBrisbane')
	$('iframe#maps-iframe').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7079.338948233902!2d153.00836267724614!3d-27.479547632932427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9150a231dbe3f7%3A0x12ab0e3a02230667!2sWest+End+State+School!5e0!3m2!1sen!2sau!4v1438865177552')
})

