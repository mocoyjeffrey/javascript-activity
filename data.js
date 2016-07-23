var students = { "MIT" : [
{ "name" : "Reymar", "gender" : "Male" },
{ "name" : "Cindy", "gender" : "Female" },
{ "name" : "Kevin", "gender" : "Male" }
]
}  

var htmlStudents = "<thead><tr><td>Name</td><td>Gender</td></tr></thead>";
htmlStudents+="<tbody>";
for(i=0;i<students.MIT.length;i++)
{
//htmlStudents+="<td>";
//htmlStudents+="<table border='1' width=100 >";
htmlStudents+="<tr><td width=50>"+ students.MIT[i].name+"</td><td width=50>"+ students.MIT[i].gender +"</td></tr>";
//htmlStudents+="<tr><td><b>Gender</b></td><td width=50>"+ students.MIT[i].gender +"</td></tr>";
//htmlStudents+="</table>";
//htmlStudents+="</td>";
}
htmlStudents += "<tr>";

var _table2 = document.getElementById('myTable2');
_table2.innerHTML = htmlStudents;