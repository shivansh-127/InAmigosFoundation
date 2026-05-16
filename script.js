window.onscroll = function(){

    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrolled = (winScroll / height) * 100;

    document.getElementById("progress").style.width = scrolled + "%";
};

// Counter Animation

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    counter.innerText = '0';

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        const increment = target / 200;

        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 10);
        }
        else{
            counter.innerText = target + '+';
        }
    };

    updateCounter();
});

// Reveal Animation

function reveal(){

    const reveals = document.querySelectorAll('.reveal');

    for(let i = 0; i < reveals.length; i++){

        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal);
reveal();
