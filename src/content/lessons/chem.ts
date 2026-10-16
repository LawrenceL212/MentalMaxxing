import type { Lesson } from './types'

export const CHEM: Record<string, Lesson> = {
  '4.1 Atomic structure and the periodic table': {
    keyPoints: [
      'An atom has a tiny, dense nucleus (protons + neutrons) with electrons in shells around it.',
      'Atomic number = number of protons. Mass number = protons + neutrons. Isotopes have the same atomic number but different mass numbers.',
      'Electrons fill shells from the inside: 2, 8, 8 (up to calcium).',
      'The periodic table is ordered by atomic number. Elements in a group have the same number of outer electrons, so similar reactions.',
      'Group 1 reactivity increases down the group; Group 7 reactivity decreases down the group; Group 0 is unreactive.',
    ],
    steps: [
      {
        title: 'Elements, compounds, mixtures',
        text: 'An element has only one type of atom. A compound is two or more elements chemically bonded in a fixed ratio, and it can only be split up by a chemical reaction.\nA mixture is not bonded, so you can separate it by physical methods: filtration (insoluble solid from liquid), crystallisation (dissolved solid from solution), simple distillation (solvent from solution), fractional distillation (liquids with different boiling points) and chromatography.',
      },
      {
        title: 'Inside the atom',
        text: 'Protons: relative mass 1, charge +1. Neutrons: relative mass 1, charge 0. Electrons: relative mass very small (about 1/2000), charge −1.\nAn atom has equal numbers of protons and electrons, so it is neutral. An atom has a radius of about 0.1 nm, and the nucleus is roughly 10 000 times smaller across, yet it holds almost all of the mass.',
      },
      {
        title: 'How the model changed',
        text: 'Dalton pictured atoms as tiny solid spheres. Thomson found electrons and suggested negative electrons embedded in a ball of positive charge (the plum pudding model).\nRutherford fired alpha particles at gold foil. Most went straight through, a few were deflected and a very few bounced back. So the positive charge and mass are packed into a small nucleus, with mostly empty space around it.\nBohr put electrons in shells at set distances. Later work by Chadwick showed the nucleus also contains neutrons.',
      },
      {
        title: 'Atomic number and isotopes',
        text: 'For ²³Na, the mass number is 23 and the atomic number is 11. So it has 11 protons, 11 electrons and 23 − 11 = 12 neutrons.\nIsotopes are atoms of the same element with different numbers of neutrons, for example ³⁵Cl and ³⁷Cl.\nRelative atomic mass is the average mass of the isotopes, allowing for how common each one is. Boron is 20% ¹⁰B and 80% ¹¹B: (10 × 20 + 11 × 80) ÷ 100 = 10.8.',
      },
      {
        title: 'Electronic structure',
        text: 'Electrons occupy shells (energy levels). The first shell holds 2, then the next shells hold 8 each (for the first 20 elements).\nFill the lowest shell first. Sodium (11 electrons) is 2,8,1. Chlorine (17) is 2,8,7. Argon (18) is 2,8,8.\nThe number of outer electrons matches the group number, apart from Group 0 which has a full outer shell.',
      },
      {
        title: 'Building the periodic table',
        text: 'Early tables were ordered by atomic weight. Mendeleev swapped some elements so that those with similar properties lined up, and left gaps for elements not yet found. He used the pattern to predict their properties, and later discoveries matched, so people trusted his table.\nToday the elements are in order of atomic number. Metals are on the left and in the middle; non-metals are on the right. Metals lose electrons to form positive ions.',
      },
      {
        title: 'Groups 1 and 0',
        text: 'Group 1 (alkali metals) are soft, with low melting points and low density. They have one outer electron and form 1+ ions. Going down, they get more reactive because the outer electron is further from the nucleus and is lost more easily.\nExample: 2Na + 2H₂O → 2NaOH + H₂. The solution is alkaline.\nGroup 0 (noble gases) have full outer shells, so they are unreactive and exist as single atoms. Their boiling points rise going down the group.',
      },
      {
        title: 'Group 7 and transition metals',
        text: 'Halogens exist as molecules of two atoms (Cl₂, Br₂). Going down: colour gets darker (pale green gas, red-brown liquid, grey solid), boiling point rises and reactivity falls, because an incoming electron is held less strongly by a more distant nucleus.\nA more reactive halogen displaces a less reactive one: Cl₂ + 2KBr → 2KCl + Br₂.\nTransition metals are hard, strong, dense and have high melting points. They make coloured compounds, form ions with different charges and are good catalysts.',
      },
    ],
    check: [
      { q: 'How many protons, neutrons and electrons are in an atom of ²⁷Al (atomic number 13)?', a: '13 protons, 14 neutrons (27 − 13), 13 electrons.' },
      { q: 'Chlorine is 75% ³⁵Cl and 25% ³⁷Cl. Calculate its relative atomic mass.', a: '(35 × 75 + 37 × 25) ÷ 100 = 3550 ÷ 100 = 35.5.' },
      { q: 'Write the electronic structure of magnesium (atomic number 12) and say which group it is in.', a: '2,8,2. It has 2 outer electrons, so Group 2.' },
      { q: 'Why does reactivity increase down Group 1?', a: 'The outer electron is further from the nucleus (and more shielded), so it is held less strongly and lost more easily.' },
      { q: 'What happens when chlorine is bubbled into potassium iodide solution? Give the equation.', a: 'Chlorine is more reactive so it displaces iodine, and the solution turns brown. Cl₂ + 2KI → 2KCl + I₂.' },
    ],
  },

  '4.2 Bonding, structure and properties of matter': {
    keyPoints: [
      'Ionic bonding: metal atoms transfer electrons to non-metal atoms, giving oppositely charged ions held in a lattice.',
      'Covalent bonding: atoms share pairs of electrons. Small molecules have low melting points because the forces between molecules are weak.',
      'Metals: positive ions in a sea of delocalised electrons, so they conduct and can be bent into shape.',
      'Giant covalent structures (diamond, graphite, silicon dioxide) have very high melting points.',
      'Always say what is being broken when a substance melts: bonds in giant structures, only intermolecular forces in small molecules.',
    ],
    steps: [
      {
        title: 'Three types of bonding',
        text: 'Ionic: between a metal and a non-metal. Covalent: between non-metal atoms. Metallic: within metals and alloys.\nThe type of bonding decides the structure, and the structure decides the properties. Learn to link these three ideas together in every answer.',
      },
      {
        title: 'Ionic bonding',
        text: 'A metal atom gives away outer electrons to become a positive ion; a non-metal atom gains them to become a negative ion. Both end up with a full outer shell.\nGroup 1 forms 1+, Group 2 forms 2+, Group 6 forms 2−, Group 7 forms 1−.\nExample: magnesium gives two electrons, one to each of two chlorine atoms. That gives Mg²⁺ and 2Cl⁻, so the formula is MgCl₂.',
      },
      {
        title: 'Properties of ionic compounds',
        text: 'The ions form a regular giant lattice. Each ion is held by strong electrostatic forces in all directions, so a lot of energy is needed to melt it: high melting and boiling points.\nSolids do not conduct because the ions cannot move. Molten or dissolved, the ions are free to move and carry charge, so they conduct.',
      },
      {
        title: 'Covalent bonding and small molecules',
        text: 'A shared pair of electrons is a covalent bond. Examples: H₂, Cl₂, H₂O, CH₄, CO₂, NH₃.\nSmall molecules have strong bonds inside the molecule but weak forces between molecules. When they melt or boil, only these weak forces are overcome, not the covalent bonds. So melting and boiling points are low, and they get higher as molecules get bigger.\nThey do not conduct electricity because they have no charged particles free to move.',
      },
      {
        title: 'Giant covalent structures',
        text: 'Diamond: each carbon makes 4 covalent bonds in a rigid lattice. Very hard, very high melting point, no conduction.\nGraphite: each carbon makes 3 bonds, in flat hexagonal layers. The layers slide because the forces between them are weak, and one electron per atom is delocalised, so graphite conducts.\nGraphene is a single layer of graphite. Silicon dioxide is a giant lattice of silicon and oxygen atoms with a high melting point.\nPolymers are long chains with covalent bonds; the forces between chains are stronger than between small molecules, so most are solid.',
      },
      {
        title: 'Metals and alloys',
        text: 'Metals are layers of positive ions surrounded by delocalised electrons. The strong attraction gives high melting points.\nThe electrons carry charge and energy, so metals conduct electricity and heat. The layers can slide over each other, so metals are malleable.\nAn alloy mixes a metal with other elements. Different sized atoms disturb the layers so they slide less easily, making alloys harder than pure metals.',
      },
      {
        title: 'States of matter',
        text: 'Solids: particles vibrate in fixed positions. Liquids: particles are close together but move around. Gases: particles are far apart and move quickly.\nMelting, boiling, freezing, condensing and subliming are physical changes; no new substance is made. State symbols: (s), (l), (g), (aq).\nThe simple particle model treats particles as solid spheres and shows no forces between them, which is one of its limits.',
      },
      {
        title: 'Fullerenes and nanoparticles',
        text: 'Fullerenes are hollow carbon molecules. Buckminsterfullerene (C₆₀) is a sphere. Carbon nanotubes are cylinders with very high tensile strength and good conduction.\nNanoparticles are 1 to 100 nm across. They have a very large surface area compared with their volume, which makes them useful as catalysts and in sun creams. Their long-term health effects are not fully known.\nA cube of side 2 cm has surface area 24 cm² and volume 8 cm³: ratio 3 : 1. For a 1 cm cube the ratio is 6 : 1, so halving the side doubles the ratio.',
      },
    ],
    check: [
      { q: 'Explain why sodium chloride conducts electricity when molten but not when solid.', a: 'Molten, the ions are free to move and carry charge. In the solid lattice they are fixed in place.' },
      { q: 'Why does graphite conduct electricity but diamond does not?', a: 'Each carbon in graphite has one delocalised electron that can move between layers. In diamond all four outer electrons are in bonds.' },
      { q: 'Why does carbon dioxide have a very low boiling point?', a: 'It is a small molecule, so only weak intermolecular forces are broken when it boils, not the strong covalent bonds.' },
      { q: 'Aluminium forms Al³⁺ and oxygen forms O²⁻. What is the formula of aluminium oxide?', a: 'Al₂O₃ (two Al³⁺ gives 6+, three O²⁻ gives 6−).' },
      { q: 'Why is an alloy harder than the pure metal?', a: 'The different sized atoms distort the regular layers, so the layers cannot slide over each other as easily.' },
    ],
  },

  '4.3 Quantitative chemistry': {
    keyPoints: [
      'Mass is conserved: total mass of reactants = total mass of products. Equations must be balanced.',
      'Relative formula mass (Mr) = sum of the relative atomic masses (Ar) in the formula.',
      'Moles = mass (g) ÷ Mr. One mole contains 6.02 × 10²³ particles.',
      'The limiting reactant is the one that runs out first and decides how much product forms (Higher tier).',
      'Chemistry only: percentage yield, atom economy, concentration in mol/dm³, gas volumes (24 dm³ per mole at room temperature and pressure) and titration calculations.',
    ],
    steps: [
      {
        title: 'Conservation of mass',
        text: 'Atoms are not created or destroyed in a reaction, so the mass of products equals the mass of reactants. A balanced equation shows this: 2H₂ + O₂ → 2H₂O has 4 H and 2 O on each side.\nIf a mass appears to change, a gas has gone in or out. Burning magnesium in air makes a solid that weighs more, because it has gained oxygen. Heating a carbonate loses mass as CO₂ escapes.',
      },
      {
        title: 'Relative formula mass',
        text: 'Add the Ar values (from the periodic table) for every atom in the formula.\nCaCO₃: 40 + 12 + (3 × 16) = 100.\nMg(OH)₂: 24 + (2 × 16) + (2 × 1) = 58.\nBrackets multiply everything inside them. Mr has no units.',
      },
      {
        title: 'Moles',
        text: 'A mole is the amount that contains 6.02 × 10²³ particles (the Avogadro constant). The mass of one mole in grams equals the Mr.\nmoles = mass ÷ Mr.\nExample: 10 g of CaCO₃ is 10 ÷ 100 = 0.1 mol. Rearranged, mass = moles × Mr.',
      },
      {
        title: 'Reacting masses',
        text: 'Use the balanced equation ratio. CaCO₃ → CaO + CO₂ is 1 : 1 : 1.\n10 g of CaCO₃ is 0.1 mol, so it makes 0.1 mol of CO₂ with mass 0.1 × 44 = 4.4 g.\nFor 2Mg + O₂ → 2MgO, the ratio of Mg to MgO is 2 : 2. So 4.8 g Mg is 4.8 ÷ 24 = 0.2 mol, which gives 0.2 mol MgO = 0.2 × 40 = 8.0 g.',
      },
      {
        title: 'Limiting reactants',
        text: 'Higher tier. In a reaction one reactant is often in excess. The limiting reactant is the one that is used up first, and it controls the amount of product.\nExample: 2Mg + O₂ → 2MgO with 0.2 mol Mg and 0.5 mol O₂. Mg needs only 0.1 mol of O₂, so Mg is limiting. The extra oxygen is left over.\nAlways work out the moles of each reactant, then compare using the equation ratio.',
      },
      {
        title: 'Concentration of solutions',
        text: 'Concentration in g/dm³ = mass of solute (g) ÷ volume (dm³). To convert, divide cm³ by 1000. If 5.0 g is dissolved in 250 cm³, concentration = 5.0 ÷ 0.25 = 20 g/dm³.\nChemistry only: concentration in mol/dm³ = moles ÷ volume (dm³). 0.4 mol in 200 cm³ is 0.4 ÷ 0.2 = 2.0 mol/dm³.',
      },
      {
        title: 'Yield and atom economy',
        text: 'Chemistry only. Percentage yield = actual mass of product ÷ maximum theoretical mass × 100. Yield is below 100% because of reversible reactions, losses on transfer and side reactions.\nIf 4.4 g is possible and you collect 3.0 g, the yield is 3.0 ÷ 4.4 × 100 = 68%.\nAtom economy = Mr of the desired product ÷ sum of Mr of all reactants (from the balanced equation) × 100. For CaCO₃ → CaO + CO₂ making CaO: 56 ÷ 100 × 100 = 56%. High atom economy means less waste.',
      },
      {
        title: 'Gas volumes and titrations',
        text: 'Chemistry only. One mole of any gas takes up 24 dm³ at room temperature and pressure. Mg + 2HCl → MgCl₂ + H₂ with 2.4 g Mg (0.1 mol) gives 0.1 mol H₂, which is 2.4 dm³.\nTitration calculation: 25.0 cm³ of 0.100 mol/dm³ NaOH is neutralised by 20.0 cm³ of HCl. Moles NaOH = 0.0250 × 0.100 = 0.00250. The ratio is 1 : 1, so HCl is also 0.00250 mol. Concentration = 0.00250 ÷ 0.0200 = 0.125 mol/dm³.',
      },
    ],
    check: [
      { q: 'Calculate the relative formula mass of Al₂(SO₄)₃. (Ar: Al 27, S 32, O 16)', a: '(2 × 27) + 3 × (32 + 4 × 16) = 54 + 288 = 342.' },
      { q: 'How many moles are in 36 g of water (Mr = 18)?', a: '36 ÷ 18 = 2 mol.' },
      { q: 'What mass of magnesium oxide forms when 12 g of magnesium burns? (Ar: Mg 24, O 16)', a: '12 ÷ 24 = 0.5 mol Mg gives 0.5 mol MgO. Mass = 0.5 × 40 = 20 g.' },
      { q: 'Chemistry only: a reaction should make 8.0 g of product but 6.0 g is collected. What is the percentage yield?', a: '6.0 ÷ 8.0 × 100 = 75%.' },
      { q: 'Chemistry only: what volume of hydrogen at room temperature and pressure forms from 0.25 mol of zinc reacting with excess acid?', a: 'Zn + 2HCl → ZnCl₂ + H₂ is 1 : 1, so 0.25 mol H₂. Volume = 0.25 × 24 = 6.0 dm³.' },
    ],
  },

  '4.4 Chemical changes': {
    keyPoints: [
      'The reactivity series (K, Na, Li, Ca, Mg, Al, C, Zn, Fe, H, Cu) decides how a metal is extracted and which metals displace others.',
      'Acid + metal oxide, hydroxide or carbonate → salt + water (+ CO₂). Acid + metal → salt + hydrogen.',
      'Electrolysis splits an ionic compound that is molten or dissolved: positive ions go to the cathode, negative ions to the anode.',
      'Oxidation is gain of oxygen; reduction is loss of oxygen. In terms of electrons (Higher tier): oxidation is loss, reduction is gain.',
      'Chemistry only: strong and weak acids, titration, and the pH scale in terms of H⁺ concentration.',
    ],
    steps: [
      {
        title: 'The reactivity series',
        text: 'Order: potassium, sodium, lithium, calcium, magnesium, aluminium, (carbon), zinc, iron, (hydrogen), copper. Metals higher up lose electrons to form positive ions more readily.\nK, Na, Li and Ca react with cold water. Magnesium, zinc and iron react with dilute acid. Copper does not react with either.\nA more reactive metal displaces a less reactive one from its compound: Zn + CuSO₄ → ZnSO₄ + Cu. Zinc is oxidised and the copper ions are reduced.',
      },
      {
        title: 'Extracting metals',
        text: 'Most metals are found as ores, which are compounds such as oxides. A metal below carbon can be extracted by heating with carbon, which takes away the oxygen: 2Fe₂O₃ + 3C → 4Fe + 3CO₂.\nThe iron oxide loses oxygen, so it is reduced. The carbon gains oxygen, so it is oxidised.\nMetals above carbon (such as aluminium) hold on to oxygen too strongly, so they are extracted by electrolysis.',
      },
      {
        title: 'Acids and what they make',
        text: 'Hydrochloric acid makes chlorides, sulfuric acid makes sulfates, nitric acid makes nitrates.\nAcid + metal → salt + hydrogen: Mg + 2HCl → MgCl₂ + H₂.\nAcid + metal oxide → salt + water: CuO + H₂SO₄ → CuSO₄ + H₂O.\nAcid + carbonate → salt + water + carbon dioxide: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂.\nNeutralisation is H⁺ + OH⁻ → H₂O.',
      },
      {
        title: 'Required practical: making salts',
        text: 'Make pure, dry crystals of copper sulfate from copper oxide.\n1. Warm dilute sulfuric acid. 2. Add copper oxide a little at a time, stirring, until no more dissolves (so the oxide is in excess). 3. Filter to remove the extra oxide. 4. Heat the filtrate to evaporate off some water until crystals begin to form, then leave to cool and crystallise. 5. Filter off the crystals, rinse with a little cold water, and dry.\nAdding the solid in excess makes sure all of the acid is used up.',
      },
      {
        title: 'pH, strong and weak acids',
        text: 'Acids make H⁺ ions in water; alkalis make OH⁻. The pH scale runs from 0 to 14, with 7 neutral.\nChemistry only: a strong acid (hydrochloric, sulfuric, nitric) ionises completely in water. A weak acid (ethanoic, citric, carbonic) only partly ionises. This is not the same as concentrated and dilute, which describe how much acid is dissolved.\nHigher tier: each pH unit is a ten-fold change in H⁺ concentration. pH 2 has 100 times the H⁺ of pH 4.',
      },
      {
        title: 'Required practical: titration',
        text: 'Chemistry only. Use a pipette to put 25.0 cm³ of alkali in a conical flask and add a few drops of indicator. Fill a burette with acid and add it slowly, swirling, until the indicator just changes colour.\nDo a rough run first, then repeat adding drop by drop near the end point. Repeat until you have concordant results (within 0.10 cm³) and take the mean.\nDo not use universal indicator because its colour change is gradual.',
      },
      {
        title: 'Electrolysis of melts and aluminium',
        text: 'In electrolysis, an electric current splits an ionic compound that is molten or dissolved. Positive ions move to the negative electrode (cathode) and gain electrons; negative ions move to the positive electrode (anode) and lose electrons.\nAluminium oxide melts at over 2000 °C, so it is dissolved in molten cryolite to lower the energy needed. Aluminium forms at the cathode (Al³⁺ + 3e⁻ → Al). Oxygen forms at the anode and reacts with the carbon anodes to make CO₂, so they burn away and must be replaced.',
      },
      {
        title: 'Electrolysis of solutions',
        text: 'In a solution there are also H⁺ and OH⁻ ions from water. At the cathode, hydrogen forms if the metal is more reactive than hydrogen; otherwise the metal forms. At the anode, oxygen forms unless a halide ion is present, in which case the halogen forms.\nSodium chloride solution gives hydrogen at the cathode, chlorine at the anode and sodium hydroxide solution left behind.\nRequired practical: use inert (graphite) electrodes in solutions, and test the gases. Hydrogen makes a squeaky pop with a lit splint, oxygen relights a glowing splint, and chlorine bleaches damp litmus paper.',
      },
    ],
    check: [
      { q: 'Why is aluminium extracted by electrolysis rather than by heating with carbon?', a: 'Aluminium is more reactive than carbon, so carbon cannot take the oxygen away from aluminium oxide.' },
      { q: 'Write a balanced equation for zinc oxide reacting with sulfuric acid.', a: 'ZnO + H₂SO₄ → ZnSO₄ + H₂O.' },
      { q: 'In the salt-making practical, why is the metal oxide added in excess?', a: 'So that all of the acid reacts. The leftover solid is easy to filter off, leaving only salt solution.' },
      { q: 'Name the products at each electrode when sodium chloride solution is electrolysed.', a: 'Cathode: hydrogen. Anode: chlorine. Sodium hydroxide is left in the solution.' },
      { q: 'Chemistry only: how many times greater is the H⁺ concentration in a solution of pH 3 than in one of pH 5?', a: '100 times (two pH units, 10 × 10).' },
    ],
  },

  '4.5 Energy changes': {
    keyPoints: [
      'Exothermic reactions transfer energy to the surroundings (temperature rises). Endothermic reactions take energy in (temperature falls).',
      'Reaction profiles show the activation energy: the minimum energy needed for particles to react.',
      'Higher tier: energy change = energy to break bonds − energy released making bonds.',
      'A cell makes voltage from a chemical reaction; the bigger the difference in reactivity between two metals, the bigger the voltage.',
      'Chemistry only: hydrogen fuel cells.',
    ],
    steps: [
      {
        title: 'Exothermic and endothermic',
        text: 'Exothermic: energy goes out to the surroundings, so the temperature goes up. Examples: combustion, neutralisation, many oxidations. Uses include hand warmers and self-heating cans.\nEndothermic: energy comes in from the surroundings, so the temperature goes down. Examples: thermal decomposition, citric acid with sodium hydrogencarbonate. Uses include some sports cold packs.',
      },
      {
        title: 'Required practical: temperature change',
        text: 'Put a measured volume of acid in a polystyrene cup with a lid, because polystyrene is a good insulator and reduces energy loss. Measure the start temperature, add a measured amount of alkali or solid, stir, and record the highest (or lowest) temperature.\nRepeat while changing one thing only, such as the concentration. Keep the volumes the same so the test is fair. The temperature change is highest temperature − start temperature.',
      },
      {
        title: 'Reaction profiles',
        text: 'Draw reactants on the left and products on the right, with a curve between them. The peak is higher than reactants by the activation energy.\nExothermic: the products are lower than the reactants. Endothermic: the products are higher than the reactants.\nThe overall energy change is the difference between the reactant and product levels.',
      },
      {
        title: 'Bond energies',
        text: 'Higher tier. Breaking bonds takes in energy (endothermic). Making bonds releases energy (exothermic).\nEnergy change = total energy to break bonds − total energy released making bonds.\nExample: H₂ + Cl₂ → 2HCl. Bond energies in kJ/mol: H–H 436, Cl–Cl 243, H–Cl 432.\nBreaking: 436 + 243 = 679. Making: 2 × 432 = 864. Change = 679 − 864 = −185 kJ/mol. The negative sign means exothermic.',
      },
      {
        title: 'Cells and batteries',
        text: 'A simple cell has two different metals in an electrolyte. The reaction between them pushes electrons round a circuit.\nThe greater the difference in reactivity between the metals, the larger the voltage. The voltage also depends on the electrolyte.\nIn a non-rechargeable battery the reactants are used up and the voltage falls to zero. In a rechargeable cell, passing a current the other way reverses the reaction.',
      },
      {
        title: 'Hydrogen fuel cells',
        text: 'Chemistry only. A fuel cell is supplied with fuel and oxygen, and the fuel is oxidised to give a voltage continuously. Hydrogen is the usual fuel: overall 2H₂ + O₂ → 2H₂O.\nThe only product is water, so there is no carbon dioxide at the point of use. However, hydrogen is a flammable gas that is hard to store, and it is often made using fossil fuels.\nCompared with a rechargeable battery, a fuel cell does not need to be recharged, but it needs a supply of hydrogen.',
      },
    ],
    check: [
      { q: 'A reaction mixture goes from 21 °C to 35 °C. Is it exothermic or endothermic, and what is the temperature change?', a: 'Exothermic (temperature rises). Change = 35 − 21 = 14 °C.' },
      { q: 'Why is a polystyrene cup used in the temperature change practical?', a: 'It is an insulator, so less energy is lost to the surroundings and the result is more accurate.' },
      { q: 'What does activation energy mean?', a: 'The minimum energy that colliding particles need for a reaction to happen.' },
      { q: 'Higher tier: H₂ + Cl₂ → 2HCl. Use H–H 436, Cl–Cl 243, H–Cl 432 (kJ/mol) to find the energy change.', a: 'Break: 436 + 243 = 679. Make: 2 × 432 = 864. 679 − 864 = −185 kJ/mol (exothermic).' },
      { q: 'Chemistry only: give one advantage and one disadvantage of a hydrogen fuel cell for a car.', a: 'Advantage: only water is produced (no CO₂ from the car). Disadvantage: hydrogen is hard to store and is flammable (or often made from fossil fuels).' },
    ],
  },

  '4.6 The rate and extent of chemical change': {
    keyPoints: [
      'Rate = amount of reactant used or product formed ÷ time taken.',
      'Rate rises with higher temperature, concentration (or pressure for gases), surface area and a catalyst.',
      'Collision theory: a reaction needs particles to collide with enough energy (the activation energy).',
      'Catalysts give a different route with a lower activation energy and are not used up.',
      'Reversible reactions (⇌) reach equilibrium in a closed system. Higher tier: Le Chatelier predicts how conditions shift it.',
    ],
    steps: [
      {
        title: 'Measuring rate',
        text: 'Mean rate = quantity of product formed ÷ time (or quantity of reactant used ÷ time). Units may be g/s or cm³/s.\nExample: 60 cm³ of gas in 40 s gives 60 ÷ 40 = 1.5 cm³/s.\nOn a graph of product against time, a steeper line means a faster rate. The line levels off when a reactant has run out. Higher tier: the rate at a point is the gradient of a tangent drawn at that point.',
      },
      {
        title: 'Collision theory',
        text: 'Particles must collide before they can react, and the collision must have at least the activation energy.\nMore frequent collisions means a faster rate. More energetic collisions means a larger fraction are successful.\nAll the factors below work by changing the frequency of collisions, the energy of collisions, or both.',
      },
      {
        title: 'Temperature and concentration',
        text: 'Higher temperature: particles move faster, so they collide more often, and more of the collisions have energy above the activation energy.\nHigher concentration (or higher pressure of a gas): more particles in the same volume, so collisions are more frequent.\nIt is not enough to say "more collisions". Say "more frequent collisions".',
      },
      {
        title: 'Surface area and catalysts',
        text: 'Breaking a solid into smaller pieces increases the surface area to volume ratio. More particles are exposed, so collisions are more frequent. Powder reacts faster than lumps of the same mass.\nA catalyst provides an alternative pathway with a lower activation energy. It is not used up and does not change the products. Enzymes are biological catalysts.',
      },
      {
        title: 'Required practical: rates',
        text: 'Two common methods.\nGas collection: add magnesium to acid in a flask joined to a gas syringe, and record the volume every 10 seconds. Repeat with different acid concentrations.\nDisappearing cross: sodium thiosulfate and hydrochloric acid make a yellow solid (sulfur), which clouds the solution. Time how long a cross under the flask takes to disappear. Change one factor only, such as temperature, and keep the rest the same.',
      },
      {
        title: 'Reversible reactions',
        text: 'Some reactions go both ways: A + B ⇌ C + D. If the forward reaction is exothermic, the reverse is endothermic with the same energy change.\nExample: hydrated copper sulfate (blue) ⇌ anhydrous copper sulfate (white) + water. Heating drives the water off; adding water makes it blue again and releases energy.',
      },
      {
        title: 'Equilibrium',
        text: 'In a closed system, a reversible reaction reaches equilibrium when the forward and reverse reactions happen at the same rate. The amounts of reactants and products then stay constant.\nHigher tier: Le Chatelier says that if you change a condition, the system shifts to oppose the change.\nAdd more reactant, and more product forms. Increase temperature, and the endothermic direction is favoured. Increase pressure, and the side with fewer gas molecules is favoured.',
      },
      {
        title: 'Equilibrium example',
        text: 'Higher tier. N₂ + 3H₂ ⇌ 2NH₃. The forward reaction is exothermic.\nHigher pressure favours ammonia, because there are 4 moles of gas on the left and 2 on the right. Lower temperature also favours ammonia, but it makes the reaction slow, so industry uses a compromise.\nRemoving ammonia as it forms makes the equilibrium shift to make more.',
      },
    ],
    check: [
      { q: 'A reaction makes 90 cm³ of gas in 30 seconds. What is the mean rate?', a: '90 ÷ 30 = 3.0 cm³/s.' },
      { q: 'Explain, using collision theory, why powdered marble reacts faster than marble chips with acid.', a: 'The powder has a larger surface area, so more particles are exposed and collisions are more frequent.' },
      { q: 'How does a catalyst speed up a reaction?', a: 'It provides an alternative route with a lower activation energy, so more collisions are successful.' },
      { q: 'What is meant by equilibrium?', a: 'In a closed system, the forward and reverse reactions occur at the same rate, so the concentrations stay constant.' },
      { q: 'Higher tier: N₂ + 3H₂ ⇌ 2NH₃. What does increasing the pressure do, and why?', a: 'More ammonia forms, because the equilibrium shifts to the side with fewer gas molecules (2 rather than 4).' },
    ],
  },

  '4.7 Organic chemistry': {
    keyPoints: [
      'Crude oil is a mixture of hydrocarbons separated into fractions by fractional distillation.',
      'Alkanes are saturated with formula CₙH₂ₙ₊₂. Alkenes are unsaturated with a C=C double bond and formula CₙH₂ₙ.',
      'Cracking breaks long alkanes into shorter alkanes and alkenes. Alkenes decolourise bromine water.',
      'Hydrocarbons burn completely to CO₂ and H₂O; with limited oxygen they make carbon monoxide and carbon.',
      'Chemistry only: reactions of alkenes, alcohols, carboxylic acids and esters, and addition and condensation polymers.',
    ],
    steps: [
      {
        title: 'Crude oil and alkanes',
        text: 'Crude oil is a finite resource formed from the remains of ancient marine organisms. It is a mixture of hydrocarbons, which contain only hydrogen and carbon.\nMost are alkanes: methane CH₄, ethane C₂H₆, propane C₃H₈, butane C₄H₁₀. The general formula is CₙH₂ₙ₊₂. They are saturated, meaning all carbon–carbon bonds are single.',
      },
      {
        title: 'Fractional distillation',
        text: 'Crude oil is heated and the vapour enters a column that is hot at the bottom and cooler at the top. Each hydrocarbon condenses where the temperature drops below its boiling point.\nShort molecules (petrol, gases) come off at the top. Long molecules (diesel, bitumen) come off at the bottom.\nAs chain length increases, boiling point and viscosity increase, and flammability decreases.',
      },
      {
        title: 'Burning hydrocarbons',
        text: 'Complete combustion needs plenty of oxygen: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Both carbon and hydrogen are oxidised.\nWith limited oxygen, combustion is incomplete. It makes carbon monoxide, and sometimes carbon (soot): 2CH₄ + 3O₂ → 2CO + 4H₂O.\nIncomplete combustion gives a smoky yellow flame, and carbon monoxide is toxic.',
      },
      {
        title: 'Cracking',
        text: 'Long alkanes are less useful than short ones, and there is more demand for short fuels. Cracking breaks long chains into shorter ones.\nCatalytic cracking passes vapour over a hot catalyst. Steam cracking mixes the vapour with steam at a high temperature.\nExample: C₁₀H₂₂ → C₈H₁₈ + C₂H₄. The products are an alkane and an alkene. Alkenes are used to make polymers and other chemicals.',
      },
      {
        title: 'Alkenes',
        text: 'Alkenes have a C=C double bond, so they are unsaturated and more reactive than alkanes. Ethene is C₂H₄, propene C₃H₆, butene C₄H₈.\nTest: shake with bromine water. An alkene turns it from orange to colourless, because it adds across the double bond. An alkane does not change it.\nChemistry only: alkenes undergo addition reactions with hydrogen (to make an alkane), halogens (C₂H₄ + Br₂ → C₂H₄Br₂) and steam (to make an alcohol).',
      },
      {
        title: 'Alcohols and carboxylic acids',
        text: 'Chemistry only. Alcohols contain –OH. Methanol, ethanol, propanol and butanol are the first four. Ethanol can be made by fermentation of sugar by yeast: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (around 30 to 40 °C, no oxygen), or by reacting ethene with steam.\nAlcohols burn, dissolve in water to give a neutral solution, and can be oxidised to carboxylic acids.\nCarboxylic acids contain –COOH, such as ethanoic acid CH₃COOH. They are weak acids that react with carbonates to make CO₂. With an alcohol and acid catalyst they make esters, which smell sweet.',
      },
      {
        title: 'Addition polymers',
        text: 'Chemistry only. Many small alkene molecules (monomers) join into a long chain, with the double bonds opening up. Nothing else is made.\nEthene gives poly(ethene). The repeat unit is –CH₂–CH₂–. Propene gives poly(propene).\nMonomers can be recognised from the repeat unit: change the C–C backbone back into C=C. Addition polymers are usually not biodegradable.',
      },
      {
        title: 'Condensation polymers',
        text: 'Chemistry only. Two monomers with two reacting groups each join, and a small molecule (usually water) is lost at every link.\nA dicarboxylic acid and a diol make a polyester. Amino acids join to make polypeptides (proteins).\nOther natural polymers: DNA (made from four nucleotides), starch and cellulose (made from sugars).',
      },
    ],
    check: [
      { q: 'What is the formula of the alkane with 8 carbon atoms?', a: 'C₈H₁₈ (CₙH₂ₙ₊₂ with n = 8).' },
      { q: 'Balance: C₃H₈ + O₂ → CO₂ + H₂O', a: 'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.' },
      { q: 'Dodecane C₁₂H₂₆ is cracked into hexane C₆H₁₄ and one other product. Give the other product.', a: 'C₆H₁₂, an alkene (the atoms left over: C₁₂H₂₆ − C₆H₁₄).' },
      { q: 'How do you tell an alkene from an alkane?', a: 'Shake with bromine water. The alkene decolourises it (orange to colourless); the alkane does not.' },
      { q: 'Chemistry only: draw or describe the repeat unit of poly(ethene) and name the monomer.', a: 'Monomer: ethene, C₂H₄. Repeat unit: –CH₂–CH₂– (in brackets with n).' },
    ],
  },

  '4.8 Chemical analysis': {
    keyPoints: [
      'A pure substance has a sharp melting point; impurities lower and widen the melting range.',
      'Rf = distance moved by the substance ÷ distance moved by the solvent.',
      'Gas tests: H₂ squeaky pop, O₂ relights a glowing splint, CO₂ turns limewater milky, Cl₂ bleaches damp litmus paper.',
      'Chemistry only: flame tests, sodium hydroxide precipitates, and tests for carbonates, halides and sulfates.',
      'Chemistry only: instrumental methods such as flame emission spectroscopy are fast, sensitive and accurate.',
    ],
    steps: [
      {
        title: 'Pure substances and formulations',
        text: 'In chemistry a pure substance contains just one element or compound. Pure substances melt and boil at fixed temperatures, so melting point can test purity.\nA formulation is a mixture designed to have useful properties, with exact amounts of each component. Examples: fuels, cleaning products, paints, medicines, foods, alloys, fertilisers.',
      },
      {
        title: 'Paper chromatography',
        text: 'Chromatography separates a mixture. The paper is the stationary phase and the solvent is the mobile phase. Substances that dissolve well in the solvent and stick less to the paper travel further.\nDraw the start line in pencil (ink would run), put spots on it, and stand the paper in solvent that is below the line. Remove when the solvent has nearly reached the top and mark the solvent front.',
      },
      {
        title: 'Reading a chromatogram',
        text: 'A pure substance gives one spot. A mixture gives more than one.\nSpots that match a known substance at the same height may be that substance.\nRf = distance moved by substance ÷ distance moved by solvent. If a spot moves 3.6 cm and the solvent moves 8.0 cm, Rf = 3.6 ÷ 8.0 = 0.45. Rf has no units and is always below 1.',
      },
      {
        title: 'Testing for gases',
        text: 'Hydrogen: a lit splint makes a squeaky pop.\nOxygen: relights a glowing splint.\nCarbon dioxide: bubbled through limewater turns it milky (cloudy).\nChlorine: bleaches damp blue litmus paper (it turns red first, then white).',
      },
      {
        title: 'Flame tests',
        text: 'Chemistry only. Dip a clean wire loop (or splint) in a solution of the compound, then hold it in a blue Bunsen flame.\nLithium: crimson. Sodium: yellow. Potassium: lilac. Calcium: orange-red. Copper: green.\nA mixture of ions can hide colours, which is one reason instrumental methods are used.',
      },
      {
        title: 'Sodium hydroxide test',
        text: 'Chemistry only. Add a few drops of sodium hydroxide solution to the metal ion solution and look for a precipitate.\nWhite precipitate: Al³⁺, Mg²⁺, Ca²⁺. Only aluminium hydroxide dissolves in excess sodium hydroxide to give a colourless solution.\nColoured: Cu²⁺ blue, Fe²⁺ green, Fe³⁺ brown.\nExample: Cu²⁺ + 2OH⁻ → Cu(OH)₂.',
      },
      {
        title: 'Testing for negative ions',
        text: 'Chemistry only. Carbonate: add dilute acid; bubbles of CO₂ turn limewater milky.\nHalides: add dilute nitric acid and then silver nitrate. Chloride gives a white precipitate, bromide cream, iodide yellow. Ag⁺ + Cl⁻ → AgCl.\nSulfate: add dilute hydrochloric acid and barium chloride; a white precipitate of barium sulfate forms.\nRequired practical: identify unknown ions by working through these tests.',
      },
      {
        title: 'Instrumental methods',
        text: 'Chemistry only. Machines identify elements and compounds quickly, using tiny samples, and are very accurate and sensitive.\nIn flame emission spectroscopy, the sample is heated in a flame and the light is split into a line spectrum. The pattern of lines identifies each metal ion, and the intensity gives its concentration. It can detect several ions in the same mixture.',
      },
    ],
    check: [
      { q: 'Why is the start line in chromatography drawn in pencil?', a: 'Pencil is insoluble in the solvent and will not run, whereas ink would travel up the paper and spoil the results.' },
      { q: 'A spot moves 2.4 cm while the solvent front moves 6.0 cm. Find the Rf value.', a: '2.4 ÷ 6.0 = 0.40.' },
      { q: 'How do you test for carbon dioxide?', a: 'Bubble the gas through limewater; it turns cloudy (milky).' },
      { q: 'Chemistry only: a solution gives a lilac flame, and a white precipitate with silver nitrate (after acidifying). What is the compound?', a: 'Potassium chloride (lilac = K⁺; white precipitate = Cl⁻).' },
      { q: 'Chemistry only: sodium hydroxide gives a brown precipitate. Which ion is present?', a: 'Iron(III), Fe³⁺.' },
    ],
  },

  '4.9 Chemistry of the atmosphere': {
    keyPoints: [
      'The early atmosphere came from volcanoes: mostly carbon dioxide, with water vapour, nitrogen and small amounts of methane and ammonia.',
      'Plants and algae removed CO₂ and added oxygen; CO₂ also dissolved in oceans and was locked up in sedimentary rocks and fossil fuels.',
      'Today: about 78% nitrogen, 21% oxygen, under 1% argon and about 0.04% carbon dioxide.',
      'Greenhouse gases (CO₂, methane, water vapour) trap heat and cause global warming.',
      'Burning fuels makes CO, SO₂, nitrogen oxides, particulates and unburnt hydrocarbons.',
    ],
    steps: [
      {
        title: 'The early atmosphere',
        text: 'Scientists think the Earth was very hot and volcanoes gave out gases. These formed an atmosphere with a lot of CO₂, water vapour, nitrogen and small amounts of methane and ammonia, with little or no oxygen.\nNobody was there, and the evidence is very old, so ideas about the early atmosphere are uncertain.',
      },
      {
        title: 'Oceans and carbon dioxide',
        text: 'As the Earth cooled, water vapour condensed to form the oceans. Carbon dioxide dissolved in the water.\nCarbon was locked up as carbonate in sediments and shells, which became rocks such as limestone. Fossil fuels (coal, oil, gas) also hold carbon from dead organisms. Together these removed CO₂ from the air.',
      },
      {
        title: 'Oxygen from photosynthesis',
        text: 'Algae and then plants evolved and used CO₂ in photosynthesis.\ncarbon dioxide + water → glucose + oxygen\n6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂\nOxygen slowly built up to about 20% over billions of years, allowing animals to evolve.',
      },
      {
        title: 'The atmosphere today',
        text: 'Roughly 78% nitrogen, 21% oxygen, 0.9% argon and other noble gases, and about 0.04% carbon dioxide, with varying water vapour.\nThe composition has been fairly steady for a long time, but the CO₂ level is increasing because of human activity.',
      },
      {
        title: 'Greenhouse effect',
        text: 'Short-wave radiation from the Sun passes through the atmosphere and warms the Earth. The Earth gives out longer-wavelength infrared radiation.\nGreenhouse gases absorb some of this and re-radiate it in all directions, some back to the surface. This keeps the planet warm enough for life.\nGreenhouse gases include carbon dioxide, methane and water vapour.',
      },
      {
        title: 'Human activity and climate',
        text: 'Burning fossil fuels and deforestation add CO₂. Farming cattle, rice paddies and landfill add methane.\nMost scientists agree this is causing global warming. Possible effects include rising sea levels, more extreme weather, and changes to where crops and wildlife can live.\nPredicting climate is hard because the models are complex, and some media reports are simplified or biased.',
      },
      {
        title: 'Carbon footprint',
        text: 'The carbon footprint is the total carbon dioxide and other greenhouse gases given out over the life of a product, service or event.\nTo cut it: use renewable energy, improve energy efficiency, plant trees, and use carbon capture and storage. Problems include cost, lifestyle changes, and countries disagreeing about who should act.',
      },
      {
        title: 'Atmospheric pollutants',
        text: 'Carbon monoxide: from incomplete combustion; colourless, odourless and toxic as it stops blood carrying oxygen.\nSulfur dioxide: from sulfur impurities in fuels (S + O₂ → SO₂); causes acid rain and breathing problems.\nOxides of nitrogen: formed in hot engines where nitrogen and oxygen from the air react; cause acid rain and respiratory problems.\nParticulates (soot): cause lung problems and global dimming. Unburnt hydrocarbons also escape from engines.',
      },
    ],
    check: [
      { q: 'Give the word equation for photosynthesis.', a: 'Carbon dioxide + water → glucose + oxygen.' },
      { q: 'Name two ways carbon dioxide was removed from the early atmosphere.', a: 'Any two of: photosynthesis by plants and algae, dissolving in the oceans, forming carbonate rocks, forming fossil fuels.' },
      { q: 'Explain how greenhouse gases warm the Earth.', a: 'They absorb infrared radiation from the Earth and re-radiate some of it back towards the surface, so less escapes to space.' },
      { q: 'Why is carbon monoxide dangerous, and how is it formed?', a: 'It is toxic because it stops the blood carrying oxygen. It forms by incomplete combustion when there is not enough oxygen.' },
      { q: 'How does burning fuels cause acid rain?', a: 'Sulfur in the fuel burns to sulfur dioxide, and nitrogen oxides form in hot engines. Both dissolve in rainwater to make acidic solutions.' },
    ],
  },

  '4.10 Using resources': {
    keyPoints: [
      'Finite resources will run out; sustainable development meets present needs without harming future generations.',
      'Potable water comes from fresh water by filtering and sterilising; sea water needs desalination.',
      'A life cycle assessment looks at the environmental effect at each stage of a product: raw materials, manufacture, use and disposal.',
      'Iron rusts when oxygen and water are both present; coatings and sacrificial metals protect it. Alloys, ceramics, polymers and composites are chosen for their properties.',
      'The Haber process makes ammonia from N₂ and H₂ at about 450 °C and 200 atmospheres with an iron catalyst. Chemistry only: NPK fertilisers.',
    ],
    steps: [
      {
        title: 'Finite and renewable resources',
        text: 'A finite resource, such as crude oil, will run out because it forms far more slowly than we use it. A renewable resource can be replaced as quickly as it is used, such as timber.\nSustainable development means using resources in ways that meet today\'s needs without stopping future generations meeting theirs. Chemists help by finding ways to recycle and use less energy.',
      },
      {
        title: 'Making water safe to drink',
        text: 'Potable water is safe to drink; it is not the same as pure water, because it can contain dissolved substances.\nFor fresh water: pass through filter beds to remove solids, then sterilise with chlorine, ozone or ultraviolet light to kill microbes.\nWhere fresh water is scarce, sea water can be desalinated by distillation or by reverse osmosis through a membrane. Both use a lot of energy.',
      },
      {
        title: 'Waste water and the practical',
        text: 'Sewage and industrial waste need treating before release. Screening and grit removal, then sedimentation lets sludge settle. The sludge is broken down by bacteria in anaerobic digestion, and the effluent is treated by aerobic biological treatment.\nRequired practical: analyse and purify a water sample. Test the pH, then find the dissolved solids by evaporating a small known volume and weighing the residue. Purify by distillation and check that the water has no dissolved solids left.',
      },
      {
        title: 'Life cycle assessment and recycling',
        text: 'A life cycle assessment (LCA) looks at each stage: getting raw materials, manufacturing and packaging, use, and disposal. It considers energy, water, resources and pollution. Some parts, like the effect of pollution, rely on judgement, so LCAs can be biased.\nRecycling saves raw materials and energy, and reduces waste. Metals can be melted and reused. Glass bottles can be reused or melted and made into new ones.\nHigher tier: bioleaching (using bacteria) and phytomining (growing plants that absorb metal ions) can get copper from low-grade ores.',
      },
      {
        title: 'Corrosion and alloys',
        text: 'Corrosion is the destruction of a metal by reaction with oxygen and water. Rusting of iron needs both. Barriers such as paint, oil, plastic or plating keep air and water out. A sacrificial metal such as zinc corrodes first, protecting the iron.\nAlloys are mixtures designed for use: bronze (copper and tin), brass (copper and zinc), steels (iron with carbon, and sometimes other metals) and aluminium alloys, which are light and strong.',
      },
      {
        title: 'Ceramics, polymers, composites',
        text: 'Ceramics: soda-lime glass (sand, sodium carbonate, limestone) and borosilicate glass (higher melting point), and clay ceramics such as pottery.\nPolymers: thermosoftening polymers melt when heated and can be reshaped. Thermosetting polymers have cross-links and do not melt. Low-density poly(ethene) is flexible, but high-density poly(ethene) is stronger and stiffer.\nComposites have fibres or fragments embedded in a matrix, such as glass fibre or concrete with steel.',
      },
      {
        title: 'The Haber process',
        text: 'Ammonia is made from nitrogen (from air) and hydrogen (from natural gas): N₂ + 3H₂ ⇌ 2NH₃. The reaction is reversible and exothermic.\nConditions: about 450 °C, 200 atmospheres, and an iron catalyst. Unreacted nitrogen and hydrogen are recycled.\nHigher tier: a low temperature gives a higher yield but the reaction is too slow, so 450 °C is a compromise. High pressure raises yield but costs more to build and run.',
      },
      {
        title: 'NPK fertilisers',
        text: 'Chemistry only. Plants need nitrogen, phosphorus and potassium to grow. NPK fertilisers contain compounds of all three, and are made by neutralising acids.\nAmmonia and nitric acid make ammonium nitrate: NH₃ + HNO₃ → NH₄NO₃. Phosphate rock is treated with acid to make a soluble phosphate, because the rock itself is insoluble. Potassium compounds are mined as potassium chloride or potassium sulfate.\nLab method: neutralise by titration and crystallise.',
      },
    ],
    check: [
      { q: 'Name the two stages used to make fresh water potable.', a: 'Filtration (to remove solids) and sterilisation (using chlorine, ozone or UV light).' },
      { q: 'List the four stages assessed in a life cycle assessment.', a: 'Extracting and processing raw materials; manufacturing and packaging; use and operation; disposal at end of life.' },
      { q: 'What two things are needed for iron to rust, and how does galvanising protect it?', a: 'Oxygen and water. Zinc coating keeps them out, and zinc also corrodes first (sacrificial protection).' },
      { q: 'Give the equation for the Haber process and two reasons the unreacted gases are recycled.', a: 'N₂ + 3H₂ ⇌ 2NH₃. Recycling saves raw materials and reduces cost, because not all the gas reacts in one pass.' },
      { q: 'Chemistry only: write the equation for making ammonium nitrate, and say why it is useful.', a: 'NH₃ + HNO₃ → NH₄NO₃. It is a fertiliser that supplies nitrogen to plants.' },
    ],
  },
}
