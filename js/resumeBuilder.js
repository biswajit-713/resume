/*
This is empty on purpose! Your code to build the resume will go here.
 */

const resumeModel = _ => {
    const bio = {
        name: "Biswajit Pattanayak",
        role: "Front End Developer",
        contacts: {
            mobile: "7745847754",
            email: "biswajit.pattanayak@gmail.com",
            github: "https://github.com/biswajit-713",
            twitter: "https://twitter.com/pa_biswajit",
            location: "Hyderabad"
        },
        welcomeMessage: "welcome to my resume",
        skills: ["html", "javascript", "QA", "selenium"],
        biopic: "https://biopic.com",
        display: function () {

        }
    };

    const education = {
        schools: [
            {
                name: "NIT Rourkela",
                location: "Rourkela",
                degree: "B.Tech",
                majors: ["Electronics", "Instrumentation"],
                dates: "30-04-2005",
                url: "https://nitrkl.ac.in"
            }
        ],
        onlineCourses: [
            {
                title: "Intro to Machine Learning",
                school: "Udacity",
                dates: "31-03-2018",
                url: "https://in.udacity.com"
            },
            {
                title: "Front End Developer",
                school: "Freecodecamp",
                dates: "31-12-2018",
                url: "https://freecodecamp.org"
            }
        ],
        display: function () {

        }
    };

    const work = {
        jobs: [
            {
                employer: "Thoughtworks",
                title: "Quality Analyst",
                location: "Hyderabad",
                dates: 'in progress',
                desciption: "Quality Analyst"
            },
            {
                employer: "Infosys",
                title: "Lead Automation Engineer",
                location: "Pune",
                dates: '07-06-2017',
                desciption: "Quality Analyst"
            }
        ],
        display: function () {

        }
    };

    const projects = {
        projects :[
            {
                title: "sample project",
                dates: "10-05-2018",
                desciption: "sample description",
                images: []
            }
        ],
        display: function () {

        }
    };

    return {
        getName: _ => {
            return bio.name;
        }
    }
};

const resumeView = _ => {
    return {
        renderName: name => {
            HTMLheaderName = HTMLheaderName.replace('%data%', name);
            var $name = $('#main');
            $name.append(HTMLheaderName);
        }
    };
}

const resumeController = ((model, view) => {

    const renderPage = _ => {
        const name = model.getName();

        //  render the name in view
        view.renderName(name);
    
    };

    return {
        init: _ => {
            window.addEventListener('load', renderPage);
        }
    }

})(resumeModel(), resumeView());

resumeController.init();

