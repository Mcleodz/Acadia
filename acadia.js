let about_dict = {
    "Calculus":"Level 3 Calculus includes three external assessment standards: AS91577, AS91578, and AS91579.</br></br> - Complex Numbers (AS91577):</br>   [Brief description of complex numbers standard]</br></br> - Differentiation (AS91578):</br>   [Brief description of differentiation standard]</br></br> - Integration (AS91579): </br> [Brief description of integration standard]",
    
    "Physics" : "Level 3 Physics includes two external assessment standards: AS91524 and AS91526.</br></br> - Mechanics (AS91524):</br>  [Brief description of mechanics standard]</br></br> - Electrical Systems (AS91526):</br>    [Brief description of electrical systems standard]",

    "English" : "Level 3 English includes two external assessment standards: AS91472 and AS91474.</br></br> - Written Text (AS91472):</br>  [Brief description of written text standard]</br></br> - Unfamilliar Text (AS91474):</br>    [Brief description of unfamilliar text standard]",

    "Electronics" : "Level 3 Electronics includes one external assessment standard: AS91614.</br></br> - Operational Parameters (AS91614):</br>  [Brief description of operational parameters standard]",

    "Software Development" : "Level 3 Software Development includes one external assessment standard: AS91908.</br></br> - Analyse an area of computer science (AS91908):</br>  [Brief description of Analyse an area of computer science standard]"
}

let past_paper_dict = {
    "Calculus": "Complex Numbers (AS91577): </br> -  <a href='http://www.nzqa.govt.nz/nqfdocs/ncea-resource/exams/2021/91577-exm-2021.pdf'>2021</a> </br> -  <a href='http://www.nzqa.govt.nz/nqfdocs/ncea-resource/exams/2020/91577-exm-2020.pdf'>2020</a> </br> -  <a href='http://www.nzqa.govt.nz/nqfdocs/ncea-resource/exams/2019/91577-exm-2019.pdf'>2019</a> </br> </br> Differentiation (AS91578): </br> -  <a href='http://www.nzqa.govt.nz/nqfdocs/ncea-resource/exams/2021/91578-exm-2021.pdf'>2021</a> </br> -  <a href='http://www.nzqa.govt.nz/nqfdocs/ncea-resource/exams/2020/91578-exm-2020.pdf'>2020</a> </br> - <a href='http://www.nzqa.govt.nz/nqfdocs/ncea-resource/exams/2019/91578-exm-2019.pdf'>2019</a>",

    "Physics": "Mechanics (AS91524): </br> - <a href='http://www.nzqa.govt.nz/nqfdocs/ncea-resource/exams/2021/91524-exm-2021.pdf'>2021</a> </br> - <a href='http://www.nzqa.govt.nz/nqfdocs/ncea-resource/exams/2020/91524-exm-2020.pdf'>2020</a> </br> - <a href='http://www.nzqa.govt.nz/nqfdocs/ncea-resource/exams/2019/91524-exm-2019.pdf'>2019</a> </br> </br>"
}

let assessment_schedule_dict = {
    "Calculus": "Complex Numbers (AS91577): </br> -  <a href='http://www.nzqa.govt.nz/nqfdocs/ncea-resource/schedules/2021/91577-ass-2021.pdf'>2021</a> </br> -  <a href='http://www.nzqa.govt.nz/nqfdocs/ncea-resource/schedules/2020/91577-ass-2020.pdf'>2020</a> </br> -  <a href='http://www.nzqa.govt.nz/nqfdocs/ncea-resource/schedules/2019/91577-ass-2019.pdf'>2019</a> </br> </br> Differentiation (AS91578): </br> -  <a href='http://www.nzqa.govt.nz/nqfdocs/ncea-resource/schedules/2021/91578-ass-2021.pdf'>2021</a> </br> -  <a href='http://www.nzqa.govt.nz/nqfdocs/ncea-resource/schedules/2020/91578-ass-2020.pdf'>2020</a> </br> -  <a href='http://www.nzqa.govt.nz/nqfdocs/ncea-resource/schedules/2019/91578-ass-2019.pdf'>2019</a>",

    "Physics": "Mechanics (AS91524): </br> - <a href='http://www.nzqa.govt.nz/nqfdocs/ncea-resource/schedules/2021/91524-ass-2021.pdf'>2021</a> </br> - <a href='http://www.nzqa.govt.nz/nqfdocs/ncea-resource/schedules/2020/91524-ass-2020.pdf'>2020</a> </br> - <a href='http://www.nzqa.govt.nz/nqfdocs/ncea-resource/schedules/2019/91524-ass-2019.pdf'>2019</a> </br> </br>"
}

