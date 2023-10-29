const toggleSwitch = document.getElementById('jsonToggle');
const content = document.getElementById('jsonContent');

toggleSwitch.addEventListener('change', function () {
    if (toggleSwitch.checked) {
        const jsonData = {
            "tobezdev": {
                "interests": ["Programming", "Music"],
                "socials": {
                    "twitter (x)": "<a href='https://twitter.com/tobezdev'>@tobezdev</a>",
                    "discord": "<a href='https://discord.com/users/969254887621820526'>@tobezdev</a>",
                    "github": "<a href='https://github.com/tobezdev'>@tobezdev</a>",
                    "audius": "<a href='https://audius.co/tobez'>@tobez</a>"
                },
                "skills": {
                    "Programming": ["Python", "JavaScript", "HTML", "CSS"],
                    "Domains & Websites": ["Registration", "Hosting", "DNS Configuration"],
                    "Legal Things": ["Policies", "Contracts", "Documents"]
                }
            }
        };
        content.textContent = JSON.stringify(jsonData, null, 2);
    } else {
        content.textContent = `
<pre>
Interests: Programming & Music
Socials: 
    twitter (x): <a href='https://twitter.com/tobezdev'>@tobezdev</a>
    discord: <a href='https://discord.com/users/969254887621820526'>@tobezdev</a>
    github: <a href='https://github.com/tobezdev'>@tobezdev</a>
    audius: <a href='https://audius.co/tobez'>@tobez</a>
Skills:
    Programming:
        Python, Javascript, HTML, CSS
    Domains & Websites:
        Registration, Hosting, DNS Configuration
    Legal Things:
        Policies, Contracts, General Documents
</pre>`;
    }
});
