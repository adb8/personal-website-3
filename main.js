if (window.location.pathname.endsWith("experiences.html")) {
	const pioneer_link = document.querySelector(".pioneer-link");
	const ai_link = document.querySelector(".ai-link");
	const kkcf_link = document.querySelector(".kkcf-link");
	const scc_link = document.querySelector(".scc-link");

    const pioneer_span = document.querySelector(".pioneer-link span")
    const ai_span = document.querySelector(".ai-link span")
    const kkcf_span = document.querySelector(".kkcf-link span")
    const scc_span = document.querySelector(".scc-link span")

	const exp_intro_cont = document.querySelector(".exp-intro-cont");
	const exp_kkcf_cont = document.querySelector(".exp-kkcf-cont");
	const exp_pioneer_cont = document.querySelector(".exp-pioneer-cont");
	const exp_scc_cont = document.querySelector(".exp-scc-cont");
	const exp_ai_cont = document.querySelector(".exp-ai-cont");

	exp_intro_cont.style.display = "block";
	exp_kkcf_cont.style.display = "none";
	exp_pioneer_cont.style.display = "none";
	exp_scc_cont.style.display = "none";
	exp_ai_cont.style.display = "none";

	pioneer_link.addEventListener("click", () => {
        pioneer_span.classList.add("nav-active")
        ai_span.classList.remove("nav-active")
        kkcf_span.classList.remove("nav-active")
        scc_span.classList.remove("nav-active")

		exp_intro_cont.style.display = "none";
		exp_kkcf_cont.style.display = "none";
		exp_pioneer_cont.style.display = "block";
		exp_scc_cont.style.display = "none";
		exp_ai_cont.style.display = "none";
	});

	ai_link.addEventListener("click", () => {
        pioneer_span.classList.remove("nav-active")
        ai_span.classList.add("nav-active")
        kkcf_span.classList.remove("nav-active")
        scc_span.classList.remove("nav-active")

		exp_intro_cont.style.display = "none";
		exp_kkcf_cont.style.display = "none";
		exp_pioneer_cont.style.display = "none";
		exp_scc_cont.style.display = "none";
		exp_ai_cont.style.display = "block";
	});

	kkcf_link.addEventListener("click", () => {
        pioneer_span.classList.remove("nav-active")
        ai_span.classList.remove("nav-active")
        kkcf_span.classList.add("nav-active")
        scc_span.classList.remove("nav-active")

		exp_intro_cont.style.display = "none";
		exp_kkcf_cont.style.display = "block";
		exp_pioneer_cont.style.display = "none";
		exp_scc_cont.style.display = "none";
		exp_ai_cont.style.display = "none";
	});

	scc_link.addEventListener("click", () => {
        pioneer_span.classList.remove("nav-active")
        ai_span.classList.remove("nav-active")
        kkcf_span.classList.remove("nav-active")
        scc_span.classList.add("nav-active")
        
		exp_intro_cont.style.display = "none";
		exp_kkcf_cont.style.display = "none";
		exp_pioneer_cont.style.display = "none";
		exp_scc_cont.style.display = "block";
		exp_ai_cont.style.display = "none";
	});
}

