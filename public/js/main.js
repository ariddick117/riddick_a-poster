(() => {

    // get the span tags to be able to click them
    let buttonStrong = document.querySelector('.strength'),
        buttonWeak = document.querySelector('.weak'),

        popOverStrong = document.querySelector('.popover-s');
        popOverWeak = document.querySelector('.popover-w');

    //const theSVGwrapper = document.querySelector('.svg-wrapper');

    //show the popover    
    function showPopoverStrong(beerdata, el) {
        popOverStrong.querySelector(".strong1").textContent = beerdata.strong1;
        popOverStrong.querySelector(".strong2").textContent = beerdata.strong2;
        popOverStrong.querySelector(".strong3").textContent = beerdata.strong3;
        popOverStrong.querySelector(".strong4").textContent = beerdata.strong4;
        popOverStrong.querySelector(".strong5").textContent = beerdata.strong5;
        popOverStrong.querySelector(".strong6").textContent = beerdata.strong6;
        popOverStrong.querySelector(".strong7").textContent = beerdata.strong7;
        popOverStrong.querySelector(".strong8").textContent = beerdata.strong8;
        popOverStrong.querySelector(".strong9").textContent = beerdata.strong9;
        // popOverStrong.querySelector(".strong10").textContent = beerdata.strong10;
        // popOverStrong.querySelector(".strong11").textContent = beerdata.strong11;
        // popOverStrong.querySelector(".strong12").textContent = beerdata.strong12;
        // popOverStrong.querySelector(".strong13").textContent = beerdata.strong13;
        // popOverStrong.querySelector(".strong14").textContent = beerdata.strong14;
        // popOverStrong.querySelector(".strong15").textContent = beerdata.strong15;
        // popOverStrong.querySelector(".strong16").textContent = beerdata.strong16;
        // popOverStrong.querySelector(".strong17").textContent = beerdata.strong17;

        popOverStrong.classList.toggle('show-popover-s');

        el.appendChild(popOverStrong);
    }

    function showPopoverWeak(weakness, el) {
        popOverWeak.querySelector(".weak1").textContent = weakness.strong1;
        popOverWeak.querySelector(".weak2").textContent = weakness.strong2;
        popOverWeak.querySelector(".weak3").textContent = weakness.strong3;

        popOverWeak.classList.toggle('show-popover-w');

        el.appendChild(popOverWeak);
    }


    // do fetch call to database
    function fetchDataS() {
        let url = `/info/${this.dataset.target}`,
            targetElement = this;

        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            showPopoverStrong(data, targetElement);
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    function fetchDataW() {
        let url = `/info/${this.dataset.target}`,
            targetElement = this;

        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            showPopoverWeak(data, targetElement);
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    buttonStrong.addEventListener('click', fetchDataS);
    buttonWeak.addEventListener('click', fetchDataW);
})();