import type { Lesson } from './types'

// OCR J277 Computer Science. One lesson per topic in topics.ts. Programming examples use OCR Exam Reference Language style.
export const CS: Record<string, Lesson> = {
  '1.1 Systems architecture': {
    keyPoints: [
      `The CPU runs programs by repeating the fetch-decode-execute cycle, one instruction at a time.`,
      `Von Neumann design: instructions and data share the same main memory and are both stored as binary.`,
      `The control unit directs the CPU, the ALU does arithmetic and logic, and registers hold values the CPU is using right now.`,
      `Key registers: PC (next address), MAR (address being used), MDR (data just moved), ACC (results).`,
      `Clock speed, number of cores and cache size all affect how fast a CPU feels.`,
      `An embedded system is a computer built into a device to do one dedicated job.`,
    ],
    steps: [
      {
        title: 'What the CPU is for',
        text: `The central processing unit (CPU) is the part of a computer that runs program instructions. Everything you do on a device, from opening an app to scrolling a feed, becomes a long list of tiny instructions for the CPU.\nIt works on one instruction at a time, but billions of times each second.`,
      },
      {
        title: 'The Von Neumann idea',
        text: `In a Von Neumann computer, the program and the data it uses live together in the same main memory (RAM). Both are stored as binary.\nThis means the CPU can load any program just by copying it into memory, which is why one computer can run a game, then a spreadsheet.\nThe CPU fetches each instruction from memory in order.`,
      },
      {
        title: 'ALU, control unit, cache',
        text: `The arithmetic logic unit (ALU) does the sums (add, subtract) and the logic (AND, OR, NOT, comparisons).\nThe control unit (CU) decodes each instruction and sends signals telling other parts what to do.\nCache is a small, very fast memory inside or next to the CPU. It keeps recently used data close, so the CPU waits less for RAM.`,
      },
      {
        title: 'The four registers',
        text: `Registers are tiny, very fast storage spots inside the CPU.\nProgram counter (PC): holds the address of the next instruction.\nMemory address register (MAR): holds the address the CPU wants to read or write.\nMemory data register (MDR): holds the data that has just been read from, or is about to be written to, memory.\nAccumulator (ACC): holds the results of ALU calculations.`,
      },
      {
        title: 'Fetch, decode, execute',
        text: `Fetch: the address in the PC is copied to the MAR. The instruction at that address is copied into the MDR. The PC then goes up by one.\nDecode: the control unit works out what the instruction means.\nExecute: the instruction is carried out, for example the ALU adds two numbers and the answer goes into the ACC.\nThen the cycle starts again.`,
      },
      {
        title: 'What makes a CPU faster',
        text: `Clock speed is how many cycles the CPU does per second. 3 GHz means 3 billion cycles a second.\nMore cores mean more instructions can run at the same time, but only if the program can split its work up.\nBigger cache means fewer slow trips to RAM.\nThese factors work together, so a high clock speed alone does not guarantee a quick computer.`,
      },
      {
        title: 'Embedded systems',
        text: `An embedded system is a small computer built inside a larger device to do one specific job, usually with a program that does not change.\nExamples: a washing machine controller, a car's engine management unit, a digital thermostat, a microwave.\nThey are normally cheap and use little power, unlike a general-purpose laptop that can run many programs.`,
      },
    ],
    check: [
      { q: `Name the register that holds the address of the next instruction to fetch.`, a: `The program counter (PC).` },
      { q: `Describe what happens in the fetch stage.`, a: `The PC's address is copied to the MAR, the instruction at that address is loaded into the MDR, and the PC is increased by one.` },
      { q: `A CPU runs at 2.5 GHz. How many cycles does it complete in one second?`, a: `2.5 billion (2,500,000,000) cycles per second.` },
      { q: `Give two reasons a computer with a quad-core CPU might not run a program four times faster than a single-core one.`, a: `The program may not be written to share its work between cores, and the cores may still wait on RAM or on each other. Clock speed and cache also matter.` },
      { q: `State one difference between an embedded system and a laptop.`, a: `An embedded system does one dedicated job (e.g. a microwave controller); a laptop is general purpose and can run many different programs.` },
    ],
  },

  '1.2 Memory and storage': {
    keyPoints: [
      `RAM is volatile and holds running programs and data. ROM is non-volatile and holds start-up instructions.`,
      `Secondary storage keeps data when the power is off: magnetic, optical or solid state.`,
      `Capacity units go up in steps of 1000: byte, kB, MB, GB, TB. A nibble is 4 bits and a byte is 8 bits.`,
      `Convert between binary, denary and hexadecimal. Binary addition can overflow; shifts multiply or divide by 2 each place.`,
      `File size = amount of data in bits (for example width x height x colour depth), divided by 8 for bytes.`,
      `Compression makes files smaller: lossless keeps everything, lossy permanently throws data away.`,
    ],
    steps: [
      {
        title: 'RAM, ROM and virtual memory',
        text: `RAM is the main memory. It is volatile, so it loses its contents when the power goes off. It stores the programs and data in use.\nROM is non-volatile and stores the boot-up instructions that start the computer.\nIf RAM fills up, the operating system can use part of the hard drive as virtual memory. This works, but it is much slower than real RAM.`,
      },
      {
        title: 'Secondary storage',
        text: `Secondary storage keeps files long term and is non-volatile.\nMagnetic (hard disk): cheap per GB and large, but slow and has moving parts.\nOptical (CD, DVD, Blu-ray): cheap, portable discs read by a laser, with low capacity and easily scratched.\nSolid state (SSD, USB stick, SD card): fast, silent, no moving parts and robust, but costs more per GB.`,
      },
      {
        title: 'Units of data',
        text: `A bit is one 0 or 1. 4 bits is a nibble. 8 bits is a byte.\nThen each unit is 1000 times the last: 1 kilobyte (kB) = 1000 bytes, 1 megabyte (MB) = 1000 kB, 1 gigabyte (GB) = 1000 MB, 1 terabyte (TB) = 1000 GB.\nExample: a 2 GB memory card holds 2000 MB, so 2000 / 4 = 500 photos of 4 MB each.`,
      },
      {
        title: 'Binary, denary, hex',
        text: `Binary column values for 8 bits: 128 64 32 16 8 4 2 1.\n10110101 = 128 + 32 + 16 + 4 + 1 = 181.\nTo go from denary to binary, subtract the biggest column that fits. 200 = 128 + 64 + 8, so 11001000.\nHex uses 0-9 then A-F (A = 10 ... F = 15). Split binary into nibbles: 1011 = B and 0101 = 5, so 10110101 = B5. Check: 11 x 16 + 5 = 181.\nHex 3F = 3 x 16 + 15 = 63.`,
      },
      {
        title: 'Binary addition and shifts',
        text: `Add column by column: 0+0 = 0, 0+1 = 1, 1+1 = 10 (write 0, carry 1), 1+1+1 = 11 (write 1, carry 1).\n01101101 + 00110110 = 10100011 (109 + 54 = 163). If the answer needs a 9th bit, you get an overflow error because the register is too small.\nA shift moves every bit along. Left shift by 1 doubles the number, right shift by 1 halves it.\n00001011 (11) shifted left 2 places is 00101100 (44).`,
      },
      {
        title: 'Text, images and sound',
        text: `Characters are stored as numbers using a character set. ASCII uses 7 bits (128 characters). Unicode uses more bits per character, so it can store emojis and other alphabets.\nAn image is a grid of pixels. Colour depth is the bits per pixel: 8 bits gives 256 colours. Resolution is the number of pixels.\nSound is sampled: the wave's height is measured many times a second. The sample rate is how many samples per second and the bit depth is the bits per sample.`,
      },
      {
        title: 'Working out file sizes',
        text: `Image: width x height x colour depth gives bits. 800 x 600 pixels at 8 bits = 480,000 x 8 = 3,840,000 bits. Divide by 8 = 480,000 bytes = 480 kB.\nSound: sample rate x bit depth x seconds (x channels). 8000 samples/s x 16 bits x 20 s = 2,560,000 bits = 320,000 bytes = 320 kB.\nText: number of characters x bits per character. 200 characters at 8 bits = 1600 bits = 200 bytes.\nAlways say the unit, and convert bits to bytes by dividing by 8.`,
      },
      {
        title: 'Compression',
        text: `Compression makes files smaller, so they use less storage and download faster.\nLossless compression packs the data so the original can be rebuilt exactly. It is used for things like text documents and some images.\nLossy compression permanently removes detail that people are unlikely to notice, such as in MP3 and JPEG files. The file is much smaller, but the quality cannot be restored.`,
      },
    ],
    check: [
      { q: `Why does a computer need ROM as well as RAM?`, a: `ROM is non-volatile, so it keeps the boot-up instructions when the power is off. RAM is empty at start-up.` },
      { q: `Convert 11001000 to denary and to hexadecimal.`, a: `128 + 64 + 8 = 200. In hex: 1100 = C and 1000 = 8, so C8.` },
      { q: `Add 01010110 and 00101101 in binary.`, a: `10000011 (86 + 45 = 131).` },
      { q: `A picture is 100 pixels wide and 50 high with 4 bits per pixel. How big is the file in bytes?`, a: `100 x 50 x 4 = 20,000 bits. 20,000 / 8 = 2500 bytes.` },
      { q: `Give one advantage of lossy compression and one disadvantage.`, a: `Advantage: a much smaller file. Disadvantage: data is lost for good, so quality drops and the original cannot be restored.` },
    ],
  },

  '1.3 Computer networks': {
    keyPoints: [
      `A LAN covers a small area such as a school. A WAN covers a large area and uses links owned by other companies, like the internet.`,
      `Network performance depends on bandwidth, number of users, transmission media and the network's design.`,
      `Client-server has a central server; peer-to-peer has equal computers sharing directly.`,
      `Star topology uses a central switch; mesh connects devices to many others.`,
      `IP addresses identify a device on a network; MAC addresses are fixed into the hardware. DNS turns website names into IP addresses.`,
      `Protocols are agreed rules: HTTP/HTTPS for web, SMTP/IMAP/POP for email, FTP for files, TCP/IP to move data across networks.`,
    ],
    steps: [
      {
        title: 'LANs and WANs',
        text: `A local area network (LAN) covers a small area, such as one building, and the organisation owns the equipment.\nA wide area network (WAN) covers a large area, such as several cities or countries. It often uses cables and links rented from telecoms companies. The internet is the biggest WAN.\nNetworks let people share files, printers and an internet connection.`,
      },
      {
        title: 'What affects performance',
        text: `Bandwidth is how much data can be sent per second, so more bandwidth means faster transfers.\nMore users sharing the network slow it down.\nTransmission media matters: fibre optic is fast, copper is slower, wireless can be affected by distance and walls.\nA poorly designed network, or an old switch, can also become a bottleneck.`,
      },
      {
        title: 'Client-server and peer-to-peer',
        text: `Client-server: clients (user computers) ask a central server for files, email or web pages. It is easy to back up and secure in one place, but the server is costly and if it fails, everyone is affected.\nPeer-to-peer (P2P): each computer is equal and shares files directly with others. It is cheap and has no single point of failure, but is harder to manage and secure.`,
      },
      {
        title: 'Network hardware and media',
        text: `A network interface card (NIC) lets a device connect to a network.\nA switch connects devices on a LAN and sends data only to the device that needs it.\nA router joins networks together and sends data towards its destination, such as your home network to the internet.\nA wireless access point lets devices connect by wi-fi.\nCables can be copper (Ethernet) or fibre optic. Wireless uses radio waves.`,
      },
      {
        title: 'Star and mesh topologies',
        text: `Topology is how a network is laid out.\nStar: every device connects to a central switch. If one cable fails, only that device is cut off. If the switch fails, all go down. It needs more cable but is easy to extend.\nMesh: devices connect to several others, so data has many routes and the network keeps working if a link fails. It is more reliable but costs more to set up.`,
      },
      {
        title: 'Internet, DNS and the cloud',
        text: `The internet is a worldwide network of networks. The World Wide Web is the pages and sites that run on it.\nWeb pages are stored on hosting servers. The Domain Name System (DNS) turns a name like example.com into the server's IP address.\nThe cloud means storing files or running software on remote servers over the internet. You can reach your data anywhere, but you need a connection and must trust the provider's security.`,
      },
      {
        title: 'IP and MAC addresses',
        text: `An IP address identifies a device on a network so data goes to the right place. IPv4 uses four numbers from 0 to 255, such as 192.168.1.20. IPv6 is longer and gives many more addresses.\nA MAC address is a unique hardware code given to a network card by the maker, written in hex, such as 3C:52:82:1A:B4:9F. It does not change.\nAn IP address can change depending on the network you join.`,
      },
      {
        title: 'Protocols and layers',
        text: `A protocol is an agreed set of rules so different devices can talk.\nHTTP fetches web pages; HTTPS does the same with encryption. FTP transfers files. SMTP sends email; IMAP and POP receive it.\nTCP splits data into packets and checks they arrive; IP addresses and routes them.\nLayers split the job into levels (for example application, transport, internet, link). Each layer does one task, so a layer can be changed without rewriting the rest.`,
      },
    ],
    check: [
      { q: `State one difference between a LAN and a WAN.`, a: `A LAN covers a small area and is owned by the organisation; a WAN covers a large area and uses links provided by other companies.` },
      { q: `Give two advantages of a star network.`, a: `If one cable fails only one device is affected; it is easy to add devices; data goes via the switch so there are few collisions.` },
      { q: `What is the job of DNS?`, a: `It converts a domain name that people type into the IP address of the web server.` },
      { q: `Which protocol would you use to send an email, and which to download it?`, a: `SMTP to send. IMAP or POP to receive/download.` },
      { q: `Explain why a MAC address and an IP address are both used.`, a: `A MAC address is fixed to the hardware and identifies the device itself; an IP address is assigned by the network and tells data where to be routed. The IP can change, the MAC does not.` },
    ],
  },

  '1.4 Network security': {
    keyPoints: [
      `Threats include malware, phishing and other social engineering, brute-force attacks, denial of service, data interception and SQL injection.`,
      `People are often the weakest point, so training matters as much as software.`,
      `Defences: anti-malware, firewalls, strong passwords, encryption, access levels, physical security.`,
      `Penetration testing is authorised hacking to find weaknesses before criminals do.`,
      `Strong passwords are long and mixed; two-step checks add more protection.`,
    ],
    steps: [
      {
        title: 'Why networks are attacked',
        text: `Attackers go after data (to steal or sell it), money, or just to cause disruption.\nThreats come from outside the organisation but also from staff who make mistakes or misuse their access.\nNetwork security tries to keep data private, accurate and available to the right people.`,
      },
      {
        title: 'Malware',
        text: `Malware is software designed to cause harm.\nA virus attaches itself to files and spreads when they are shared. Ransomware locks your files and demands payment. Spyware secretly records what you do. A trojan pretends to be useful software but hides something harmful.\nPrevent it with anti-malware, updates and not opening unknown attachments.`,
      },
      {
        title: 'Social engineering',
        text: `Social engineering tricks people instead of breaking technology.\nPhishing is a fake email, text or website that looks real and tries to get you to give away passwords or bank details. Warning signs: urgent threats, odd sender addresses, spelling errors, links that do not match.\nOther examples: someone pretending to be IT support on the phone, or shouldering (watching you type a password).`,
      },
      {
        title: 'Attacks on the network',
        text: `Brute force: a program tries thousands of passwords until one works. Long, random passwords make this take far too long.\nDenial of service (DoS): a flood of requests makes a server too busy for real users. A distributed version (DDoS) uses many computers.\nData interception: someone captures data as it travels, for example on an open wi-fi hotspot. Encryption makes intercepted data unreadable.`,
      },
      {
        title: 'Weak code: SQL injection',
        text: `A website that builds database commands from what a user types can be tricked. An attacker types SQL code into a form box, and the database runs it, perhaps revealing or deleting data.\nThe fix is to validate and clean every input and use safe, parameterised queries so typed text is never run as a command.\nThis is a good example of why programmers must write secure code.`,
      },
      {
        title: 'Technical defences',
        text: `Anti-malware scans for and removes harmful software; keep it updated.\nA firewall checks traffic going in and out of a network and blocks anything that breaks its rules.\nEncryption scrambles data using a key so only people with the key can read it.\nUser access levels limit who can see or change what, so a pupil cannot open staff records.`,
      },
      {
        title: 'Passwords and authentication',
        text: `A strong password is long, mixes upper case, lower case, numbers and symbols, and is not a word or personal detail. Use a different one for each account and change it if it leaks.\nAuthentication proves who you are: a password, a fingerprint, or a code sent to your phone. Using two of these together is much safer than a password alone.`,
      },
      {
        title: 'Testing and physical security',
        text: `Penetration testing is when a company hires experts to attack its own network, with permission, to find weak spots. They report back so the flaws can be fixed.\nPhysical security protects the buildings and devices: locks, ID cards, CCTV and locked server rooms.\nGood security mixes people, technology and procedures, because one layer alone can fail.`,
      },
    ],
    check: [
      { q: `Explain what phishing is.`, a: `A fake email, text or website pretending to be a trusted organisation to trick people into revealing personal information such as passwords or card numbers.` },
      { q: `Describe how a firewall protects a network.`, a: `It monitors data coming in and going out and blocks anything that does not meet its security rules.` },
      { q: `Why does a long password with mixed characters resist a brute-force attack?`, a: `There are far more possible combinations, so a program takes far too long to try them all.` },
      { q: `What is the purpose of penetration testing?`, a: `To find weaknesses by attacking a system with permission, so they can be fixed before real attackers find them.` },
      { q: `Give two ways to protect against SQL injection.`, a: `Validate and sanitise all user input; use parameterised queries; limit database permissions.` },
    ],
  },

  '1.5 Systems software': {
    keyPoints: [
      `System software runs the computer; application software does tasks the user wants.`,
      `The operating system manages the user interface, memory, multitasking, peripherals (through drivers), users and files.`,
      `Utility software maintains the computer: encryption, defragmentation, compression and others.`,
      `Defragmentation tidies files on a magnetic hard drive so they are stored in one piece.`,
    ],
    steps: [
      {
        title: 'System vs application software',
        text: `Application software helps the user do a task: a word processor, a game, a web browser.\nSystem software keeps the computer working and includes the operating system and utility programs.\nThe user mostly sees applications, but nothing runs without the system software underneath.`,
      },
      {
        title: 'What an OS does',
        text: `The operating system (OS) is the layer between the hardware and your programs. Windows, macOS, Android and Linux are examples.\nWithout it you would have to control every piece of hardware yourself.\nIt has several jobs, which the next steps cover: user interface, memory, multitasking, peripherals, users and files.`,
      },
      {
        title: 'Interface and memory',
        text: `User interface: the way you interact with the computer, such as icons, windows and menus on a screen, or typed commands.\nMemory management: the OS decides which programs get which part of RAM, keeps them apart so they do not overwrite each other, and moves data in and out of virtual memory when RAM is full.`,
      },
      {
        title: 'Multitasking and peripherals',
        text: `Multitasking: the OS shares CPU time between many programs in tiny slices, so music, a browser and a download all seem to run at once.\nPeripheral management: devices such as printers and keyboards need a driver, a small program that lets the OS talk to that particular device. The OS also handles the data they send and receive.`,
      },
      {
        title: 'Users and file management',
        text: `User management: the OS looks after accounts, usernames and passwords, and decides what each user may access.\nFile management: it lets you create, name, open, move, copy and delete files and folders, and keeps track of where each file is stored on the disk.`,
      },
      {
        title: 'Utility software',
        text: `Utility programs look after the computer.\nEncryption software scrambles files so they are unreadable without the key.\nDefragmentation: on a magnetic hard disk, files get split into pieces over time. Defragmenting moves the pieces together so the drive reads files faster. It is not needed for solid state drives.\nCompression software shrinks files so they use less space or send faster.\nOthers include anti-malware, backup and firewalls.`,
      },
    ],
    check: [
      { q: `State the difference between system software and application software.`, a: `System software manages and maintains the computer (e.g. the OS); application software lets users do tasks (e.g. a word processor).` },
      { q: `Describe how an operating system manages multitasking.`, a: `It shares processor time between programs in very short slices, switching rapidly so they appear to run together.` },
      { q: `What is a driver?`, a: `A program that lets the OS communicate with and control a particular peripheral device.` },
      { q: `Explain why defragmenting benefits a magnetic hard drive but not an SSD.`, a: `A hard disk has a moving read head, so scattered file pieces take longer to read; defragging puts them together. An SSD has no moving parts and reads any location equally fast.` },
    ],
  },

  '1.6 Ethical, legal, cultural and environmental impacts': {
    keyPoints: [
      `Technology raises ethical, legal, cultural and environmental issues; exam answers should give a point and a reason.`,
      `Data Protection Act 2018: personal data must be used fairly and lawfully, kept accurate and secure, and not kept longer than needed.`,
      `Computer Misuse Act 1990: it is illegal to access a computer without permission, to do so to commit further crime, or to change data without permission.`,
      `Copyright, Designs and Patents Act 1988 protects creators' work from being copied or shared without permission.`,
      `Open-source software can be viewed and changed; proprietary software cannot.`,
      `Environmental impact includes energy use and electronic waste.`,
    ],
    steps: [
      {
        title: 'Four kinds of impact',
        text: `Ethical: right and wrong, such as privacy and fairness.\nLegal: what the law allows or demands.\nCultural: how technology changes the way groups of people live, communicate and work.\nEnvironmental: effects on the planet.\nA good exam answer names the issue, then says who is affected and how.`,
      },
      {
        title: 'Ethical issues',
        text: `Privacy: companies and governments can collect large amounts of data about us. Is it fair to track location, or monitor staff by camera?\nFairness: automated systems might treat some groups unfairly if they were built on biased data.\nThe digital divide: people without devices or good internet are left out of jobs, school and services.\nAlways consider the benefit to some people against the harm to others.`,
      },
      {
        title: 'Data Protection Act 2018',
        text: `This law protects personal data. Organisations holding it must use it fairly, lawfully and openly, only for stated purposes, and collect no more than they need.\nThe data must be accurate, kept secure and not kept longer than necessary.\nPeople have rights, such as seeing the data held about them and asking for errors to be corrected.`,
      },
      {
        title: 'Computer Misuse Act 1990',
        text: `The Act covers hacking and related crimes. There are three main offences.\n1. Unauthorised access to computer material, for example guessing a classmate's password.\n2. Unauthorised access with intent to commit or help another crime, such as stealing money.\n3. Unauthorised modification of data, which includes spreading a virus or deleting files.`,
      },
      {
        title: 'Copyright and licences',
        text: `The Copyright, Designs and Patents Act 1988 makes it illegal to copy, share or sell someone's work, such as music, films, images and software, without permission. Pirating software is an offence.\nProprietary software is paid for, and the source code is kept secret, so you cannot change it.\nOpen-source software gives you the source code to view, change and share, and is often free, though it may come with less support.`,
      },
      {
        title: 'Cultural impacts',
        text: `Social media and messaging let people stay in touch across the world, but can spread rumours and cause cyberbullying.\nOnline shopping, banking and streaming change how people spend time, and some high street shops close.\nAutomation and remote working change jobs. New skills are needed while some old roles disappear.\nMobile and wearable technology means people are contactable all the time.`,
      },
      {
        title: 'Environmental impacts',
        text: `Making devices uses raw materials and energy. Data centres and always-on devices use a lot of electricity.\nElectronic waste (e-waste) contains toxic substances, and much of it ends up in landfill if not recycled.\nOn the positive side, technology can reduce travel through video calls and help manage energy use.\nReducing impact: repair and reuse devices, recycle properly, switch off unused equipment.`,
      },
    ],
    check: [
      { q: `Name the law that makes it illegal to access someone else's files without permission.`, a: `The Computer Misuse Act 1990.` },
      { q: `State two things the Data Protection Act 2018 requires of organisations holding personal data.`, a: `Any two of: use it fairly and lawfully; keep it accurate; keep it secure; only keep it as long as needed; use it only for stated purposes.` },
      { q: `Give one difference between open-source and proprietary software.`, a: `Open-source code can be viewed, changed and shared by anyone; proprietary code is kept secret and cannot be changed.` },
      { q: `Describe one environmental problem caused by the use of computers.`, a: `E-waste: old devices contain toxic materials and are harmful if dumped in landfill. (Or: high electricity use by data centres.)` },
      { q: `Explain one way technology has changed how people work.`, a: `Remote working and video calls mean people can work from home; automation replaces some jobs, so workers need new skills.` },
    ],
  },

  '2.1 Algorithms': {
    keyPoints: [
      `Computational thinking: abstraction (leave out detail), decomposition (break a problem into parts) and algorithmic thinking (plan the steps).`,
      `Algorithms can be shown as flowcharts, pseudocode or written steps.`,
      `Linear search checks each item in turn; binary search halves a sorted list each time.`,
      `Bubble sort swaps neighbours; insertion sort inserts each item in place; merge sort splits then merges.`,
      `A trace table records variable values line by line to test an algorithm or find an error.`,
    ],
    steps: [
      {
        title: 'Computational thinking',
        text: `Abstraction means hiding the details you do not need. A tube map leaves out real distances and shows only stations and connections.\nDecomposition means breaking a big problem into smaller ones. A quiz app splits into: ask questions, check answers, keep score.\nAlgorithmic thinking means working out the exact steps to solve each part.`,
      },
      {
        title: 'Showing an algorithm',
        text: `A flowchart uses shapes: an oval for start and end, a parallelogram for input or output, a rectangle for a process (such as total = total + 1), and a diamond for a decision with a Yes and a No arrow. Arrows show the order.\nPseudocode is written like a program, but is not tied to one language.\nExample in OCR style:\nage = input("Age?")\nif age >= 17 then\nprint("Can learn to drive")\nendif`,
      },
      {
        title: 'Linear search',
        text: `Linear search starts at the first item and checks each one in turn until it finds the target or reaches the end.\nIt works on any list, sorted or not. It is simple, but with n items it may need n checks.\nExample: look for 15 in [4, 9, 15, 2]. Check 4, check 9, check 15 found at the third position.`,
      },
      {
        title: 'Binary search',
        text: `Binary search needs a sorted list. Look at the middle item. If it is the target, stop. If the target is smaller, discard the upper half; if larger, discard the lower half. Repeat.\nExample: list [3, 8, 12, 15, 21, 27, 34], target 27. The middle is 15, which is too small, so keep 21, 27, 34. The middle is 27, found after two checks.\nTarget 10: middle 15 is too big, so keep 3, 8, 12. The middle is 8, too small, so keep 12. 12 is too big. Nothing left, so 10 is not in the list.`,
      },
      {
        title: 'Bubble sort',
        text: `Compare each pair of neighbours and swap them if they are in the wrong order. Repeat passes until a whole pass has no swaps.\nStart: 5 2 9 1 7.\nPass 1: 2 5 1 7 9 (swapped 5/2, 9/1, 9/7).\nPass 2: 2 1 5 7 9 (swapped 5/1).\nPass 3: 1 2 5 7 9 (swapped 2/1).\nPass 4: no swaps, so it is sorted.`,
      },
      {
        title: 'Insertion sort',
        text: `Treat the first item as a sorted list. Take each next item and slide it left into the right place among the sorted ones.\nStart: 5 2 9 1 7.\nInsert 2: 2 5 9 1 7. Insert 9: no move. Insert 1: 1 2 5 9 7. Insert 7: 1 2 5 7 9.\nIt is simple and fine for short lists.`,
      },
      {
        title: 'Merge sort',
        text: `Merge sort uses divide and conquer. First split the list in half again and again until every piece has one item. Then merge pieces back, picking the smaller front item each time, so every merged list is sorted.\nStart: 5 2 9 1 7. Split: [5 2 9] and [1 7]; then [5 2], [9], [1], [7]; then [5], [2].\nMerge: [2 5], then [2 5 9]; [1 7]. Merge [2 5 9] with [1 7]: 1, 2, 5, 7, 9.`,
      },
      {
        title: 'Trace tables and errors',
        text: `A trace table has a column per variable and a row per step, so you can follow what a program really does.\ntotal = 0\nfor i = 1 to 4\ntotal = total + i * 2\nnext i\nprint(total)\nTotal after each loop: i=1 gives 2, i=2 gives 6, i=3 gives 12, i=4 gives 20. It prints 20.\nTrace tables help you find logic errors, such as a loop that runs one time too many.`,
      },
    ],
    check: [
      { q: `Define decomposition.`, a: `Breaking a large problem down into smaller, more manageable parts.` },
      { q: `Why must a list be sorted before using binary search?`, a: `Because it relies on knowing which half the target must be in by comparing with the middle item; this only works if the data is in order.` },
      { q: `Carry out one full pass of bubble sort on 6 3 8 2.`, a: `Compare 6/3 swap: 3 6 8 2. 6/8 no swap. 8/2 swap: 3 6 2 8. After pass 1: 3 6 2 8.` },
      { q: `Show the result of insertion sort on 4 1 3, step by step.`, a: `Insert 1: 1 4 3. Insert 3: 1 3 4.` },
      { q: `Complete a trace: x = 1, then for i = 1 to 3, x = x * 2, next i. What is x at the end?`, a: `i=1: x=2; i=2: x=4; i=3: x=8. So x = 8.` },
    ],
  },

  '2.2 Programming fundamentals': {
    keyPoints: [
      `Every program is built from sequence, selection (if) and iteration (loops).`,
      `Variables change as a program runs; constants do not. Data types: integer, real, Boolean, character, string.`,
      `Operators: + - * / ^ MOD DIV, and comparisons == != < <= > >=.`,
      `Arrays store a list of items under one name, counting from 0. Records and files store data that outlives the program.`,
      `Subprograms (procedures and functions) split code into reusable parts; functions return a value.`,
      `SQL gets data from a database with SELECT, FROM and WHERE.`,
    ],
    steps: [
      {
        title: 'Variables and data types',
        text: `A variable is a named place in memory whose value can change. A constant is set once and never changes: const vat = 0.2\nAssign with =: score = 10. Use input() and print(): name = input("Your name?")\nTypes: integer (whole number), real (decimal), Boolean (True or False), character (one symbol) and string (text). Casting changes type: int("7") gives 7 and str(7) gives "7".`,
      },
      {
        title: 'Operators',
        text: `Arithmetic: + - * / and ^ for powers. 2^3 = 8.\nDIV gives the whole-number part of a division and MOD gives the remainder. 17 DIV 5 = 3 and 17 MOD 5 = 2. MOD is handy for checking even numbers: x MOD 2 == 0.\nComparison: == (equal), != (not equal), < <= > >=.\nBoolean: AND, OR, NOT join conditions.`,
      },
      {
        title: 'Selection',
        text: `Selection chooses which code runs.\nif mark >= 70 then\n  print("Distinction")\nelseif mark >= 50 then\n  print("Pass")\nelse\n  print("Try again")\nendif\nOnly the first true branch runs. A switch/case does the same job for one variable with many values.`,
      },
      {
        title: 'Iteration',
        text: `A count-controlled loop repeats a set number of times:\nfor i = 0 to 9\n  print(i)\nnext i\nThis prints 0 to 9, so 10 times.\nA condition-controlled loop repeats while something is true:\nwhile answer != "yes"\n  answer = input("Again?")\nendwhile\nA do ... until loop checks at the end, so it always runs at least once.`,
      },
      {
        title: 'Strings and random',
        text: `Strings have handy tools. word = "Bournemouth"\nword.length is 11. word.left(4) is "Bour". word.substring(2, 3) takes 3 characters starting at position 2 (counting from 0), which is "urn". Also .upper and .lower.\nJoin strings with +. Use random(1, 6) to get a random whole number from 1 to 6.`,
      },
      {
        title: 'Arrays and records',
        text: `An array holds several items of one type under one name. Positions start at 0.\narray scores[5]\nscores[0] = 12\nscores[4] = 30\nThe five positions are 0 to 4. A loop is the usual way to go through an array: for i = 0 to 4 ... scores[i] ... next i.\nA two-dimensional array is like a grid, scores[row][column]. A database table holds records, one per row, with fields in columns.`,
      },
      {
        title: 'Files and SQL',
        text: `Files let data survive after the program ends.\nmyFile = openRead("names.txt")\nwhile NOT myFile.endOfFile()\n  print(myFile.readLine())\nendwhile\nmyFile.close()\nUse openWrite and writeLine to save data.\nSQL queries a database:\nSELECT name FROM students WHERE year == 11\nThe * means all fields. Add ORDER BY to sort the results.`,
      },
      {
        title: 'Subprograms',
        text: `A subprogram is a named block of code you can call many times. It makes programs shorter and easier to test.\nA procedure does a job: procedure greet(name) print("Hi " + name) endprocedure\nA function gives back a value:\nfunction double(n)\n  return n * 2\nendfunction\nThen answer = double(8) stores 16. Variables made inside a subprogram are local, so they exist only there; global variables can be used everywhere.`,
      },
    ],
    check: [
      { q: `Work out 23 MOD 4 and 23 DIV 4.`, a: `23 DIV 4 = 5 and 23 MOD 4 = 3.` },
      { q: `How many times does this loop run? for i = 2 to 6`, a: `5 times (i = 2, 3, 4, 5, 6).` },
      { q: `An array called names has 8 items. What is the index of the last item?`, a: `7, because indexes start at 0.` },
      { q: `State the difference between a function and a procedure.`, a: `A function returns a value to the code that called it; a procedure does not.` },
      { q: `Write a SQL query to show every field for pupils whose house is "Red" from a table called pupils.`, a: `SELECT * FROM pupils WHERE house == "Red"` },
    ],
  },

  '2.3 Producing robust programs': {
    keyPoints: [
      `A robust program copes with misuse and unexpected input without crashing.`,
      `Defensive design: anticipate misuse, validate input, authenticate users, write readable maintainable code.`,
      `Validation checks data is sensible (range, type, length, presence); it does not prove the data is true.`,
      `Test with normal, boundary, invalid and erroneous data.`,
      `Syntax errors break the rules of the language; logic errors run but give wrong results.`,
    ],
    steps: [
      {
        title: 'Defensive design',
        text: `Defensive design means planning for things to go wrong. Programmers expect misuse: typing text where a number is expected, leaving boxes empty, or trying to guess a password.\nBuild in checks and sensible error messages so the program carries on safely.\nA robust program does not crash or leak data when someone does something unexpected.`,
      },
      {
        title: 'Input validation',
        text: `Validation is an automatic check that data is reasonable. Common types:\nRange check: is it between limits? (age from 11 to 16)\nType check: is it a whole number?\nLength check: is it the right number of characters?\nPresence check: has something been entered?\nFormat check: does it match a pattern?\nValidation cannot tell whether data is true: age 14 passes even if you are really 15.`,
      },
      {
        title: 'A validation loop',
        text: `A common pattern keeps asking until the input is acceptable.\nage = input("Enter age 11 to 16")\nwhile age < 11 OR age > 16\n  print("Not allowed")\n  age = input("Enter age 11 to 16")\nendwhile\nThe loop runs only while the input is invalid. Beware the logic: using AND here would never be true.`,
      },
      {
        title: 'Authentication',
        text: `Authentication checks that a user is who they claim to be, for example a username and password, with limits on the number of tries.\nThe program compares what was typed with stored details. Good systems store passwords in a scrambled form and lock the account after too many wrong attempts.`,
      },
      {
        title: 'Maintainable code',
        text: `Code that other people can read and change is easier to fix and improve.\nUse sensible names (totalScore, not x), indentation, comments that explain why, and subprograms to split work up.\nUse constants for fixed values so they can be changed in one place.`,
      },
      {
        title: 'Types of error',
        text: `A syntax error breaks the language rules, such as a missing endif or a misspelt keyword. The program will not run.\nA logic error means it runs but gives wrong answers, such as using > when you meant >=, or a loop that stops one too early. These are harder to spot.\nTrace tables and testing help to find them.`,
      },
      {
        title: 'Test data',
        text: `Plan tests before you run them, with expected results. Using a range of 11 to 16:\nNormal: valid values such as 14. Should be accepted.\nBoundary: values at the edge of valid, 11 and 16, which should be accepted. The values just outside, 10 and 17, should be rejected.\nInvalid: right type but not allowed, such as 40. Rejected.\nErroneous: wrong type, such as "abc". Rejected.`,
      },
      {
        title: 'Iterative and final testing',
        text: `Iterative testing happens during development. You test each part as you write it, fix problems, and test again.\nFinal (terminal) testing happens when the program is complete, to check the whole thing works as the user requires.\nTest in a table with columns for test, data, expected result, actual result and whether it passed.`,
      },
    ],
    check: [
      { q: `A program accepts exam marks from 0 to 100. Give one example each of boundary and erroneous test data.`, a: `Boundary: 0, 100 (or 101 and -1 as just outside). Erroneous: for example "ten" or a symbol.` },
      { q: `Why can validation not guarantee that data is correct?`, a: `It only checks that data is acceptable (e.g. in range). A wrong value, such as a mistyped age that is still in range, passes.` },
      { q: `State the difference between a syntax error and a logic error.`, a: `A syntax error breaks the language rules and stops the program running; a logic error lets it run but gives wrong results.` },
      { q: `Give two ways to make code more maintainable.`, a: `Any two of: meaningful variable names, comments, indentation, subprograms, constants.` },
      { q: `Why is iterative testing useful?`, a: `It finds and fixes errors early, while each part is being built, which is cheaper and easier than finding them all at the end.` },
    ],
  },

  '2.4 Boolean logic': {
    keyPoints: [
      `NOT flips a value. AND is true only if both inputs are true. OR is true if at least one input is true.`,
      `A truth table lists every combination of inputs: n inputs give 2^n rows.`,
      `Logic gate symbols and Boolean expressions describe the same circuit.`,
      `Work out combined circuits step by step, one gate at a time.`,
    ],
    steps: [
      {
        title: 'What Boolean logic is',
        text: `Boolean logic works with values that are only true (1) or false (0). Computers use it for decisions and in the circuits inside the CPU.\nAn if statement such as if age >= 12 AND age <= 16 then uses these ideas too.\nThere are three basic logic gates: NOT, AND and OR.`,
      },
      {
        title: 'The NOT gate',
        text: `NOT has one input and flips it.\nA | Q = NOT A\n0 | 1\n1 | 0\nIn a diagram it is a triangle with a small circle on the output. Written out: Q = NOT A.`,
      },
      {
        title: 'The AND gate',
        text: `AND has two inputs and outputs 1 only when both inputs are 1.\nA B | Q = A AND B\n0 0 | 0\n0 1 | 0\n1 0 | 0\n1 1 | 1\nThink of two switches in a row on the same wire: both must be on.`,
      },
      {
        title: 'The OR gate',
        text: `OR outputs 1 when at least one input is 1.\nA B | Q = A OR B\n0 0 | 0\n0 1 | 1\n1 0 | 1\n1 1 | 1\nThink of two switches side by side: either one lets the current through. It is false only when both are 0.`,
      },
      {
        title: 'Building a truth table',
        text: `With 2 inputs you need 4 rows; with 3 inputs you need 8 rows. List the inputs in binary counting order (000, 001, 010 ...) so none are missed.\nFor a larger expression, add a column for each smaller part, then combine them. Do NOT first, then AND, then OR, unless brackets say otherwise.`,
      },
      {
        title: 'A worked example',
        text: `Q = (A AND B) OR NOT C. Three inputs, so 8 rows. Order: A B C.\n0 0 0: A AND B = 0, NOT C = 1, Q = 1\n0 0 1: 0, 0, Q = 0\n0 1 0: 0, 1, Q = 1\n0 1 1: 0, 0, Q = 0\n1 0 0: 0, 1, Q = 1\n1 0 1: 0, 0, Q = 0\n1 1 0: 1, 1, Q = 1\n1 1 1: 1, 0, Q = 1\nSo the output column reads 1 0 1 0 1 0 1 1.`,
      },
      {
        title: 'Reading and drawing circuits',
        text: `To write an expression from a diagram, follow each gate from the inputs to the output, naming the result of each gate.\nTo draw a diagram from an expression, start inside the brackets. For Q = NOT (A OR B), draw an OR gate with inputs A and B, then pass its output through a NOT gate.\nThe truth table for that is: 00 gives 1, 01 gives 0, 10 gives 0, 11 gives 0.`,
      },
    ],
    check: [
      { q: `Complete the truth table for Q = A AND B (all four rows).`, a: `00 gives 0, 01 gives 0, 10 gives 0, 11 gives 1.` },
      { q: `Give the output of A OR B when A = 0 and B = 1.`, a: `1.` },
      { q: `How many rows does a truth table need for three inputs?`, a: `8 rows (2 x 2 x 2).` },
      { q: `Complete the truth table for Q = A AND NOT B (rows AB: 00, 01, 10, 11).`, a: `00 gives 0, 01 gives 0, 10 gives 1, 11 gives 0.` },
      { q: `What is Q = NOT (A OR B) when A = 0 and B = 0?`, a: `A OR B = 0, then NOT gives Q = 1.` },
    ],
  },

  '2.5 Programming languages and IDEs': {
    keyPoints: [
      `High-level languages (such as Python) are easy for humans to read and need translating; low-level languages (assembly, machine code) are close to the hardware.`,
      `Machine code is binary that the CPU runs directly. Assembly uses short mnemonics and needs an assembler.`,
      `A compiler translates the whole program into an executable; an interpreter translates and runs it line by line.`,
      `An IDE has an editor, error diagnostics, a run-time environment and a translator in one place.`,
    ],
    steps: [
      {
        title: 'High-level languages',
        text: `High-level languages use English-like commands, so they are easy to read, write and fix. Python is one example, and there are many more.\nOne high-level instruction becomes many machine instructions. The same program can usually run on different types of computer, because it is translated for each.\nMost software is written in a high-level language.`,
      },
      {
        title: 'Low-level languages',
        text: `Low-level languages are close to what the processor understands.\nMachine code is binary instructions, which the CPU can run directly. It is very hard for people to write.\nAssembly language uses short codes such as ADD or LDA in place of binary. It is easier for people but still tied to one type of processor.\nLow-level code can be fast and use little memory, so it suits embedded systems and device drivers.`,
      },
      {
        title: 'Why translate',
        text: `The CPU understands only machine code, so any program written in a high-level language or assembly must be translated first.\nAn assembler translates assembly into machine code.\nCompilers and interpreters translate high-level code.`,
      },
      {
        title: 'Compiler',
        text: `A compiler translates the whole program in one go, making a separate executable file of machine code.\nThe finished file runs quickly and can be shared without the source code. But you must recompile after each change, and errors are reported after the translation finishes.`,
      },
      {
        title: 'Interpreter',
        text: `An interpreter translates and runs the program one line at a time, and does not make a separate file.\nIt stops at the first error, so it is good for testing and finding mistakes while learning.\nIt runs more slowly, and the user needs the interpreter plus the source code to run the program.`,
      },
      {
        title: 'IDE features',
        text: `An integrated development environment (IDE) bundles tools for writing programs.\nEditor: where you type code, often with colour-coding of keywords and auto-complete.\nError diagnostics: points out mistakes and where they are.\nRun-time environment: lets you run the program inside the IDE.\nTranslator: a built-in compiler or interpreter.\nOther helpful tools: breakpoints and stepping through code to see the variables change.`,
      },
    ],
    check: [
      { q: `Give two advantages of a high-level language over machine code.`, a: `Easier to read and write; easier to debug; not tied to one processor type; quicker to develop programs.` },
      { q: `State one difference between a compiler and an interpreter.`, a: `A compiler translates the whole program first into an executable; an interpreter translates and runs it line by line.` },
      { q: `Why might assembly language be chosen for an embedded system?`, a: `It gives close control of the hardware and can be fast and small, saving memory and power.` },
      { q: `Name two features of an IDE that help find errors.`, a: `Error diagnostics, stepping through code, breakpoints, colour-coded syntax highlighting.` },
    ],
  },
}
