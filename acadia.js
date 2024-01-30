let about_dict={
    "Calculus":"Level 3 Calculus includes three external assessment standards: AS91577, AS91578, and AS91579.</br></br> - Complex Numbers (AS91577):</br>   [Brief description of complex numbers standard]</br></br> - Differentiation (AS91578):</br>   [Brief description of differentiation standard]</br></br> - Integration (AS91579): </br> [Brief description of integration standard]",
    
    "Physics" : "Level 3 Physics includes two external assessment standards: AS91524 and AS91526.</br></br> - Mechanics (AS91524):</br>  [Brief description of mechanics standard]</br></br> - Electrical Systems (AS91526):</br>    [Brief description of electrical systems standard]",

    "English" : "Level 3 English includes two external assessment standards: AS91472 and AS91474.</br></br> - Written Text (AS91472):</br>  [Brief description of written text standard]</br></br> - Unfamilliar Text (AS91474):</br>    [Brief description of unfamilliar text standard]",

    "Electronics" : "Level 3 Electronics includes one external assessment standard: AS91614.</br></br> - Operational Parameters (AS91614):</br>  [Brief description of operational parameters standard]",

    "Software Development" : "Level 3 Software Development includes one external assessment standard: AS91908.</br></br> - Analyse an area of computer science (AS91908):</br>  [Brief description of Analyse an area of computer science standard]"
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
    }

    console.log(page_to_load);
  }

function load_page(page_to_load){
    console.log("Successfully loaded requested page")
    var subject_heading_bg = document.getElementById("subject-heading-bg");
    var subject_heading = document.getElementById("subject-heading");
    var subject_about_bg = document.getElementById("subject-about-bg");
    var subject_about = document.getElementById("subject-about");

    subject_heading_bg.hidden = false;
    subject_heading.hidden = false;
    subject_about_bg.hidden = false;
    subject_about.hidden = false;

    subject_heading.innerHTML = page_to_load; 
    subject_about.innerHTML = about_dict[page_to_load];

}
