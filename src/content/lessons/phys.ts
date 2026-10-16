import type { Lesson } from './types'

// AQA GCSE Physics 8463. One lesson per topic in topics.ts. "Physics only:" marks separate-science content.
export const PHYS: Record<string, Lesson> = {
  '4.1 Energy': {
    keyPoints: [
      "Energy is never created or destroyed. It is stored, transferred or dissipated (wasted to the surroundings).",
      "Kinetic energy (J) = ½ × mass (kg) × speed² (m/s)², so KE = ½mv².",
      "Gravitational potential energy (J) = mass (kg) × gravitational field strength (N/kg) × height (m), so GPE = mgh.",
      "Change in thermal energy (J) = mass (kg) × specific heat capacity (J/kg°C) × temperature change (°C), so ΔE = mcΔθ.",
      "Power (W) = energy transferred (J) ÷ time (s). Efficiency = useful output ÷ total input, never more than 1 (100%).",
    ],
    steps: [
      {
        title: "Energy stores and transfers",
        text: "Energy sits in stores: kinetic, gravitational potential, elastic potential, thermal, chemical, nuclear and magnetic. It moves between them by heating, by waves (light, sound), electrically, or mechanically when a force moves something.\nExample: a swinging pendulum keeps swapping gravitational potential for kinetic energy, and a little is lost as thermal energy in the air and pivot.",
      },
      {
        title: "Conservation and closed systems",
        text: "In a closed system the total energy stays the same. Energy only changes where it is stored.\nWasted energy is dissipated: it spreads out into the surroundings, usually as thermal energy, and cannot easily be used again. Dissipated energy is not destroyed, it is just too spread out to be useful.",
      },
      {
        title: "Kinetic and potential energy",
        text: "Kinetic energy = ½ × m × v². A 2 kg ball moving at 6 m/s has ½ × 2 × 6² = ½ × 2 × 36 = 36 J.\nGravitational potential energy = m × g × h, with g = 9.8 N/kg on Earth. A 3 kg book lifted 5 m gains 3 × 9.8 × 5 = 147 J.\nElastic potential energy in a spring = ½ × k × e², where k is the spring constant (N/m) and e the extension (m). With k = 40 N/m and e = 0.1 m: ½ × 40 × 0.1² = 0.2 J.",
      },
      {
        title: "Specific heat capacity",
        text: "Specific heat capacity is the energy needed to raise 1 kg of a substance by 1°C. The equation is ΔE = m × c × Δθ.\nExample: heating 0.5 kg of water (c = 4200 J/kg°C) by 20°C needs 0.5 × 4200 × 20 = 42 000 J.\nA high value of c means the material heats up slowly and holds a lot of energy, which is why water is used in central heating.",
      },
      {
        title: "Required practical: heat capacity",
        text: "Put a block of metal with two holes in an insulating jacket. Fit an electric heater in one hole and a thermometer in the other. Record the starting temperature, switch on the heater for a set time, and note the final temperature.\nEnergy supplied = power × time (or potential difference × current × time). Divide by mass × temperature rise to find c.\nTo get better results, use insulation and a little oil in the thermometer hole to improve contact, and take the highest reading after the heater is off.",
      },
      {
        title: "Power and efficiency",
        text: "Power is how fast energy is transferred: power (W) = energy (J) ÷ time (s). A motor transferring 3000 J in 20 s has a power of 150 W. One watt is one joule per second.\nEfficiency = useful energy output ÷ total energy input. If a lamp takes in 200 J and gives out 60 J as light, efficiency = 60 ÷ 200 = 0.3, or 30%. The other 140 J is wasted, mostly as heat.",
      },
      {
        title: "Reducing unwanted transfers",
        text: "Lubrication (oil) cuts friction, so less energy is dissipated as heat. Thermal insulation cuts heat loss from buildings.\nHigh thermal conductivity means energy passes through quickly. Thicker walls with a low thermal conductivity slow heat loss, so a house cools more slowly.\nThermal insulation practical: wrap identical beakers of hot water in different materials, or use different thicknesses, and record the temperature fall every minute. Keep the water volume, starting temperature and lid the same.",
      },
      {
        title: "Energy resources",
        text: "Non-renewable resources (coal, oil, gas, nuclear fuel) will run out. Fossil fuels also release carbon dioxide when burnt.\nRenewable resources (wind, solar, hydroelectric, tides, geothermal, biofuel) can be replaced as we use them. Each has drawbacks: wind and solar depend on the weather, and hydroelectric dams change habitats.\nWhen you compare them, mention reliability, cost, pollution and effect on the environment.",
      },
    ],
    check: [
      { q: "State the equation for kinetic energy and find the KE of a 1000 kg car at 10 m/s.", a: "KE = ½mv². ½ × 1000 × 10² = ½ × 1000 × 100 = 50 000 J." },
      { q: "A 4 kg object is lifted 2.5 m. Find the gain in gravitational potential energy (g = 9.8 N/kg).", a: "GPE = mgh = 4 × 9.8 × 2.5 = 98 J." },
      { q: "How much energy is needed to warm 2 kg of water by 10°C? (c = 4200 J/kg°C)", a: "ΔE = mcΔθ = 2 × 4200 × 10 = 84 000 J." },
      { q: "A kettle transfers 90 000 J in 60 s. What is its power?", a: "Power = energy ÷ time = 90 000 ÷ 60 = 1500 W." },
      { q: "A device takes in 500 J and wastes 350 J. Find its efficiency.", a: "Useful output = 500 − 350 = 150 J. Efficiency = 150 ÷ 500 = 0.3 = 30%." },
    ],
  },

  '4.2 Electricity': {
    keyPoints: [
      "Charge flow (C) = current (A) × time (s), so Q = It.",
      "Potential difference (V) = current (A) × resistance (Ω), so V = IR.",
      "Power (W) = potential difference × current = P = VI, and P = I²R. Energy transferred (J) = power × time.",
      "Series: same current, resistances add. Parallel: same potential difference across each branch, total resistance falls.",
      "Mains in the UK is 230 V a.c. at 50 Hz. The live wire is dangerous, the earth wire is a safety path.",
    ],
    steps: [
      {
        title: "Charge, current and potential difference",
        text: "Current is the rate of flow of charge, measured in amperes (A). Charge is measured in coulombs (C), and Q = I × t. A current of 3 A for 20 s moves 3 × 20 = 60 C.\nPotential difference (V) is the energy transferred per coulomb: E = QV. Moving 5 C through 12 V transfers 5 × 12 = 60 J.\nAn ammeter goes in series with a component, a voltmeter in parallel across it.",
      },
      {
        title: "Resistance and V = IR",
        text: "Resistance (Ω) measures how much a component opposes current. Potential difference = current × resistance.\nExample: a 12 V supply across a 4 Ω resistor gives I = V ÷ R = 12 ÷ 4 = 3 A.\nIf a resistor carries 0.5 A with 6 V across it, R = 6 ÷ 0.5 = 12 Ω.",
      },
      {
        title: "Series and parallel circuits",
        text: "Series: one loop. Current is the same everywhere, the potential differences share out and add to the supply, and total resistance is the sum: 3 Ω + 5 Ω = 8 Ω.\nParallel: branches. The potential difference across each branch equals the supply, and currents from the branches add together.\nAdding a resistor in parallel gives the current another path, so the total resistance gets smaller than any single branch.",
      },
      {
        title: "Required practicals: resistance and I-V",
        text: "Resistance of a wire: connect it to a cell, ammeter and voltmeter. Move a crocodile clip to change the length, and record V and I each time. R = V ÷ I. Resistance is directly proportional to length.\nI-V characteristic: use a variable resistor to change the current, and record I and V for a resistor, a filament lamp and a diode. Reverse the cell to get negative values.\nKeep currents low so the wire does not heat up and change its resistance.",
      },
      {
        title: "I-V graphs",
        text: "Resistor at constant temperature: a straight line through the origin, so the resistance is constant (ohmic).\nFilament lamp: a curve that gets flatter. As the current rises, the filament gets hotter, so its resistance increases.\nDiode: current flows in one direction only. In the reverse direction its resistance is very high.\nThermistor: resistance falls as temperature rises. LDR: resistance falls as light gets brighter.",
      },
      {
        title: "Power and energy in circuits",
        text: "Power = potential difference × current (P = VI). A 230 V kettle drawing 5 A has power 230 × 5 = 1150 W.\nSubstituting V = IR gives P = I²R. A 10 Ω heater with 2 A has P = 2² × 10 = 40 W.\nEnergy transferred = power × time. A 2 kW heater on for 3 hours uses 2 × 3 = 6 kWh (kilowatt-hours). Cost = kWh used × price per kWh.",
      },
      {
        title: "Mains electricity and safety",
        text: "UK mains is alternating current (a.c.): the direction reverses 50 times a second (50 Hz). A cell gives direct current (d.c.), which flows one way only.\nThree-pin plug: live (brown) carries the 230 V, neutral (blue) completes the circuit, earth (green and yellow stripes) is a safety wire. If a fault makes the metal case live, a big current flows to earth and the fuse melts.\nThe live wire is dangerous even when the switch is off, because it is at high potential.",
      },
      {
        title: "Static electricity",
        text: "Rubbing two insulators transfers electrons from one surface to the other. The one that gains electrons becomes negative and the other positive.\nLike charges repel, opposite charges attract. A charged object also attracts small uncharged objects.\nSparks happen when charge builds up and the potential difference between an object and earth gets large enough to ionise the air.\nPhysics only: a charged object has an electric field around it. The force on another charge gets stronger the closer it is.",
      },
    ],
    check: [
      { q: "A current of 4 A flows for 30 s. How much charge moves?", a: "Q = It = 4 × 30 = 120 C." },
      { q: "A 15 Ω resistor has 6 V across it. What current flows?", a: "I = V ÷ R = 6 ÷ 15 = 0.4 A." },
      { q: "A 230 V appliance draws 8 A. What is its power?", a: "P = VI = 230 × 8 = 1840 W." },
      { q: "Why does the I-V graph of a filament lamp curve?", a: "The current heats the filament. A hotter filament has a higher resistance, so the gradient (current per volt) falls." },
      { q: "Two 6 Ω resistors are connected in series. What is the total resistance? What would it be if you added a third 6 Ω resistor in series?", a: "6 + 6 = 12 Ω. With three in series, 18 Ω." },
    ],
  },

  '4.3 Particle model of matter': {
    keyPoints: [
      "Density (kg/m³) = mass (kg) ÷ volume (m³), so ρ = m ÷ V.",
      "Solids: particles vibrate in fixed positions. Liquids: they move past each other. Gases: they move quickly and freely.",
      "Changes of state are physical changes: mass is conserved and the substance can change back.",
      "Energy to change state (J) = mass (kg) × specific latent heat (J/kg), so E = mL.",
      "Gas pressure comes from particles hitting the walls. Heating a gas at constant volume increases its pressure.",
    ],
    steps: [
      {
        title: "Solids, liquids and gases",
        text: "In a solid the particles are close together in a regular pattern and vibrate about fixed positions. In a liquid they are close but can slide past one another. In a gas they are far apart and move randomly and fast.\nThe particle model explains why solids hold a shape, why liquids pour and why gases fill their container.",
      },
      {
        title: "Density",
        text: "Density = mass ÷ volume. A block has a mass of 540 g and a volume of 200 cm³, so its density = 540 ÷ 200 = 2.7 g/cm³.\nTo convert to SI units: 2.7 g/cm³ = 2700 kg/m³ (multiply g/cm³ by 1000).\nA gas is much less dense than a solid because its particles are far apart.",
      },
      {
        title: "Required practical: density",
        text: "Regular solid: measure the sides with a ruler to find the volume, then weigh it on a balance.\nIrregular solid: fill a eureka (displacement) can with water to the spout. Lower the object in and collect the water that overflows in a measuring cylinder. That volume equals the volume of the object.\nLiquid: put a measuring cylinder on a balance, zero it, add liquid, and read mass and volume. Then density = m ÷ V.",
      },
      {
        title: "Changes of state",
        text: "Melting, freezing, boiling (evaporating), condensing and sublimating are physical changes. The substance can return to its original state, and the mass stays the same because the particles are only rearranged.\nWhile a substance changes state, its temperature stays constant. On a heating curve this is the flat part.",
      },
      {
        title: "Internal energy and heating",
        text: "Internal energy is the total kinetic energy and potential energy of all the particles in a system.\nHeating either raises the temperature (more kinetic energy) or changes the state (potential energy of the particles rises as bonds are broken or loosened).\nTemperature tells you how fast the particles are moving on average. It does not tell you the total energy.",
      },
      {
        title: "Specific latent heat",
        text: "Specific latent heat is the energy to change 1 kg of a substance from one state to another without a temperature change. Energy = mass × specific latent heat.\nFusion is melting or freezing. Vaporisation is boiling or condensing.\nExample: to melt 0.5 kg of ice (L of fusion = 334 000 J/kg) needs 0.5 × 334 000 = 167 000 J.",
      },
      {
        title: "Gas pressure and temperature",
        text: "Gas particles hit the walls of the container. Each collision gives a tiny force, and many collisions make a steady pressure.\nHeating a gas in a sealed container makes particles faster, so they hit harder and more often: pressure rises. Raising the temperature of a gas raises the average kinetic energy of its particles.\nIn a smaller volume the particles hit the walls more often, so the pressure is higher at constant temperature.",
      },
      {
        title: "Physics only: pV = constant",
        text: "Physics only: for a fixed mass of gas at constant temperature, pressure × volume = constant.\nExample: 2 m³ of gas at 100 kPa is squeezed to 1 m³. p × V = 100 × 2 = 200, so the new pressure = 200 ÷ 1 = 200 kPa.\nCompressing a gas does work on it, and that energy raises its internal energy, so a bicycle pump gets warm.",
      },
    ],
    check: [
      { q: "A 0.5 kg block of metal has a volume of 0.0002 m³. Find its density.", a: "Density = 0.5 ÷ 0.0002 = 2500 kg/m³." },
      { q: "Why does the temperature stay constant while ice melts?", a: "The energy supplied is used to break the bonds between particles (raising their potential energy) rather than raising their kinetic energy." },
      { q: "How much energy is needed to boil away 2 kg of water at 100°C? (L of vaporisation = 2 260 000 J/kg)", a: "E = mL = 2 × 2 260 000 = 4 520 000 J." },
      { q: "Explain why heating a sealed can of gas raises its pressure.", a: "The particles gain kinetic energy, move faster, and hit the walls harder and more often, so the force per unit area rises." },
      { q: "Physics only: 6 m³ of gas at 50 kPa is compressed at constant temperature to 2 m³. Find the new pressure.", a: "pV = 50 × 6 = 300. New p = 300 ÷ 2 = 150 kPa." },
    ],
  },

  '4.4 Atomic structure': {
    keyPoints: [
      "An atom has a tiny positive nucleus (protons and neutrons) with electrons around it. The radius is about 1 × 10⁻¹⁰ m.",
      "Atomic number = number of protons. Mass number = protons + neutrons. Isotopes have the same atomic number but different mass numbers.",
      "Alpha (helium nucleus), beta (fast electron) and gamma (electromagnetic wave) differ in ionising power and penetration.",
      "Half-life is the time for the number of undecayed nuclei, or the count rate, to halve.",
      "Radioactive decay is random. Contamination means radioactive atoms are on or in you; irradiation is exposure from outside.",
    ],
    steps: [
      {
        title: "Atoms and their particles",
        text: "The nucleus holds protons (charge +1, relative mass 1) and neutrons (charge 0, relative mass 1). Electrons (charge −1, almost no mass) orbit in energy levels.\nAn atom has equal numbers of protons and electrons, so it has no overall charge. Losing or gaining electrons makes an ion.\nThe nucleus is about 10 000 times smaller than the atom, but contains nearly all the mass.",
      },
      {
        title: "Atomic and mass number",
        text: "The atomic number is the number of protons and identifies the element. The mass number is protons plus neutrons.\nCarbon-14 has atomic number 6 and mass number 14, so it has 6 protons and 14 − 6 = 8 neutrons.\nIsotopes are atoms of the same element with different numbers of neutrons, for example carbon-12 and carbon-14.",
      },
      {
        title: "How the model changed",
        text: "Dalton pictured atoms as solid spheres. Thomson found electrons and proposed the plum pudding model: a ball of positive charge with electrons embedded in it.\nRutherford's alpha scattering experiment fired alpha particles at gold foil. Most went straight through, a few bounced back. So most of the atom is empty space, with a small, dense, positive nucleus.\nBohr suggested electrons orbit at set distances. Later experiments found the neutron (Chadwick).",
      },
      {
        title: "Alpha, beta and gamma",
        text: "Alpha (α): 2 protons and 2 neutrons. Strongly ionising, range of a few cm in air, stopped by paper.\nBeta (β−): a fast electron from a neutron changing into a proton. Moderately ionising, range of about a metre in air, stopped by thin aluminium.\nGamma (γ): electromagnetic radiation from the nucleus. Weakly ionising, very penetrating, only reduced by thick lead or concrete.\nNeutron radiation is also emitted by some nuclei.",
      },
      {
        title: "Nuclear equations",
        text: "Alpha decay: the mass number falls by 4 and the atomic number by 2. Radium-226 (atomic number 88) decays to radon-222 (86) and an alpha particle (⁴₂He).\nBeta decay: the mass number is unchanged and the atomic number rises by 1. Carbon-14 (6) decays to nitrogen-14 (7) and an electron.\nGamma emission changes neither number.\nCheck every equation: the top numbers must add up on both sides, and so must the bottom numbers.",
      },
      {
        title: "Half-life",
        text: "Decay is random: you cannot say when one nucleus will decay, but you can predict how many decay in a given time.\nHalf-life is the time for the activity (count rate) to halve. Activity is measured in becquerels (Bq).\nExample: a sample has activity 800 Bq and half-life 2 hours. After 2 h: 400. After 4 h: 200. After 6 h: 100 Bq, which is 3 half-lives. The ratio of final to starting activity is 100 ÷ 800 = 1 ÷ 8.",
      },
      {
        title: "Contamination, irradiation and background",
        text: "Irradiation: exposed to radiation from a source outside your body, and it stops when the source is removed. Contamination: radioactive atoms get on or in you, and keep emitting until they decay.\nBackground radiation comes from rocks (radon gas), cosmic rays, food and medical sources. It varies by place.\nAlpha is most dangerous inside the body; gamma and beta are the bigger risk from outside. Precautions: tongs, short exposure, lead shielding, distance.",
      },
      {
        title: "Physics only: fission and fusion",
        text: "Physics only: in nuclear fission, a large nucleus such as uranium-235 absorbs a neutron, splits into two smaller nuclei, and releases neutrons and energy. Those neutrons can cause a chain reaction. In a reactor the chain is controlled; in a bomb it is not.\nIn nuclear fusion, two light nuclei join to form a heavier one, and energy is released. This happens in stars.\nFusion needs high temperature and pressure to overcome the repulsion between nuclei.",
      },
    ],
    check: [
      { q: "How many protons, neutrons and electrons are in a neutral atom of carbon-14 (atomic number 6)?", a: "6 protons, 14 − 6 = 8 neutrons, and 6 electrons." },
      { q: "A source has activity 640 Bq and a half-life of 3 days. What is its activity after 9 days?", a: "9 days is 3 half-lives: 640 → 320 → 160 → 80 Bq." },
      { q: "Radon-222 has atomic number 86. It emits an alpha particle. Give the mass number and atomic number of the new nucleus.", a: "Mass number 222 − 4 = 218. Atomic number 86 − 2 = 84." },
      { q: "What did the alpha scattering experiment show about the atom?", a: "Most alpha particles went through, so most of the atom is empty space. A few were deflected strongly, so the positive charge and most mass is in a small nucleus." },
      { q: "Why is an alpha source more dangerous inside the body than outside?", a: "Alpha is strongly ionising but cannot get through skin or even air for far. Inside, its energy is absorbed by living cells, damaging them." },
    ],
  },

  '4.5 Forces': {
    keyPoints: [
      "Scalars have size only; vectors have size and direction. A resultant force is the single force with the same effect.",
      "Weight (N) = mass (kg) × gravitational field strength (N/kg), so W = mg.",
      "Force (N) = mass (kg) × acceleration (m/s²), so F = ma. Acceleration = change in velocity ÷ time.",
      "Spring force (N) = spring constant (N/m) × extension (m), so F = ke, within the limit of proportionality.",
      "Stopping distance = thinking distance + braking distance. Higher speed makes both longer.",
    ],
    steps: [
      {
        title: "Scalars, vectors and resultants",
        text: "Distance, speed, mass and energy are scalars. Displacement, velocity, force and acceleration are vectors.\nThe resultant force is the overall force. If forces act along a line, add the ones in one direction and subtract the opposite ones. Pulling 12 N right and 5 N left gives a resultant of 7 N to the right.\nWeight = mass × g. A 60 kg person has weight 60 × 9.8 = 588 N.",
      },
      {
        title: "Work done and springs",
        text: "Work done = force × distance moved in the direction of the force (J). Pushing with 50 N for 4 m does 50 × 4 = 200 J. Work against friction mainly becomes thermal energy.\nHooke's law: force = spring constant × extension. A spring stretched 0.1 m by 5 N has k = 5 ÷ 0.1 = 50 N/m. Extension is how far it stretches, not its total length.\nPast the limit of proportionality the spring no longer stretches in proportion to the force.",
      },
      {
        title: "Required practical: springs",
        text: "Hang a spring from a clamp, measure its original length with a ruler at eye level, add masses (weight = mg), and measure the length each time. Extension = new length − original length.\nPlot force against extension. A straight line through the origin shows proportionality, and the gradient is k. The graph curves once the limit is passed.\nUse a pointer at the bottom of the spring to read the ruler more precisely.",
      },
      {
        title: "Physics only: moments",
        text: "Physics only: moment (N m) = force (N) × perpendicular distance from the pivot (m). A 20 N force at 0.3 m gives 20 × 0.3 = 6 N m.\nA balanced object has clockwise moments equal to anticlockwise ones. Example: 30 N at 0.4 m on one side balances F at 0.6 m on the other: F = 30 × 0.4 ÷ 0.6 = 20 N.\nA lever lets a small force at a large distance balance a large force at a small distance. Gears transmit rotation, and a larger gear turns more slowly.",
      },
      {
        title: "Physics only: pressure",
        text: "Physics only: pressure (Pa) = force (N) ÷ area (m²). A 600 N person on 0.03 m² of boot sole produces 600 ÷ 0.03 = 20 000 Pa. Spreading the force over a bigger area reduces the pressure.\nPressure in a liquid = height × density × g. At 2 m depth in water (1000 kg/m³): 2 × 1000 × 9.8 = 19 600 Pa. It increases with depth, and a liquid pushes in all directions.\nAtmospheric pressure falls with altitude because there is less air above you.",
      },
      {
        title: "Speed, acceleration and graphs",
        text: "Speed = distance ÷ time. A runner covering 150 m in 30 s moves at 5 m/s.\nAcceleration = change in velocity ÷ time. A car going from 0 to 12 m/s in 4 s has acceleration 12 ÷ 4 = 3 m/s².\nAlso v² − u² = 2as. With u = 0, a = 3 and s = 24: v² = 2 × 3 × 24 = 144, so v = 12 m/s.\nOn a distance-time graph, the gradient is speed. On a velocity-time graph, the gradient is acceleration and the area under the line is distance. Accelerating from 0 to 8 m/s in 4 s then steady for 6 s: ½ × 4 × 8 + 8 × 6 = 16 + 48 = 64 m.",
      },
      {
        title: "Newton's laws and the acceleration practical",
        text: "First law: with no resultant force, an object stays still or keeps moving at constant velocity.\nSecond law: F = ma. A 1200 kg car with a resultant force of 3000 N accelerates at 3000 ÷ 1200 = 2.5 m/s². Mass resists acceleration (inertia).\nThird law: when A pushes on B, B pushes back on A with an equal and opposite force. The two forces act on different objects.\nPractical: pull a trolley with a falling weight and time it with light gates. To change force, move masses from the trolley to the hanger so total mass stays the same. Acceleration is proportional to force.",
      },
      {
        title: "Terminal velocity and stopping distance",
        text: "A falling skydiver speeds up, air resistance grows, until it equals weight. The resultant force is then zero, so the speed stays constant: terminal velocity. Opening the parachute raises the drag, slowing them to a new, lower terminal velocity.\nStopping distance = thinking distance + braking distance. Thinking distance rises with speed and with tiredness, drugs, alcohol or distractions. Braking distance rises with speed, wet roads, worn tyres or brakes.\nBraking turns kinetic energy into heat, so a bigger deceleration means higher forces and risk.\nPhysics only: momentum = mass × velocity (kg m/s). A 1000 kg car at 15 m/s has 15 000 kg m/s. In a closed system, total momentum before = total momentum after. A 2 kg trolley at 3 m/s sticking to a 1 kg trolley at rest: 6 = 3v, so v = 2 m/s. Force = change in momentum ÷ time.",
      },
    ],
    check: [
      { q: "Find the weight of a 5 kg object on Earth (g = 9.8 N/kg).", a: "W = mg = 5 × 9.8 = 49 N." },
      { q: "A spring has k = 80 N/m. What force stretches it by 0.15 m?", a: "F = ke = 80 × 0.15 = 12 N." },
      { q: "A 1500 kg car accelerates at 2 m/s². What resultant force acts on it?", a: "F = ma = 1500 × 2 = 3000 N." },
      { q: "Explain why a skydiver reaches terminal velocity.", a: "Air resistance increases with speed until it equals weight. The resultant force is zero, so there is no further acceleration and the speed is constant." },
      { q: "Physics only: a 0.5 kg ball moving at 8 m/s is stopped in 0.2 s. Find the force.", a: "Change in momentum = 0.5 × 8 = 4 kg m/s. Force = 4 ÷ 0.2 = 20 N." },
    ],
  },

  '4.6 Waves': {
    keyPoints: [
      "Waves transfer energy without transferring matter. Transverse waves oscillate at right angles to the direction of travel; longitudinal waves oscillate along it.",
      "Wave speed (m/s) = frequency (Hz) × wavelength (m), so v = fλ. Period (s) = 1 ÷ frequency.",
      "Waves can be reflected, absorbed, transmitted or refracted at a boundary.",
      "The electromagnetic spectrum, in order of increasing frequency: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma.",
      "All electromagnetic waves travel at the same speed in a vacuum; higher-frequency waves (UV, X-ray, gamma) are ionising and harmful.",
    ],
    steps: [
      {
        title: "Transverse and longitudinal waves",
        text: "Transverse waves, such as light and ripples on water, make the medium vibrate at right angles to the direction the wave moves. Longitudinal waves, such as sound, make it vibrate parallel, producing compressions and rarefactions.\nIn both cases the wave carries energy, not matter. A floating cork bobs up and down but does not travel with the ripple.",
      },
      {
        title: "Describing waves",
        text: "Amplitude: the maximum displacement from the rest position. Wavelength (λ): the distance from one point to the same point on the next wave. Frequency: the number of waves passing a point per second, measured in hertz (Hz). Period: the time for one wave, T = 1 ÷ f.\nExample: a wave with period 0.02 s has frequency 1 ÷ 0.02 = 50 Hz.",
      },
      {
        title: "Wave speed and its practicals",
        text: "Wave speed = frequency × wavelength. A sound with f = 50 Hz and λ = 6.8 m travels at 50 × 6.8 = 340 m/s. Also speed = distance ÷ time.\nPractical (ripple tank): measure the wavelength using a ruler, count waves to find frequency (a strobe light helps to see the pattern), and calculate v = fλ.\nPractical (string): shake a stretched string at a set frequency, and measure the wavelength of the standing wave. Repeat and average.",
      },
      {
        title: "Reflection and refraction",
        text: "Reflection: the angle of incidence equals the angle of reflection, both measured from the normal (a line at 90° to the surface). A smooth surface gives a clear mirror image; a rough one scatters light.\nRefraction: a wave changes speed when it crosses into another medium. Going into a denser material (air to glass), light slows and bends towards the normal. Leaving, it speeds up and bends away. Along the normal there is no bend.\nWaves are transmitted, absorbed or reflected in different amounts depending on the material.",
      },
      {
        title: "The electromagnetic spectrum",
        text: "EM waves are transverse and travel at 3 × 10⁸ m/s in a vacuum. Increasing frequency (and decreasing wavelength): radio, microwave, infrared, visible light, ultraviolet, X-rays, gamma rays.\nExample: a radio wave with f = 1.5 × 10⁸ Hz has λ = 3 × 10⁸ ÷ 1.5 × 10⁸ = 2 m.\nRadio waves are made by alternating currents in a transmitter and produce alternating currents of the same frequency when absorbed by a receiver. Gamma rays come from changes in the nucleus.",
      },
      {
        title: "Uses and dangers",
        text: "Radio: broadcasting. Microwaves: cooking, satellite signals. Infrared: heaters, cameras, remote controls. Visible light: photography and fibre optics. UV: security marking, sun beds. X-rays: medical imaging. Gamma: sterilising equipment, treating cancer.\nUV can cause skin cancer and eye damage. X-rays and gamma are ionising: they can damage cells and cause mutations or cancer.\nRisk depends on dose, so radiographers wear lead aprons and stand behind screens.",
      },
      {
        title: "Required practical: infrared",
        text: "All objects emit infrared radiation, and hotter objects emit more.\nPractical: fill a Leslie cube (or a flask or can with different coloured sides) with hot water. Hold an infrared detector the same distance from each face and record the reading. Matt black surfaces emit and absorb the most; shiny silver surfaces the least.\nKeep the distance, water temperature and detector the same for each face.",
      },
      {
        title: "Physics only: lenses and sound",
        text: "Physics only: a convex lens brings parallel rays together at the principal focus. A concave lens spreads them out. A real image can be put on a screen; a virtual image cannot. Magnification = image height ÷ object height: a 4 mm object giving a 20 mm image has magnification 5.\nSound waves are longitudinal. Humans hear 20 Hz to 20 000 Hz; ultrasound is above 20 000 Hz and is used for medical scanning and for finding flaws.\nSeismic P waves are longitudinal and pass through solids and liquids; S waves are transverse and only pass through solids.",
      },
    ],
    check: [
      { q: "A wave has frequency 5 Hz and wavelength 0.4 m. Find its speed.", a: "v = fλ = 5 × 0.4 = 2 m/s." },
      { q: "A wave has a period of 0.25 s. What is its frequency?", a: "f = 1 ÷ 0.25 = 4 Hz." },
      { q: "What happens to light entering glass from air at an angle?", a: "It slows down and bends towards the normal." },
      { q: "Name two uses and one danger of ultraviolet radiation.", a: "Uses: security marking, sun beds (or sterilising water). Danger: can cause skin cancer and eye damage." },
      { q: "Light travels at 3 × 10⁸ m/s. Find the wavelength of light with frequency 5 × 10¹⁴ Hz.", a: "λ = v ÷ f = 3 × 10⁸ ÷ 5 × 10¹⁴ = 6 × 10⁻⁷ m." },
    ],
  },

  '4.7 Magnetism and electromagnetism': {
    keyPoints: [
      "Like poles repel and unlike poles attract. Field lines run from north to south and are closer where the field is stronger.",
      "A current in a wire creates a magnetic field. A solenoid with an iron core makes a strong electromagnet.",
      "Motor effect: force (N) = magnetic flux density (T) × current (A) × length (m), so F = BIl.",
      "Physics only: moving a wire in a magnetic field, or changing the field, induces a potential difference.",
      "Physics only: transformer equation: Vp ÷ Vs = Np ÷ Ns. The National Grid uses high voltage to cut energy loss.",
    ],
    steps: [
      {
        title: "Magnetic poles and fields",
        text: "A magnet has a north and south pole. Like poles repel, unlike poles attract. The force is strongest at the poles.\nA permanent magnet has its own field. An induced magnet (such as a piece of iron near a magnet) becomes magnetic only while it is in a field, and always attracts.\nThe magnetic field is the region where a magnetic material feels a force. Field lines go from north to south outside the magnet; the closer they are, the stronger the field.",
      },
      {
        title: "Plotting a field with a compass",
        text: "A compass needle is a small magnet that lines up with the field. Place it near a bar magnet and mark where the needle points; moving it step by step traces a field line.\nA compass points to the Earth's magnetic north, because the Earth has a magnetic field like a giant bar magnet. The field is strongest near the poles.",
      },
      {
        title: "Magnetic field from a current",
        text: "A current in a wire creates a magnetic field made of circles around the wire. The field is stronger with more current and closer to the wire. Reversing the current reverses the field direction.\nCoiling the wire into a solenoid makes the fields add up to a strong, uniform field inside, like a bar magnet. Adding an iron core makes an electromagnet stronger.\nYou can make it stronger with more current or more turns, and switch it off by stopping the current.",
      },
      {
        title: "The motor effect",
        text: "A wire with a current at right angles to a magnetic field feels a force. Fleming's left-hand rule gives its direction: first finger = field, second finger = current, thumb = force.\nForce = flux density × current × length. With B = 0.2 T, I = 5 A and l = 0.1 m: F = 0.2 × 5 × 0.1 = 0.1 N.\nReversing the current or the field reverses the force. A wire parallel to the field feels no force.",
      },
      {
        title: "Electric motors",
        text: "In a d.c. motor a coil sits between two magnets. The current runs one way up one side of the coil and the opposite way on the other, so the forces on the sides are opposite, and the coil spins.\nA split-ring commutator swaps the connection every half turn so the coil keeps turning in the same direction.\nA faster spin can come from more current, a stronger field or more turns.",
      },
      {
        title: "Physics only: induction and generators",
        text: "Physics only: moving a wire across a magnetic field, or changing the field through a coil, induces a potential difference. If the circuit is complete, a current flows. This is the generator effect.\nA bigger induced potential difference comes from faster movement, a stronger magnet, or more turns. Reversing the movement reverses the direction.\nAn a.c. generator is a coil rotating in a field, and slip rings carry the current out. Microphones and loudspeakers use these effects, with a coil attached to a diaphragm.",
      },
      {
        title: "Physics only: transformers",
        text: "Physics only: a transformer has a primary coil and secondary coil on an iron core. A changing current in the primary creates a changing field in the core, which induces a potential difference in the secondary. It only works with a.c.\nVp ÷ Vs = Np ÷ Ns. A 230 V supply on 1000 primary turns with 100 secondary turns gives Vs = 230 × 100 ÷ 1000 = 23 V. A step-up transformer has more turns on the secondary; step-down has fewer.\nFor a 100% efficient transformer, Vs × Is = Vp × Ip. If the secondary delivers 2 A at 23 V (46 W), the primary current = 46 ÷ 230 = 0.2 A.",
      },
      {
        title: "Physics only: the National Grid",
        text: "Physics only: power stations send electricity through step-up transformers to a high voltage (about 400 000 V). For the same power, a higher voltage means a lower current, and a lower current wastes less energy as heat in the wires (P = I²R).\nStep-down transformers then reduce the voltage near homes to a safe 230 V.\nThis is why overhead cables use high voltage even though it is dangerous.",
      },
    ],
    check: [
      { q: "Name two ways to increase the strength of an electromagnet.", a: "Increase the current; add more turns; add an iron core." },
      { q: "A 0.2 m wire carrying 3 A is at right angles to a 0.5 T field. Find the force.", a: "F = BIl = 0.5 × 3 × 0.2 = 0.3 N." },
      { q: "What does a split-ring commutator do in a motor?", a: "It reverses the current in the coil every half turn so the coil keeps rotating in the same direction." },
      { q: "Physics only: a transformer has 500 primary turns and 2000 secondary turns. The primary is 12 V. Find the secondary voltage.", a: "Vs = 12 × 2000 ÷ 500 = 48 V (a step-up transformer)." },
      { q: "Physics only: why does the National Grid transmit at high voltage?", a: "A high voltage means a lower current for the same power, so less energy is lost as heat in the cables." },
    ],
  },

  '4.8 Space physics': {
    keyPoints: [
      "Physics only: this whole topic is separate-science content.",
      "The Sun is a star in the Milky Way galaxy. Planets, moons and satellites orbit because of gravity.",
      "A star stays stable while the inward pull of gravity balances the outward pressure from fusion.",
      "Stars much bigger than the Sun end as supernovae, leaving neutron stars or black holes.",
      "Red-shift and the cosmic microwave background radiation support the Big Bang theory.",
    ],
    steps: [
      {
        title: "Our place in space",
        text: "Physics only: our Solar System has one star, the Sun, eight planets, dwarf planets, moons, asteroids and comets. It is part of the Milky Way galaxy, a collection of billions of stars.\nGravity is the force that holds all of this together, attracting objects that have mass.",
      },
      {
        title: "Physics only: orbits",
        text: "Physics only: planets orbit the Sun and moons orbit planets in nearly circular paths. Satellites, natural (the Moon) or man-made, orbit the Earth.\nThe force of gravity points towards the centre, so the direction of velocity keeps changing even if the speed is constant. A changing direction means the velocity (a vector) changes, so the object is accelerating.\nFor a stable orbit at a given radius there is only one speed. A closer orbit means a faster speed. If a satellite speeds up, it moves into a larger orbit.",
      },
      {
        title: "Physics only: forming a star",
        text: "Physics only: a star forms when gravity pulls a cloud of dust and gas (a nebula) together. The cloud shrinks and heats up until the temperature is high enough for hydrogen nuclei to fuse into helium. This releases energy.\nThe star is then in the main sequence stage, where the outward pressure from fusion balances the inward pull of gravity. This lasts billions of years.",
      },
      {
        title: "Physics only: stars like the Sun",
        text: "Physics only: when hydrogen runs low, a star about the size of the Sun swells to a red giant. It then sheds its outer layers and the core shrinks to a hot white dwarf, which fades into a black dwarf.",
      },
      {
        title: "Physics only: massive stars",
        text: "Physics only: a much larger star swells into a red supergiant instead. It explodes as a supernova, throwing material out into space.\nThe core left behind becomes either a very dense neutron star, or, if it is massive enough, a black hole. Even light cannot escape a black hole.",
      },
      {
        title: "Physics only: making the elements",
        text: "Physics only: fusion inside stars builds elements up to iron. The extra energy of a supernova creates the elements heavier than iron and scatters them into space.\nNew stars and planets then form from this dust and gas, which is why the Earth contains elements formed in earlier stars.",
      },
      {
        title: "Physics only: red-shift",
        text: "Physics only: light from distant galaxies is shifted towards the red end of the spectrum. This red-shift means the galaxies are moving away from us. Galaxies that are farther away show a bigger red-shift and are moving away faster.\nThis suggests the Universe is expanding.",
      },
      {
        title: "Physics only: Big Bang theory",
        text: "Physics only: the Big Bang theory says the Universe began from a very small, hot, dense region that expanded about 13.8 billion years ago.\nThe cosmic microwave background radiation (CMBR) is a weak microwave signal from all directions in space, left from the early Universe. Along with red-shift, it supports the theory.\nDark matter and dark energy are still not understood: scientists keep testing new evidence.",
      },
    ],
    check: [
      { q: "Physics only: why does an object in a circular orbit accelerate even at constant speed?", a: "Its direction keeps changing, so its velocity changes. Acceleration is the rate of change of velocity." },
      { q: "Physics only: what balances the star's gravity while it is stable?", a: "The outward pressure from the energy released in nuclear fusion." },
      { q: "Physics only: put in order: red giant, protostar, white dwarf, main sequence (for a star like the Sun).", a: "Protostar (nebula), main sequence, red giant, white dwarf." },
      { q: "Physics only: what does red-shift tell us about distant galaxies?", a: "They are moving away from us, and farther galaxies are receding faster, so the Universe is expanding." },
      { q: "Physics only: where were elements heavier than iron made?", a: "In supernova explosions." },
    ],
  },
}
