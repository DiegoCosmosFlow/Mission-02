console.log("Connected =D");

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-about-btn');
    const aboutContent = document.getElementById('about-content');
    const navBoxes = document.querySelectorAll('.nav-box');


    toggleButton.addEventListener('click', () => {
        if (aboutContent.classList.contains('expanded')) {
            aboutContent.classList.remove('expanded');
            toggleButton.textContent = 'Show More';
        } else {
            aboutContent.classList.add('expanded');
            toggleButton.textContent = 'Show Less';
            aboutContent.scrollIntoView({ behavior: 'smooth' });
        }
    });

    navBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const targetId = box.id.split('-')[0];
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const skills = ['HTML & CSS'];
    const skillsList = document.getElementById('skills-list');

    skills.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.textContent = skill;
        skillsList.appendChild(listItem);
    });

    const addSkillButton = document.getElementById('add-skill-btn');
    addSkillButton.addEventListener('click', () => {
        const newSkill = prompt('Enter a new skill:');
        if (newSkill) {
            const listItem = document.createElement('li');
            listItem.textContent = newSkill;
            skillsList.appendChild(listItem);
        }
    });
});
