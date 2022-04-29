# Interactive Rating
## About
### A simple small project to practice handling user interactions and updating the DOM.
<img src="https://github.com/davupls/Interactive-rate-page/blob/main/images/desktop-preview.jpg?raw=true"></img>
- Website Live:  https://davupls.github.io/Interactive-rate-page/

### Features
-   Select and submit a number rating
-   See the "Thank you" card state after submitting a rating
-   View the optimal layout for the app depending on their device's screen size
-   See hover states for all interactive elements on the page

### Built with
- JavaScript
-  CSS3
- HTML5

### Stuff I learnt
-- So I learned while creating this simple site that addEventListener is for a single element. Two solutions are to either iterate example using forEach or rely on EventBubbling. 
(https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/)
```css
ratingButton.forEach(item  => {

item.addEventListener('click', event  => {

resetColor();
item.style.backgroundColor  =  '#7C8798';
item.style.color  =  '#FFF';
ratingValue  =  `${item.innerHTML}`; // string value

	})
})
```

