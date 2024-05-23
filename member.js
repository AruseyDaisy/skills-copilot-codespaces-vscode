function skillsMember() {
    var member = document.getElementById('member');
    var skills = document.getElementById('skills');
    var memberBtn = document.getElementById('memberBtn');
    var skillsBtn = document.getElementById('skillsBtn');
    var memberContent = document.getElementById('memberContent');
    var skillsContent = document.getElementById('skillsContent');

    memberBtn.addEventListener('click', function() {
        member.style.display = 'block';
        skills.style.display = 'none';
        memberBtn.style.color = '#fff';
        skillsBtn.style.color = '#000';
        memberContent.style.display = 'block';
        skillsContent.style.display = 'none';
    });

    skillsBtn.addEventListener('click', function() {
        member.style.display = 'none';
        skills.style.display = 'block';
        memberBtn.style.color = '#000';
        skillsBtn.style.color = '#fff';
        memberContent.style.display = 'none';
        skillsContent.style.display = 'block';
    });
}