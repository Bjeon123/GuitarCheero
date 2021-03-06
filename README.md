Guitar Cheero 
---------------------------------

Live Link
---------------------------------
https://bjeon123.github.io/GuitarCheero/
---------------------------------
![Website](/src/assets/images/linkdInUsesThis.png)

Background
---------------------------------
Guitar Cheero will be a clone of the acclaimed video game GuitarHero. There will be notes represented by circles that will move from the top of the screen to the bottom of the screen into your guitar which is represented by stationary circles. The goal of the game is to get as many notes that you can with the best accuracy possible. In addition there will be bonuses that exist that will be represented by flying objects that will occasionally show up on the screen. These flying objects  will be generally anything that I enjoy to partake in, for example a flying pizza may show up on the screen. 

Functionality
---------------------------------
- Start a new game
- Pick a song from options
- Click on keys (1,2,3,4,5) when there is a note present
- Score is shown on screen
- Player is told what accuracy they clicked keys in relation to note

Technologies to be implemented
---------------------------------
- Canvas API to render circles and handle movement)
- Webpack and Babel to bundle and transpile the source JavaScript code
- npm to manage project dependencies
- HTMLMediaElement to play,pause, and mute music

MVP
---------------------------------
![MVP](/mvp.png)

- Player will start on the start screen where there are controls and links to my linkdIn and github
- Player can pick a song and will be redirected to the game screen
- In this screen they can click the spacebar to start the game
- All functionality will be avaliable
- Once done stats of performance will show as well as link to go back to home screen


Implementation Timeline
---------------------------------
__Friday__: Research more about canvas and functionality <br />
__Saturday__: Make a project and make guitar stationary circles and make moving circles notes <br />
__Sunday__: Add more functionality such as a start screen that shows directions starts game on a click <br />
__Monday__: handle errors and make sure the app is responsive <br />
__Tuesday__: Make different note patterns based on the song picked <br />
__Wenesday__: Perfect all functionality of project and add bonus content <br />
__Thursday__: Debug and make sure the code is production grade <br />

Favorite Code Snippet
----------------------------------
```javascript
    start(){
        for(const note in this.song) {
            if (Array.isArray(this.song[note])){
                for (let i = 0; i < this.song[note].length;i++){
                    setTimeout(
                        function () {
                            this.game.makeNotes(this.song[note][i])
                        }.bind(this), 0 + parseInt(note)
                    )
                }
            }
            else{
                setTimeout(
                    function(){
                        this.game.makeNotes(this.song[note])
                    }.bind(this), 0 + parseInt(note)
                )
            }
        }
        this.gameRequest=this.animate();
    }
```
<br />
This snippet of code is my favorite of the whole project because it allowed me to personalize the song notes to the flow of the song. Every single note that is rendered on the screen was created with a specific timeout in a json file that is read before the game. Although this made making song scripts more tedious, the specificity of notes made the clone much more like the actual Guitar Hero. Also thankfully songs usually have repetitive notes which allowed me to make the song json files in microsoft excel by appending repeating song patterns.

Bonus
---------------------------------
- Audience cheering based on how many notes are hit in a row
- Can click with mouse on bonus objects

