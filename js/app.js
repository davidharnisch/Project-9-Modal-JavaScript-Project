//Use an IIFE to avoid contanminating global namespce
(function(){
 
  

  
})();


/*
Notes during project
1. Tried to add an event listener to a node list. Had to actually do a forEach on the node list.
https://stackoverflow.com/questions/55667793/uncaught-typeerror-input-addeventlistener-is-not-a-function
2. Tried to use style.classList and then .show instead of just the string show. 'style not needed'
3. How to access the individual CSS properties (without simply adding a class)
4. I struggled with change the background. I thought I would be able to simply use element.style.background = 'image' but I realized I needed to use 'url(img);
5. Had a bug in my code where I misspelled background. backgound vs. background 

*/