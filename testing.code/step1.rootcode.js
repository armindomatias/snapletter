window.addEventListener("scroll", function() {
    const leftImage = document.getElementById("leftImage");
    const middleImage = document.getElementById("middleImage");
    const rightImage = document.getElementById("rightImage");
    const targetImage = document.getElementById("targetImage");
    const toSecondStep = document.getElementById("toSecondStep");
    const toThirdStep = document.getElementById("toThirdStep");
    const toFourthStep = document.getElementById("toFourthStep");

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop ;

    //
    const leftImageTop = 0 + scrollTop * 1 ;
    const leftImageLeft = 0 + scrollTop * 1 ; 
    const middleImageTop = 0 + scrollTop * 1 ;
    const rightImageTop = 0 + scrollTop * 1 ;
    const rightImageRight = 0 + scrollTop * 1 ;
    const toSecondStepTop = 0 + scrollTop * 1 ;
    const toThirdStepTop = 0 + scrollTop * 1 ;
    const toFourthStepTop = 0 + scrollTop * 1 ;

    // Variables to Stop the animation once reach the target Image 

    const stopbitch = targetImage.getBoundingClientRect();
    const stopnowbitch = stopbitch.top;

    const imgSecondStep = document.getElementById("imgSecondStep");
    const imgSecondStepPosition = imgSecondStep.getBoundingClientRect();
    const stopSecondStep = imgSecondStepPosition.top + window.pageYOffset;


    const imgThirdStep = document.getElementById("imgThirdStep");
    const imgThirdStepPosition = imgThirdStep.getBoundingClientRect();
    const stopThirdStep = imgThirdStepPosition.top + window.pageYOffset;

    const imgFourthStep = document.getElementById("imgFourthStep");
    const imgFourthStepPosition = imgFourthStep.getBoundingClientRect();
    const stopFourthStep = imgFourthStepPosition.top + window.pageYOffset;

    // To see the positions of the scroll in the INSPECT part in the browser and adjust if needed
    console.log("stopnowbitch:", stopnowbitch);
    console.log("stopSecondStep:", stopSecondStep);
    console.log("stopThirdStep:", stopThirdStep);
    console.log("stopFourthStep:", stopFourthStep);
    console.log("scrollTop:", scrollTop);

    // Conditions to make appear and dissappear the images when needed

    if (scrollTop > stopnowbitch) {
        leftImage.style.display = "none";
        rightImage.style.display = "none";
        middleImage.style.display = "none";
    /* return; // Stop updating image positions */
    } else {
        leftImage.style.display = "block";
        rightImage.style.display = "block";
        middleImage.style.display = "block";
        toSecondStep.style.display = "none";
        toThirdStep.style.display = "none";
        toFourthStep.style.display = "none";
    }

    if ( stopnowbitch < scrollTop && scrollTop < stopSecondStep) {
        toSecondStep.style.display = "block";
        toThirdStep.style.display = "none";
        toFourthStep.style.display = "none";
    } else if (stopSecondStep < scrollTop && scrollTop < stopThirdStep) {
        toSecondStep.style.display = "none";
        toThirdStep.style.display = "block";
        toFourthStep.style.display = "none";
    } else if (stopThirdStep < scrollTop && scrollTop < stopFourthStep) {
        toSecondStep.style.display = "none"
        toThirdStep.style.display = "none";
        toFourthStep.style.display = "block";
    } else if (scrollTop > stopFourthStep) {
        toFourthStep.style.display = "none";
    } 

    //
    leftImage.style.top = leftImageTop + "px" ;
    leftImage.style.left = leftImageLeft + 'px';
    middleImage.style.top = middleImageTop + 'px';
    rightImage.style.top = rightImageTop + 'px';
    rightImage.style.right = rightImageRight + 'px';
    toSecondStep.style.top = toSecondStepTop + "px";
    toThirdStep.style.top = toThirdStepTop + "px";
    toFourthStep.style.top = toFourthStepTop + "px";
});