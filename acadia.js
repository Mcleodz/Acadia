function clear_page(subject) {
    if(subject != "Home"){
        /**disabling the main page GUI */
        document.getElementById("about-us-heading-bg").hidden = true;
        document.getElementById("about-us-heading").hidden = true;
        document.getElementById("about-us-bg").hidden = true;
        document.getElementById("about-us").hidden = true;

        /**calling function to load selected subject page */
        load_page(subject)
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

function load_page(subject){

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

    subject_heading.innerHTML = subject; 

    var request = new XMLHttpRequest();
    request.open("GET", "subject_db.json", false);
    request.overrideMimeType("application/json");
    request.send(null);
    
    var all_data = JSON.parse(request.responseText);
    console.log(all_data);

    for (var items in all_data){
        if (items == subject){
            subject_about.innerHTML = all_data[items]["description"];
            past_papers_text.innerHTML = all_data[items]["past papers"];
            assessment_schedule_text.innerHTML = all_data[items]["assessment schedules"];
            study_guides_text.innerHTML = all_data[items]["study guides"]
        }
    }
}
