$(document).ready(function() {

	const body			= $('body');
	const home_btn 		= $('#home_btn');
	const about_btn 	= $('#about_btn');
	const edu_btn 		= $('#edu_btn');
	const work_hist_btn = $('#work_hist_btn');
	const projects_btn 	= $('#projects_btn');

	const home_icon		= $('#home_icon');
	const about_icon	= $('#about_icon');
	const edu_icon		= $('#edu_icon');
	const work_hist_icon	= $('#work_hist_icon');
	const projects_icon	= $('#projects_icon');

	const header_area	= $('#header_area');
	const headers		= $('.headers');
	const about_header	= $('#about_header');
	const edu_header	= $('#edu_header');
	const work_header 	= $('#work_header');
	const proj_header	= $('#proj_header');

	const home_section	= $('#home_section');
	const about_section = $('#about_section');
	const edu_section 	= $('#edu_section');
	const work_section 	= $('#work_section');
	const proj_section	= $('#proj_section');

	body.hide();
	body.show();
	hideSections();
	header_area.hide();
	home_btn.addClass("main_nav_btns_clicked");
	home_icon.attr('src', 'img/home_activated.svg');
	home_section.show();

	home_btn.click(function() {
		clearButtons();
		hideSections();
		header_area.hide();
		home_btn.addClass("main_nav_btns_clicked");
		home_icon.attr('src', 'img/home_activated.svg');
		home_section.fadeIn(200);
	});

	about_btn.click(function() {
		clearButtons();
		hideSections();
		about_btn.addClass("main_nav_btns_clicked");
		about_icon.attr('src', 'img/person_activated.svg');
		header_area.show();
		about_header.fadeIn(200);
		about_section.fadeIn(200);
	});

	edu_btn.click(function() {
		clearButtons();
		hideSections();
		edu_btn.addClass("main_nav_btns_clicked");
		edu_icon.attr('src', 'img/edu_activated.svg');
		header_area.show();
		edu_header.fadeIn(100);
		edu_section.fadeIn(100);
	});

	work_hist_btn.click(function() {
		clearButtons();
		hideSections();
		work_hist_btn.addClass("main_nav_btns_clicked");
		work_hist_icon.attr('src', 'img/work_activated.svg');
		header_area.show();
		work_header.fadeIn(200);
		work_section.fadeIn(200);
	});

	projects_btn.click(function() {
		clearButtons();
		hideSections();
		projects_btn.addClass("main_nav_btns_clicked");
		projects_icon.attr('src', 'img/projects_activated.svg');
		header_area.show();
		proj_header.fadeIn(200);
		proj_section.fadeIn(200);
	});

	function clearButtons() {
		home_btn.removeClass("main_nav_btns_clicked");
		home_icon.attr('src', 'img/home.svg');

		about_btn.removeClass("main_nav_btns_clicked");
		about_icon.attr('src', 'img/person.svg');

		edu_btn.removeClass("main_nav_btns_clicked");
		edu_icon.attr('src', 'img/edu.svg');

		work_hist_btn.removeClass("main_nav_btns_clicked");
		work_hist_icon.attr('src', 'img/work.svg');

		projects_btn.removeClass("main_nav_btns_clicked");
		projects_icon.attr('src', 'img/projects.svg');
	}

	function hideSections() {
		headers.hide();
		home_section.hide();
		about_section.hide();
		edu_section.hide();
		work_section.hide();
		proj_section.hide();
	}
});
