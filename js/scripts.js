/*!
* Start Bootstrap - New Age v6.0.6 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// Navigation For The Pages //
// --------FORM PAGES--------//

function show(fpg1, fpg2) {
    document.getElementById(fpg1).style.display = 'block';
    document.getElementById(fpg2).style.display = 'none';
    return false;
  }
  
  
  function show(fpg2, fpg3) {
    document.getElementById(fpg2).style.display = 'block';
    document.getElementById(fpg3).style.display = 'none';
    return false;
  }
  
  
  function show(fpg3, fpg4) {
    document.getElementById(fpg3).style.display = 'block';
    document.getElementById(fpg4).style.display = 'none';
    return false;
  }


  function checkValidation2() {
    firstName = document.getElementById("name").value;

    if (firstName == "") {
        window.alert("Please enter your name before proceeding.");
    }
    else {
        return show('fpg2','fpg1');
    }
  }



  function getUserData() {

    lectureFormGroup = document.getElementById("lectureGroup");
    tutorialFormGroup = document.getElementById("tutorialGroup");
    labFormGroup = document.getElementById("labGroup");
    quizFormGroup = document.getElementById("quizGroup");
    assignmentFormGroup = document.getElementById("assignmentGroup");
    homeworkFormGroup = document.getElementById("homeworkGroup");

    lectureFormGroup.style.display = "none";
    tutorialFormGroup.style.display = "none";
    labFormGroup.style.display = "none";
    quizFormGroup.style.display = "none";
    assignmentFormGroup.style.display = "none";
    homeworkFormGroup.style.display = "none";

    // Hide or Display the Dropdown Menus
    if (study.checked == true) {
        dropdownStudy.style.display = "block";
    }
    else {
        dropdownStudy.style.display = "none";
    }

    if(lectures.checked == true) {
       lectureFormGroup.style.display = "block";
    }
    else {
        lectureFormGroup.style.display = "none";
    }

    if(tutorials.checked == true) {
        tutorialFormGroup.style.display = "block";
     }
     else {
        tutorialFormGroup.style.display = "none";
     }

     if(labs.checked == true) {
        labFormGroup.style.display = "block";
     }
     else {
        labFormGroup.style.display = "none";
     }

     if(quizzes.checked == true) {
        quizFormGroup.style.display = "block";
     }
     else {
        quizFormGroup.style.display = "none";
     }

     if(assignments.checked == true) {
        assignmentFormGroup.style.display = "block";
     }
     else {
        assignmentFormGroup.style.display = "none";
     }

     if(homework.checked == true) {
        homeworkFormGroup.style.display = "block";
     }

     else {
         homeworkFormGroup.style.display = "none";
     }
  }


// Unique Title Page
function getName() {
    document.getElementById("form-page-title-2").innerHTML = "Hi " + document.getElementById("name").value + "! <br> Let's create your schedule";
    document.getElementById("form-page-title-3").innerHTML = "Thank you, " + document.getElementById("name").value + "!";

    const startTime = document.getElementById("startDay");
    const endTime = document.getElementById("endDay");

    const startLectureTime = document.getElementById("lectureStartTime");
    const endLectureTime = document.getElementById("lectureEndTime");

    const startTutorialTime = document.getElementById("lectureStartTime");
    const endTutorialTime = document.getElementById("lectureEndTime");

    const startLabTime = document.getElementById("labStartTime");
    const endLabTime = document.getElementById("labEndTime");

    const startQuizTime = document.getElementById("quizStartTime");
    const endQuizTime = document.getElementById("quizEndTime");

    const homeworkTime = document.getElementById("homeworkTime");
    const assignmentTime = document.getElementById("assignmentTime");

    // Start and End Time
    document.getElementById("dayPeriod").innerHTML = document.getElementById("name").value + ", your day starts at " +
    startTime.value + " and ends at " + endTime.value + ".";

    // Lecture Information
    document.getElementById("lectureInformation").innerHTML = "You have a lecture (" + document.getElementById("lectureName").value + ") from " +
    startLectureTime.value + " to " + endLectureTime.value + ".";

    // Tutorial Information
    document.getElementById("tutorialInformation").innerHTML = "You have a tutorial (" + document.getElementById("tutorialName").value + ") from " +
    startTutorialTime.value + " to " + endTutorialTime.value + ".";

    // Lab Information
    document.getElementById("labInformation").innerHTML = "You have a lab (" + document.getElementById("labName").value + ") from " +
    startLabTime.value + " to " + endLabTime.value + ".";

    // Quiz Information
    document.getElementById("quizInformation").innerHTML = "You have a quiz (" + document.getElementById("quizName").value + ") from " +
    startQuizTime.value + " to " + endQuizTime.value + ".";

    // Homework Information
    document.getElementById("homeworkInformation").innerHTML = "You have " + homeworkTime.value + " of homework to complete";

    // Assignment Information
    document.getElementById("assignmentInformation").innerHTML = "You have " + assignmentTime.value + " of assignment work to complete";

}
