function load_page(subject){

    var about_us = document.getElementById("about-us");
    var subject_data = document.getElementById("subject-data");

    var subject_heading = document.getElementById("subject-heading");
    var subject_about = document.getElementById("subject-about");
    var past_papers_text = document.getElementById("past-paper-text");
    var assessment_schedule_text = document.getElementById("assessment-schedule-text");
    var study_guides_text = document.getElementById("study-guides-text");

    if(subject == "Home"){
        about_us.hidden = false;
        subject_data.hidden = true;
    }

    else{
        /** Disable about us and show subject page */
        about_us.hidden = true;
        subject_data.hidden = false;
        subject_heading.innerHTML = subject; 

        /** Get subject data from json file */
        var request = new XMLHttpRequest();
        request.open("GET", "subject_db.json", false);
        request.overrideMimeType("application/json");
        request.send(null);
        var all_data = JSON.parse(request.responseText);
        console.log(all_data);

        /** Set Subject display data to data from json file */
        for (var items in all_data){
            if (items == subject){
                subject_about.innerHTML = all_data[items]["description"];
                past_papers_text.innerHTML = all_data[items]["past papers"];
                assessment_schedule_text.innerHTML = all_data[items]["assessment schedules"];
                study_guides_text.innerHTML = all_data[items]["study guides"]
            }
        }
    }
}
