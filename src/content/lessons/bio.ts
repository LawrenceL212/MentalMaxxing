import type { Lesson } from './types'

// AQA GCSE Biology 8461. One lesson per topic in topics.ts. "Biology only:" marks separate-science content.
export const BIO: Record<string, Lesson> = {
  '4.1 Cell biology': {
    keyPoints: [
      'Animal and plant cells are eukaryotic (DNA in a nucleus). Bacteria are prokaryotic (DNA free in the cytoplasm, plus plasmids).',
      'Magnification = image size ÷ real size. Convert to the same units first.',
      'Mitosis makes two genetically identical diploid cells; it is how organisms grow and repair.',
      'Diffusion and osmosis are passive. Active transport uses energy from respiration to move particles against a concentration gradient.',
      'Osmosis is the net movement of water across a partially permeable membrane from a dilute solution to a more concentrated one.',
    ],
    steps: [
      {
        title: 'Eukaryotes and prokaryotes',
        text: 'Animal and plant cells have a nucleus, so they are eukaryotic. Bacterial cells are prokaryotic: their genetic material is a single DNA loop lying in the cytoplasm, and they may also carry small rings called plasmids.\nAnimal cells have a nucleus, cytoplasm, cell membrane, mitochondria (where aerobic respiration releases energy) and ribosomes (where proteins are made).\nPlant cells also have a cellulose cell wall, a permanent vacuole filled with cell sap and, in green parts, chloroplasts that contain chlorophyll for photosynthesis.',
      },
      {
        title: 'Specialised cells',
        text: 'Differentiation is when a cell changes to do one job. Its shape and contents suit its function.\nSperm: a tail to swim, lots of mitochondria for energy, and an acrosome with enzymes to digest into the egg.\nNerve cells: long with branched ends, so they carry electrical impulses over distance.\nMuscle cells: contain protein fibres that shorten, and many mitochondria.\nRoot hair cells: a long projection gives a large surface area for water and ion uptake.\nXylem is hollow, dead and strengthened by lignin; phloem has sieve plates with pores.',
      },
      {
        title: 'Microscopes and magnification',
        text: 'Light microscopes let us see cells and large organelles. Electron microscopes have much higher magnification and resolution (the ability to tell two close points apart), so they show the detail inside mitochondria, ribosomes and plasmids.\nmagnification = image size ÷ real size.\nExample: a cell is drawn 45 mm wide and its real width is 0.03 mm, so magnification = 45 ÷ 0.03 = ×1500.\nUnits: 1 mm = 1000 µm. Always convert before you divide.\nPractical: place a thin specimen on a slide, add a drop of stain, lower a coverslip at an angle to avoid air bubbles, use the lowest power objective first, focus with the coarse then fine wheel, then draw what you see with a sharp pencil and a scale.',
      },
      {
        title: 'Mitosis and the cell cycle',
        text: 'Body cells have two sets of chromosomes (diploid). In the cell cycle, the cell first grows and increases its organelles, then copies its DNA so each chromosome has two identical arms.\nIn mitosis, one full set of chromosomes is pulled to each end of the cell and a nucleus forms around each set. Finally the cytoplasm and membranes divide.\nThe result is two genetically identical daughter cells.\nMitosis is used for growth, repair and replacing cells. In many organisms it also makes asexual offspring.',
      },
      {
        title: 'Stem cells',
        text: 'A stem cell is undifferentiated: it can divide and become different types of cell.\nEmbryonic stem cells can become almost any cell type. Adult stem cells (for example in bone marrow) can only become some types, such as blood cells.\nPlants have meristems in the shoot and root tips that make stem cells for life.\nUses: replacing damaged cells (such as in paralysis or diabetes) and growing identical plants. Concerns: some people object to using embryos, and stem cells grown in a lab could carry a virus that makes the patient ill.',
      },
      {
        title: 'Diffusion and exchange',
        text: 'Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration, down a concentration gradient. No energy is needed.\nThe rate increases with a steeper concentration gradient, a higher temperature and a larger surface area.\nExamples: oxygen and carbon dioxide across the alveoli, glucose and amino acids from the gut into the blood, and urea from cells into the blood.\nBig organisms have a small surface area to volume ratio, so they need exchange surfaces with thin walls, a large area and good blood supply (like alveoli and villi).',
      },
      {
        title: 'Osmosis and the potato practical',
        text: 'Osmosis is the net movement of water across a partially permeable membrane, from a dilute solution (high water potential) to a more concentrated one (low water potential).\nPractical: cut potato cylinders of equal size, weigh each, and place them in sugar solutions of different concentrations, including pure water. After a set time, blot dry and reweigh.\nPercentage change = (final mass − starting mass) ÷ starting mass × 100.\nWhere the line crosses zero on a graph of % change against concentration, the solution matches the inside of the potato cells.\nControl variables: cylinder size, time, temperature, volume of solution.',
      },
      {
        title: 'Active transport',
        text: 'Active transport moves substances from a lower to a higher concentration, against the concentration gradient. It needs energy from respiration, so cells that use it contain many mitochondria.\nExamples: root hair cells take up mineral ions such as nitrates from dilute soil water, and the gut absorbs glucose into the blood when the concentration in the gut is lower than in the blood.\nDiffusion and osmosis are passive and need no energy; active transport does.',
      },
    ],
    check: [
      { q: 'A cell has a real width of 0.02 mm and appears 5 cm wide in a photograph. What is the magnification?', a: '5 cm = 50 mm. 50 ÷ 0.02 = ×2500.' },
      { q: 'Give two structural differences between a bacterial cell and an animal cell.', a: 'Bacteria have no nucleus (a single DNA loop in the cytoplasm) and may have plasmids; they are much smaller. Some have a cell wall that is not made of cellulose.' },
      { q: 'A potato cylinder has a mass of 2.50 g and ends at 2.80 g after time in solution. Calculate the percentage change in mass and explain what happened.', a: '(2.80 − 2.50) ÷ 2.50 × 100 = +12%. Water moved into the cells by osmosis, from a more dilute solution outside to a more concentrated one inside, through the partially permeable membrane.' },
      { q: 'Explain why root hair cells need many mitochondria.', a: 'They take up mineral ions by active transport against a concentration gradient. This needs energy, which mitochondria release by aerobic respiration.' },
      { q: 'Describe what happens to the chromosomes during mitosis.', a: 'The DNA is copied first. Then one copy of each chromosome is pulled to opposite ends of the cell and a nucleus forms around each set, giving two identical diploid cells.' },
    ],
  },

  '4.2 Organisation': {
    keyPoints: [
      'Cells form tissues, tissues form organs, and organs form organ systems.',
      'Digestive enzymes break food into small soluble molecules: carbohydrases make sugars, proteases make amino acids, lipases make fatty acids and glycerol.',
      'An enzyme works because its substrate fits the active site; heat or the wrong pH can denature it.',
      'Double circulation: right side of the heart to the lungs, left side to the body.',
      'Xylem carries water and minerals up; phloem carries dissolved sugars in both directions.',
    ],
    steps: [
      {
        title: 'Levels of organisation',
        text: 'A tissue is a group of similar cells doing one job, such as muscular tissue. An organ is made of different tissues working together, such as the stomach. An organ system is a group of organs with a shared function, such as the digestive system.\nThe stomach contains muscle (to churn food), glandular tissue (to make enzymes and acid) and epithelial tissue (to cover the inside and outside).',
      },
      {
        title: 'The digestive system',
        text: 'Food is broken down so its molecules are small enough to be absorbed into the blood.\nSalivary glands, stomach, pancreas and small intestine make enzymes. The liver makes bile, stored in the gall bladder, which is alkaline and emulsifies fats into tiny droplets. This neutralises stomach acid and gives lipase a bigger surface area to work on.\nThe stomach also makes hydrochloric acid, which kills microorganisms and gives the protease there a pH of about 2.\nThe small intestine absorbs the products; the large intestine absorbs water.',
      },
      {
        title: 'Enzymes and their action',
        text: 'Enzymes are biological catalysts made of protein. They speed up reactions without being used up.\nA substrate fits into the active site, like a key in a lock, forming an enzyme-substrate complex. The substrate is then turned into products.\nAmylase turns starch into sugars (a carbohydrase). Proteases turn proteins into amino acids. Lipases turn lipids into glycerol and fatty acids.\nIncreasing temperature speeds the reaction up until the enzyme passes its optimum. Then the active site changes shape and the enzyme is denatured. Each enzyme also has an optimum pH.',
      },
      {
        title: 'Food tests',
        text: 'Practical: crush the food in water and filter, then test the solution.\nSugars: add Benedict’s solution and heat in a water bath. Blue turns green, yellow, orange or brick red as more sugar is present.\nStarch: add iodine solution. It turns from orange-brown to blue-black.\nProtein: add biuret reagent. It turns from blue to purple.\nLipids: add Sudan III stain and a red layer collects on top. Alternatively, mix with ethanol and then water: a cloudy white emulsion forms.',
      },
      {
        title: 'Enzyme rate practical',
        text: 'Investigate how pH changes the rate of amylase. Mix amylase with starch and a buffer of a set pH, in a water bath at a fixed temperature.\nEvery 30 seconds, put a drop of the mixture into a spotting tile containing iodine. Record the time at which iodine stays orange-brown, which shows the starch has gone.\nA shorter time means a faster rate. Rate = 1000 ÷ time (s), which makes a bigger number for a faster reaction.\nControl variables: temperature, volumes and concentrations. Repeat and calculate a mean.',
      },
      {
        title: 'Heart and blood vessels',
        text: 'The heart is a double pump. The right ventricle pumps deoxygenated blood to the lungs, and the left ventricle pumps oxygenated blood around the body, so its wall is thicker.\nValves in the heart and veins stop backflow. Pacemaker cells in the right atrium set the heart rate. Coronary arteries supply the heart muscle itself.\nArteries: thick muscular, elastic walls to cope with high pressure. Veins: thinner walls, a wide lumen and valves. Capillaries: walls one cell thick, so substances diffuse quickly.\nThe lungs are where gas exchange takes place: many alveoli give a big surface area, with a thin wall and a rich blood supply.',
      },
      {
        title: 'Blood and heart disease',
        text: 'Plasma carries dissolved substances such as glucose, urea and carbon dioxide. Red blood cells carry oxygen using haemoglobin, are biconcave for surface area and have no nucleus. White blood cells fight pathogens. Platelets are fragments that help blood clot.\nIn coronary heart disease, fatty material builds up in the coronary arteries and narrows them, so less blood reaches the heart muscle.\nTreatments: stents hold the artery open; statins lower blood cholesterol, though they can have side effects. Faulty valves can be replaced with mechanical or biological ones. For heart failure, a donor heart or an artificial heart may be used.',
      },
      {
        title: 'Health, cancer and plants',
        text: 'Non-communicable diseases are not passed from person to person. They are often caused by many risk factors, such as smoking, obesity, alcohol and diet. Cancer is uncontrolled cell division. Benign tumours stay in one place; malignant cells invade other tissues and spread in the blood to form secondary tumours.\nPlants: the epidermis covers the leaf; palisade mesophyll does most photosynthesis; spongy mesophyll has air spaces for gas exchange; guard cells open and close the stomata; meristems make new cells.\nTranspiration is evaporation from the leaves, pulling water up the xylem. Light, higher temperature, air movement and low humidity all speed it up. Phloem moves sugars by translocation.',
      },
    ],
    check: [
      { q: 'Name the enzyme that breaks down starch, and the product.', a: 'Amylase (a carbohydrase), producing sugars such as maltose and glucose.' },
      { q: 'Explain why a high temperature stops an enzyme working.', a: 'The shape of the active site changes, so the substrate no longer fits. The enzyme is denatured.' },
      { q: 'A sample of food turns blue-black with iodine and purple with biuret. What does it contain?', a: 'Starch and protein.' },
      { q: 'In an enzyme experiment, the iodine stopped being blue-black after 80 s at pH 7 and 200 s at pH 5. Calculate the rate (1000 ÷ time) for each and say what it shows.', a: 'pH 7: 1000 ÷ 80 = 12.5. pH 5: 1000 ÷ 200 = 5. The enzyme is faster at pH 7, which is closer to its optimum.' },
      { q: 'Explain how bile helps digestion.', a: 'It is alkaline, so it neutralises acid from the stomach, giving the right pH for enzymes. It emulsifies fats, increasing their surface area so lipase can digest them faster.' },
    ],
  },

  '4.3 Infection and response': {
    keyPoints: [
      'Pathogens are bacteria, viruses, fungi or protists. They are spread by air, water, direct contact, food and vectors.',
      'The body defends itself with barriers, then white blood cells: phagocytosis, antibodies and antitoxins.',
      'Vaccines contain a weakened or dead pathogen, so memory cells make antibodies faster next time.',
      'Antibiotics kill bacteria, not viruses. Overuse leads to resistant strains.',
      'New drugs go through preclinical and clinical trials before use.',
    ],
    steps: [
      {
        title: 'Pathogens and spread',
        text: 'A pathogen is a microorganism that causes disease. Communicable diseases pass between people or between animals and people.\nSpread: through the air in droplets (measles), by contact (athlete’s foot), in dirty water or food, through bodily fluids (HIV), or by a vector such as a mosquito.\nPrevention includes hygiene, isolating sufferers, controlling vectors and vaccination.',
      },
      {
        title: 'Examples of diseases',
        text: 'Viruses: measles gives a fever and red skin rash, and spreads through droplets. HIV attacks white blood cells and can lead to AIDS; it spreads by sexual contact or exchange of body fluids. Tobacco mosaic virus makes a mosaic of discoloured patches on leaves, reducing photosynthesis.\nBacteria: Salmonella causes food poisoning with fever, cramps, vomiting and diarrhoea. Gonorrhoea gives pain on urination and a thick discharge; it is an STI and is now often resistant to antibiotics.\nFungus: rose black spot makes purple or black spots on leaves, which then drop off. Protist: malaria is carried by mosquitoes and causes recurrent fever.',
      },
      {
        title: 'Defences against infection',
        text: 'Physical barriers: skin, and mucus and hairs in the nose. The trachea and bronchi have mucus and cilia that sweep microbes away. Stomach acid kills pathogens that are swallowed.\nIf pathogens get in, white blood cells attack. Phagocytosis is when a white cell engulfs and digests the pathogen. Lymphocytes make specific antibodies that bind to antigens on the pathogen. Others make antitoxins that neutralise toxins.\nAntibodies are specific, so a new strain needs new antibodies.',
      },
      {
        title: 'Vaccination',
        text: 'A vaccine contains a dead or weakened form of the pathogen, or parts of it. The antigens make lymphocytes produce antibodies without making you ill.\nMemory cells stay in the blood. If the real pathogen arrives, they produce the right antibodies quickly and in large numbers, so you are protected.\nIf enough people are vaccinated, the pathogen cannot spread easily and unvaccinated people are protected too (herd immunity).\nSmall risk: a few people have a bad reaction. The benefit is far larger.',
      },
      {
        title: 'Antibiotics and painkillers',
        text: 'Antibiotics such as penicillin kill bacteria or stop them growing. They do not work on viruses, because viruses live inside our cells. Painkillers treat symptoms only; they do not kill pathogens.\nBacteria mutate. A mutated bacterium that survives treatment reproduces, and the resistant strain spreads (such as MRSA). To slow this, doctors should not prescribe antibiotics for viral infections, and patients should finish the course.',
      },
      {
        title: 'Discovering and testing drugs',
        text: 'Some drugs came from plants (digitalis from foxgloves for the heart, aspirin from willow) or microorganisms (penicillin from mould, found by Alexander Fleming). Now most are synthesised by chemists.\nNew drugs are tested for toxicity, side effects and dose. Preclinical trials use cells, tissues and animals. Clinical trials use healthy volunteers at low doses, then patients.\nIn a double-blind trial, neither the patient nor the doctor knows who gets the real drug or a placebo, which removes bias.',
      },
      {
        title: 'Biology only (Higher): monoclonal antibodies',
        text: 'Biology only (Higher): Monoclonal antibodies are identical antibodies from one clone of cells. A mouse is given the antigen, and its lymphocytes are fused with tumour cells to make hybridoma cells. These divide forever and secrete one type of antibody.\nUses: pregnancy tests (they bind to the hormone hCG), diagnosing disease, locating a substance in a cell or tissue, and treating cancer by carrying a drug or radioactive substance to cancer cells. Side effects have been worse than first hoped.',
      },
      {
        title: 'Biology only: plant disease and microbes',
        text: 'Biology only: Plant diseases show as stunted growth, spots, decay, malformed stems or leaves, discolouration or pests. Nitrate deficiency stunts growth; magnesium deficiency makes leaves yellow because chlorophyll cannot be made.\nPlants defend with a waxy cuticle, cell walls, bark, thorns, mimicry and poisons.\nCulturing microorganisms: sterilise Petri dishes and the loop, spread bacteria on agar, tape the lid lightly, invert, and incubate at about 25 °C to avoid growing human pathogens. Add discs of antibiotic: a clear zone around a disc shows bacteria were killed. Area of zone = πr²; a bigger area means a more effective antibiotic.',
      },
    ],
    check: [
      { q: 'Explain why antibiotics are not used to treat colds.', a: 'Colds are caused by viruses. Antibiotics only kill bacteria, and viruses reproduce inside body cells.' },
      { q: 'Describe how a vaccine protects against a disease.', a: 'The weakened or dead pathogen carries antigens that make lymphocytes produce antibodies. Memory cells remain, so if the real pathogen enters, antibodies are made quickly in large numbers.' },
      { q: 'Name three ways the body stops pathogens entering.', a: 'Skin, mucus and hairs in the nose, cilia and mucus in the trachea, stomach acid.' },
      { q: 'Explain how antibiotic-resistant bacteria arise.', a: 'A mutation makes a bacterium resistant. When antibiotics are used, non-resistant bacteria die but the resistant one survives and reproduces, so the resistant strain becomes common.' },
      { q: 'Biology only: a clear zone around an antibiotic disc has a radius of 1.5 cm. Calculate its area (use π = 3.14).', a: 'πr² = 3.14 × 1.5² = 3.14 × 2.25 = 7.07 cm² (about 7.1 cm²).' },
    ],
  },

  '4.4 Bioenergetics': {
    keyPoints: [
      'Photosynthesis: carbon dioxide + water → glucose + oxygen. Light energy is absorbed by chlorophyll, and the reaction is endothermic.',
      'Light intensity, carbon dioxide concentration and temperature can each be the limiting factor.',
      'Aerobic respiration: glucose + oxygen → carbon dioxide + water. It is exothermic and releases energy for the cell.',
      'Anaerobic respiration releases much less energy. In muscles it makes lactic acid; in yeast it makes ethanol and carbon dioxide.',
      'Metabolism is all the chemical reactions in a cell or organism.',
    ],
    steps: [
      {
        title: 'Photosynthesis',
        text: 'Plants and algae make glucose in their chloroplasts using light energy absorbed by chlorophyll.\ncarbon dioxide + water → glucose + oxygen\n6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂\nIt is an endothermic reaction: energy is transferred from the surroundings (light) to the chloroplasts.',
      },
      {
        title: 'Limiting factors',
        text: 'A limiting factor is the thing in shortest supply that stops the rate rising further. For photosynthesis it can be light intensity, carbon dioxide concentration, temperature, or the amount of chlorophyll.\nOn a graph, the rate rises and then levels off. At the flat part another factor is now limiting. Too high a temperature (above about 45 °C) denatures enzymes, so the rate drops.\nGrowers use this idea in greenhouses: adding light, warmth and extra carbon dioxide raises yield, but they must balance the extra cost against the extra profit.',
      },
      {
        title: 'Light intensity practical',
        text: 'Use a piece of pondweed in water, with a lamp at a measured distance. Count bubbles of oxygen released per minute, or collect the gas in a syringe.\nMove the lamp to different distances and repeat each three times. Control temperature (a heat shield or water bath), carbon dioxide (add sodium hydrogencarbonate) and size of the weed.\nHigher tier: light intensity is proportional to 1 ÷ distance². Doubling the distance makes the light intensity one quarter. Rate depends on intensity, so a graph of rate against 1/d² gives a straight line until another factor limits.',
      },
      {
        title: 'Uses of glucose in plants',
        text: 'Plants use the glucose they make for respiration to release energy. They also convert it into starch for storage, cellulose for cell walls, fats and oils for storage in seeds, and, with nitrate ions from the soil, amino acids for protein.\nPlants respire all the time, but photosynthesis during the day is faster than respiration, so they take in carbon dioxide and release oxygen overall.',
      },
      {
        title: 'Aerobic respiration',
        text: 'Respiration is the process that releases energy from glucose. It goes on in all living cells, all the time, not just when we breathe.\nAerobic respiration uses oxygen and mostly occurs in mitochondria:\nglucose + oxygen → carbon dioxide + water\nIt is exothermic: energy is released, which is used for movement, building molecules and keeping warm.',
      },
      {
        title: 'Anaerobic respiration',
        text: 'Without enough oxygen, cells respire anaerobically. It releases much less energy per glucose, because glucose is only partly broken down.\nIn muscles: glucose → lactic acid.\nIn plant and yeast cells: glucose → ethanol + carbon dioxide. This is fermentation, used in brewing and bread making.',
      },
      {
        title: 'Response to exercise',
        text: 'During hard exercise muscles need more energy, so heart rate, breathing rate and breath volume go up to deliver more oxygen and glucose and remove carbon dioxide.\nIf oxygen cannot be supplied fast enough, muscles respire anaerobically and lactic acid builds up, causing fatigue. After exercise you keep breathing hard, repaying the oxygen debt: the extra oxygen needed to break down lactic acid, which is carried in the blood to the liver.',
      },
      {
        title: 'Metabolism',
        text: 'Metabolism is the sum of all the reactions in a cell or the body. Many of these use the energy from respiration to build bigger molecules from smaller ones.\nExamples: glucose to starch, glycogen and cellulose; glycerol and fatty acids to lipids; glucose with nitrate to amino acids, then proteins. Breaking down excess protein makes urea.',
      },
    ],
    check: [
      { q: 'Write the word equation for photosynthesis.', a: 'Carbon dioxide + water → glucose + oxygen (in the presence of light and chlorophyll).' },
      { q: 'A graph of photosynthesis rate against light intensity levels off. Suggest why.', a: 'Light is no longer limiting; another factor, such as carbon dioxide concentration or temperature, is now in short supply.' },
      { q: 'Explain why anaerobic respiration releases less energy than aerobic respiration.', a: 'Glucose is only partly broken down (to lactic acid or ethanol) instead of fully oxidised to carbon dioxide and water.' },
      { q: 'Why do you keep breathing heavily after finishing a sprint?', a: 'To repay the oxygen debt: oxygen is needed to break down the lactic acid built up during anaerobic respiration.' },
      { q: 'Higher tier: a lamp is moved from 10 cm to 20 cm from pondweed. How does the light intensity change?', a: 'Distance doubles, so intensity is divided by 2² = 4. It falls to a quarter.' },
    ],
  },

  '4.5 Homeostasis and response': {
    keyPoints: [
      'Homeostasis keeps internal conditions (temperature, blood glucose, water) steady using automatic control with receptors, a coordination centre and effectors.',
      'Nerve pathway: stimulus → receptor → sensory neurone → CNS → motor neurone → effector → response. Reflexes are fast and automatic.',
      'Blood glucose is controlled by insulin (lowers it) and glucagon (raises it) from the pancreas.',
      'Menstrual cycle hormones: FSH, LH, oestrogen, progesterone.',
      'Biology only: ADH controls urine concentration, the hypothalamus controls temperature, and auxin controls plant growth responses.',
    ],
    steps: [
      {
        title: 'What homeostasis is',
        text: 'Homeostasis is the regulation of conditions inside the body to keep them optimum for enzymes and cells. It covers temperature, blood glucose and water content.\nEvery control system has receptors (detect a stimulus), a coordination centre (such as the brain, spinal cord or pancreas) that processes the information, and effectors (muscles or glands) that bring about the response.\nThese work by negative feedback: a change triggers a response that reverses it.',
      },
      {
        title: 'The nervous system and reflexes',
        text: 'Sensory receptors send electrical impulses along sensory neurones to the central nervous system (brain and spinal cord). A motor neurone then carries the impulse to an effector.\nNeurones meet at a synapse, a tiny gap. A chemical is released, diffuses across the gap and triggers a new impulse in the next neurone.\nA reflex is fast, automatic and protective: stimulus → receptor → sensory neurone → relay neurone in the spinal cord → motor neurone → effector. The brain is not involved in deciding.',
      },
      {
        title: 'Reaction time practical',
        text: 'Reaction time is how long it takes to respond to a stimulus. One person holds a 30 cm ruler vertically; the other catches it between thumb and finger when it is dropped without warning. Record the distance fallen and convert it to time using a table.\nRepeat several times and calculate a mean. Then test the effect of a variable, such as caffeine or using the other hand, only changing one thing.\nExample: results 0.20 s, 0.24 s, 0.22 s give a mean of 0.66 ÷ 3 = 0.22 s. Keep the same person dropping the ruler, and the same start position.',
      },
      {
        title: 'Hormones and blood glucose',
        text: 'The endocrine system is made of glands that secrete hormones directly into the blood. Hormones are slower than nerves but have longer-lasting effects. The pituitary gland is the master gland, and it releases hormones that control other glands. Others: thyroid, pancreas, adrenal glands, ovaries and testes.\nAfter a meal, if blood glucose is too high, the pancreas releases insulin. Cells take up glucose, and the liver stores it as glycogen. If glucose is too low, the pancreas releases glucagon, so the liver converts glycogen back to glucose.\nType 1 diabetes: the pancreas does not make enough insulin; treat with insulin injections and diet. Type 2: cells stop responding to insulin; linked to obesity; treat with diet, exercise and weight loss.',
      },
      {
        title: 'Reproductive hormones',
        text: 'At puberty, testosterone (from the testes) and oestrogen (from the ovaries) cause secondary sexual characteristics.\nThe menstrual cycle lasts about 28 days. Day 1 is the start of bleeding when the lining of the uterus breaks down. The lining then rebuilds. An egg is released at about day 14 (ovulation).\nFSH from the pituitary makes an egg mature and stimulates oestrogen. LH triggers ovulation. Progesterone, from the empty follicle, maintains the lining.\nContraception: the pill (oestrogen and progesterone) stops FSH release so eggs do not mature; barrier methods such as condoms also prevent STIs. IVF (Higher tier) uses FSH and LH to stimulate eggs, which are fertilised in a lab and the embryos placed in the uterus. It is expensive and can be stressful with a low success rate.',
      },
      {
        title: 'Biology only: brain and eye',
        text: 'Biology only: The cerebral cortex handles memory, language and consciousness; the cerebellum coordinates movement and balance; the medulla controls unconscious actions such as heart rate and breathing. Scans (MRI) help study the brain, but treating brain damage is difficult.\nThe eye: the cornea refracts light, the lens focuses it on the retina, which has receptor cells, and the optic nerve carries the impulses. In bright light the iris makes the pupil small.\nTo focus on near objects, ciliary muscles contract, the suspensory ligaments slacken and the lens becomes thicker. For distant objects the muscles relax, the ligaments tighten and the lens is pulled thin.\nShort sight needs a concave lens; long sight a convex lens.',
      },
      {
        title: 'Biology only: kidneys and temperature',
        text: 'Biology only: The kidneys filter the blood and reabsorb all the glucose, some ions and as much water as needed. Excess urea, ions and water leave as urine. Urea is made in the liver from excess amino acids.\nADH is released by the pituitary when the blood is too concentrated. It makes the kidney tubules reabsorb more water, so little, concentrated urine is made.\nKidney failure is treated by dialysis, where blood passes along a partially permeable membrane with dialysis fluid on the other side, or by transplant (risk of rejection).\nTemperature: the thermoregulatory centre in the hypothalamus detects blood temperature, and skin receptors detect the surroundings. When hot: sweating and vasodilation. When cold: shivering and vasoconstriction, and sweat stops.',
      },
      {
        title: 'Biology only: plant hormones',
        text: 'Biology only: Auxin is made in the shoot tip. In a shoot lit from one side, auxin collects on the shaded side, making those cells elongate faster, so the shoot bends towards the light (phototropism).\nIn roots, gravity moves auxin to the lower side but there it inhibits growth, so roots bend down (gravitropism).\nHigher tier: gibberellins end seed dormancy and promote germination and flowering. Ethene controls cell division and ripens fruit.\nHigher tier uses: rooting powder to make cuttings grow, weedkillers, seedless fruit, and ethene to ripen fruit on the way to shops.',
      },
    ],
    check: [
      { q: 'Put in order: effector, sensory neurone, receptor, motor neurone, coordinator.', a: 'Receptor, sensory neurone, coordinator (CNS), motor neurone, effector.' },
      { q: 'Explain how the body responds when blood glucose is too high.', a: 'The pancreas releases insulin. Cells take up glucose and the liver converts it to glycogen, so blood glucose falls.' },
      { q: 'Reaction times for one student were 0.18 s, 0.21 s, 0.24 s and 0.21 s. Calculate the mean.', a: '(0.18 + 0.21 + 0.24 + 0.21) ÷ 4 = 0.84 ÷ 4 = 0.21 s.' },
      { q: 'What is the difference between type 1 and type 2 diabetes?', a: 'In type 1 the pancreas does not make enough insulin. In type 2 the body cells no longer respond properly to insulin.' },
      { q: 'Biology only: explain why little urine is produced when you are dehydrated.', a: 'Blood is more concentrated, so the pituitary releases more ADH. This makes the kidney reabsorb more water, so a small volume of concentrated urine is produced.' },
    ],
  },

  '4.6 Inheritance, variation and evolution': {
    keyPoints: [
      'Sexual reproduction mixes genes from two parents using gametes made by meiosis; asexual reproduction gives clones by mitosis.',
      'A gene is a section of DNA that codes for a protein. The genome is all of an organism’s DNA.',
      'Dominant alleles show when present once; recessive alleles show only when two copies are present.',
      'Variation comes from genes (mutations and sexual reproduction) and from the environment.',
      'Natural selection: better-adapted individuals survive, reproduce and pass on their alleles.',
    ],
    steps: [
      {
        title: 'Types of reproduction',
        text: 'Sexual reproduction: two gametes (sperm and egg, or pollen and ovule) fuse at fertilisation. The offspring have a mixture of genes from both parents, so show variation.\nMeiosis makes the gametes. It happens in the reproductive organs and creates four cells that each have half the chromosomes (haploid) and are genetically different. Fertilisation restores the full number: 46 in humans.\nAsexual reproduction involves one parent and mitosis, producing genetically identical clones with no gamete fusion. Some organisms can use both: malaria protists and many plants, for example strawberries with runners.',
      },
      {
        title: 'DNA, genes and the genome',
        text: 'DNA is a double helix polymer. A gene is a section of DNA that codes for a particular protein by the order of its bases. The genome is the entire set of genetic material in an organism; understanding the human genome helps find genes linked to disease and trace migration.\nBiology only: DNA is made of nucleotides, each with a sugar, a phosphate and one of four bases (A, T, C, G). A pairs with T, and C with G. Three bases in a row code for one amino acid. Mutations change the base sequence and can change the protein; non-coding DNA can switch genes on and off.',
      },
      {
        title: 'Alleles and key terms',
        text: 'Alleles are different versions of a gene. Genotype is the combination of alleles a person has; phenotype is the characteristic that shows.\nHomozygous: two identical alleles. Heterozygous: two different alleles.\nA dominant allele (capital letter) shows even with only one copy. A recessive allele (lower case) only shows when both are recessive.\nMost characteristics are controlled by several genes, not just one. Biology only: Gregor Mendel worked this out by crossing pea plants.',
      },
      {
        title: 'Punnett squares',
        text: 'To predict a cross, write each parent’s gametes along the sides of a square and fill in the offspring.\nExample: both parents are Cc (carriers of cystic fibrosis, caused by recessive allele c). The offspring are CC, Cc, Cc, cc. That is a 3:1 ratio of unaffected to affected, so the chance of a child with cystic fibrosis is 1 in 4 (25%).\nRemember these are probabilities. Each child is a fresh chance.\nPolydactyly (extra fingers) is caused by a dominant allele. Embryos can be screened for harmful alleles, though some people have ethical concerns.',
      },
      {
        title: 'Sex determination',
        text: 'Humans have 23 pairs of chromosomes; one pair decides sex. Females are XX and males XY.\nAll eggs carry an X. Half of sperm carry X and half carry Y. So the chance of a boy or a girl is 50:50 each time.\nMale XY × female XX gives XX, XX, XY, XY.',
      },
      {
        title: 'Variation and natural selection',
        text: 'Variation within a species is caused by genes, the environment, or both. Mutations are random changes in DNA; most do nothing, a few help or harm and rarely produce a new phenotype.\nBiology only: Charles Darwin’s theory: individuals differ, those with characteristics that suit the environment are more likely to survive and breed, and pass on their alleles. Over many generations, the allele becomes more common. If two populations become so different they can no longer interbreed, new species form.\nEvidence: fossils (from hard parts, parts replaced by minerals, or preserved in ice, amber or traces); the fossil record is incomplete because many early life forms were soft-bodied or the fossils were destroyed. Rapid evolution is seen in antibiotic-resistant bacteria. Extinction may result from environmental change, new predators, disease or competition.',
      },
      {
        title: 'Selective breeding and genetic engineering',
        text: 'Selective breeding: choose parents with a useful feature, breed them, choose the best offspring, and repeat for many generations. Examples: disease-resistant crops, dogs with a gentle nature, cows with high milk yield. Drawbacks: inbreeding reduces the gene pool and can lead to inherited defects.\nGenetic engineering moves a gene from one organism into another. Higher tier: enzymes cut the gene out and the gene is inserted into a vector such as a plasmid or virus, then into the target cell, at an early stage so all cells carry it.\nExamples: bacteria that make human insulin, and crops that resist pests or herbicides. Concerns: effects on wild flowers and insects, and unknown health effects. Biology only: cloning uses cuttings, tissue culture, embryo transplants and adult cell cloning.',
      },
      {
        title: 'Classification',
        text: 'Linnaeus classified living things into kingdom, phylum, class, order, family, genus and species. Organisms are named with the binomial system using the genus and species, for example Homo sapiens.\nAs microscopes improved and biochemistry developed, scientists found that the old system needed updating. Carl Woese proposed three domains: archaea, bacteria and eukaryota, based on chemical analysis of cells.\nEvolutionary trees show how species are related using current and extinct species and their common ancestors.',
      },
    ],
    check: [
      { q: 'Two heterozygous parents (Ff) have a child. What is the probability the child is ff?', a: 'Offspring: FF, Ff, Ff, ff, so the probability is 1 in 4 (0.25 or 25%).' },
      { q: 'Explain how meiosis produces genetic variation.', a: 'It makes four gametes with half the chromosomes, each with a different mix of alleles. Random fertilisation then combines two different gametes.' },
      { q: 'What is the difference between genotype and phenotype?', a: 'Genotype is the combination of alleles; phenotype is the observable characteristic that results.' },
      { q: 'Explain, using natural selection, how a population of bacteria becomes antibiotic resistant.', a: 'A mutation gives some bacteria resistance. They survive treatment while others die, reproduce and pass on the allele, so the resistant strain becomes more common.' },
      { q: 'A couple already have three daughters. What is the chance their next child is a boy?', a: '50% (1 in 2). Each fertilisation is independent.' },
    ],
  },

  '4.7 Ecology': {
    keyPoints: [
      'Organisms depend on each other and on abiotic factors (non-living) and biotic factors (living) in their ecosystem.',
      'Producers make biomass by photosynthesis; consumers feed on others; decomposers return materials.',
      'Quadrats estimate population size; transects show how organisms change along a gradient.',
      'The carbon and water cycles recycle materials.',
      'Human activity reduces biodiversity and causes pollution and global warming; it can be reduced through conservation.',
    ],
    steps: [
      {
        title: 'Ecosystems and interdependence',
        text: 'An ecosystem is all the living organisms and their non-living surroundings in an area. A community is all the populations living in one habitat. A population is all the members of one species in an area.\nOrganisms compete for resources. Animals compete for food, mates and territory; plants compete for light, water, space and mineral ions.\nInterdependence means organisms rely on each other. In a stable community, the species and environmental factors balance so populations stay about constant. If one species changes, others are affected.',
      },
      {
        title: 'Abiotic and biotic factors',
        text: 'Abiotic factors are non-living: light intensity, temperature, moisture, soil pH and mineral content, wind intensity and direction, carbon dioxide level for plants, and oxygen level for aquatic animals.\nBiotic factors are living: availability of food, new predators, new pathogens, competition (such as grey squirrels replacing red ones).\nPredator-prey populations rise and fall in cycles. If prey numbers go up, predator numbers go up shortly afterwards, then prey fall again.',
      },
      {
        title: 'Adaptations',
        text: 'Adaptations help an organism survive. Structural: a polar bear’s thick fur and fat. Behavioural: migrating or hibernating. Functional (processes): a camel’s kidneys producing very concentrated urine.\nSome organisms, called extremophiles, live in extreme conditions such as high temperature, pressure or salt concentration, for example in deep-sea vents.\nGive links in answers: name the feature, then explain how it helps survival.',
      },
      {
        title: 'Field investigations',
        text: 'Use a quadrat (a square frame, often 1 m²) to count organisms in a sample. Place quadrats at random, using random coordinates from a tape measure grid, to avoid bias. Use enough quadrats and calculate a mean.\nEstimated population = mean number per quadrat × (total area ÷ quadrat area).\nExample: a mean of 4.5 daisies per 1 m² quadrat across a 400 m² field gives about 4.5 × 400 = 1800 daisies.\nTo show change across a gradient, such as from a hedge into a field, lay a tape as a transect and place quadrats at regular intervals. Measure an abiotic factor, such as light, at each point.',
      },
      {
        title: 'Cycling materials',
        text: 'Carbon cycle: plants take in carbon dioxide by photosynthesis, making sugars, fats and proteins. Animals get carbon by eating. Respiration by plants, animals and microorganisms, burning (combustion) and decomposition release carbon dioxide into the air. Fossil fuels are a long-term store.\nWater cycle: the Sun’s energy evaporates water, it condenses and falls as precipitation, flows over land and seeps into the ground, and returns to the sea. Fresh water is made drinkable by filtering and sterilising.\nDecay: decomposers (bacteria and fungi) break down dead material and return mineral ions to the soil. Decay is quicker when warm, wet and with plenty of oxygen. Gardeners make compost this way.',
      },
      {
        title: 'Biology only: rate of decay practical',
        text: 'Biology only: A common investigation looks at how temperature affects the rate of decay of fresh milk. Milk is mixed with lipase, an alkali and an indicator (such as phenolphthalein). Lipase digests fat to fatty acids, which lower pH, so the indicator changes colour from pink to colourless.\nRecord the time taken for the colour to change at different temperatures in a water bath. A shorter time means a faster rate; very high temperatures denature the enzyme.\nDecay of waste in the absence of oxygen can make biogas (mostly methane) in a digester, used as a fuel.',
      },
      {
        title: 'Biodiversity and human impact',
        text: 'Biodiversity is the variety of all the different species on Earth or in an ecosystem. A high biodiversity makes ecosystems more stable, because species depend less on each other.\nHumans reduce biodiversity by using land for farming, building, quarrying and dumping waste, by pollution of water (fertilisers, sewage), air (smoke, acidic gases) and land (landfill), and by destroying habitats.\nDeforestation and the destruction of peat bogs release carbon dioxide into the air. Carbon dioxide and methane are greenhouse gases that trap heat, contributing to global warming. Effects include rising sea levels, changes in rainfall, and species being forced to move.\nProtection: breeding programmes, protecting rare habitats, replanting hedgerows, reducing deforestation and recycling.',
      },
      {
        title: 'Biology only: food and energy flow',
        text: 'Biology only: Trophic levels describe feeding position: producers, primary consumers, secondary consumers, tertiary consumers. A pyramid of biomass shows the dry mass at each level, getting smaller going up.\nBiomass is lost between levels because not everything is eaten, some is egested, and some is used in respiration (releasing carbon dioxide and heat) and waste.\nefficiency = biomass transferred ÷ biomass available × 100.\nExample: 8000 kJ in the plants and 800 kJ in the next level gives 800 ÷ 8000 × 100 = 10%.\nFood security means having enough food. Threats include population growth, climate change, new pests and farming costs. Methods of increasing supply include reduced waste, using fungus-based mycoprotein, and, with ethical limits, restricted movement of farm animals to reduce energy loss. Fishing needs quotas and net-size limits to maintain fish stocks.',
      },
    ],
    check: [
      { q: 'Define the term community.', a: 'All the populations of different species living together in one habitat.' },
      { q: 'A quadrat of 0.5 m² is used. The mean count is 6. Estimate the number of plants in a 300 m² area.', a: '6 ÷ 0.5 = 12 per m². 12 × 300 = 3600 plants.' },
      { q: 'Explain why quadrats should be placed randomly.', a: 'To avoid bias in where samples are taken, so the results are representative of the whole area.' },
      { q: 'Describe how carbon in the air becomes part of an animal.', a: 'Plants absorb carbon dioxide in photosynthesis to make glucose and other compounds. An animal then eats the plant, and the carbon is built into its own molecules.' },
      { q: 'Biology only: a food chain passes 2000 kJ to a rabbit, which passes 150 kJ to a fox. Calculate the percentage transfer from rabbit to fox and give two reasons for the loss.', a: '150 ÷ 2000 × 100 = 7.5%. Lost through respiration (as heat), uneaten parts such as bone and fur, and egested waste.' },
    ],
  },
}
