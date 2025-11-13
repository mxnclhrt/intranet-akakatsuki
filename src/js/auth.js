const SESSION_KEY = "intranet_auth_ok_v2";

/**
 * Vérifie si l'utilisateur est connecté.
 * Si non, redirige vers la page de connexion.
 */
function requireAuth() {
	if (!sessionStorage.getItem(SESSION_KEY)) {
		window.location.href = "src/html/login.html";
	}
}

/**
 * Déconnecte l'utilisateur et redirige vers la page de connexion.
 */
function logout() {
	sessionStorage.removeItem(SESSION_KEY);
	window.location.href = "src/html/login.html";
}