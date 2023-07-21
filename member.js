 function skillsMember() {
    var skills = document.getElementById("skills");
    var member = document.getElementById("member");
    var memberValue = member.value;
    var skillsValue = skills.value;
    var memberValue = memberValue.replace(/\s/g, '');
    var skillsValue = skillsValue.replace(/\s/g, '');
    if (memberValue == "") {
        member.style.border = "1px solid red";
        document.getElementById("memberError").innerHTML = "Please Enter Member Name";
        return false;
    } else if (skillsValue == "") {
        skills.style.border = "1px solid red";
        document.getElementById("skillsError").innerHTML = "Please Enter Skills";
        return false;
    } else {
        return true;
    }
}