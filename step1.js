    const containerStep = document.getElementById("stepByStep");
    const leftPartContainer = document.getElementById("leftH2Section2");
    const leftPartContainerPosition = leftPartContainer.getBoundingClientRect().top;
    const animationStartScroll = 0; // Adjust this value to set the desired scroll position

    let containerTop = containerStep.getBoundingClientRect().top;
    containerTop = Math.max(containerTop, 0);

    // Attach scroll event listener to the window object
    window.addEventListener("scroll", function() {
        // Calculate the scroll position relative to the container
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        /*let containerTop = containerStep.getBoundingClientRect().top;
        containerTop = Math.max(containerTop, 0); */
        let scrollPosition = scrollTop - containerTop + 200;
        // scrollPosition = Math.max(0, scrollPosition);

        if (scrollPosition >= animationStartScroll) {

        const leftImage = document.getElementById("leftImage");
        const middleImage = document.getElementById("middleImage");
        const rightImage = document.getElementById("rightImage");
        const targetImage = document.getElementById("targetImage");
        const toSecondStep = document.getElementById("toSecondStep");
        const toThirdStep = document.getElementById("toThirdStep");
        const toFourthStep = document.getElementById("toFourthStep");

        // Calculate the positions based on the scroll position
        const multiplier = 1 ;

        const leftImageTop = 0 + scrollPosition * multiplier;
        const leftImageLeft = 0 + scrollPosition * multiplier;
        const middleImageTop = 0 + scrollPosition * multiplier;
        const rightImageTop = 0 + scrollPosition * multiplier;
        const rightImageRight = 0 + scrollPosition * multiplier;
        const toSecondStepTop = 0 + scrollPosition * multiplier;
        const toThirdStepTop = 0 + scrollPosition * multiplier;
        const toFourthStepTop = 0 + scrollPosition * multiplier;

        // Variables to stop the animation once reach the target Image
        const stopBitch = targetImage.getBoundingClientRect();
        const stopNowBitch = stopBitch.top - 200;

        const imgSecondStep = document.getElementById("imgSecondStep");
        const imgSecondStepPosition = imgSecondStep.getBoundingClientRect();
        const stopSecondStep = imgSecondStepPosition.top + scrollPosition -250;

        const imgThirdStep = document.getElementById("imgThirdStep");
        const imgThirdStepPosition = imgThirdStep.getBoundingClientRect();
        const stopThirdStep = imgThirdStepPosition.top + scrollPosition - 150;

        const imgFourthStep = document.getElementById("imgFourthStep");
        const imgFourthStepPosition = imgFourthStep.getBoundingClientRect();
        const stopFourthStep = imgFourthStepPosition.top + scrollPosition - 150;

        // To see the positions of the scroll in the INSPECT part in the browser and adjust if needed
        console.log("stopNowBitch:", stopNowBitch);
        console.log("stopSecondStep:", stopSecondStep);
        console.log("stopThirdStep:", stopThirdStep);
        console.log("stopFourthStep:", stopFourthStep);
        console.log("scrollTop", scrollTop);
        console.log("containerTop:", containerTop);
        console.log("scrollPosition:", scrollPosition);
        console.log("leftPartContainerPosition:", leftPartContainerPosition);

        // Conditions to make the images appear and disappear when needed
        if (scrollPosition > stopNowBitch) {
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

        if (stopNowBitch < scrollPosition && scrollPosition < stopSecondStep) {
            toSecondStep.style.display = "block";
            toThirdStep.style.display = "none";
            toFourthStep.style.display = "none";
        } else if (stopSecondStep < scrollPosition && scrollPosition < stopThirdStep) {
            toSecondStep.style.display = "none";
            toThirdStep.style.display = "block";
            toFourthStep.style.display = "none";
        } else if (stopThirdStep < scrollPosition && scrollPosition < stopFourthStep) {
            toSecondStep.style.display = "none";
            toThirdStep.style.display = "none";
            toFourthStep.style.display = "block";
        } else if (scrollPosition > stopFourthStep) {
            toFourthStep.style.display = "none";
        }

        // Set the image positions
        leftImage.style.top = leftImageTop + "px";
        leftImage.style.left = leftImageLeft + "px";
        middleImage.style.top = middleImageTop + "px";
        rightImage.style.top = rightImageTop + "px";
        rightImage.style.right = rightImageRight + "px";
        toSecondStep.style.top = toSecondStepTop + "px";
        toThirdStep.style.top = toThirdStepTop + "px";
        toFourthStep.style.top = toFourthStepTop + "px";
        }
    });