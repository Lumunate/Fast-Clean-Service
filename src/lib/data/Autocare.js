export const cleanPkgs = {
  Standard: {
    types: [
      {
        type: "Exterior",
        description:"Restore the Shine and Protect Your Vehicle's Exterior with Premium Detailing",
        price: {
          one: "74.95",
          duur: "45",
        },
        pros: [ "Exterior washing", "Cleaning windows and mirrors", "Applying spray wax", "Rims" ],
        cons: [
          "❌ Banden zwarten",
          "❌ Dorpels en deurranden",
          "❌ Ramen ceramische bescherming aanbrengen",
          "❌ Kunststofdelen voeden",
          "❌ Tankklep reinigen",
        ],
        extras: {
          exterior: [
            { name: "Cleaning Convertible Roof", price: "€ 85" },
            { name: "Sills and Door Edges", price: "€ 10" },
            { name: "Remove Resin Dots", price: "€ 25" },
            { name: "Polishing Plastic Parts", price: "€ 75" },
            { name: "Cleaning Moss From Seams", price: "€ 15" },
            { name: "Bonnet Cleaning", price: "€ 50" },
            { name: "Cleaning the Sliding/Tilting Roof", price: "€ 15" },
            { name: "Polishing Chrome Parts", price: "€ 55" },
            { name: "Polishing Headlights", price: "€ 50" },
          ],
          interior: [
            { name: "Deep cleaning child seat (per seat)", price: "€ 15" },
            { name: "Ozone Treatment", price: "€ 50" },
          ],
          detailing: [
            {
              name: "Clay bar treatment",
              options: ["Removes stubborn contaminants from the paint.", "Leaves the paint with a smooth finish."],
              price: "€ 50",
            },
            {
              name: "Ceramic Paint Sealant",
              options: [" Provides long-lasting protection.", "Ensures a high-quality, glossy finish."],
              price: "€ 65",
            },
            {
              name: "Polishing entire vehicle in 1 step",
              options: ["Removes light scratches (up to 50%) and repairs 75% of swirls.", "Restores a fresh, shiny finish."],
              price: "€ 180",
            },
            {
              name: "Polishing entire vehicle in 2 steps",
              options: [ "Removes medium scratches (up to 80%) and repairs 85% of swirls.", "Gives the vehicle a deeper shine and protection.",],
              price: "€ 295",
            },
            {
              name: "Polishing entire vehicle in 1 step",
              options: ["Removes heavy scratches (up to 95%) and repairs 95% of swirls.", "Provides the ultimate result and a showroom-like shine.",],
              price: "€ 425",
            },
            { name: "Glass Coating", price: "On Request" },
          ],
        },
      },
      {
        type: "Complete",
        description:"The Complete Package for Ultimate Interior and Exterior Protection and Shine",
        price: {
          one: "139.95",
          duur: "90",
        },
        pros: ["Exterior package", "Interior package", "Complete car care: inside and out"],
        extras: {
          interior: [
            { name: "Leather treatment", price: "€ 50" },
            { name: "Stain removal upholstery", price: "€ 80" },
            { name: "Pet hair removal", price: "€ 50" },
            { name: "Ozone treatment", price: "€ 95" },
            { name: "Mold treatment", price: "€ 105" },
            { name: "Ceiling Steam Cleaning", price: "€ 75" },
            { name: "Vomit Treatment", price: "€ 125" },
            { name: "Deep High Chair Cleaning (Per Chair)", price: "€ 15" },
            { name: "Fragrance treatment", price: "€ 85" },
          ],
          exterior: [
            { name: "Cleaning Convertible Roof", price: "€ 85" },
            { name: "Sills and Door Edges", price: "€ 10" },
            { name: "Remove Resin Dots", price: "€ 25" },
            { name: "Polishing Plastic Parts", price: "€ 75" },
            { name: "Cleaning Moss From Seams", price: "€ 15" },
            { name: "Bonnet Cleaning", price: "€ 50" },
            { name: "Cleaning the Sliding/Tilting Roof", price: "€ 15" },
            { name: "Polishing Chrome Parts", price: "€ 55" },
            { name: "Polishing Headlights", price: "€ 50" },
          ],
          detailing: [
            {
              name: "Clay bar treatment",
              options: ["Removes stubborn contaminants from the paint.", "Leaves the paint with a smooth finish."],
              price: "€ 50",
            },
            {
              name: "Ceramic Paint Sealant",
              options: [" Provides long-lasting protection.", "Ensures a high-quality, glossy finish."],
              price: "€ 65",
            },
            {
              name: "Polishing entire vehicle in 1 step",
              options: ["Removes light scratches (up to 50%) and repairs 75% of swirls.", "Restores a fresh, shiny finish."],
              price: "€ 180",
            },
            {
              name: "Polishing entire vehicle in 2 steps",
              options: [ "Removes medium scratches (up to 80%) and repairs 85% of swirls.", "Gives the vehicle a deeper shine and protection.",],
              price: "€ 295",
            },
            {
              name: "Polishing entire vehicle in 1 step",
              options: ["Removes heavy scratches (up to 95%) and repairs 95% of swirls.", "Provides the ultimate result and a showroom-like shine.",],
              price: "€ 425",
            },
            { name: "Glass Coating", price: "On Request" },
          ],
        },
      },
      {
        type: "Interior",
        description:"Thorough Care for the Inside, Leaving Your Vehicle Fresh and Clean.",
        price: {
          one: "89.95",
          duur: "60",
        },
        pros: ["Windows", "Sills", "Steam cleaning", "Vacuuming", "Dashboard", "Feeding plastic parts", "Steaming mats"],
        cons: [
          "❌ Detailing",
          "❌ Kunststofdelen poetsen",
          "❌ Leerbehandeling",
          "❌ Matten stripe",
          "❌ Stoomreiniging intensief Interior",
        ],
        extras: {
          interior: [
            { name: "Leather treatment", price: "€ 50" },
            { name: "Stain removal upholstery", price: "€ 80" },
            { name: "Pet hair removal", price: "€ 50" },
            { name: "Ozone treatment", price: "€ 95" },
            { name: "Mold treatment", price: "€ 105" },
            { name: "Ceiling Steam Cleaning", price: "€ 75" },
            { name: "Vomit Treatment", price: "€ 125" },
            { name: "Deep High Chair Cleaning (Per Chair)", price: "€ 15" },
            { name: "Fragrance treatment", price: "€ 85" },
          ],
          exterior: [
            { name: "Bonnet cleaning", price: "€ 50" },
            { name: "Cleaning the Sliding/Tilting Roof", price: "€ 15" },
            { name: "Polishing Chrome Parts", price: "€ 55" },
            { name: "Polishing Headlights", price: "€ 50" },
            { name: "Cleaning Convertible Roof", price: "€ 85" },
          ],
          detailing: [
            {
              name: "Clay bar treatment",
              options: ["Removes stubborn contaminants from the paint.", "Leaves the paint with a smooth finish."],
              price: "€ 50",
            },
            {
              name: "Ceramic Paint Sealant",
              options: [" Provides long-lasting protection.", "Ensures a high-quality, glossy finish."],
              price: "€ 65",
            },
            {
              name: "Polishing entire vehicle in 1 step",
              options: ["Removes light scratches (up to 50%) and repairs 75% of swirls.", "Restores a fresh, shiny finish."],
              price: "€ 180",
            },
            {
              name: "Polishing entire vehicle in 2 steps",
              options: [ "Removes medium scratches (up to 80%) and repairs 85% of swirls.", "Gives the vehicle a deeper shine and protection.",],
              price: "€ 295",
            },
            {
              name: "Polishing entire vehicle in 1 step",
              options: ["Removes heavy scratches (up to 95%) and repairs 95% of swirls.", "Provides the ultimate result and a showroom-like shine.",],
              price: "€ 425",
            },
            { name: "Glass Coating", price: "On Request" },
          ],
        },
      },
    ],
  },
  Deluxe: {
    types: [
      {
        type: "Exterior",
        price: {
          one: "89,95",
          duur: "60",
        },
        pros: [
          "Exterior washing",
          "Cleaning windows and mirrors",
          "Applying spray wax",
          "Rims",
          "Blacken tires",
          "Sills and door edges",
          "Apply ceramic protection to windows",
          "Feed plastic parts",
          "Clean fuel filler cap",
        ],
        extras: {
          interior: [
            { name: "Ozone treatment", price: "€ 95" },
          ],
          exterior: [
            { name: "Bonnet cleaning", price: "€ 50" },
            { name: "Cleaning the Sliding/Tilting Roof", price: "€ 15" },
            { name: "Polishing Chrome Parts", price: "€ 55" },
            { name: "Polishing Headlights", price: "€ 50" },
            { name: "Sills and Door Edges", price: "€ 10" },
          ],
          detailing: [
            {
              name: "Clay bar treatment",
              options: ["Removes stubborn contaminants from the paint.", "Leaves the paint with a smooth finish."],
              price: "€ 50",
            },
            {
              name: "Ceramic Paint Sealant",
              options: [" Provides long-lasting protection.", "Ensures a high-quality, glossy finish."],
              price: "€ 65",
            },
            {
              name: "Polishing entire vehicle in 1 step",
              options: ["Removes light scratches (up to 50%) and repairs 75% of swirls.", "Restores a fresh, shiny finish."],
              price: "€ 180",
            },
            {
              name: "Polishing entire vehicle in 2 steps",
              options: [ "Removes medium scratches (up to 80%) and repairs 85% of swirls.", "Gives the vehicle a deeper shine and protection.",],
              price: "€ 295",
            },
            {
              name: "Polishing entire vehicle in 1 step",
              options: ["Removes heavy scratches (up to 95%) and repairs 95% of swirls.", "Provides the ultimate result and a showroom-like shine.",],
              price: "€ 425",
            },
            { name: "Glass Coating", price: "On Request" },
          ],
        },
      },
      {
        type: "Complete",
        price: {
          one: "189,95",
          duur: "120",
        },
        pros: ["All checkboxes of the 'Deluxe Interior and Exterior Package' combined in one package"],
        extras: {
          interior: [
            { name: "Pet hair removal", price: "€ 50" },
            { name: "Ozone treatment", price: "€ 95" },
            { name: "Mold treatment", price: "€ 105" },
            { name: "Ceiling Steam Cleaning", price: "€ 75" },
            { name: "Fragrance treatment", price: "€ 85" },
          ],
          exterior: [
            { name: "Bonnet cleaning", price: "€ 50" },
            { name: "Cleaning the Sliding/Tilting Roof", price: "€ 15" },
            { name: "Polishing Chrome Parts", price: "€ 55" },
            { name: "Polishing Headlights", price: "€ 50" },
          ],
          detailing: [
            {
              name: "Clay bar treatment",
              options: ["Removes stubborn contaminants from the paint.", "Leaves the paint with a smooth finish."],
              price: "€ 50",
            },
            {
              name: "Ceramic Paint Sealant",
              options: [" Provides long-lasting protection.", "Ensures a high-quality, glossy finish."],
              price: "€ 65",
            },
            {
              name: "Polishing entire vehicle in 1 step",
              options: ["Removes light scratches (up to 50%) and repairs 75% of swirls.", "Restores a fresh, shiny finish."],
              price: "€ 180",
            },
            {
              name: "Polishing entire vehicle in 2 steps",
              options: [ "Removes medium scratches (up to 80%) and repairs 85% of swirls.", "Gives the vehicle a deeper shine and protection.",],
              price: "€ 295",
            },
            {
              name: "Polishing entire vehicle in 1 step",
              options: ["Removes heavy scratches (up to 95%) and repairs 95% of swirls.", "Provides the ultimate result and a showroom-like shine.",],
              price: "€ 425",
            },
            { name: "Glass Coating", price: "On Request" },
          ],
        },
      },
      {
        type: "Interior",
        price: {
          one: "149,95",
          duur: "± 90",
        },
        pros: [
          "Wipe dashboard and compartments",
          "Sills and door edges",
          "Steam out mats",
          "Clean windows and mirrors",
          "Remove stains / Deep cleaning",
          "Detailing",
          "Polishing plastic parts",
          "Leather treatment",
          "Mat stripe",
          "Intensive interior steam cleaning",
        ],
        extras: {
          interior: [
            { name: "Pet hair removal", price: "€ 50" },
            { name: "Ozone treatment", price: "€ 95" },
            { name: "Mold treatment", price: "€ 105" },
            { name: "Ceiling Steam Cleaning", price: "€ 75" },
            { name: "Fragrance treatment", price: "€ 85" },
          ],
          exterior: [
            { name: "Bonnet cleaning", price: "€ 50" },
            { name: "Cleaning the Sliding/Tilting Roof", price: "€ 15" },
            { name: "Polishing Chrome Parts", price: "€ 55" },
            { name: "Polishing Headlights", price: "€ 50" },
          ],
          detailing: [
            {
              name: "Clay bar treatment",
              options: ["Removes stubborn contaminants from the paint.", "Leaves the paint with a smooth finish."],
              price: "€ 50",
            },
            {
              name: "Ceramic Paint Sealant",
              options: [" Provides long-lasting protection.", "Ensures a high-quality, glossy finish."],
              price: "€ 65",
            },
            {
              name: "Polishing entire vehicle in 1 step",
              options: ["Removes light scratches (up to 50%) and repairs 75% of swirls.", "Restores a fresh, shiny finish."],
              price: "€ 180",
            },
            {
              name: "Polishing entire vehicle in 2 steps",
              options: [ "Removes medium scratches (up to 80%) and repairs 85% of swirls.", "Gives the vehicle a deeper shine and protection.",],
              price: "€ 295",
            },
            {
              name: "Polishing entire vehicle in 1 step",
              options: ["Removes heavy scratches (up to 95%) and repairs 95% of swirls.", "Provides the ultimate result and a showroom-like shine.",],
              price: "€ 425",
            },
            { name: "Glass Coating", price: "On Request" },
          ],
        },
      },
    ],
  },
  Premium: {
    types: [
      {
        type: "Showroom Package",
        price: {
          one: "394.95",
          duur: "180",
        },
        pros: [
          "Exterior steam cleaning",
          "Cleaning windows and mirrors",
          "Applying spray wax",
          "Rims",
          "Blacken tires",
          "Sills and door edges",
          "Apply ceramic protection to windows",
          "Clean fuel filler cap",
          "Wipe dashboard and compartments",
          "Steam clean mats",
          "Stain removal / Deep cleaning",
          "Detailing",
          "Polishing plastic parts",
          "Leather treatment",
          "Intensive interior steam cleaning",
          "Hood cleaning",
          "Polishing headlights",
          "Polishing chrome parts",
          "Polishing light scratches",
        ],
        extras: {
          interior: [
            { name: "Ozone treatment", price: "€ 95" },
            { name: "Vomit Treatment", price: "€ 125" },
            { name: "Mold Treatment", price: "€ 105" },
          ],
          exterior: [
            { name: "Cleaning the Convertible Roof", price: "€ 85" },
          ],
          detailing: [
            {
              name: "Clay bar treatment",
              options: ["Removes stubborn contaminants from the paint.", "Leaves the paint with a smooth finish."],
              price: "€ 50",
            },
            {
              name: "Ceramic Paint Sealant",
              options: [" Provides long-lasting protection.", "Ensures a high-quality, glossy finish."],
              price: "€ 65",
            },
            {
              name: "Polishing entire vehicle in 1 step",
              options: ["Removes light scratches (up to 50%) and repairs 75% of swirls.", "Restores a fresh, shiny finish."],
              price: "€ 180",
            },
            {
              name: "Polishing entire vehicle in 2 steps",
              options: [ "Removes medium scratches (up to 80%) and repairs 85% of swirls.", "Gives the vehicle a deeper shine and protection.",],
              price: "€ 295",
            },
            {
              name: "Polishing entire vehicle in 1 step",
              options: ["Removes heavy scratches (up to 95%) and repairs 95% of swirls.", "Provides the ultimate result and a showroom-like shine.",],
              price: "€ 425",
            },
            { name: "Glass Coating", price: "On Request" },
          ],
        },
      },
    ],
  },
};
