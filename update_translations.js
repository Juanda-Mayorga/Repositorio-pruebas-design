const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'src/locales');
const languages = ['da', 'de', 'ca', 'es', 'eu', 'gl', 'fr', 'en', 'it', 'nl', 'no', 'pt'];

const newTranslations = {
    da: {
        contactSales: {
            form: {
                phoneLabel: "Mobil",
                requiredFieldsNotice: "Alle felter markeret med * er påkrævede",
                submitTooltip: "Udfyld alle obligatoriske felter for at indsende formularen"
            }
        },
        validation: {
            jobTitleRequired: "Jobtitel skal være på mindst 2 tegn",
            companyRequired: "Firmanavn skal være på mindst 2 tegn",
            countryRequired: "Vælg venligst dit land",
            emailInvalid: "Indtast venligst en gyldig e-mailadresse",
            emailTemporary: "Midlertidige e-mailadresser er ikke tilladt",
            phoneInvalid: "Mobilnummer skal være på mindst 7 cifre"
        }
    },
    de: {
        contactSales: {
            form: {
                phoneLabel: "Mobil",
                requiredFieldsNotice: "Alle mit * markierten Felder sind Pflichtfelder",
                submitTooltip: "Füllen Sie alle Pflichtfelder aus, um das Formular abzusenden"
            }
        },
        validation: {
            jobTitleRequired: "Die Berufsbezeichnung muss mindestens 2 Zeichen lang sein",
            companyRequired: "Der Firmenname muss mindestens 2 Zeichen lang sein",
            countryRequired: "Bitte wählen Sie Ihr Land aus",
            emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
            emailTemporary: "Temporäre E-Mail-Adressen sind nicht erlaubt",
            phoneInvalid: "Die Handynummer muss mindestens 7 Ziffern lang sein"
        }
    },
    ca: {
        contactSales: {
            form: {
                phoneLabel: "Mòbil",
                requiredFieldsNotice: "Tots els camps marcats amb * són obligatoris",
                submitTooltip: "Completa tots els camps obligatoris per enviar el formulari"
            }
        },
        validation: {
            jobTitleRequired: "El càrrec ha de tenir almenys 2 caràcters",
            companyRequired: "El nom de l'empresa ha de tenir almenys 2 caràcters",
            countryRequired: "Si us plau, selecciona el teu país",
            emailInvalid: "Si us plau, introdueix una adreça de correu electrònic vàlida",
            emailTemporary: "No es permeten adreces de correu temporal",
            phoneInvalid: "El número de mòbil ha de tenir almenys 7 dígits"
        }
    },
    es: {
        contactSales: {
            form: {
                phoneLabel: "Móvil",
                requiredFieldsNotice: "Todos los campos marcados con * son obligatorios",
                submitTooltip: "Completa todos los campos obligatorios para enviar el formulario"
            }
        },
        validation: {
            jobTitleRequired: "El cargo debe tener al menos 2 caracteres",
            companyRequired: "El nombre de la empresa debe tener al menos 2 caracteres",
            countryRequired: "Por favor, selecciona tu país",
            emailInvalid: "Por favor, introduce una dirección de correo válida",
            emailTemporary: "No se permiten direcciones de correo temporales",
            phoneInvalid: "El número de móvil debe tener al menos 7 dígitos"
        }
    },
    eu: {
        contactSales: {
            form: {
                phoneLabel: "Mugikorra",
                requiredFieldsNotice: "* ikurrarekin markatutako eremu guztiak derrigorrezkoak dira",
                submitTooltip: "Bete derrigorrezko eremu guztiak formularioa bidaltzeko"
            }
        },
        validation: {
            jobTitleRequired: "Karguak gutxienez 2 karaktere izan behar ditu",
            companyRequired: "Enpresaren izenak gutxienez 2 karaktere izan behar ditu",
            countryRequired: "Mesedez, hautatu zure herrialdea",
            emailInvalid: "Mesedez, sartu baliozko helbide elektronikoa",
            emailTemporary: "Ez dira onartzen behin-behineko helbide elektronikoak",
            phoneInvalid: "Mugikorreko zenbakiak gutxienez 7 digitu izan behar ditu"
        }
    },
    gl: {
        contactSales: {
            form: {
                phoneLabel: "Móbil",
                requiredFieldsNotice: "Todos os campos marcados con * son obrigatorios",
                submitTooltip: "Completa todos os campos obrigatorios para enviar o formulario"
            }
        },
        validation: {
            jobTitleRequired: "O cargo debe ter polo menos 2 caracteres",
            companyRequired: "O nome da empresa debe ter polo menos 2 caracteres",
            countryRequired: "Por favor, selecciona o teu país",
            emailInvalid: "Por favor, introduce un enderezo de correo electrónico válido",
            emailTemporary: "Non se permiten enderezos de correo temporal",
            phoneInvalid: "O número de móbil debe ter polo menos 7 díxitos"
        }
    },
    fr: {
        contactSales: {
            form: {
                phoneLabel: "Mobile",
                requiredFieldsNotice: "Tous les champs marqués d'un * sont obligatoires",
                submitTooltip: "Remplissez tous les champs obligatoires pour soumettre le formulaire"
            }
        },
        validation: {
            jobTitleRequired: "Le titre du poste doit comporter au moins 2 caractères",
            companyRequired: "Le nom de l'entreprise doit comporter au moins 2 caractères",
            countryRequired: "Veuillez sélectionner votre pays",
            emailInvalid: "Veuillez entrer une adresse e-mail valide",
            emailTemporary: "Les adresses e-mail temporaires ne sont pas autorisées",
            phoneInvalid: "Le numéro de mobile doit comporter au moins 7 chiffres"
        }
    },
    en: {
        contactSales: {
            form: {
                phoneLabel: "Mobile",
                requiredFieldsNotice: "All fields marked with * are required",
                submitTooltip: "Complete all required fields to submit the form"
            }
        },
        validation: {
            jobTitleRequired: "Job title must be at least 2 characters",
            companyRequired: "Company name must be at least 2 characters",
            countryRequired: "Please select your country",
            emailInvalid: "Please enter a valid email address",
            emailTemporary: "Temporary email addresses are not allowed",
            phoneInvalid: "Mobile number must be at least 7 digits"
        }
    },
    it: {
        contactSales: {
            form: {
                phoneLabel: "Cellulare",
                requiredFieldsNotice: "Tutti i campi contrassegnati con * sono obbligatori",
                submitTooltip: "Compila tutti i campi obbligatori per inviare il modulo"
            }
        },
        validation: {
            jobTitleRequired: "La qualifica deve contenere almeno 2 caratteri",
            companyRequired: "Il nome dell'azienda deve contenere almeno 2 caratteri",
            countryRequired: "Seleziona il tuo paese",
            emailInvalid: "Inserisci un indirizzo email valido",
            emailTemporary: "Gli indirizzi email temporanei non sono consentiti",
            phoneInvalid: "Il numero di cellulare deve contenere almeno 7 cifre"
        }
    },
    nl: {
        contactSales: {
            form: {
                phoneLabel: "Mobiel",
                requiredFieldsNotice: "Alle velden gemarkeerd met * zijn verplicht",
                submitTooltip: "Vul alle verplichte velden in om het formulier te verzenden"
            }
        },
        validation: {
            jobTitleRequired: "Functietitel moet minimaal 2 tekens bevatten",
            companyRequired: "Bedrijfsnaam moet minimaal 2 tekens bevatten",
            countryRequired: "Selecteer uw land",
            emailInvalid: "Voer een geldig e-mailadres in",
            emailTemporary: "Tijdelijke e-mailadressen zijn niet toegestaan",
            phoneInvalid: "Mobiel nummer moet minimaal 7 cijfers bevatten"
        }
    },
    no: {
        contactSales: {
            form: {
                phoneLabel: "Mobil",
                requiredFieldsNotice: "Alle felt merket med * er obligatoriske",
                submitTooltip: "Fyll ut alle obligatoriske felt for å sende inn skjemaet"
            }
        },
        validation: {
            jobTitleRequired: "Stillingstittel må være på minst 2 tegn",
            companyRequired: "Firmanavn må være på minst 2 tegn",
            countryRequired: "Vennligst velg ditt land",
            emailInvalid: "Vennligst skriv inn en gyldig e-postadresse",
            emailTemporary: "Midlertidige e-postadresser er ikke tillatt",
            phoneInvalid: "Mobilnummer må være på minst 7 sifre"
        }
    },
    pt: {
        contactSales: {
            form: {
                phoneLabel: "Telemóvel",
                requiredFieldsNotice: "Todos os campos marcados com * são obrigatórios",
                submitTooltip: "Preencha todos os campos obrigatórios para enviar o formulário"
            }
        },
        validation: {
            jobTitleRequired: "O cargo deve ter pelo menos 2 caracteres",
            companyRequired: "O nome da empresa deve ter pelo menos 2 caracteres",
            countryRequired: "Por favor, selecione o seu país",
            emailInvalid: "Por favor, insira um endereço de e-mail válido",
            emailTemporary: "Endereços de e-mail temporários não são permitidos",
            phoneInvalid: "O número de telemóvel deve ter pelo menos 7 dígitos"
        }
    }
};

function deepMerge(target, source) {
    for (const key in source) {
        if (source[key] instanceof Object && key in target) {
            Object.assign(source[key], deepMerge(target[key], source[key]));
        }
    }
    Object.assign(target || {}, source);
    return target;
}

languages.forEach(lang => {
    const filePath = path.join(localesDir, lang, 'translation.json');
    try {
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf8');
            let json = JSON.parse(content);

            // Merge new translations
            if (newTranslations[lang]) {
                // Merge contactSales.form
                if (!json.contactSales) json.contactSales = {};
                if (!json.contactSales.form) json.contactSales.form = {};
                Object.assign(json.contactSales.form, newTranslations[lang].contactSales.form);

                // Merge validation
                if (!json.validation) json.validation = {};
                Object.assign(json.validation, newTranslations[lang].validation);
            }

            fs.writeFileSync(filePath, JSON.stringify(json, null, 4));
            console.log(`Updated ${lang}`);
        } else {
            console.log(`File not found for ${lang}`);
        }
    } catch (error) {
        console.error(`Error updating ${lang}:`, error);
    }
});
