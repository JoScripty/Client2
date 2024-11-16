document.querySelectorAll('.nav-link').forEach((item)=>{
    item.addEventListener("click", ()=>{
        document.querySelectorAll('.nav-link').forEach((link)=>{
            link.classList.remove('link-active');
        })
        item.classList.add('link-active');
    })
})