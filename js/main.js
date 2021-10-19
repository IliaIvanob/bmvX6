document.addEventListener("DOMContentLoaded", () => {

    const featureLinks = document.querySelectorAll('.feature__link')
    const featureSubs = document.querySelectorAll('.feature-sub')

    // for(let i = 0; i < featureLinks.length; i++) {
    //     featureLinks[i].addEventListener('click', () => {
    //         featureSubs[i].classList.toggle('hidden');
    //         featureLinks[i].classList.toggle('feature__link_active');
    //     })
    // }

    featureLinks.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            featureSubs.forEach((featureSub) => {
                featureSub.classList.add('hidden')
            })
            featureLinks.forEach((featureLink) => {
                featureLink.classList.remove('feature__link_active');
            })
            featureSubs[index].classList.remove('hidden')
            btn.classList.add('feature__link_active')
        })
    })

})