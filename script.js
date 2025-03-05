document.addEventListener("DOMContentLoaded", function () {
     fetch("https://github.com/JCBT04/appdev-subj_taken/blob/main/courses.json")
         .then(response => response.json())
         .then(data => {
             const subjectsList = document.getElementById("subjects-list");
 
             data.courses.forEach(course => {
                 const courseItem = document.createElement("p");
                 courseItem.innerHTML = `<strong>${course.code}</strong> - ${course.description} (${course.credit} credits)`;
                 subjectsList.appendChild(courseItem);
             });
         })
         .catch(error => console.error("Error fetching subjects:", error));
 });