let study_guides_dict = {
    "Calculus": "Complex Numbers (AS91577): </br> -  <a href='https://www.youtube.com/watch?v=oYrk8Y2C8jo&list=PLGHMh2fiud5c-xjJH3bJqNPJcLOOh9qaF'> Infinity Plus One </a> </br></br></br></br> Differentiation (AS91578): </br> -  <a href='https://www.youtube.com/watch?v=Zemmq02a40M&pp=ygUpaW5maW5pdHkgcGx1cyBvbmUgbGV2ZWwgMyBkaWZmZXJlbnRpYXRpb24%3D'> Infinity Plus One </a> </br></br></br>",

    "Physics": "Mechanics (AS91524): </br> - <a href='https://www.nobraintoosmall.co.nz/html/senior_physics/NCEA3_physics_mechanical_systems.html'> No Brain Too Small </a> </br> </br> </br> </br>"
}


function clear_page(page_to_load) {
    if(page_to_load != "Home"){
        /**disabling the main page GUI */
        document.getElementById("about-us-heading-bg").hidden = true;
        document.getElementById("about-us-heading").hidden = true;
        document.getElementById("about-us-bg").hidden = true;
        document.getElementById("about-us").hidden = true;

        /**calling function to load selected subject page */
        load_page(page_to_load)
    }

    else{
        /**re displaying the main page GUI */
        document.getElementById("about-us-heading-bg").hidden = false;
        document.getElementById("about-us-heading").hidden = false;
        document.getElementById("about-us-bg").hidden = false;
        document.getElementById("about-us").hidden = false;

        /**re disabling the subject info page GUI */
        document.getElementById("subject-heading-bg").hidden = true;
        document.getElementById("subject-heading").hidden = true;
        document.getElementById("subject-about-bg").hidden = true;
        document.getElementById("subject-about").hidden = true;

        document.getElementById("past-paper-parent-headings").hidden = true;
        document.getElementById("past-paper-child-heading").hidden = true;
        document.getElementById("past-paper-heading").hidden = true;
        document.getElementById("assessment-schedule-child-heading").hidden = true;
        document.getElementById("assessment-schedule-heading").hidden = true;

        document.getElementById("past-paper-parent-text").hidden = true;
        document.getElementById("past-paper-child-text").hidden = true;
        document.getElementById("past-paper-text").hidden = true;
        document.getElementById("assessment-schedule-child-text").hidden = true;
        document.getElementById("assessment-schedule-text").hidden = true;

        document.getElementById("study-guides-heading-bg").hidden = true;
        document.getElementById("study-guides-heading").hidden = true;
        document.getElementById("study-guides-text-bg").hidden = true;
        document.getElementById("study-guides-text").hidden = true;
    }
  }

function load_page(page_to_load){
    console.log("Successfully loaded requested page")
    var subject_heading_bg = document.getElementById("subject-heading-bg");
    var subject_heading = document.getElementById("subject-heading");
    var subject_about_bg = document.getElementById("subject-about-bg");
    var subject_about = document.getElementById("subject-about");
    
    var past_papers_heading_parent = document.getElementById("past-paper-parent-headings");
    var past_papers_heading_child = document.getElementById("past-paper-child-heading");
    var past_papers_heading = document.getElementById("past-paper-heading");
    var assessment_schedule_heading_child = document.getElementById("assessment-schedule-child-heading");
    var assessment_schedule_heading = document.getElementById("assessment-schedule-heading");

    var past_papers_text_parent = document.getElementById("past-paper-parent-text");
    var past_papers_text_child = document.getElementById("past-paper-child-text");
    var past_papers_text = document.getElementById("past-paper-text");
    var assessment_schedule_text_child = document.getElementById("assessment-schedule-child-text");
    var assessment_schedule_text = document.getElementById("assessment-schedule-text");

    var study_guides_heading_bg = document.getElementById("study-guides-heading-bg");
    var study_guides_heading = document.getElementById("study-guides-heading");
    var study_guides_text_bg = document.getElementById("study-guides-text-bg");
    var study_guides_text = document.getElementById("study-guides-text");

    subject_heading_bg.hidden = false;
    subject_heading.hidden = false;
    subject_about_bg.hidden = false;
    subject_about.hidden = false;

    past_papers_heading_parent.hidden = false;
    past_papers_heading_child.hidden = false;
    past_papers_heading.hidden = false;
    assessment_schedule_heading_child.hidden = false;
    assessment_schedule_heading.hidden = false;

    past_papers_text_parent.hidden = false;
    past_papers_text_child.hidden = false;
    past_papers_text.hidden = false;
    assessment_schedule_text_child.hidden = false;
    assessment_schedule_text.hidden = false;

    study_guides_heading_bg.hidden = false;
    study_guides_heading.hidden = false;
    study_guides_text_bg.hidden = false;
    study_guides_text.hidden = false;

    subject_heading.innerHTML = page_to_load; 
    subject_about.innerHTML = about_dict[page_to_load];

    past_papers_text.innerHTML = past_paper_dict[page_to_load];
    assessment_schedule_text.innerHTML = assessment_schedule_dict[page_to_load];

    study_guides_text.innerHTML = study_guides_dict[page_to_load];
}
