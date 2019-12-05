(() => {

    // get the span tags to be able to click them
    let buttonStrong = document.querySelector('.strength'),
        buttonWeak = document.querySelector('.weak'),

        popOverStrong = document.querySelector('.popover-s');
        popOverWeak = document.querySelector('.popover-w');

    const theSVGwrapper = document.querySelector('.svg-wrapper');

    //show the popover    
    function showPopoverStrong(beerdata, el) {
        popOverStrong.querySelector(".ipa-rating").textContent = `IPA Rating: ${beerdata.IpaRating}`;
        popOverStrong.querySelector(".ratings").textContent = `IPA Rating: ${beerdata.IpaRating}`;
        popOverStrong.querySelector(".beer-description").textContent = beerdata.description;

        popOverStrong.classList.toggle('show-popover-s');

        el.appendChild(popOverStrong);
    }

    function showPopoverWeak(beerdata, el) {
        popOverWeak.querySelector(".ipa-rating").textContent = `IPA Rating: ${beerdata.IpaRating}`;
        popOverWeak.querySelector(".ratings").textContent = `IPA Rating: ${beerdata.IpaRating}`;
        popOverWeak.querySelector(".beer-description").textContent = beerdata.description;

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