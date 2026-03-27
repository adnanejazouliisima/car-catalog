// ============================================
//  CAR CATALOG DATA - Edit this file to manage your cars
// ============================================
//
//  status options: "available", "sold", "reserved"
//  category options: "Hybride", "100% Électrique"
//
//  To add a new car:
//    1. Put the image in the "images/" folder
//    2. Copy one of the objects below and update the fields
//

const cars = [
    {
        name: "Suzuki Swace",
        category: "Hybride",
        tag: "Confort",
        fuel: "Hybride",
        transmission: "Automatique",
        consumption: "4,5 L / 100 km",
        seats: 5,
        equipment: [
            "Écran multimédia avec navigation",
            "Caméra de recul",
            "Sellerie confortable",
            "Régulateur adaptatif"
        ],
        price: "375 € / semaine",
        status: "available",
        image: "images/suzuki-swace.png",
        description: "Assurance pro + tous risques, kilométrage illimité, entretien complet, aucun dépôt de caution, assistance 24/7"
    },
    {
        name: "Toyota Corolla",
        category: "Hybride",
        tag: "Confort",
        fuel: "Hybride",
        transmission: "Automatique",
        consumption: "4,5 L / 100 km",
        seats: 5,
        equipment: [
            "Écran multimédia avec navigation",
            "Caméra de recul",
            "Régulateur adaptatif"
        ],
        price: "375 € / semaine",
        status: "available",
        image: "images/toyota-corolla.png",
        description: "Assurance pro + tous risques, kilométrage illimité, aucun dépôt de caution, assistance 24/7"
    },
    {
        name: "Hyundai Kona",
        category: "100% Électrique",
        tag: "Confort + Green",
        fuel: "100% Électrique",
        transmission: "Automatique",
        consumption: "16,5 kWh / 100 km",
        seats: 5,
        equipment: [
            "Écran multimédia avec navigation",
            "Caméra de recul",
            "Finition intérieure confortable premium",
            "Régulateur adaptatif"
        ],
        price: "375 € / semaine",
        status: "available",
        image: "images/hyundai-kona.png",
        description: "Assurance pro + tous risques, kilométrage illimité, entretien complet, aucun dépôt de caution, assistance 24/7"
    },
    {
        name: "Toyota bZ4X",
        category: "100% Électrique",
        tag: "Confort + Green",
        fuel: "100% Électrique",
        transmission: "Automatique",
        consumption: "Autonomie : 444 à 569 km (WLTP)",
        seats: 5,
        equipment: [
            "Écran multimédia avec navigation",
            "Caméra de recul",
            "Finition intérieure premium",
            "Régulateur adaptatif"
        ],
        price: "400 € / semaine",
        status: "available",
        image: "images/toyota-bz4x.png",
        description: "Assurance pro + tous risques, kilométrage illimité, entretien complet, aucun dépôt de caution, assistance 24/7"
    },
    {
        name: "Kia EV3",
        category: "100% Électrique",
        tag: "Confort + Green",
        fuel: "Électrique",
        transmission: "Automatique",
        consumption: "Autonomie : 450 à 600 km (WLTP)",
        seats: 5,
        equipment: [
            "Écran multimédia avec navigation",
            "Caméra de recul",
            "Finition intérieure moderne",
            "Régulateur adaptatif"
        ],
        price: "400 € / semaine",
        status: "available",
        image: "images/kia-ev3.png",
        description: "Assurance pro + tous risques, kilométrage illimité, entretien complet, aucun dépôt de caution, assistance 24/7"
    },
    {
        name: "Toyota Camry",
        category: "Hybride",
        tag: "Confort + Green",
        fuel: "Hybride",
        transmission: "Automatique",
        consumption: "4,3 L / 100 km",
        seats: 5,
        equipment: [
            "Écran multimédia avec navigation",
            "Caméra de recul",
            "Sièges confort premium",
            "Régulateur adaptatif",
            "Aide au maintien de voie"
        ],
        price: "400 € / semaine",
        status: "available",
        image: "images/toyota-camry.png",
        description: "Assurance pro + tous risques, kilométrage illimité, entretien complet, aucun dépôt de caution, assistance 24/7"
    },
    {
        name: "BYD Seal",
        category: "100% Électrique",
        tag: "Berline + Green + Confort",
        fuel: "100% Électrique",
        transmission: "Automatique",
        consumption: "Autonomie : 570 km (WLTP)",
        seats: 5,
        equipment: [
            "Écran rotatif 15,6 pouces",
            "Caméra de recul",
            "Sièges sport en cuir chauffants et ventilés",
            "Régulateur adaptatif",
            "Toit panoramique"
        ],
        price: "425 € / semaine",
        status: "available",
        image: "images/byd-seal.png",
        description: "Assurance pro + tous risques, kilométrage illimité, entretien complet, aucun dépôt de caution, assistance 24/7"
    },
    {
        name: "Tesla Model Y",
        category: "100% Électrique",
        tag: "Berline + Green + Confort",
        fuel: "100% Électrique",
        transmission: "Automatique",
        consumption: "Autonomie : 500 km",
        seats: 5,
        equipment: [
            "Grand écran avec navigation",
            "Caméra de recul",
            "Sièges sport en cuir",
            "Régulateur adaptatif"
        ],
        price: "450 € / semaine",
        status: "available",
        image: "images/tesla-model-y.png",
        description: "Assurance pro + tous risques, kilométrage illimité, entretien complet, aucun dépôt de caution, assistance 24/7"
    },
    {
        name: "Tesla Model 3",
        category: "100% Électrique",
        tag: "Berline + Green + Confort",
        fuel: "100% Électrique",
        transmission: "Automatique",
        consumption: "Autonomie : 500 km",
        seats: 5,
        equipment: [
            "Grand écran avec navigation",
            "Caméra de recul",
            "Sièges sport en cuir",
            "Régulateur adaptatif"
        ],
        price: "450 € / semaine",
        status: "available",
        image: "images/tesla-model-3.png",
        description: "Assurance pro + tous risques, kilométrage illimité, entretien complet, aucun dépôt de caution, assistance 24/7"
    },
    {
        name: "Kia EV6",
        category: "100% Électrique",
        tag: "Berline + Green + Confort",
        fuel: "100% Électrique",
        transmission: "Automatique",
        consumption: "Autonomie : jusqu'à 528 km (WLTP)",
        seats: 5,
        equipment: [
            "Grand écran avec navigation",
            "Caméra de recul",
            "Sièges sport en cuir",
            "Régulateur adaptatif"
        ],
        price: "450 € / semaine",
        status: "available",
        image: "images/kia-ev6.png",
        description: "Assurance pro + tous risques, kilométrage illimité, entretien complet, aucun dépôt de caution, assistance 24/7"
    },
    {
        name: "Hyundai Staria",
        category: "Hybride",
        tag: "Van Premium",
        fuel: "1.6 T-GDi Hybride (215 ch)",
        transmission: "Automatique (BVA6)",
        consumption: "5,25 L / 100 km",
        seats: "7 à 9",
        equipment: [
            "Écran 12,3 pouces",
            "SmartSense complet",
            "Climatisation tri-zone",
            "Sièges chauffants",
            "Caméra 360°",
            "Aide au stationnement"
        ],
        price: "550 € / semaine",
        status: "available",
        image: "images/hyundai-staria.png",
        description: "Assurance pro + tous risques, kilométrage illimité, entretien complet, aucun dépôt de caution, assistance 24/7"
    },
];
