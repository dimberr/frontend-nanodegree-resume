var bio = {
        "name": "Victor Urvantsev",
        "role": "FrontEnd Developer",
        "contacts": {
            "mobile": "000-000-000",
            "email": "Email me!",
            "github": "GitHub",
            "blog": "LinkedIn",
            "location": "Haifa, Israel"
        },
        "welcomeMessage": "",
        "skills": [
            "HTML5", "JS", "CSS", "GitHub"
        ],
        "biopic": "images/fry.jpg"
    },
    education = {
        "schools": [{
            "name": "Open University of Israel",
            "location": "Israel",
            "degree": "BSc",
            "majors": [
                "CS", "Psy"
            ],
            "dates": "2014 - 2018",
            "url": "http://openu.ac.il/"
        }],
        "onlineCourses": [{
            "title": "Udacity FrontEnd Developer Nanodegree",
            "school": "Udacity",
            "dates": "2016",
            "url": "https://www.udacity.com"
        }]
    },
    work = {
        "jobs": [{
            "employer": "PizzaHut",
            "title": "Pizza Maker",
            "location": "Israel, Haifa",
            "dates": "2016",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }]
    };

    projects = {
        "projects": [{
            "title": "Front-End Web Development portfolio",
            "dates": "2016",
            "description": "Nanodegree portfolio",
            "images": ["images/code-680.jpg"]
        }]
    };



//add bio
bio.display = function() {
    $("#header")
        .prepend(HTMLheaderRole.replace("%data%", bio.role))
        .prepend(HTMLheaderName.replace("%data%", bio.name))
        .append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage))
        .append(HTMLbioPic.replace("%data%", bio.biopic));

    //add skills
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            $("#skills").append(HTMLskills.replace("%data%", skill));
        });
    }

    //contancts
    $("#topContacts, #footerContacts")
        .append(HTMLemail.replace("%data%", bio.contacts.email))
        .append(HTMLblog.replace("%data%", bio.contacts.blog))
        .append(HTMLgithub.replace("%data%", bio.contacts.github))
        .append(HTMLlocation.replace("%data%", bio.contacts.location));
};



//add works
work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last")
            .append(HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title))
            .append(HTMLworkDates.replace("%data%", job.dates))
            .append(HTMLworkDescription.replace("%data%", job.description));
    });
};



// function inName(s) {
//     var str = s.split(" ");
//     return (str[0] + " " + (str[1]).toUpperCase());
// }


//display education
education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last")
            .append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree))
            .append(HTMLschoolDates.replace("%data%", school.dates))
            .append(HTMLschoolLocation.replace("%data%", school.location))
            .append(HTMLschoolMajor.replace("%data%", school.majors.join(", ")));
    });

    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last")
            .append(HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school))
            .append(HTMLonlineDates.replace("%data%", course.dates))
            .append(HTMLonlineURL.replace("%data%", course.url));
    });
};


//projects display
projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last")
            .append(HTMLprojectTitle.replace("%data%", project.title))
            .append(HTMLprojectDates.replace("%data%", project.dates))
            .append(HTMLprojectDescription.replace("%data%", project.description));
        project.images.forEach(function(img) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", img));
        });
    });
};


bio.display();
work.display();
education.display();
projects.display();
initializeMap();


//TO-DO for parse info from LinkedIn JSON
// function getBase64Image(img) {
//     // Create an empty canvas element
//     var canvas = document.createElement("canvas");
//     canvas.width = img.width;
//     canvas.height = img.height;
//
//     // Copy the image contents to the canvas
//     var ctx = canvas.getContext("2d");
//     ctx.drawImage(img, 0, 0);
//
//     // Get the data-URL formatted image
//     // Firefox supports PNG and JPEG. You could check img.src to
//     // guess the original format, but be aware the using "image/jpg"
//     // will re-encode the image.
//     var dataURL = canvas.toDataURL("image/png");
//
//     return dataURL;
