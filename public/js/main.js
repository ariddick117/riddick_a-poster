(() => {

    // get the span tags to be able to click them
    let seeMoreButtons = document.querySelectorAll('.see-more'),
        popOver = document.querySelector('.popover');

    // set up some waypoints and make things happen
    var waypoint = new Waypoint({
        element: document.querySelector('#beer1'),
        handler: function(direction) {
          console.log('Scrolled to waypoint!');

          // drill down into the SVG from the HTML doc / JS file
          // changes things top-level, instead of inside the SVG
          let svg = this.element.firstElementChild.contentDocument;
          // debugger;


          // NOT WORKING YET BUT YOU GET THE IDEA
          // the yellow class is in main.css
          svg.querySelector("#beerText").classList.add("yellow");
        },
    });

    let waypoint2 = new Waypoint({
        element: document.querySelector('#beer2'),
        handler: function(direction) {
            console.log('Scrolled to waypoint!')
            this.element.innerHTML += "<p> I got added with Waypoint!</p>"
        },

        offset: 300 // waypoint needs to hit the top of the viewport, if that's not possible, use an offset
    });

    const theSVGwrapper = document.querySelector('.svg-wrapper');

    // function showSVG(event) {
    //     //debugger;
    // }

    // theSVGwrapper.addEventListener('mouseover', showSVG);

    //show the popover
    function showPopover(beerdata, el) {
        popOver.querySelector(".ipa-rating").textContent = `IPA Rating: ${beerdata.IpaRating}`;
        popOver.querySelector(".ratings").textContent = `IPA Rating: ${beerdata.IpaRating}`;
        popOver.querySelector(".beer-description").textContent = beerdata.description;

        popOver.classList.add('show-popover');

        el.appendChild(popOver);
    }

    // do fetch call to database
    function fetchData() {
        let url = `/info/${this.dataset.target}`,
            targetElement = this;

        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            showPopover(data, targetElement);
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    seeMoreButtons.forEach(button => button.addEventListener('click', fetchData));
})();