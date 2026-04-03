document.addEventListener("DOMContentLoaded", function() {
    const viewMoreBtn = document.getElementById("view-more-btn");
    const extraProjects = document.querySelectorAll(".extra-project");

    if (viewMoreBtn) {
        viewMoreBtn.addEventListener("click", function() {
            extraProjects.forEach(project => {
                project.classList.toggle("hidden-project");
            });
            const isHidden = extraProjects[0].classList.contains("hidden-project");
            viewMoreBtn.textContent = isHidden ? "View More" : "View Less";
        });
    }

    const phoneLink = document.getElementById("phone-link");

    if (phoneLink) {
        phoneLink.addEventListener("click", function(e) {
            e.preventDefault();
            
            const phoneNumber = "09601165837";
            
            navigator.clipboard.writeText(phoneNumber).then(function() {
                alert("Phone number copied to clipboard: " + phoneNumber);
            }).catch(function(err) {
                console.error("Could not copy text: ", err);
                alert("Failed to copy phone number.");
            });
        });
    }

    const skillsToggleBtn = document.getElementById("view-toggle-btn");
    const skillsContainer = document.getElementById("skills");

    document.querySelectorAll('.logo-grid svg').forEach(svg => {
        const titleText = svg.querySelector('title') ? svg.querySelector('title').textContent : 'Unknown Skill';
        
        const wrapper = document.createElement('div');
        wrapper.className = 'skill-item';
        
        svg.parentNode.insertBefore(wrapper, svg);
        wrapper.appendChild(svg);
        
        const label = document.createElement('span');
        label.className = 'skill-label';
        label.textContent = titleText;
        wrapper.appendChild(label);
    });

    if (skillsToggleBtn) {
        skillsToggleBtn.addEventListener("click", function() {
            skillsContainer.classList.toggle("list-mode-active");
            
            if (skillsContainer.classList.contains("list-mode-active")) {
                skillsToggleBtn.textContent = "Switch to Grid View";
            } else {
                skillsToggleBtn.textContent = "Switch to List View";
            }
        });
    }
});