function mettreAJourHorloge() {
    const maintenant = new Date();

    const heures = maintenant.getHours().toString().padStart(2, '0');
    const minutes = maintenant.getMinutes().toString().padStart(2, '0');
    const secondes = maintenant.getSeconds().toString().padStart(2, '0');

    const jour = maintenant.getDate().toString().padStart(2, '0');
    const mois = (maintenant.getMonth() + 1).toString().padStart(2, '0'); // Janvier = 0
    const annee = maintenant.getFullYear();

    const heureTexte = `${heures}:${minutes}:${secondes}`;
    const dateTexte = `${jour}/${mois}/${annee}`;

    document.getElementById('heure').textContent = heureTexte;
    document.getElementById('date').textContent = dateTexte;
}

setInterval(mettreAJourHorloge, 1000);
mettreAJourHorloge();
