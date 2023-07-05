
// assign constant for the element being scrolled
const scrollContainer = document.querySelector(".h-scroll-container");

// function to trigger horizontal scroll when scrolling vertically 
function scrollHorizontal(event){  
  // add values of scrolling vertically to the scrolling of the left direction
  scrollContainer.scrollLeft += event.deltaY;
  // call function to prevent default vertical scrolling on the event
  event.preventDefault();
};

scrollContainer.addEventListener('wheel', function(event){
  scrollHorizontal(event);
});

//show