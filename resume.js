
fetch('resume.json')
	.then(response => response.json())
	.then(resumeData => {
		let resume = document.getElementById('resume');

		// Basics section
		let basics = document.createElement('div');
		basics.innerHTML = `
				<h2>Basics</h2>
				<p>Name: ${resumeData.basics.name}</p>
				<p>Applied For: ${resumeData.basics.AppliedFor}</p>
				<p>Email: ${resumeData.basics.email}</p>
				<p>Phone: ${resumeData.basics.phone}</p>
				<p>Location: ${resumeData.basics.location.address}, ${resumeData.basics.location.city}, ${resumeData.basics.location.state}, ${resumeData.basics.location.postalCode}</p>
				<p>Profiles: <a href="${resumeData.basics.profiles.url}">${resumeData.basics.profiles.url}</a></p>
			`;
		resume.appendChild(basics);

		// Skills section
		let skills = document.createElement('div');
		skills.innerHTML = `
				<h2>Skills</h2>
				<p>Name: ${resumeData.skills.name}</p>
				<p>Level: ${resumeData.skills.level}</p>
				<p>Keywords: ${resumeData.skills.keywords.join(', ')}</p>
			`;
		resume.appendChild(skills);

		// Work section
		let work = document.createElement('div');
		work.innerHTML = `
				<h2>Work</h2>
				<p>Company Name: ${resumeData.work["Company Name"]}</p>
				<p>Position: ${resumeData.work.Position}</p>
				<p>Start Date: ${resumeData.work["Start Date"]}</p>
				<p>End Date: ${resumeData.work["End Date"]}</p>
				<p>Summary: ${resumeData.work.Summary}</p>
			`;
		resume.appendChild(work);
	})


