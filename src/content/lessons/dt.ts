import type { Lesson } from './types'

// Edexcel 1DT0. The three areas of national D&T content that every board shares. Paper 1 is 1h45 (50%); the NEA is 50%.
// About 15% of the marks test maths skills (ratio, scale, percentages, area and volume, tolerances).
export const DT: Record<string, Lesson> = {
  'Core technical principles': {
    keyPoints: [
      'New and emerging technologies change how things are designed and made, and affect industry, people, culture and the environment.',
      'Energy is generated from fossil fuels, nuclear and renewables, and stored in batteries and other systems; each has pros and cons.',
      'New materials (smart materials, composites, technical textiles, alloys) are chosen for properties that older materials lack.',
      'A system is input, process, output, with feedback; mechanical devices change the size, direction or type of motion.',
      'Each material family (paper and board, timber, metals, polymers, textiles) has working properties that decide where it is used.',
    ],
    steps: [
      {
        title: 'New and emerging technologies',
        text: `Emerging technology means new tools or ideas that are changing how products are made or used, such as 3D printing, robotics and automation, and the internet of things.\nImpacts: industry (faster, cheaper production, but jobs can change), people and culture (new products, new skills), society and the environment (less waste if made-to-order, but more e-waste).\nIn an evaluation, give a benefit, a drawback and who is affected.`,
      },
      {
        title: 'Energy generation and storage',
        text: `Fossil fuels (coal, oil, gas) are reliable but non-renewable and release carbon dioxide. Nuclear gives lots of power with low carbon but has waste to store.\nRenewables (wind, solar, tidal, hydroelectric) do not run out, but some depend on weather and location.\nEnergy is stored in batteries (such as lithium-ion in phones and electric cars) and cells. Choosing a battery means balancing capacity, weight, cost and recharging.`,
      },
      {
        title: 'Modern and smart materials',
        text: `Smart materials respond to changes: shape memory alloys such as nitinol return to shape when heated; thermochromic pigments change colour with temperature; photochromic ones react to light.\nComposites join two materials for better properties: carbon fibre reinforced plastic is light and stiff; glass reinforced plastic (GRP) is used for boat hulls.\nTechnical textiles are made for a performance job, such as Kevlar for protection or Gore-Tex for waterproof breathable clothing. Modern alloys and engineered timbers (like laminated veneer) also count.`,
      },
      {
        title: 'Systems approach',
        text: `A system takes an input, does a process and gives an output. A simple example is a light sensor (input), a microcontroller (process) and a street lamp (output).\nFeedback sends information from the output back to the input so the system can adjust, as with a thermostat that switches heating on and off.\nDraw system diagrams as block diagrams, and name the input, process and output in each. Flow charts show the order of decisions.`,
      },
      {
        title: 'Mechanical devices',
        text: `Levers: class 1 has the fulcrum in the middle (scissors), class 2 has the load in the middle (wheelbarrow), class 3 has the effort in the middle (tweezers).\nMechanical advantage = load ÷ effort. Gears transfer motion: gear ratio = teeth on driven gear ÷ teeth on driver gear, so a 40-tooth driven gear with a 10-tooth driver gives 4:1, slower but with more force.\nCams and followers convert rotary motion to up-and-down motion. Linkages change direction. Pulleys and belts also change speed and force.`,
      },
      {
        title: 'Paper, board and timber',
        text: `Paper and board come in different weights (gsm, grams per square metre). Cartridge paper suits drawing; corrugated card is strong and light for packaging; foam board is good for models.\nTimber is split into hardwoods (oak, beech), which are slow-growing and tough, and softwoods (pine, spruce), which are quicker-growing and cheaper. Manufactured boards such as MDF, plywood and chipboard are stable, cheaper, and come in large sheets.\nTimber can warp and needs finishing to resist moisture.`,
      },
      {
        title: 'Metals and polymers',
        text: `Ferrous metals contain iron and can rust, such as mild steel (tough, easy to weld). Non-ferrous ones, such as aluminium (light) and copper (a good conductor), don't rust. Alloys mix metals: brass is copper and zinc.\nThermoforming polymers (acrylic, polypropylene, HDPE) soften when heated and can be reshaped. Thermosetting polymers (epoxy resin, melamine formaldehyde) set permanently and cannot be reheated.\nMatch the property to the job: acrylic for clear displays, polypropylene for living hinges.`,
      },
      {
        title: 'Textiles',
        text: `Natural fibres include cotton (soft, absorbent) and wool (warm). Synthetic fibres include polyester (strong, quick-drying) and nylon (strong, hard-wearing). Blended fabrics combine the benefits.\nFabrics can be woven, knitted or non-woven. Woven fabric is stable, knitted stretches.\nProperties to compare: absorbency, strength, warmth, drape, flammability and how easily it creases.`,
      },
    ],
    check: [
      { q: 'Give one advantage and one disadvantage of wind power.', a: 'It is renewable with no carbon emissions in use; but it depends on weather and can affect landscape.' },
      { q: 'A driver gear has 12 teeth and the driven gear has 36. What is the gear ratio and what happens to speed?', a: '36 ÷ 12 = 3, so 3:1; the driven gear turns three times slower with more force.' },
      { q: 'What is a smart material? Give an example.', a: 'One that responds to a change in its environment, such as a thermochromic pigment or nitinol.' },
      { q: 'What is the difference between ferrous and non-ferrous metals?', a: 'Ferrous metals contain iron and can rust; non-ferrous do not contain iron, such as aluminium.' },
      { q: 'Why is feedback useful in a system?', a: 'It lets the system adjust its output automatically, like a thermostat keeping a room at a set temperature.' },
    ],
  },

  'Specialist technical principles': {
    keyPoints: [
      'Choose materials by properties, cost, availability, sustainability and how they will be made; justify each choice.',
      'Forces and stresses (tension, compression, bending, torsion, shear) can be resisted by shaping or reinforcing the material.',
      'A product has an ecological and social footprint from sourcing to disposal: think of the six Rs.',
      'Scale of production (one-off, batch, mass, continuous) affects cost, quality and the methods used.',
      'Surface treatments protect and improve the look of a material, and the right process depends on the material.',
    ],
    steps: [
      {
        title: 'Selecting materials',
        text: `Compare the properties needed (strength, hardness, weight, appearance, cost, ease of working) against each candidate material. Also consider availability, sustainability, and the user and use.\nExample: a bike frame needs strength and low weight, so aluminium or carbon fibre is preferred over mild steel, although it costs more.\nIn exams, "because" is what earns marks: name the property and link it to the job.`,
      },
      {
        title: 'Forces and stresses',
        text: `Materials experience tension (pulling), compression (squashing), bending, torsion (twisting) and shear (sliding forces).\nDesigners reinforce products to cope: a triangle shape (triangulation) stops frames collapsing, ribs add stiffness, and laminating or a box section increases strength without weight.\nProcesses can strengthen materials too: heat treatment hardens steel, and bending timber lengthways with the grain keeps it stronger.`,
      },
      {
        title: 'Ecological and social footprint',
        text: `A product's ecological footprint covers resources and energy used, pollution, and waste from extraction to disposal. A life cycle looks at all these stages.\nThe six Rs: rethink, refuse, reduce, reuse, repair, recycle.\nSocial footprint is about people: working conditions, fair pay (Fairtrade) and use of child labour. Carbon footprint is a measure of greenhouse gas emissions. Designers can reduce harm by using fewer parts and recycled materials.`,
      },
      {
        title: 'Sources and origins',
        text: `Natural and renewable sources include timber from managed forests (look for FSC certification). Others are finite, such as metal ores and crude oil used for polymers.\nMaterials are processed (e.g. trees to planks, ore to metal, oil to plastic) which uses energy. Recycling metal such as aluminium uses far less energy than mining new.\nRecycling codes on plastics help sorting.`,
      },
      {
        title: 'Stock forms and sizes',
        text: `Materials are sold in standard forms, so the designer chooses sizes to reduce waste: sheets, strips, bars, tubes and rods for metal and plastic; planks and planed square edge (PSE) for timber; fabrics by the metre and width; board by sheet size (A1, A2).\nUsing a standard size saves cutting and cost. Always check the stock sizes before drawing.`,
      },
      {
        title: 'Scales of production',
        text: `One-off: a single unique product, skilled, expensive. Batch: a set number of identical items, flexible (e.g. bakery batches). Mass: large numbers on a production line, usually cheaper per unit. Continuous: produced 24 hours, like paper or steel.\nJust-in-time reduces storage costs by delivering parts only when needed. Automation, CAD/CAM, jigs and templates help repeat accuracy.\nMaths: if 500 items cost £2,000 to make, the unit cost is £4.`,
      },
      {
        title: 'Specialist processes',
        text: `Know a handful of processes and when to use them. Wasting: cutting and drilling (laser cutter, CNC router). Addition: joining, adhesives and fixings. Deforming and reforming: bending, vacuum forming, injection moulding, casting.\nVacuum forming suits thin plastic trays; injection moulding suits mass production of identical shapes; die cutting suits board and fabric.\nGive reasons: injection moulding has a high mould cost but a low cost per item.`,
      },
      {
        title: 'Surface treatments',
        text: `Treatments protect from wear, moisture and corrosion, and improve appearance.\nTimber: varnish, paint, stain, oil, wax. Metals: painting, powder coating, galvanising, anodising (aluminium), plating. Polymers: self-finishing, polishing, printing. Textiles: dyeing, printing, embroidery and waterproofing.\nIn an exam, name the finish, say what it does and why it suits the material and product.`,
      },
    ],
    check: [
      { q: 'Name the five types of force on a material.', a: 'Tension, compression, bending, torsion, shear.' },
      { q: 'What are the six Rs?', a: 'Rethink, refuse, reduce, reuse, repair, recycle.' },
      { q: 'Why might a company choose batch production?', a: 'It makes a set quantity of identical items while staying flexible and avoiding the cost of a full production line.' },
      { q: 'Give a suitable finish for an outdoor wooden bench and explain why.', a: 'Exterior varnish or preservative paint, which protects against moisture and rot.' },
      { q: '1,200 identical items cost £3,000 to make. What is the unit cost?', a: '£3,000 ÷ 1,200 = £2.50.' },
    ],
  },

  'Designing and making principles': {
    keyPoints: [
      'Investigate the needs of users through primary data (first-hand) and secondary data (existing sources) and write a specification.',
      'Designers must consider environmental, social and economic challenges, and use strategies such as iterative design and user-centred design.',
      'Communicate designs with sketches, models, CAD and drawings with correct dimensions and scale.',
      'Prototypes are tested and developed; tolerances say how much a size may vary.',
      'Plan material use, pick the right tools and techniques, and keep to safe, accurate working.',
    ],
    steps: [
      {
        title: 'Investigating needs',
        text: `Start with the user and the problem. Find out who will use the product, where and why. Look at existing products, analyse them, and consider ergonomics (how comfortably people use things) and anthropometrics (human body measurements).\nPrimary data comes from you: surveys, interviews, measuring and testing. Secondary data comes from others: books, websites, statistics.\nThen write a design brief and a specification of what the product must do, with measurable points such as "must hold 2 kg".`,
      },
      {
        title: 'Challenges to consider',
        text: `Environmental: reduce waste, use fewer resources and choose recyclable or low-impact materials. Social: meet the needs of different people, including accessibility, and avoid harm. Economic: keep costs and the price realistic, with profit for the maker.\nThese can conflict: recycled material might cost more. Designers weigh the trade-offs and explain why.`,
      },
      {
        title: 'Design strategies',
        text: `Iterative design means design, make, test and improve in repeated cycles. User-centred design involves users throughout, e.g. asking for feedback on prototypes.\nOther strategies: avoiding design fixation (getting stuck on the first idea), working in a team (collaboration), and systems thinking, which looks at how all the parts work together.\nGood designers keep notes of why they changed their ideas.`,
      },
      {
        title: 'Communicating designs',
        text: `Use thumbnail sketches, annotated drawings, isometric and orthographic views, exploded diagrams, mood boards and CAD models. Annotations should explain materials, sizes and why you chose them.\nWorking drawings give dimensions in millimetres. Scale shows a drawing's size compared to real life: 1:2 means half size, 2:1 means double. A 150 mm part drawn at 1:5 is 30 mm on the page.\nCAD lets designers change and test virtual models, then send them to CAM machines.`,
      },
      {
        title: 'Prototypes and testing',
        text: `A prototype is a working test model, which can be a cheap material (card, foam, toile in cheap fabric) or a 3D print. Testing finds problems before expensive production.\nTest against the specification, ask users for feedback, and note the changes you make. Compare the prototype with the final materials to decide any changes.\nModels can be made in a different material from the final product, but say why.`,
      },
      {
        title: 'Tolerances and accuracy',
        text: `A tolerance is the allowed variation in a size. A hole of 10 mm ± 0.5 mm can be anywhere from 9.5 to 10.5 mm. Parts that fit together need tight tolerances; parts like a shelf can be looser.\nAccuracy comes from marking out carefully, using templates, jigs and gauges, and checking measurements twice. Quality control checks products against tolerance during production.\nMaths: a part of 120 mm with tolerance ± 2% can range from 117.6 to 122.4 mm.`,
      },
      {
        title: 'Materials and tools',
        text: `Material management means working efficiently: plan your cutting layout (nesting patterns) to cut waste, and use offcuts. Calculate area and volume: a board 600 mm by 400 mm has area 240,000 mm², and a block 20 mm × 30 mm × 100 mm has volume 60,000 mm³. Percentage waste = waste ÷ total × 100.\nSelect tools by the material and the task: saws and files for wood and metal, rotary cutters for fabric, laser cutters and 3D printers for CAD work. Use safe working practices, PPE and guards.`,
      },
      {
        title: 'Components and evaluation',
        text: `Select components (screws, hinges, fabric fastenings, motors) for strength, cost, size and appearance. Standard components save money and are easy to replace.\nEvaluate by testing against the specification, getting user feedback and suggesting improvements. Be specific: "The handle was 5 mm too narrow, so I would widen it".\nIn exams, "evaluate" needs a judgement with reasons.`,
      },
    ],
    check: [
      { q: 'What is the difference between primary and secondary data?', a: 'Primary data is collected first-hand, such as a survey; secondary data comes from existing sources, such as websites.' },
      { q: 'A hole is 20 mm ± 0.3 mm. What is the smallest acceptable size?', a: '19.7 mm.' },
      { q: 'What does iterative design mean?', a: 'Repeating a cycle of design, make, test and improve.' },
      { q: 'A drawing at 1:4 shows a line 25 mm long. How long is the real line?', a: '25 × 4 = 100 mm.' },
      { q: 'Why make a prototype?', a: 'To test the design against the specification and fix problems before costly production.' },
    ],
  },
}
