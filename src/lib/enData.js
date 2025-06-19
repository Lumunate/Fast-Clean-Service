// src/lib/enData.js
export const englishPackages = {
  "standard": [
    {
      "id": "autocare-standard-exterior",
      "name": "Exterior",
      "description": "Complete exterior care for your vehicle",
      "packages": [
        "Exterior Steam Cleaning",
          "Tire Blackening",
          "Clean windows and mirrors",
          "Apply spray wax",
          "Rim cleaning"
      ],
      "totalDuration": "60 min",
      "duration": "± 60 min.",
      "price": "€ 99.95",
      "vehicleOptions": {
        "Hatchback": {
          "basePrice": 74.95,
          "additionalCost": 0,
          "additionalTime": 0
        },
        "Sedan": {
          "basePrice": 74.95,
          "additionalCost": 10,
          "additionalTime": 10
        },
        "SUV": {
          "basePrice": 74.95,
          "additionalCost": 10,
          "additionalTime": 10
        },
        "Station Wagon": {
          "basePrice": 74.95,
          "additionalCost": 10,
          "additionalTime": 10
        },
        "MPV": {
          "basePrice": 74.95,
          "additionalCost": 10,
          "additionalTime": 10
        },
        "Coupé": {
          "basePrice": 74.95,
          "additionalCost": 0,
          "additionalTime": 0
        },
        "Convertible": {
          "basePrice": 74.95,
          "additionalCost": 0,
          "additionalTime": 0
        },
        "Van": {
          "basePrice": 74.95,
          "additionalCost": 10,
          "additionalTime": 10
        },
        "Pick-up Truck": {
          "basePrice": 74.95,
          "additionalCost": 10,
          "additionalTime": 10
        },
        "Motorbike": {
          "basePrice": 64.95,
          "additionalCost": 0,
          "additionalTime": 0,
          "notes": "exterior only"
        }
      },
      "additionalOptions": {
        "interior": [
          {
            "name": "Deep clean child seat (Per seat)",
            "additionalCost": 25,
            "options": [
              "Deep cleaning for child seats",
              "Removes stains and dirt"
            ],
            "_id": {
              "$oid": "685293f53f8fac5c60babfc6"
            }
          },
          {
            "name": "Ozone treatment",
            "additionalCost": 125,
            "options": [
              "Eliminates odors",
              "Kills bacteria and germs"
            ],
            "_id": {
              "$oid": "685293f53f8fac5c60babfc7"
            }
          }
        ],
        "exterior": [
          {
            "name": "Convertible top cleaning",
            "additionalCost": 95,
            "options": [],
            "_id": {
              "$oid": "685293f53f8fac5c60babfc8"
            }
          },
          {
            "name": "Sills and door edges",
            "additionalCost": 15,
            "options": [],
            "_id": {
              "$oid": "685293f53f8fac5c60babfc9"
            }
          },
          {
            "name": "Resin dots",
            "additionalCost": 30,
            "options": [],
            "_id": {
              "$oid": "685293f53f8fac5c60babfca"
            }
          },
          {
            "name": "Polish and nourish plastic parts",
            "additionalCost": 30,
            "options": [],
            "_id": {
              "$oid": "685293f53f8fac5c60babfcb"
            }
          },
          {
            "name": "Moss from seams",
            "additionalCost": 25,
            "options": [],
            "_id": {
              "$oid": "685293f53f8fac5c60babfcc"
            }
          },
          {
            "name": "Engine compartment cleaning",
            "additionalCost": 75,
            "options": [],
            "_id": {
              "$oid": "685293f53f8fac5c60babfcd"
            }
          },
          {
            "name": "Clean sliding-tilting roof",
            "additionalCost": 25,
            "options": [],
            "_id": {
              "$oid": "685293f53f8fac5c60babfce"
            }
          },
          {
            "name": "Polish chrome parts",
            "additionalCost": 85,
            "options": [],
            "_id": {
              "$oid": "685293f53f8fac5c60babfcf"
            }
          },
          {
            "name": "Polish headlights",
            "additionalCost": 75,
            "options": [],
            "_id": {
              "$oid": "685293f53f8fac5c60babfd0"
            }
          },
          {
            "name": "Claybar treatment",
            "additionalCost": 75,
            "options": [],
            "_id": {
              "$oid": "685293f53f8fac5c60babfd1"
            }
          }
        ],
        "detailing": [
          {
            "name": "Polishing 1-step (light scratch removal)",
            "additionalCost": 225,
            "options": [],
            "_id": {
              "$oid": "685293f53f8fac5c60babfd3"
            }
          },
          {
            "name": "Polishing 2-step (medium scratch removal)",
            "additionalCost": 350,
            "options": [],
            "_id": {
              "$oid": "685293f53f8fac5c60babfd4"
            }
          },
          {
            "name": "Polishing 3-step (maximum correction)",
            "additionalCost": 475,
            "options": [],
            "_id": {
              "$oid": "685293f53f8fac5c60babfd5"
            }
          },
          {
            "name": "Paint sealant",
            "additionalCost": 75,
            "options": [],
            "_id": {
              "$oid": "685293f53f8fac5c60babfd6"
            }
          },
          {
            "name": "Coat windows (front)",
            "additionalCost": 150,
            "options": [],
            "_id": {
              "$oid": "685293f53f8fac5c60babfd7"
            }
          },
          {
            "name": "Coat windows (rear)",
            "additionalCost": 150,
            "options": [],
            "_id": {
              "$oid": "685293f53f8fac5c60babfd8"
            }
          },
          {
            "name": "Ceramic coating",
            "additionalCost": 75,
            "options": [],
            "_id": {
              "$oid": "685293f53f8fac5c60babfd9"
            }
          }
        ],
        "_id": {
          "$oid": "685293f53f8fac5c60babfc5"
        }
      },
      "durationOptions": [],
      "cleaningFrequencyOptions": [],
      "_id": {
        "$oid": "685293f53f8fac5c60babfc4"
      }
    },
    {
      "id": "autocare-standard-interior",
      "name": "Interior",
      "description": "Premium exterior care for your vehicle",
      "packages": [
        "Wipe dashboard and compartments",
          "Clean sills and door edges",
          "Steam mats",
          "Clean windows and mirrors",
          "Vacuuming",
          "General interior steam cleaning"
      ],
      "totalDuration": "60 min",
      "duration": "60 min",
      "price": "€ 119.95",
      "vehicleOptions": {
        "Hatchback": {
          "basePrice": 89.95,
          "additionalCost": 0,
          "additionalTime": 0
        },
        "Sedan": {
          "basePrice": 89.95,
          "additionalCost": 10,
          "additionalTime": 10
        },
        "SUV": {
          "basePrice": 89.95,
          "additionalCost": 10,
          "additionalTime": 10
        },
        "Station Wagon": {
          "basePrice": 89.95,
          "additionalCost": 10,
          "additionalTime": 10
        },
        "MPV": {
          "basePrice": 89.95,
          "additionalCost": 10,
          "additionalTime": 10
        },
        "Coupé": {
          "basePrice": 89.95,
          "additionalCost": 0,
          "additionalTime": 0
        },
        "Convertible": {
          "basePrice": 99.95,
          "additionalCost": 0,
          "additionalTime": 0
        },
        "Van": {
          "basePrice": 89.95,
          "additionalCost": 10,
          "additionalTime": 10
        },
        "Pick-up Truck": {
          "basePrice": 89.95,
          "additionalCost": 10,
          "additionalTime": 10
        }
      },
      "additionalOptions": {
        "interior": [
          {
            "name": "Vomit treatment",
            "additionalCost": 175,
            "options": [],
            "_id": {
              "$oid": "685295ae3f8fac5c60bac398"
            }
          },
          {
            "name": "Pet hair removal",
            "additionalCost": 75,
            "options": [],
            "_id": {
              "$oid": "685295ae3f8fac5c60bac399"
            }
          },
          {
            "name": "Odor treatment",
            "additionalCost": 99,
            "options": [],
            "_id": {
              "$oid": "685295ae3f8fac5c60bac39a"
            }
          },
          {
            "name": "Deep clean child seat (Per seat)",
            "additionalCost": 25,
            "options": [],
            "_id": {
              "$oid": "685295ae3f8fac5c60bac39b"
            }
          },
          {
            "name": "Leather treatment",
            "additionalCost": 85,
            "options": [],
            "_id": {
              "$oid": "685295ae3f8fac5c60bac39c"
            }
          },
          {
            "name": "Engine compartment cleaning",
            "additionalCost": 75,
            "options": [],
            "_id": {
              "$oid": "685295ae3f8fac5c60bac39d"
            }
          },
          {
            "name": "Ozone treatment ",
            "additionalCost": 125,
            "options": [],
            "_id": {
              "$oid": "685295ae3f8fac5c60bac39e"
            }
          },
          {
            "name": "Steam clean ceiling",
            "additionalCost": 99,
            "options": [],
            "_id": {
              "$oid": "685295ae3f8fac5c60bac39f"
            }
          },
          {
            "name": "Mold treatment",
            "additionalCost": 149,
            "options": [],
            "_id": {
              "$oid": "685295ae3f8fac5c60bac3a0"
            }
          },
          {
            "name": "Stain removal upholstery",
            "additionalCost": 99,
            "options": [],
            "_id": {
              "$oid": "685295ae3f8fac5c60bac3a1"
            }
          }
        ],
        "exterior": [
          {
            "name": "Clean sliding-tilting roof",
            "additionalCost": 25,
            "options": [],
            "_id": {
              "$oid": "685295ae3f8fac5c60bac3a2"
            }
          },
          {
            "name": "Engine compartment cleaning ",
            "additionalCost": 75,
            "options": [],
            "_id": {
              "$oid": "685295ae3f8fac5c60bac3a3"
            }
          },
          {
            "name": "Polish chrome parts",
            "additionalCost": 85,
            "options": [],
            "_id": {
              "$oid": "685295ae3f8fac5c60bac3a4"
            }
          },
          {
            "name": "Polish headlights",
            "additionalCost": 74,
            "options": [],
            "_id": {
              "$oid": "685295ae3f8fac5c60bac3a5"
            }
          }
        ],
        "detailing": [
          {
            "name": "Water repellent impregnate seats",
            "additionalCost": 99,
            "options": [],
            "_id": {
              "$oid": "685295ae3f8fac5c60bac3a6"
            }
          },
          {
            "name": "Water repellent impregnate mats",
            "additionalCost": 99,
            "options": [],
            "_id": {
              "$oid": "685295ae3f8fac5c60bac3a7"
            }
          },
          {
            "name": "Coat Leather Interior",
            "additionalCost": 99,
            "options": [],
            "_id": {
              "$oid": "685295ae3f8fac5c60bac3a8"
            }
          }
        ],
        "_id": {
          "$oid": "685295ae3f8fac5c60bac397"
        }
      },
      "durationOptions": [],
      "cleaningFrequencyOptions": [],
      "_id": {
        "$oid": "685295ae3f8fac5c60bac396"
      }
    },
    {
      "id": "autocare-standard-complete",
      "name": "Complete",
      "description": "Ultimate showroom quality care for your vehicle",
      "packages": [
        "All above (Exterior + Interior) - services, add-ons and detailing add"
      ],
      "totalDuration": "90 min",
      "duration": "90 min",
      "price": "€ 179.95",
      "vehicleOptions": {
        "Hatchback": {
          "basePrice": 139.95,
          "additionalCost": 0,
          "additionalTime": 0
        },
        "Sedan": {
          "basePrice": 139.95,
          "additionalCost": 15,
          "additionalTime": 15
        },
        "SUV": {
          "basePrice": 139.95,
          "additionalCost": 15,
          "additionalTime": 15
        },
        "Station Wagon": {
          "basePrice": 139.95,
          "additionalCost": 15,
          "additionalTime": 15
        },
        "MPV": {
          "basePrice": 139.95,
          "additionalCost": 15,
          "additionalTime": 15
        },
        "Coupé": {
          "basePrice": 139.95,
          "additionalCost": 0,
          "additionalTime": 0
        },
        "Convertible": {
          "basePrice": 139.95,
          "additionalCost": 0,
          "additionalTime": 0
        },
        "Van": {
          "basePrice": 139.95,
          "additionalCost": 15,
          "additionalTime": 15
        },
        "Pick-up Truck": {
          "basePrice": 74.95,
          "additionalCost": 15,
          "additionalTime": 15
        }
      },
      "additionalOptions": {
        "interior": [],
        "exterior": [],
        "detailing": [],
        "_id": {
          "$oid": "684fef56d1c6db045255245e"
        }
      },
      "durationOptions": [],
      "cleaningFrequencyOptions": [],
      "_id": {
        "$oid": "684fef56d1c6db045255245d"
      }
    }
  ],
  "deluxe": [
    {
      "id": "autocare-deluxe-exterior",
      "name": "Exterior",
      "description": "Premium exterior care for your vehicle",
      "packages": [
        "Blacken tires",
          "Wash exterior with shampoo",
          "Rinse exterior",
          "Exterior steam cleaning",
          "Hand wash",
          "Polish plastic parts",
          "Remove moss from seams",
          "Remove resin dots",
          "Clean windows and mirrors",
          "Apply spray wax",
          "Clean fuel cap",
          "Rim cleaning"
      ],
      "totalDuration": "90 min",
      "duration": "90 min",
      "price": "€139.95",
      "vehicleOptions": {
        "Hatchback": {
          "basePrice": 89.95,
          "additionalCost": 0,
          "additionalTime": 0
        },
        "Sedan": {
          "basePrice": 89.95,
          "additionalCost": 10,
          "additionalTime": 0
        },
        "SUV": {
          "basePrice": 89.95,
          "additionalCost": 10,
          "additionalTime": 0
        },
        "Station Wagon": {
          "basePrice": 89.95,
          "additionalCost": 10,
          "additionalTime": 0
        },
        "MPV": {
          "basePrice": 89.95,
          "additionalCost": 10,
          "additionalTime": 0
        },
        "Coupé": {
          "basePrice": 89.95,
          "additionalCost": 0,
          "additionalTime": 0
        },
        "Convertible": {
          "basePrice": 89.95,
          "additionalCost": 0,
          "additionalTime": 0
        },
        "Van": {
          "basePrice": 89.95,
          "additionalCost": 10,
          "additionalTime": 0
        },
        "Pick-up Truck": {
          "basePrice": 89.95,
          "additionalCost": 10,
          "additionalTime": 0
        },
        "Motorbike": {
          "basePrice": 79.95,
          "additionalCost": 0,
          "additionalTime": 0,
          "notes": "exterior only"
        }
      },
      "additionalOptions": {
        "interior": [
          {
            "name": "Deep clean child seat (Per seat)",
            "additionalCost": 25,
            "options": [
              "Deep cleaning for child seats",
              "Removes stains and dirt"
            ],
            "_id": {
              "$oid": "685298033f8fac5c60bac4a6"
            }
          },
          {
            "name": "Ozone treatment ",
            "additionalCost": 95,
            "options": [
              "Eliminates odors",
              "Kills bacteria and germs"
            ],
            "_id": {
              "$oid": "685298033f8fac5c60bac4a7"
            }
          }
        ],
        "exterior": [
          {
            "name": "Convertible top cleaning",
            "additionalCost": 99,
            "options": [],
            "_id": {
              "$oid": "685298033f8fac5c60bac4a8"
            }
          },
          {
            "name": "Clean sliding-tilting roof",
            "additionalCost": 25,
            "options": [],
            "_id": {
              "$oid": "685298033f8fac5c60bac4a9"
            }
          },
          {
            "name": "Sills and door edges",
            "additionalCost": 15,
            "options": [],
            "_id": {
              "$oid": "685298033f8fac5c60bac4aa"
            }
          },
          {
            "name": "Engine compartment cleaning",
            "additionalCost": 75,
            "options": [],
            "_id": {
              "$oid": "685298033f8fac5c60bac4ab"
            }
          },
          {
            "name": "Polish chrome parts",
            "additionalCost": 85,
            "options": [],
            "_id": {
              "$oid": "685298033f8fac5c60bac4ac"
            }
          },
          {
            "name": "Polish headlights",
            "additionalCost": 75,
            "options": [],
            "_id": {
              "$oid": "685298033f8fac5c60bac4ad"
            }
          }
        ],
        "detailing": [
          {
            "name": "Polishing 1-step (light scratch removal)",
            "additionalCost": 225,
            "options": [],
            "_id": {
              "$oid": "685298033f8fac5c60bac4b1"
            }
          },
          {
            "name": "Polishing 2-step (medium scratch removal)",
            "additionalCost": 350,
            "options": [],
            "_id": {
              "$oid": "685298033f8fac5c60bac4b2"
            }
          },
          {
            "name": "Polishing 3-step (maximum correction)",
            "additionalCost": 475,
            "options": [],
            "_id": {
              "$oid": "685298033f8fac5c60bac4b3"
            }
          },
          {
            "name": "Paint sealant",
            "additionalCost": 75,
            "options": [],
            "_id": {
              "$oid": "685298033f8fac5c60bac4b4"
            }
          },
          {
            "name": "Coat windows (front)",
            "additionalCost": 150,
            "options": [],
            "_id": {
              "$oid": "685298033f8fac5c60bac4b5"
            }
          },
          {
            "name": "Coat windows (rear)",
            "additionalCost": 150,
            "options": [],
            "_id": {
              "$oid": "685298033f8fac5c60bac4b6"
            }
          },
          {
            "name": "Ceramic coating",
            "additionalCost": 750,
            "options": [],
            "_id": {
              "$oid": "685298033f8fac5c60bac4b7"
            }
          }
        ],
        "_id": {
          "$oid": "685298033f8fac5c60bac4a5"
        }
      },
      "durationOptions": [],
      "cleaningFrequencyOptions": [],
      "_id": {
        "$oid": "685298033f8fac5c60bac4a4"
      }
    },
    {
      "id": "autocare-deluxe-interior",
      "name": "Interior",
      "description": "Premium interior care for your vehicle",
      "packages": [
        "Wipe dashboard and compartments",
          "Interior detailing",
          "Clean sills and door edges",
          "Polish plastic parts",
          "Leather treatment",
          "Mat stripping",
          "Steam mats",
          "Clean windows and mirrors",
          "Shampooing of upholstery",
          "Vacuuming",
          "Intensive interior steam cleaning",
          "Remove stains from upholstery"
      ],
      "totalDuration": "90 min",
      "duration": "90 min",
      "price": "€199.95",
      "vehicleOptions": {
        "Hatchback": {
          "basePrice": 149.95,
          "additionalCost": 0,
          "additionalTime": 0
        },
        "Sedan": {
          "basePrice": 149.95,
          "additionalCost": 10,
          "additionalTime": 0
        },
        "SUV": {
          "basePrice": 144.95,
          "additionalCost": 10,
          "additionalTime": 0
        },
        "Station Wagon": {
          "basePrice": 149.95,
          "additionalCost": 10,
          "additionalTime": 0
        },
        "MPV": {
          "basePrice": 149.95,
          "additionalCost": 10,
          "additionalTime": 0
        },
        "Coupé": {
          "basePrice": 149.95,
          "additionalCost": 0,
          "additionalTime": 0
        },
        "Convertible": {
          "basePrice": 149.95,
          "additionalCost": 0,
          "additionalTime": 0
        },
        "Van": {
          "basePrice": 149.95,
          "additionalCost": 10,
          "additionalTime": 0
        },
        "Pick-up Truck": {
          "basePrice": 149.95,
          "additionalCost": 10,
          "additionalTime": 0
        }
      },
      "additionalOptions": {
        "interior": [
          {
            "name": "Odor treatment ",
            "additionalCost": 99,
            "options": [],
            "_id": {
              "$oid": "68529ac33f8fac5c60bac90c"
            }
          },
          {
            "name": "Pet hair removal",
            "additionalCost": 75,
            "options": [],
            "_id": {
              "$oid": "68529ac33f8fac5c60bac90d"
            }
          },
          {
            "name": "Ozone treatment",
            "additionalCost": 125,
            "options": [],
            "_id": {
              "$oid": "68529ac33f8fac5c60bac90e"
            }
          },
          {
            "name": "Steam clean ceiling",
            "additionalCost": 99,
            "options": [],
            "_id": {
              "$oid": "68529ac33f8fac5c60bac90f"
            }
          },
          {
            "name": "Mold treatment",
            "additionalCost": 149,
            "options": [],
            "_id": {
              "$oid": "68529ac33f8fac5c60bac910"
            }
          }
        ],
        "exterior": [
          {
            "name": "Clean sliding-tilting roof",
            "additionalCost": 25,
            "options": [],
            "_id": {
              "$oid": "68529ac33f8fac5c60bac916"
            }
          },
          {
            "name": "Engine compartment cleaning",
            "additionalCost": 75,
            "options": [],
            "_id": {
              "$oid": "68529ac33f8fac5c60bac917"
            }
          },
          {
            "name": "Polish chrome parts",
            "additionalCost": 85,
            "options": [],
            "_id": {
              "$oid": "68529ac33f8fac5c60bac918"
            }
          },
          {
            "name": "Polish headlights",
            "additionalCost": 75,
            "options": [],
            "_id": {
              "$oid": "68529ac33f8fac5c60bac919"
            }
          }
        ],
        "detailing": [
          {
            "name": "Water repellent impregnate seats",
            "additionalCost": 99,
            "options": [],
            "_id": {
              "$oid": "68529ac33f8fac5c60bac91a"
            }
          },
          {
            "name": "Water repellent impregnate mats",
            "additionalCost": 99,
            "options": [],
            "_id": {
              "$oid": "68529ac33f8fac5c60bac91b"
            }
          },
          {
            "name": "Coat Leather Interior",
            "additionalCost": 250,
            "options": [],
            "_id": {
              "$oid": "68529ac33f8fac5c60bac91c"
            }
          }
        ],
        "_id": {
          "$oid": "68529ac33f8fac5c60bac90b"
        }
      },
      "durationOptions": [],
      "cleaningFrequencyOptions": [],
      "_id": {
        "$oid": "68529ac33f8fac5c60bac90a"
      }
    },
    {
      "id": "autocare-deluxe-complete",
      "name": "Compleet",
      "description": "Premium complete care package",
      "packages": [
        "All above (Exterior + Interior) - services, add-ons and detailing add"
      ],
      "totalDuration": "150 min",
      "duration": "150 min",
      "price": "€299.95",
      "vehicleOptions": {
        "Hatchback": {
          "basePrice": 189.95,
          "additionalCost": 0,
          "additionalTime": 0
        },
        "Sedan": {
          "basePrice": 189.95,
          "additionalCost": 0,
          "additionalTime": 0
        },
        "SUV": {
          "basePrice": 189.95,
          "additionalCost": 15,
          "additionalTime": 0
        },
        "Station Wagon": {
          "basePrice": 189.95,
          "additionalCost": 15,
          "additionalTime": 0
        },
        "MPV": {
          "basePrice": 189.95,
          "additionalCost": 15,
          "additionalTime": 0
        },
        "Coupé": {
          "basePrice": 189.95,
          "additionalCost": 0,
          "additionalTime": 0
        },
        "Convertible": {
          "basePrice": 189.95,
          "additionalCost": 0,
          "additionalTime": 0
        },
        "Van": {
          "basePrice": 189.95,
          "additionalCost": 15,
          "additionalTime": 0
        },
        "Pick-up Truck": {
          "basePrice": 189.95,
          "additionalCost": 15,
          "additionalTime": 0
        }
      },
      "additionalOptions": {
        "interior": [],
        "exterior": [],
        "_id": {
          "$oid": "678fbf250c8e6e5690126845"
        },
        "detailing": []
      },
      "_id": {
        "$oid": "678fbf250c8e6e5690126844"
      },
      "durationOptions": [],
      "cleaningFrequencyOptions": []
    }
  ],
  "premium": [
    {
      "id": "autocare-premium-showroom",
      "name": "Showroom Package",
      "description": "Ultimate showroom quality for your vehicle",
      "packages": [
        "Blacken tires",
          "Wipe dashboard and compartments",
          "Interior and exterior detailing",
          "Pet hair removal",
          "Clean sills and door edges",
          "Wash exterior with shampoo",
          "Rinse exterior",
          "Exterior steam cleaning",
          "Odor treatment",
          "Hand wash",
          "Resin dots",
          "Leather treatment",
          "Mat stripping",
          "Steam mats",
          "Moss from seams",
          "Engine compartment cleaning",
          "Steam clean ceiling",
          "Polish chrome parts",
          "Full vehicle polishing (1-step)",
          "Polish headlights",
          "Clean windows and mirrors",
          "Clean sliding-tilting roof",
          "Apply paint sealant (6 months protection)",
          "Shampooing of upholstery",
          "Apply spray wax",
          "Vacuuming",
          "Intensive interior steam cleaning",
          "Clean fuel cap",
          "Rim cleaning",
          "Remove stains from upholstery",
          "Clean wheel arches"
      ],
      "totalDuration": "240 min",
      "duration": "240 min",
      "price": "€549.95",
      "vehicleOptions": {
        "Hatchback": {
          "basePrice": 429.95,
          "additionalCost": 0,
          "additionalTime": 0
        },
        "Sedan": {
          "basePrice": 429.95,
          "additionalCost": 45,
          "additionalTime": 30
        },
        "SUV": {
          "basePrice": 429.95,
          "additionalCost": 45,
          "additionalTime": 30
        },
        "Station Wagon": {
          "basePrice": 429.95,
          "additionalCost": 45,
          "additionalTime": 30
        },
        "MPV": {
          "basePrice": 429.95,
          "additionalCost": 45,
          "additionalTime": 30
        },
        "Coupé": {
          "basePrice": 429.95,
          "additionalCost": 0,
          "additionalTime": 0
        },
        "Convertible": {
          "basePrice": 429.95,
          "additionalCost": 0,
          "additionalTime": 0
        },
        "Van": {
          "basePrice": 429.95,
          "additionalCost": 45,
          "additionalTime": 30
        }
      },
      "additionalOptions": {
        "interior": [
          {
            "name": "Vomit treatment",
            "additionalCost": 175,
            "options": [],
            "_id": {
              "$oid": "68529d5a3f8fac5c60baca3a"
            }
          },
          {
            "name": "Ozone treatment",
            "additionalCost": 125,
            "options": [],
            "_id": {
              "$oid": "68529d5a3f8fac5c60baca3b"
            }
          },
          {
            "name": "Mold treatment ",
            "additionalCost": 149,
            "options": [],
            "_id": {
              "$oid": "68529d5a3f8fac5c60baca3c"
            }
          }
        ],
        "exterior": [
          {
            "name": "Convertible top cleaning",
            "additionalCost": 99,
            "options": [],
            "_id": {
              "$oid": "68529d5a3f8fac5c60baca44"
            }
          },
          {
            "name": "Claybar treatment (remove paint contaminants)",
            "additionalCost": 75,
            "options": [],
            "_id": {
              "$oid": "68529d5a3f8fac5c60baca45"
            }
          }
        ],
        "detailing": [
          {
            "name": "Polishing extra step (medium scratch removal)",
            "additionalCost": 125,
            "options": [],
            "_id": {
              "$oid": "68529d5a3f8fac5c60baca4d"
            }
          },
          {
            "name": "Polishing extra step (maximum correction)",
            "additionalCost": 125,
            "options": [],
            "_id": {
              "$oid": "68529d5a3f8fac5c60baca4e"
            }
          },
          {
            "name": "Coat windows (front)",
            "additionalCost": 150,
            "options": [],
            "_id": {
              "$oid": "68529d5a3f8fac5c60baca4f"
            }
          },
          {
            "name": "Coat windows (rear)",
            "additionalCost": 150,
            "options": [],
            "_id": {
              "$oid": "68529d5a3f8fac5c60baca50"
            }
          },
          {
            "name": "Water repellent impregnate seats",
            "additionalCost": 99,
            "options": [],
            "_id": {
              "$oid": "68529d5a3f8fac5c60baca51"
            }
          },
          {
            "name": "Water repellent impregnate mats",
            "additionalCost": 99,
            "options": [],
            "_id": {
              "$oid": "68529d5a3f8fac5c60baca52"
            }
          },
          {
            "name": "Coat Leather Interior",
            "additionalCost": 250,
            "options": [],
            "_id": {
              "$oid": "68529d5a3f8fac5c60baca53"
            }
          },
          {
            "name": "Ceramic coating",
            "additionalCost": 750,
            "options": [],
            "_id": {
              "$oid": "68529d5a3f8fac5c60baca54"
            }
          }
        ],
        "_id": {
          "$oid": "68529d5a3f8fac5c60baca39"
        }
      },
      "durationOptions": [],
      "cleaningFrequencyOptions": [],
      "_id": {
        "$oid": "68529d5a3f8fac5c60baca38"
      }
    }
  ]
};