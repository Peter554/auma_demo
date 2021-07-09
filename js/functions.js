window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

/*
  Handles a click on the down button to slide down the playlist.
*/
document.getElementsByClassName('down-header')[0].addEventListener('click', function(){
  var list = document.getElementById('list');

  list.style.height = ( parseInt( document.getElementById('flat-black-player-container').offsetHeight ) - 135 ) + 'px';

  document.getElementById('list-screen').classList.remove('slide-out-top');
  document.getElementById('list-screen').classList.add('slide-in-top');
  document.getElementById('list-screen').style.display = "block";
});

/*
  Handles a click on the up arrow to hide the list screen.
*/
document.getElementsByClassName('hide-playlist')[0].addEventListener('click', function(){
  document.getElementById('list-screen').classList.remove('slide-in-top');
  document.getElementById('list-screen').classList.add('slide-out-top');
  document.getElementById('list-screen').style.display = "none";
});

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function( e ){
  var offset = this.getBoundingClientRect();
  var x = e.pageX - offset.left;

  auma.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
});

document.querySelector('img[data-auma-song-info="cover_art_url"]').style.height = document.querySelector('img[data-auma-song-info="cover_art_url"]').offsetWidth + 'px';

auma.init({
	

  "bindings": {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },
  "songs": [
{

					"url": "./mp3/1.mp3",
  
					"time_callbacks": {
						
				0: function(){
        			auma.setDefaultAlbumArt("img/start.gif");auma.bindNewElements();
      			},
      			1: function(){
        			auma.setDefaultAlbumArt("img/1.gif");auma.bindNewElements();
      			},
      			
      			7: function(){
        			auma.setDefaultAlbumArt("img/2.png");auma.bindNewElements();
      			},
      			
      			23: function(){
      				auma.setDefaultAlbumArt("img/3.gif");auma.bindNewElements();

        		},
      			
      			24: function(){
        			auma.pause()
        			auma.bindNewElements();
        			document.querySelector('div#player-bottom div#control-container div#play-pause-container').style.display = 'none';
        			document.querySelector('.btn-left').style.display = 'inline';
        			document.querySelector('.btn-left').setAttribute("onclick", "auma.playSongAtIndex(1)");
        			document.querySelector('.btn-right').style.display = 'inline';
        			document.querySelector('.btn-right').setAttribute("onclick", "auma.playSongAtIndex(2)");
      			},
      			

      			
      			
    		}
				},
				
				{
					"name": "Green button",
					"url": "./mp3/green.mp3",
					
				"time_callbacks": {
						
				0: function(){
        			auma.setDefaultAlbumArt("img/4.png");auma.bindNewElements();
      			},
      			}
					

					},
					
				{
					"name": "Blue button",
					"url": "./mp3/blue.mp3",
					
										
				"time_callbacks": {
						
				0: function(){
        			auma.setDefaultAlbumArt("img/5.png");auma.bindNewElements();
      			},
      			}
					
					
					
					}
  ]

,
"continue_next": false


});
