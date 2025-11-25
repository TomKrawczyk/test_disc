const questionnaireData = [
  {
    id: 1,
    options: [
      { text: "Pewny siebie", description: "Polegający na sobie\nZdecydowany\nNiezależny", color: "red" },
      { text: "Zdyscyplinowany", description: "Systematyczny\nSprawny\nOpanowany", color: "blue" },
      { text: "Odpowiedzialny", description: "Godny zaufania\nMożna na nim polegać\nPunktualny", color: "green" },
      { text: "Ekspresyjny", description: "Okazujący uczucia\nWyrażający się otwarcie\nGestykulujący", color: "yellow" }
    ]
  },
  {
    id: 2,
    options: [
      { text: "Niezorganizowany", description: "Bezładny\nNieuporządkowany\nChaotyczny", color: "yellow" },
      { text: "Nieśmiały", description: "Wrażliwy\nSpokojny\nŁatwo go zakłopotać", color: "green" },
      { text: "Nieelastyczny", description: "Nieugięty\nStały\nCzepia się drobiazgów", color: "blue" },
      { text: "Dominujący", description: "Lubi rozkazywać\nNarzucający zdanie\nNie refleksyjny", color: "red" }
    ]
  },
  {
    id: 3,
    options: [
      { text: "Porządny", description: "Staranny\nDba o porządek\nZorganizowany", color: "blue" },
      { text: "Wspierający innych", description: "Pomocny\nZachęca innych\nWyrozumiały", color: "green" },
      { text: "Kreatywny", description: "Ma oryginalne pomysły\nMa dobrą intuicję\nPomysłowy", color: "yellow" },
      { text: "Produktywny", description: "Ambitny\nDążący do celu\nSkuteczny", color: "red" }
    ]
  },
  {
    id: 4,
    options: [
      { text: "Uparty", description: "Nie rezygnuje\nNonkonformista\nOdporny na wpływ", color: "green" },
      { text: "Perfekcyjny", description: "Dąży do doskonałości\nDba o szczegóły\nPedantyczny", color: "blue" },
      { text: "Nie emocjonalny", description: "Lekceważy emocje innych\nOpanowany\nWyniosły", color: "red" },
      { text: "Impulsywny", description: "Działający szybko\nEnergetyczny\nBez hamulców", color: "yellow" }
    ]
  },
  {
    id: 5,
    options: [
      { text: "Ciepły", description: "Serdeczny\nŻyczliwy\nŁagodny", color: "green" },
      { text: "Entuzjastyczny", description: "Energiczny\nZapalczywy\nInspirujący", color: "yellow" },
      { text: "Dzielny", description: "Odważny\nŚmiały\nNieustraszony", color: "red" },
      { text: "Dokładny", description: "Ostrożny\nPrecyzyjny\nNie popełnia błędów", color: "blue" }
    ]
  },
  {
    id: 6,
    options: [
      { text: "Nietowarzyski", description: "Nie kontaktowy\nSkryty\nZamknięty w sobie", color: "blue" },
      { text: "Niewdzięczny", description: "Niedbały o innych\nNieczuły\nUrażający", color: "red" },
      { text: "Egocentryczny", description: "Zagadujący na śmierć\nŚlepy na innych\nPochłonięty sobą", color: "yellow" },
      { text: "Bierny", description: "Podporządkowany\nNieasertywny\nNie agresywny", color: "green" }
    ]
  },
  {
    id: 7,
    options: [
      { text: "Rozmowny", description: "Ekspresyjny\nTowarzyski\nPrzyjazny", color: "yellow" },
      { text: "Zdecydowany", description: "Wyraźny\nPodejmujący decyzje\nDziałający", color: "red" },
      { text: "Analityczny", description: "Badający\nAnalizujący\nOceniający", color: "blue" },
      { text: "Lojalny", description: "Wierny\nMożna na nim polegać\nStały", color: "green" }
    ]
  },
  {
    id: 8,
    options: [
      { text: "Komenderujący", description: "Mocny\nArogancki\nDogmatyczny", color: "red" },
      { text: "Niespokojny", description: "Niecierpliwy\nNakręcony\nNie relaksuje się", color: "yellow" },
      { text: "Powolny", description: "Wolniejszy niż inni\nPracuje powoli\nZwlekający", color: "green" },
      { text: "Zamartwiający się", description: "Lękliwy\nPełen obaw\nZmartwiony", color: "blue" }
    ]
  },
  {
    id: 9,
    options: [
      { text: "Pewny", description: "Pewny siebie\nZdecydowany\nMocno osadzony", color: "red" },
      { text: "Krytycznie myślący", description: "Właściwie analizuje\nDokładny\nPrecyzyjny", color: "blue" },
      { text: "Przyjazny", description: "Sympatyczny\nMiły\nPogodny", color: "green" },
      { text: "Zabawowy", description: "Żywy\nZabawny\nPełen humoru", color: "yellow" }
    ]
  },
  {
    id: 10,
    options: [
      { text: "Niestały", description: "Nieodpowiedzialny\nNie można polegać\nNiepunktualny", color: "yellow" },
      { text: "Zależny", description: "Polega na innych\nNiepewny siebie\nChwiejny", color: "green" },
      { text: "Surowy", description: "Narzuca reguły\nNiecierpliwy\nKarzący", color: "blue" },
      { text: "Nietaktowny", description: "Nieokrzesany\nNiedelikatny\nDepczący po odciskach", color: "red" }
    ]
  },
  {
    id: 11,
    options: [
      { text: "Planujący", description: "Bada za i przeciw\nPrecyzyjny\nRozważny", color: "blue" },
      { text: "Godny zaufania", description: "Można na nim polegać\nUczciwy\nMożna mu wierzyć", color: "green" },
      { text: "Otwarty", description: "Szczery\nKomunikatywny\nEkspresyjny", color: "yellow" },
      { text: "Śmiały", description: "Odważny\nDziała z rozmachem\nNieustraszony", color: "red" }
    ]
  },
  {
    id: 12,
    options: [
      { text: "Niezdecydowany", description: "Zbierający dane\nNiewyraźny\nWahający się", color: "green" },
      { text: "Ostrożny", description: "Nieufny\nDokładny\nRozważny", color: "blue" },
      { text: "Twardy", description: "Logiczny\nNieugięty\nDopnie swego", color: "red" },
      { text: "Niekonsekwentny", description: "Nielogiczny\nPełen sprzeczności\nKreatywny", color: "yellow" }
    ]
  },
  {
    id: 13,
    options: [
      { text: "Tolerancyjny", description: "Cierpliwy\nSzanujący\nAkceptujący", color: "green" },
      { text: "Wszechstronny", description: "Elastyczny\nTwórczy\nPomysłowy", color: "yellow" },
      { text: "Zdecydowany", description: "Ambitny\nStanowczy\nNieustępliwy", color: "red" },
      { text: "Precyzyjny", description: "Dokładny\nKonkretny\nOdpowiedzialny", color: "blue" }
    ]
  },
  {
    id: 14,
    options: [
      { text: "Drażliwy", description: "Szybko się obraża\nWrażliwy\nŁatwo urazić", color: "blue" },
      { text: "Dominujący", description: "Nieelastyczny\nAgresywny\nRywalizujący", color: "red" },
      { text: "Wyszczekany", description: "Gaduła\nMówi, co myśli\nAsertywny", color: "yellow" },
      { text: "Wycofany", description: "Łatwy w kontakcie\nBierny\nNiegroźny", color: "green" }
    ]
  },
  {
    id: 15,
    options: [
      { text: "Wspaniałomyślny", description: "Niesamolubny\nPotrafi dawać\nLubi się dzielić", color: "yellow" },
      { text: "Bezpośredni", description: "Przywódczy\nZdecydowany\nSilny", color: "red" },
      { text: "Spostrzegawczy", description: "Otwarty na informacje\nObserwujący\nRozróżniający", color: "blue" },
      { text: "Tolerancyjny", description: "Cierpliwy\nŁatwo się przystosowuje\nDostosowuje się", color: "green" }
    ]
  },
  {
    id: 16,
    options: [
      { text: "Kontrolujący", description: "Manipulujący\nWymuszający\nDyrygujący", color: "red" },
      { text: "Nadgorliwy", description: "Pochopny\nImpulsywny\nNiespokojny", color: "yellow" },
      { text: "Uczuciowy", description: "Wrażliwy\nGłęboko przeżywający\nDelikatny", color: "green" },
      { text: "Nieufny", description: "Podejrzliwy\nBaczny\nNastawiony obronnie", color: "blue" }
    ]
  }
];

const colorNames = {
  red: "Czerwony - Dominujący",
  blue: "Niebieski - Analityczny", 
  green: "Zielony - Wspierający",
  yellow: "Żółty - Ekspresyjny"
};
