window.addEventListener('load', function set_start(){
	var sectionNumberRD = window.location.href.indexOf('section')
	var editScreenRD = window.location.href.indexOf('edit')
	var completionRD = window.location.href.indexOf('completion')
	var hashSectionRD = window.location.href.indexOf('#section-')
	var userRD = window.location.href.indexOf('user')
	var enrolRD = window.location.href.indexOf('enrol')
	var groupRD = window.location.href.indexOf('group')
	var rolesRD = window.location.href.indexOf('roles')
	var filterRD = window.location.href.indexOf('filter')
	var reportRD = window.location.href.indexOf('report')
	var gradeRD = window.location.href.indexOf('grade')
	var backupRD = window.location.href.indexOf('backup')
	var resetRD = window.location.href.indexOf('reset')
	var questionRD = window.location.href.indexOf('question')
	var filesRD = window.location.href.indexOf('files')
	var adminRD = window.location.href.indexOf('admin')
	var previewRD = window.location.href.indexOf('preview')
	var bookRD = window.location.href.indexOf('book')
	//section is null so it must be the entry page
	if (sectionNumberRD == -1 && editScreenRD == -1 && completionRD == -1 && userRD == -1 && completionRD == -1 && enrolRD == -1 && groupRD == -1 && rolesRD == -1 && filterRD == -1 && reportRD == -1 && gradeRD == -1 && backupRD == -1 && resetRD == -1 && questionRD == -1 && filesRD == -1 && adminRD == -1 && previewRD == -1 && bookRD == -1 || hashSectionRD > -1) {
		//find the link that has the text Overview or Welcome in it and take its href value and assign it to a variable
		var overviewSection=$("nav a:contains('Overview'), nav a:contains(â€˜Welcomeâ€™)").attr('href');
		//change the current window address to the new section
		overviewSection=overviewSection.replace(/#section-/g, "&section=");
		window.location.href = overviewSection;
	}
});
