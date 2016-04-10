(function(){


		var mainPanel = document.getElementById('mainPanel');
		var sidePanel = document.getElementById('sidePanel');

		var hammerPanel = new Hammer(mainPanel);
		var hammerSide = new Hammer(sidePanel);

		hammerPanel.on('swiperight', function(){
			sidePanel.classList.toggle('open');
		});

		hammerPanel.on('swipeleft', function(){
			sidePanel.classList.toggle('open');
		});
	}());