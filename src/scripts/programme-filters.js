let selectedDate = "all";
let selectedScene = "all";

const dateBtns = document.querySelectorAll(".filter-date");
const sceneBtns = document.querySelectorAll(".filter-scene");
const eventSections = document.querySelectorAll(".event-section");

function filterEvents() {
    eventSections.forEach((section) => {
        const sectionDate = section.getAttribute("data-date");
        const sectionScene = section.getAttribute("data-scene");

        const dateMatch = selectedDate === "all" || sectionDate === selectedDate;
        const sceneMatch = selectedScene === "all" || sectionScene === selectedScene;

        if (dateMatch && sceneMatch) {
            section.classList.remove("hidden");
        } else {
            section.classList.add("hidden");
        }
    });
}

dateBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        dateBtns.forEach((b) => b.classList.remove("active"));
        this.classList.add("active");
        selectedDate = this.getAttribute("data-date");
        filterEvents();
    });
});

sceneBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        sceneBtns.forEach((b) => b.classList.remove("active"));
        this.classList.add("active");
        selectedScene = this.getAttribute("data-scene");
        filterEvents();
    });
});