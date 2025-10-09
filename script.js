// Simple sauvegarde locale des notes (dans le navigateur)
function saveNotes() {
    const content = document.getElementById("sharedNotes").value;
    localStorage.setItem("notes", content);
    alert("Notes sauvegardées localement ✅");
}

// Charger les notes existantes au démarrage
window.onload = function() {
    const saved = localStorage.getItem("notes");
    if (saved) document.getElementById("sharedNotes").value = saved;
};
