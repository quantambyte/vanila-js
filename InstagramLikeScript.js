//this script simply likes posts after 5sec interval


setInterval(() => {

    //selecting heart button and arrow button
    const heart = document.querySelector('svg[aria-label="Like"]').parentNode;
    const arrow = document.querySelector('a.coreSpriteRightPaginationArrow');

    //liking post
    heart.click();

    //moving to next post
    arrow.click();

    //repeating same process after every 5 sec
}, 5000);