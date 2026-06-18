let students=JSON.parse(localStorage.getItem('students'))||[];
function save(){localStorage.setItem('students',JSON.stringify(students));}
function grade(m){return m>=75?'A':m>=60?'B':m>=40?'C':'F';}
function addStudent(){let roll=roll.value,name=document.getElementById('name').value,department=document.getElementById('department').value,marks=document.getElementById('marks').value;}
function searchStudent(){alert('Search feature ready');}