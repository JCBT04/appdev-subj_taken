document.addEventListener("DOMContentLoaded", function () {
     fetch("https://raw.githubusercontent.com/JCBT04/appdev-subj_taken/main/courses.json")
         .then(response => {
             if (!response.ok) {
                 throw new Error(`HTTP error! Status: ${response.status}`);
             }
             return response.json();
         })
         .then(data => {
             const subjectsList = document.getElementById("subjects-list");
 
             if (!data.courses || data.courses.length === 0) {
                 subjectsList.innerHTML = "<p>No subjects found.</p>";
                 return;
             }
 
             data.courses.forEach(course => {
                 const courseItem = document.createElement("p");
                 courseItem.innerHTML = `<strong>${course.code}</strong> - ${course.description} (${course.credit} credits)`;
                 subjectsList.appendChild(courseItem);
             });
         })
         .catch(error => {
             console.error("Error fetching subjects:", error);
             document.getElementById("subjects-list").innerHTML = "<p>Failed to load subjects.</p>";
         });
 });
 