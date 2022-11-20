let coll1 = document.querySelector('#roman-view');
let coll2 = document.querySelector('#design-view');
let coll3 = document.querySelector('#kanban-view');
mouseEvents(coll1);
mouseEvents(coll2);
mouseEvents(coll3);


function mouseEvents(coll) {
    coll.addEventListener("mouseout", function () {
        this.classList.remove("active");
        let content = document.querySelector(`#${coll.id}-app`);
        content.style.maxHeight = null;
    });

    coll.addEventListener("mouseover", function () {
        this.classList.add("active");
        let content = document.querySelector(`#${coll.id}-app`);
        content.style.maxHeight = content.scrollHeight + "px";
    });
}


function scrollTrigger(selector, options = {}){
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
        addObserver(el, options)
    })
}

function addObserver(el, options){
    if(!('IntersectionObserver' in window)){
        if(options.cb){
            options.cb(el)
        }else{
            entry.target.classList.add('active')
        }
        return
    }
    let observer = new IntersectionObserver((entries, observer) => { //this takes a callback function which receives two arguments: the elemts list and the observer instance
        entries.forEach(entry => {
            if(entry.isIntersecting){
                if(options.cb){
                    options.cb(el)
                }else{
                    entry.target.classList.add('active')
                }
                observer.unobserve(entry.target)
            }
        })
    }, options)
    observer.observe(el)
}
scrollTrigger('.scroll-reveal', {
    rootMargin: '-100px',
})