if (window.location.pathname.endsWith("projects.html")) {
	const classifier_link = document.querySelector(".classifier-link");
	const customer_link = document.querySelector(".customer-link");
	const aitotal_link = document.querySelector(".aitotal-link");
	const book_link = document.querySelector(".book-link");

    const classifier_span = document.querySelector(".classifier-link span")
    const customer_span = document.querySelector(".customer-link span")
    const aitotal_span = document.querySelector(".aitotal-link span")
    const book_span = document.querySelector(".book-link span")

	const proj_intro_cont = document.querySelector(".proj-intro-cont");
	const proj_classifier_cont = document.querySelector(".proj-classifier-cont");
	const proj_customer_cont = document.querySelector(".proj-customer-cont");
	const proj_aitotal_cont = document.querySelector(".proj-aitotal-cont");
	const proj_book_cont = document.querySelector(".proj-book-cont");

	proj_intro_cont.style.display = "block";
	proj_classifier_cont.style.display = "none";
	proj_customer_cont.style.display = "none";
	proj_aitotal_cont.style.display = "none";
	proj_book_cont.style.display = "none";

	classifier_link.addEventListener("click", () => {
        classifier_span.classList.add("nav-active")
        customer_span.classList.remove("nav-active")
        aitotal_span.classList.remove("nav-active")
        book_span.classList.remove("nav-active")

		proj_intro_cont.style.display = "none";
		proj_classifier_cont.style.display = "block";
		proj_customer_cont.style.display = "none";
		proj_aitotal_cont.style.display = "none";
		proj_book_cont.style.display = "none";
	});

	customer_link.addEventListener("click", () => {
        classifier_span.classList.remove("nav-active")
        customer_span.classList.add("nav-active")
        aitotal_span.classList.remove("nav-active")
        book_span.classList.remove("nav-active")

		proj_intro_cont.style.display = "none";
		proj_classifier_cont.style.display = "none";
		proj_customer_cont.style.display = "block";
		proj_aitotal_cont.style.display = "none";
		proj_book_cont.style.display = "none";
	});

	aitotal_link.addEventListener("click", () => {
        classifier_span.classList.remove("nav-active")
        customer_span.classList.remove("nav-active")
        aitotal_span.classList.add("nav-active")
        book_span.classList.remove("nav-active")

		proj_intro_cont.style.display = "none";
		proj_classifier_cont.style.display = "none";
		proj_customer_cont.style.display = "none";
		proj_aitotal_cont.style.display = "block";
		proj_book_cont.style.display = "none";
	});

	book_link.addEventListener("click", () => {
        classifier_span.classList.remove("nav-active")
        customer_span.classList.remove("nav-active")
        aitotal_span.classList.remove("nav-active")
        book_span.classList.add("nav-active")

		proj_intro_cont.style.display = "none";
		proj_classifier_cont.style.display = "none";
		proj_customer_cont.style.display = "none";
		proj_aitotal_cont.style.display = "none";
		proj_book_cont.style.display = "block";
	});
}

if (window.location.pathname.endsWith("services.html")) {
	const freelancing_link = document.querySelector(".freelancing-link");
	const tutoring_link = document.querySelector(".tutoring-link");

    const freelancing_span = document.querySelector(".freelancing-link span")
    const tutoring_span = document.querySelector(".tutoring-link span")

	const serv_intro_cont = document.querySelector(".serv-intro-cont");
	const serv_freelancing_cont = document.querySelector(".serv-freelancing-cont");
	const serv_tutoring_cont = document.querySelector(".serv-tutoring-cont");

	serv_intro_cont.style.display = "block";
	serv_freelancing_cont.style.display = "none";
	serv_tutoring_cont.style.display = "none";

	freelancing_link.addEventListener("click", () => {
        freelancing_span.classList.add("nav-active")
        tutoring_span.classList.remove("nav-active")

		serv_intro_cont.style.display = "none";
		serv_freelancing_cont.style.display = "block";
		serv_tutoring_cont.style.display = "none";
	});

	tutoring_link.addEventListener("click", () => {
        freelancing_span.classList.remove("nav-active")
        tutoring_span.classList.add("nav-active")

		serv_intro_cont.style.display = "none";
		serv_freelancing_cont.style.display = "none";
		serv_tutoring_cont.style.display = "block";
	});
}

if (window.location.pathname.endsWith("index.html")) {
	const email_text = document.querySelector(".email-text");

	email_text.addEventListener("click", () => {
		const email = "abuahmed0821@gmail.com";
		navigator.clipboard.writeText(email).then(() => {
			alert("Email copied to clipboard!");
		});
	});
}
