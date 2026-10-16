import type { Lesson } from './types'

// WJEC Eduqas GCSE Religious Studies Route A (C120P4). Component 1 themes, Component 2 Christianity, Component 3 Islam.
// Exam skills (all components): (a) recall a fact, (b) explain a belief or practice, (c) explain two reasons or different views using sources of wisdom and authority, (d) evaluate a statement and reach a reasoned judgement. AO1 = show knowledge and understanding; AO2 = analyse and evaluate.
export const RS: Record<string, Lesson> = {
  'Issues of relationships': {
    keyPoints: [
      'Religions teach that marriage is a lifelong commitment, but Christians and Muslims differ on details such as divorce and ceremonies.',
      'Christians disagree: Catholics see marriage as a sacrament and are strict on divorce; many Protestants accept divorce and remarriage.',
      'In Islam marriage is a contract and the Qur’an describes spouses as a source of comfort. Divorce is allowed but discouraged.',
      'Views on cohabitation, contraception and same-sex relationships vary between and within religions, and non-religious people often stress consent and commitment.',
      'Gender equality: many believers say men and women are equal in value but may have different roles; others want full equality in worship and leadership.',
    ],
    steps: [
      {
        title: 'Families and marriage',
        text: `Most religions see the family as the place where children are loved and taught right from wrong. Marriage is the stable base for it.\nChristians often quote Genesis 2:24: a man and woman become "one flesh". Muslims often quote Qur'an 30:21, which says spouses are created so they can find comfort in each other.\nAttitudes differ on marrying someone from outside the faith. Some believers worry it could weaken the faith of the children; others say love and respect matter more.`,
      },
      {
        title: 'Marriage ceremonies',
        text: `In a Christian wedding the couple make vows before God and exchange rings. Catholics call marriage a sacrament, so God is believed to be at work in it. Many Protestants see it as a holy covenant but not a sacrament.\nA Muslim marriage (nikah) is a legal contract with consent from both sides and a gift (mahr) from the groom to the bride. It can be held in a mosque, home or elsewhere, and a witness is needed.\nBoth faiths see the ceremony as a public promise.`,
      },
      {
        title: 'Divorce and adultery',
        text: `Adultery means a married person having sex with someone else. Both Christianity and Islam teach that it is wrong, and "You shall not commit adultery" is one of the Ten Commandments (Exodus 20).\nJesus said "what God has joined together, let no one separate" (Mark 10:9). The Catholic Church does not allow divorce and remarriage in church, though it may grant an annulment. The Church of England may allow remarriage after divorce, depending on the priest and circumstances.\nIn Islam divorce is allowed but discouraged. A saying often attributed to Muhammad calls it the most disliked of the permitted things. Couples are encouraged to try reconciliation first.`,
      },
      {
        title: 'Sex, contraception, cohabitation',
        text: `Many Christians and Muslims teach that sex belongs within marriage, so they disapprove of sex before marriage. Cohabitation (living together unmarried) is therefore criticised by some, but many Christians accept it and see commitment as the key.\nOn contraception, the Catholic Church allows only natural methods of family planning. Most Protestants and most Muslims accept contraception, especially to protect health or plan a family.\nHumanists and other non-religious people usually judge sexual choices by consent, honesty and harm, not by religious rules.`,
      },
      {
        title: 'Same-sex relationships',
        text: `This is an area of real disagreement. The Catholic Church teaches that same-sex attraction is not a sin but same-sex sexual acts are, and many traditional Muslims hold a similar view based on the story of Lot.\nSome Christian churches (such as the Quakers and some Anglican and United Reformed congregations) bless or perform same-sex marriages, arguing that love and the command to love your neighbour matter most.\nIn an exam, show both views and name who holds them.`,
      },
      {
        title: 'Gender roles and equality',
        text: `Genesis 1:27 says humans are made in God's image, "male and female", which many Christians use to argue for equal value. Galatians 3:28 says "there is no longer male and female" in Christ.\nSome traditions limit leadership: the Catholic Church ordains only men, while the Church of England has ordained women priests since 1994 and bishops since 2015. Many Muslims teach men and women are equal before Allah but have complementary roles, and mosques often have separate prayer areas. Others argue for greater equality in leadership.\nThe Equality Act 2010 makes sex discrimination illegal in the UK.`,
      },
      {
        title: 'Exam technique here',
        text: `(a) is a short recall, such as naming the Christian ceremony. (b) asks you to explain, so add a "because".\n(c) needs two developed reasons or two views, ideally backed by a source of authority such as a Bible verse, a hadith or a Church teaching.\n(d) gives a statement like "Marriage is out of date". Give arguments for and against (AO2), then a judgement that says which is stronger and why.`,
      },
    ],
    check: [
      { q: 'What does the Catholic Church teach about marriage?', a: 'It is a sacrament and lifelong, so divorce and remarriage in church are not allowed (an annulment may be granted).' },
      { q: 'Name one source Muslims use for marriage.', a: 'Qur’an 30:21, which says spouses are a source of comfort and love.' },
      { q: 'Give two different Christian views on divorce.', a: 'Catholics oppose divorce and remarriage in church; many Protestants, including the Church of England, accept it in some circumstances.' },
      { q: 'How might a Humanist decide whether sex before marriage is acceptable?', a: 'By consent, honesty and whether anyone is harmed, not by religious rules.' },
    ],
  },

  'Issues of life and death (with Humanism)': {
    keyPoints: [
      'Many Christians and Muslims believe the universe was created by God and humans are stewards of it; Humanists accept scientific explanations such as the Big Bang and evolution.',
      'Sanctity of life: religious believers say life is holy and a gift from God. Humanists value human life but stress quality of life.',
      'Abortion and euthanasia: views differ within each religion, from strict opposition to acceptance in some circumstances.',
      'Christians and Muslims believe in life after death and judgement; Humanists believe this is the only life.',
      'Funerals show these beliefs: religious funerals mark a passage to the afterlife, Humanist funerals celebrate the life lived.',
    ],
    steps: [
      {
        title: 'Origins of the universe',
        text: `Religious accounts: many Christians read Genesis 1 as showing God as creator, and some take it literally while others see it as meaning not science. Muslims believe Allah created everything, and the Qur'an speaks of the heavens and earth being joined and then split apart (21:30).\nScientific account: the Big Bang theory says the universe began about 13.8 billion years ago.\nSome believers accept both: God started the Big Bang. Humanists and atheists rely on scientific evidence.`,
      },
      {
        title: 'Stewardship of the world',
        text: `Genesis 1:28 gives humans "dominion" over creation. Many Christians read this as stewardship, which means looking after it for God. Genesis 2:15 says Adam was put in the garden to work and take care of it.\nMuslims believe humans are Allah's khalifah (representatives) on earth, as in Qur'an 2:30, and will be asked how they treated it.\nHumanists look after the environment because it is the only home humans have and future generations need it.`,
      },
      {
        title: 'Sanctity and evolution',
        text: `Sanctity of life means life is holy and belongs to God. Christians point to Genesis 1:27 (made in God's image) and "You shall not murder" (Exodus 20:13). Muslims quote Qur'an 5:32, saying killing one innocent person is like killing all humanity.\nEvolution says species change over generations through natural selection, an idea set out by Charles Darwin. Some religious people reject it; others see it as God's method. Humanists accept it as the best explanation for how life developed.\nPeter Singer argues that we should not give humans more value just for belonging to our species (speciesism).`,
      },
      {
        title: 'Abortion',
        text: `Abortion means ending a pregnancy. The Catholic Church opposes it, since life is sacred from conception. Many Protestants oppose it but accept it in hard cases, such as a danger to the mother's life.\nMany Muslims say abortion is wrong, especially after the soul enters the foetus, which many scholars, citing a hadith, place at 120 days. Many scholars allow it earlier in some cases, such as saving the mother's life.\nHumanists usually support a woman's right to choose, considering quality of life and the rights of the woman.`,
      },
      {
        title: 'Euthanasia',
        text: `Euthanasia means ending a life painlessly to relieve suffering. It is illegal in the UK. Voluntary euthanasia is chosen by the patient; non-voluntary is decided by others.\nThe Catholic and Muslim traditions oppose it, because life belongs to God and only God should decide when it ends. Many Christians support palliative care and hospices instead.\nHumanists and groups such as Dignity in Dying argue that people should be able to choose a dignified death with safeguards. Some Christians also feel compassion supports this, so views are not all the same.`,
      },
      {
        title: 'Life after death',
        text: `Christians believe in resurrection and eternal life, based on Jesus' resurrection. Many believe in judgement, heaven and hell; Catholics also teach purgatory.\nMuslims believe in akhirah: after death the soul waits, then on the Day of Judgement everyone is judged by their deeds. Qur'an 99:7-8 says even an atom's weight of good or evil will be seen.\nHumanists and atheists do not believe in an afterlife, so they say people live on only in memory and through what they did. Some people believe in rebirth or the soul without any religion, so be careful not to over-generalise.`,
      },
      {
        title: 'Funerals and exam skills',
        text: `A Christian funeral includes prayers, hymns and readings, and expresses hope in resurrection. A Muslim funeral involves washing and shrouding the body, a prayer (Janazah), and burial quickly, with the body laid facing Makkah. Views differ on visiting graves for worship, and some Muslims avoid it.\nA Humanist funeral has no religious content and focuses on the person's life.\nFor (d) questions, such as "Abortion is always wrong", give both sides, include a Humanist view where relevant, and finish with a judgement.`,
      },
    ],
    check: [
      { q: 'What is meant by sanctity of life?', a: 'The belief that life is holy and a gift from God, so it should be protected.' },
      { q: 'Give one Muslim belief about the environment.', a: 'Humans are khalifah (stewards) and will be accountable to Allah for how they treat the world.' },
      { q: 'Why do many Christians oppose euthanasia?', a: 'Life is a gift from God, made in his image, so only God should decide when it ends (Exodus 20:13).' },
      { q: 'How do Humanist beliefs about death differ from Christian ones?', a: 'Humanists believe this life is the only one, with no afterlife; Christians believe in resurrection and eternal life.' },
      { q: 'Name one idea about the origin of the universe that does not need God.', a: 'The Big Bang theory.' },
    ],
  },

  'Issues of good and evil': {
    keyPoints: [
      'Crime is breaking the law, and religions teach that some acts are wrong because they go against God’s commands.',
      'The aims of punishment include deterrence, reformation, retribution and protection.',
      'Christians and Muslims disagree among themselves over the death penalty.',
      'Forgiveness is central: Jesus taught forgiving "seventy-seven times", and Muslims believe Allah is the Forgiving and Merciful.',
      'The problem of evil and suffering: if God is all-good and all-powerful, why is there evil? Free will is a common answer.',
    ],
    steps: [
      {
        title: 'Good, evil and morality',
        text: `Morality is a sense of right and wrong. Religious believers may base it on God's commands, such as the Ten Commandments or the Qur'an and Hadith. Christians also look to Jesus' teachings, such as loving your neighbour.\nSin is an act that breaks God's law. Humanists base morality on human reason, empathy and the effects of actions on others.\nConscience, the inner voice, is also used by many.`,
      },
      {
        title: 'Causes of crime',
        text: `People break the law for many reasons: poverty, peer pressure, addiction, a poor upbringing or greed. Some religions would also point to temptation and sin.\nReligious responses to crime often include both punishment and care. Prison chaplains support prisoners, and reformers like Elizabeth Fry (a Quaker) worked to improve prison conditions.`,
      },
      {
        title: 'Aims of punishment',
        text: `Deterrence: put people off offending.\nReformation: help offenders change.\nRetribution: society gets justice, so offenders get what they deserve.\nProtection: keep the public safe by keeping offenders away.\nYou can compare them: Christians often favour reformation because of Jesus' teachings on forgiveness, while Islamic law (shariah) has fixed punishments for some crimes with strong emphasis on justice and also on mercy.`,
      },
      {
        title: 'The death penalty',
        text: `The UK abolished it in 1969 for murder. Some countries still use it.\nSome Christians say it is wrong because life is sacred and Jesus taught forgiveness; Quakers oppose it, and the Catholic Church now teaches against it. Other Christians point to Old Testament passages like "an eye for an eye" (Exodus 21:24), though many say Jesus replaced this with mercy (Matthew 5:38-39).\nIn Islam some scholars support it for crimes such as murder under shariah, while others say conditions are very strict and forgiveness is better. Humanists usually oppose it because of the risk of wrongful convictions.`,
      },
      {
        title: 'Forgiveness',
        text: `In the Lord's Prayer Christians ask God to forgive them as they forgive others. Peter asked how often to forgive and Jesus replied "seventy-seven times" (Matthew 18:21-22). On the cross Jesus said "Father, forgive them" (Luke 23:34).\nMuslims believe Allah is Forgiving (Al-Ghaffar) and Merciful. Qur'an 42:40 says that whoever forgives and makes peace will be rewarded by Allah.\nSome people find forgiveness very hard after serious harm. Mention that it may still be seen as the right goal, or that justice matters too.`,
      },
      {
        title: 'Evil and suffering',
        text: `Moral evil is caused by humans (murder, theft). Natural evil comes from nature (earthquakes, disease).\nThe problem of evil: if God is all-powerful and all-loving, why does he allow suffering? Some use it as an argument against God's existence.\nResponses: the free will defence says God gave humans freedom, which makes love possible but also allows wrong choices. Some Christians say suffering can build character. Muslims may say this life is a test (Qur'an 67:2). Atheists and Humanists say suffering shows there is probably no all-good God.`,
      },
      {
        title: 'Exam technique here',
        text: `For (c), pick two reasons or views and give a source for each, for example Matthew 18:21-22 for forgiveness, or Qur'an 42:40.\nFor (d), such as "Evil proves God does not exist", weigh the free will defence against the problem of evil and give your own supported conclusion.`,
      },
    ],
    check: [
      { q: 'Name two aims of punishment.', a: 'Any two of deterrence, reformation, retribution, protection.' },
      { q: 'What did Jesus teach about forgiveness?', a: 'To forgive again and again, "seventy-seven times" (Matthew 18:21-22).' },
      { q: 'What is the difference between moral and natural evil?', a: 'Moral evil is caused by human choices; natural evil comes from nature, such as earthquakes.' },
      { q: 'Give one religious response to the problem of evil.', a: 'The free will defence: God gave humans free will, and evil comes from the wrong use of it.' },
      { q: 'Why do some Christians oppose the death penalty?', a: 'Life is sacred and Jesus taught forgiveness and mercy.' },
    ],
  },

  'Issues of human rights': {
    keyPoints: [
      'Human rights are basic freedoms and protections everyone should have; the UN Universal Declaration of Human Rights was agreed in 1948.',
      'Christians and Muslims teach that all people are equal in value before God, so prejudice and discrimination are wrong.',
      'Religious people sometimes face a conflict between personal conviction and national law.',
      'Both faiths teach that wealth should be used to help the poor; Zakah and Christian giving are examples.',
      'Charities such as Christian Aid and Islamic Relief put these teachings into action.',
    ],
    steps: [
      {
        title: 'What human rights are',
        text: `Human rights are things every person is entitled to, such as life, freedom, fair treatment and freedom of belief. They protect human dignity.\nThe Universal Declaration of Human Rights (1948) set them out after the Second World War. In the UK, the Human Rights Act 1998 puts many into law.\nSocial justice means a fair society where everyone has equal chances and rights.`,
      },
      {
        title: 'Religious basis for equality',
        text: `Christians believe humans are made in the image of God (Genesis 1:27) and so have equal worth. Jesus' Parable of the Good Samaritan (Luke 10) shows love for a neighbour of any background.\nMuslims quote Qur'an 49:13, which says Allah made people into nations and tribes so they would know each other, and the best are those who are most aware of Allah. Muhammad's final sermon taught that no race is better than another.`,
      },
      {
        title: 'Prejudice and discrimination',
        text: `Prejudice is a pre-judgement about people, and discrimination is treating them unfairly because of it. Examples are racism, sexism and religious discrimination.\nChristians such as Martin Luther King Jr. used faith to lead the civil rights movement in America. Bishop Desmond Tutu fought apartheid in South Africa.\nThe Equality Act 2010 protects people in the UK from discrimination on the basis of characteristics such as race, religion and sex.`,
      },
      {
        title: 'Conviction versus law',
        text: `Sometimes religious beliefs and the law clash. A believer may feel they must follow God first, for example refusing military service or wishing to wear religious dress at work.\nPeople disagree about where to draw the line. Some say the law applies to all and religious freedom must be balanced with others' rights; others say religion should be accommodated.\nExtremism means holding very strong views that could lead to harming others; most religious people reject it.`,
      },
      {
        title: 'Freedom of expression and censorship',
        text: `Freedom of expression lets people share ideas. Censorship limits it, for example banning hate speech.\nSome believers want limits on material they find offensive about their faith. Others, including many Humanists, argue for free speech, with limits only to prevent harm.\nExamine the balance between protecting people and protecting speech.`,
      },
      {
        title: 'Wealth and poverty',
        text: `Absolute poverty means lacking basic needs such as food and shelter. Relative poverty means having much less than most people in your society.\nJesus warned that it is hard for the rich to enter heaven (Mark 10:25) and Christians are taught to help the poor. 1 Timothy 6:10 says the love of money is the root of evil.\nZakah, a pillar of Islam, requires Muslims to give a part of their wealth each year; charging interest (riba) is forbidden.`,
      },
      {
        title: 'Charities and exam skills',
        text: `Christian Aid and Tearfund work for the poorest communities worldwide; Islamic Relief gives emergency and long-term aid.\nIn an exam, link beliefs to action: "Christian Aid is the result of Christians' belief in loving their neighbour".\nFor (d), a statement such as "Religious people should always obey the law", give arguments for and against and then your own reasoned judgement.`,
      },
    ],
    check: [
      { q: 'In what year was the Universal Declaration of Human Rights agreed?', a: '1948.' },
      { q: 'Give a Christian reason for treating all people equally.', a: 'People are made in the image of God (Genesis 1:27) and Jesus taught love of neighbour.' },
      { q: 'Define discrimination.', a: 'Treating someone unfairly because of a characteristic such as race, sex or religion.' },
      { q: 'Name a charity linked to Islam and say what it does.', a: 'Islamic Relief, which provides emergency aid and long-term development help.' },
      { q: 'Difference between absolute and relative poverty?', a: 'Absolute is lacking basic needs; relative is having far less than most people in your society.' },
    ],
  },

  'Christianity: beliefs and teachings': {
    keyPoints: [
      'Christians believe in one God who is omnipotent, omni-benevolent and exists as the Trinity: Father, Son and Holy Spirit.',
      'The Bible’s creation story (Genesis 1-3) is read literally by some Christians and non-literally by others.',
      'Jesus is believed to be God incarnate whose death and resurrection bring salvation.',
      'Christians differ on how salvation works: through grace, faith, good works, or the sacraments.',
      'Christians believe in judgement, heaven and hell; Catholics also teach purgatory.',
    ],
    steps: [
      {
        title: 'The nature of God',
        text: `Christians believe God is omnipotent (all-powerful) and omni-benevolent (all-good). He is also usually described as omniscient (all-knowing) and eternal.\nThis raises the problem of evil: why would a good and powerful God allow suffering? Christians answer with free will, the idea that suffering has a purpose, or that God shares in human suffering through Jesus.\nChristians believe in the Trinity: one God in three persons, the Father, Son and Holy Spirit. The Nicene Creed states this belief.`,
      },
      {
        title: 'Creation',
        text: `Genesis 1 describes God creating the world in six days and resting on the seventh. Genesis 2-3 tells of Adam and Eve and the Fall.\nSome Christians (often called fundamentalists or creationists) read it literally. Others read it as a story with a spiritual meaning, and accept science such as evolution.\nJohn 1:1 says "In the beginning was the Word", linking creation to Jesus. Genesis 1:2 mentions God's Spirit moving over the waters, so Word and Spirit are both seen at work in creation.`,
      },
      {
        title: 'Jesus: incarnation',
        text: `Incarnation means God became human in Jesus. John 1:14 says "the Word became flesh".\nChristians believe Jesus was fully God and fully human, and is called the Son of God. His birth and teaching reveal God's love.\nSome Christians stress his divinity, others focus more on his teaching and example.`,
      },
      {
        title: 'Crucifixion and atonement',
        text: `Jesus was crucified by the Romans under Pontius Pilate. Christians believe his death was a sacrifice that dealt with human sin.\nAtonement means making things right between humans and God. Different Christians explain how this works in different ways, such as Jesus paying the price for sin.\nChristians believe humans cannot save themselves from sin and need Jesus.`,
      },
      {
        title: 'Resurrection and ascension',
        text: `Christians believe Jesus rose from the dead on the third day. Paul says in 1 Corinthians 15 that if Christ has not been raised, faith is in vain.\nThe resurrection is the basis for hope in eternal life. Some Christians believe it was physical; others see it more spiritually.\nThe ascension (Acts 1) is Jesus returning to heaven 40 days later, showing his authority, and Christians believe he will return.`,
      },
      {
        title: 'Salvation',
        text: `Salvation means being saved from sin and its consequences. Sin separates people from God.\nMany Protestants stress grace: salvation is a free gift received through faith, as in Ephesians 2:8-9. Catholics teach that faith and good works, plus the sacraments, work together; James 2:17 says "faith without works is dead".\nThe Holy Spirit is believed to guide and strengthen believers. Scripture is a source of authority, but Catholics also give authority to Church tradition.`,
      },
      {
        title: 'The afterlife',
        text: `Eschatology is the study of last things. Christians believe in a final judgement; Matthew 25 describes people being separated by how they treated those in need.\nHeaven is life with God; hell is separation from God. Catholics teach purgatory, a state of purification before heaven. Some Christians understand hell as a place, others as the absence of God.\nIn an exam, link afterlife beliefs to how Christians live.`,
      },
    ],
    check: [
      { q: 'What is the Trinity?', a: 'The belief in one God in three persons: Father, Son and Holy Spirit.' },
      { q: 'What does incarnation mean?', a: 'God becoming human in Jesus (John 1:14).' },
      { q: 'Give two Christian views on Genesis.', a: 'Some read it literally; others see it as a non-literal story with spiritual meaning, compatible with science.' },
      { q: 'How do Catholic and Protestant views on salvation differ?', a: 'Protestants stress grace through faith; Catholics emphasise faith with good works and sacraments.' },
      { q: 'What does the resurrection mean for Christians?', a: 'Jesus rose from the dead, giving hope of eternal life.' },
    ],
  },

  'Christianity: practices': {
    keyPoints: [
      'Christians worship in different ways: liturgical, informal (charismatic), and silent (Quakers).',
      'Prayer can be set (the Lord’s Prayer), informal, or intercessory, and is done individually or together.',
      'Baptism and Eucharist are sacraments in many churches; Catholics and Protestants interpret them differently, and Quakers do not practise them.',
      'Pilgrimage to Walsingham and Taizé, and celebrating Christmas and Easter, strengthen faith.',
      'The church serves its local community and works worldwide through mission, charity and the ecumenical movement.',
    ],
    steps: [
      {
        title: 'Forms of worship',
        text: `Liturgical worship follows a set order of service, as in the Catholic Mass or Anglican services. It uses prayers, readings and often ritual and music.\nInformal or charismatic worship (as in Pentecostal and some Evangelical churches) is more spontaneous, with free prayer, modern songs and emphasis on the Holy Spirit.\nQuakers (Society of Friends) meet in silence with no priest, waiting for guidance from the "inner light". They have no sacraments.`,
      },
      {
        title: 'Prayer',
        text: `Prayer is communication with God. It can be set prayers, such as the Lord's Prayer (Matthew 6:9-13), or informal in the person's own words.\nIntercession is praying for others. Prayer may involve thanks, sorrow, asking or praise.\nChristians pray alone or in a group. They believe it strengthens their relationship with God, though they may disagree about how God answers.`,
      },
      {
        title: 'Baptism',
        text: `Baptism is the ritual of welcoming a person into the Church using water, in the name of the Father, Son and Holy Spirit. It echoes Jesus' own baptism.\nCatholics and Anglicans baptise babies (infant baptism), with parents and godparents making promises. Baptists and many Evangelicals practise believers' baptism, where an older person chooses it, often by full immersion.\nCatholics see it as washing away original sin; other churches see it as a sign of faith.`,
      },
      {
        title: 'Eucharist',
        text: `The Eucharist (also Holy Communion, Mass or the Lord's Supper) remembers Jesus' Last Supper, when he shared bread and wine (Luke 22:19-20).\nCatholics believe in transubstantiation: the bread and wine truly become the body and blood of Christ. Many Protestants see the bread and wine as symbolic reminders. Anglican views vary.\nQuakers and the Salvation Army do not hold the ritual, believing the spirit is what matters.`,
      },
      {
        title: 'Pilgrimage and festivals',
        text: `Pilgrimage is a journey to a holy place. Walsingham in Norfolk is linked to a vision of Mary and is a centre of Marian pilgrimage. Taizé in France is an ecumenical community that welcomes young people for prayer, simple living and reconciliation.\nChristmas celebrates the birth of Jesus (the incarnation). Easter celebrates his resurrection and is the most important festival.\nEach is marked by special services, traditions and family gatherings.`,
      },
      {
        title: 'The church in Britain',
        text: `The 2011 census recorded about 59% of people in England and Wales as Christian; in 2021 it was about 46%. Britain is also more multi-faith.\nLocal churches serve their communities through food banks, youth clubs, street pastors and support for the lonely or homeless. These come from the command to love your neighbour.\nChurches also hold key life events such as weddings and funerals.`,
      },
      {
        title: 'The worldwide Church',
        text: `Mission and evangelism mean spreading the faith, following the Great Commission in Matthew 28:19. Charities such as Tearfund work to end poverty.\nIn some countries Christians face persecution. Groups raise awareness and pray for them.\nThe ecumenical movement seeks unity among Christians. The World Council of Churches (founded 1948) brings many churches together to promote reconciliation.`,
      },
    ],
    check: [
      { q: 'How do Quakers worship?', a: 'In silent meetings without a priest, waiting for guidance from the inner light; they have no sacraments.' },
      { q: 'What is the difference between infant and believers’ baptism?', a: 'Infant baptism is of babies with parents promising on their behalf; believers’ baptism is chosen by an older person, often by immersion.' },
      { q: 'What do Catholics believe about the bread and wine?', a: 'Transubstantiation: they become the body and blood of Christ.' },
      { q: 'Why do Christians go on pilgrimage?', a: 'To deepen faith, pray in a holy place and feel closer to God, e.g. Walsingham or Taizé.' },
      { q: 'What does ecumenism mean?', a: 'Working for unity between different Christian churches.' },
    ],
  },

  'Islam: beliefs and teachings': {
    keyPoints: [
      'Tawhid, the oneness of Allah, is the most important Muslim belief; Allah is both transcendent and immanent.',
      'Prophets, including Adam, Ibrahim, Isa and Muhammad (the Seal of the Prophets), bring Allah’s guidance.',
      'Angels such as Jibril carry out Allah’s commands, and do not have free will, unlike humans.',
      'Akhirah: everyone will face Allah’s judgement and go to heaven (Jannah) or hell (Jahannam).',
      'Sunni Muslims follow six articles of faith; Shi’a Muslims follow five Roots of Religion (Usul ad-Din).',
    ],
    steps: [
      {
        title: 'Tawhid and the nature of Allah',
        text: `Tawhid means the oneness of Allah. Surah 112 says "Say: He is Allah, the One". Sharing Allah's power with anything else is shirk, the greatest sin.\nAllah is transcendent: beyond and above the universe. He is also immanent, close to people; Qur'an 50:16 says he is closer than the jugular vein.\nAllah is just and merciful. Shi'a Muslims call justice Adalat, and it is one of their five roots of religion.`,
      },
      {
        title: 'Prophethood',
        text: `A prophet (nabi) is a messenger chosen to teach people to follow Allah. Muslims believe there have been many.\nAdam was the first prophet, Ibrahim taught monotheism, and Isa (Jesus) is a prophet but not the son of God. Muhammad is the last prophet, the Seal of the Prophets (Qur'an 33:40).\nThe prophets are role models. Muslims believe the Qur'an was given to Muhammad.`,
      },
      {
        title: 'Angels',
        text: `Angels (malaikah) are created from light and obey Allah. Jibril brought the revelation to the prophets, including the Qur'an to Muhammad. Mika'il is linked with rain and provision, and Israfil will blow the trumpet on the Day of Judgement.\nAngels have no free will; they do as Allah commands. Humans do have free will, so are responsible for their choices.\nBelief in angels shows Muslims that Allah's world is more than what we see.`,
      },
      {
        title: 'Akhirah',
        text: `Akhirah means life after death. Muslims believe the soul waits until the Day of Judgement, when everyone is judged on their deeds. The righteous enter Jannah, the wrongdoers Jahannam.\nThis motivates Muslims to live well, since they will be held accountable.\nAl-Qadr is the belief that Allah knows and has power over everything. Muslims debate how this fits with human freedom: most say Allah knows what we will choose, but we are still free and responsible.`,
      },
      {
        title: 'Sunni articles of faith',
        text: `Sunni Muslims hold six articles: belief in Allah, angels, holy books, prophets, the Last Day, and al-Qadr (predestination).\nThe books include the Qur'an, plus earlier scriptures such as the Tawrat (Torah), Zabur (Psalms) and Injil (Gospel). Muslims believe earlier books were altered over time, and the Qur'an is Allah's final, unchanged word.`,
      },
      {
        title: 'Shi’a Roots of Religion',
        text: `Shi'a Muslims hold five Usul ad-Din (Roots of Religion): Tawhid, Adalat (justice), Nubuwwah (prophethood), Imamah (leadership) and Ma'ad (the Day of Judgement).\nImamah is the belief that Allah appointed Imams, descended from Muhammad through Ali, to lead the community. This is the main difference from Sunni Islam, which holds that leaders are chosen by the community.\nBoth branches share the same Qur'an and the main beliefs.`,
      },
      {
        title: 'Exam skills and sources',
        text: `Use Qur'an references and hadith (reported sayings of Muhammad) as sources of authority. Keep quotes short and attribute them correctly.\nFor (c), show two reasons or the Sunni and Shi'a view. For (d), such as "Belief in life after death is the most important Muslim belief", compare it with tawhid and give your own judgement.`,
      },
    ],
    check: [
      { q: 'What is tawhid?', a: 'The oneness of Allah.' },
      { q: 'Who is the Seal of the Prophets?', a: 'Muhammad, the last prophet (Qur’an 33:40).' },
      { q: 'Name one angel and his role.', a: 'Jibril brought revelation to prophets; Mika’il is linked to rain; Israfil will blow the trumpet.' },
      { q: 'Name two Shi’a Roots of Religion that Sunnis do not list separately.', a: 'Adalat (justice) and Imamah (leadership).' },
      { q: 'What does akhirah mean to Muslims?', a: 'Life after death and judgement by Allah, leading to Jannah or Jahannam.' },
    ],
  },

  'Islam: practices': {
    keyPoints: [
      'Sunni Muslims follow the Five Pillars: Shahadah, Salah, Zakah, Sawm and Hajj.',
      'Shi’a Muslims follow Ten Obligatory Acts, including Khums and pilgrimage to Shi’a shrines.',
      'Jihad means struggle: greater jihad is the inner struggle to be good, lesser jihad is defence of the faith.',
      'Id-ul-Fitr, Id-ul-Adha, Ashura (Shi’a) and Laylat al-Qadr are key occasions.',
      'Practices unite the ummah (community) and keep Muslims close to Allah.',
    ],
    steps: [
      {
        title: 'Shahadah and Salah',
        text: `Shahadah is the declaration: "There is no god but Allah, and Muhammad is the messenger of Allah." Saying it sincerely makes a person Muslim.\nSalah is prayer five times a day: Fajr (dawn), Zuhr (midday), Asr (afternoon), Maghrib (sunset) and Isha (night). Muslims face Makkah and wash first (wudu).\nOn Fridays the Jummah prayer at midday is held at the mosque with a sermon (khutbah). In Britain, Muslims adjust prayer around work and school.`,
      },
      {
        title: 'Zakah and Sawm',
        text: `Zakah is compulsory charity, usually 2.5% of savings above a minimum, given once a year. It purifies wealth and helps the poor.\nSawm is fasting during Ramadan, the ninth month. Muslims do not eat, drink or have sex from dawn to sunset. It builds self-control and sympathy for the poor.\nChildren, the sick, the elderly, travellers and pregnant women may be exempt, and make it up later or give to charity.`,
      },
      {
        title: 'Hajj',
        text: `Hajj is the pilgrimage to Makkah in Dhul-Hijjah, the last month. Every Muslim who is healthy and can afford it should go at least once.\nRituals include wearing simple white ihram, walking around the Kaaba (tawaf), standing at Arafat, and re-enacting the story of Hajar and Ibrahim. It shows equality and unity.\nMany Muslims also visit Madinah.`,
      },
      {
        title: 'Shi’a Ten Obligatory Acts',
        text: `Shi'a Islam has ten practices: Salah, Sawm, Zakah, Hajj, Khums, Jihad, Amr-bil-Maruf (encouraging good), Nahy Anil Munkar (forbidding evil), Tawalla (loving Allah's friends) and Tabarra (disassociating from evil).\nKhums is a 20% tax on surplus income. It is used for the needy and religious causes.\nShi'a Muslims also make pilgrimage to shrines of the Imams, such as Karbala and Najaf in Iraq.`,
      },
      {
        title: 'Jihad',
        text: `Jihad means struggle in the way of Allah. Greater jihad is the lifelong inner struggle to resist temptation and live as a good Muslim. Lesser jihad is the struggle in defence of Islam or against injustice, which must follow strict rules (it must be a last resort, led by legitimate authority and protect the innocent).\nMuslims reject terrorism as contrary to Islam; the word does not mean "holy war" in the popular sense.`,
      },
      {
        title: 'Festivals',
        text: `Id-ul-Fitr marks the end of Ramadan with prayers, feasting, new clothes, gifts and Zakat-ul-Fitr to the poor.\nId-ul-Adha remembers Ibrahim's willingness to sacrifice his son, and coincides with Hajj. Families sacrifice an animal and share the meat with the poor.\nLaylat al-Qadr (Night of Power) remembers the first revelation of the Qur'an, in the last ten nights of Ramadan.`,
      },
      {
        title: 'Ashura and exam skills',
        text: `Ashura is on the 10th of Muharram. Shi'a Muslims mourn the martyrdom of Husayn, Muhammad's grandson, at Karbala in 680 CE, with processions and readings. Many Sunnis fast on this day, remembering Musa (Moses) being saved.\nFor (c) and (d) questions, use specific details: which pillar, what it involves, why it matters, and a source such as the Qur'an, and consider Sunni and Shi'a differences.`,
      },
    ],
    check: [
      { q: 'List the Five Pillars.', a: 'Shahadah, Salah, Zakah, Sawm, Hajj.' },
      { q: 'How much is Zakah normally?', a: '2.5% of savings above a minimum amount, each year.' },
      { q: 'What is the difference between greater and lesser jihad?', a: 'Greater jihad is the inner struggle to be good; lesser jihad is defending the faith under strict rules.' },
      { q: 'What does Khums involve?', a: 'Shi’a Muslims giving 20% of surplus income for the needy and religious causes.' },
      { q: 'Why do Shi’a Muslims observe Ashura?', a: 'To mourn the death of Husayn at Karbala.' },
    ],
  },
}
