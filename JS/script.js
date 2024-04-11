document.getElementById('sexe').addEventListener('change', function () {
    var sexe = document.querySelector('input[name="sexe"]:checked').value;
    document.getElementById('result_civilite').innerText = sexe;
});
document.getElementById('nom').addEventListener('change', function () {
    var nom = document.getElementById('nom').value;
    document.getElementById('result_name').innerText = nom;
});


function checkForm() {
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var mail = document.getElementById('email_input').value;

    var sexeRadio = document.querySelector('input[name="sexe"]:checked');
    var sexe = sexeRadio ? sexeRadio.value : "";

    document.getElementById('liste_warning').innerHTML = "";

    if (nom === "") {
        document.getElementById('liste_warning').appendChild(document.createElement('li')).innerText = "Le nom est vide";
        document.getElementById('display_warning').style.display = 'grid';
        document.getElementById('error_nom').style.display = 'block';
    }
    if (prenom === "") {
        document.getElementById('liste_warning').appendChild(document.createElement('li')).innerText = "Le prénom est vide";
        document.getElementById('display_warning').style.display = 'grid';
    }
    if (mail === "") {
        document.getElementById('liste_warning').appendChild(document.createElement('li')).innerText = "L'adresse mail est vide";
        document.getElementById('display_warning').style.display = 'grid';
    }
    if(sexe === "") {
        document.getElementById('liste_warning').appendChild(document.createElement('li')).innerText = "Le sexe n'est pas sélectionné";
        document.getElementById('display_warning').style.display = 'grid';
    }
    if(nom !== "" && prenom !== "" && mail !== "" && sexe !== "") {
        document.getElementById('display_warning').style.display = 'none';
    }
}

document.getElementById('form_info').addEventListener('change', checkForm);

// Vérifier le formulaire dès le chargement de la page
document.addEventListener('DOMContentLoaded', checkForm);