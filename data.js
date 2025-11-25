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
      { text: "Niezorganizowany", description: "Bezładny\nNieuporządkowany\nChaotyczny", color: "red" },
      { text: "Nieśmiały", description: "Wrażliwy\nSpokojny\nŁatwo go zakłopotać", color: "blue" },
      { text: "Nieelastyczny", description: "Nieugięty\nStały\nCzepia się drobiazgów", color: "green" },
      { text: "Dominujący", description: "Lubi rozkazywać\nNarzucający zdanie\nNie refleksyjny", color: "yellow" }
    ]
  },
  {
    id: 3,
    options: [
      { text: "Porządny", description: "Staranny\nDba o porządek\nZorganizowany", color: "red" },
      { text: "Wspierający innych", description: "Pomocny\nZachęca innych\nWyrozumiały", color: "blue" },
      { text: "Kreatywny", description: "Ma oryginalne pomysły\nMa dobrą intuicję\nPomysłowy", color: "green" },
      { text: "Produktywny", description: "Ambitny\nDążący do celu\nSkuteczny", color: "yellow" }
    ]
  },
  {
    id: 4,
    options: [
      { text: "Uparty", description: "Nie rezygnuje\nNonkonformista\nOdporny na wpływ", color: "red" },
      { text: "Perfekcyjny", description: "Dąży do doskonałości\nDba o szczegóły\nPedantyczny", color: "blue" },
      { text: "Nie emocjonalny", description: "Lekceważy emocje innych\nOpanowany\nWyniosły", color: "green" },
      { text: "Impulsywny", description: "Działający szybko\nEnergetyczny\nBez hamulców", color: "yellow" }
    ]
  },
  {
    id: 5,
    options: [
      { text: "Ciepły", description: "Serdeczny\nŻyczliwy\nŁagodny", color: "red" },
      { text: "Entuzjastyczny", description: "Energiczny\nZapalczywy\nInspirujący", color: "blue" },
      { text: "Dzielny", description: "Odważny\nŚmiały\nNieustraszony", color: "green" },
      { text: "Dokładny", description: "Ostrożny\nPrecyzyjny\nNie popełnia błędów", color: "yellow" }
    ]
  },
  {
    id: 6,
    options: [
      { text: "Nietowarzyski", description: "Nie kontaktowy\nSkryty\nZamknięty w sobie", color: "red" },
      { text: "Niewdzięczny", description: "Niedbały o innych\nNieczuły\nUrażający", color: "blue" },
      { text: "Egocentryczny", description: "Zagadujący na śmierć\nŚlepy na innych\nPochłonięty sobą", color: "green" },
      { text: "Bierny", description: "Podporządkowany\nNieasertywny\nNie agresywny", color: "yellow" }
    ]
  },
  {
    id: 7,
    options: [
      { text: "Rozmowny", description: "Ekspresyjny\nTowarzyski\nPrzyjazny", color: "red" },
      { text: "Zdecydowany", description: "Wyraźny\nPodejmujący decyzje\nDziałający", color: "blue" },
      { text: "Analityczny", description: "Badający\nAnalizujący\nOceniający", color: "green" },
      { text: "Lojalny", description: "Wierny\nMożna na nim polegać\nStały", color: "yellow" }
    ]
  },
  {
    id: 8,
    options: [
      { text: "Komenderujący", description: "Mocny\nArogancki\nDogmatyczny", color: "red" },
      { text: "Niespokojny", description: "Niecierpliwy\nNakręcony\nNie relaksuje się", color: "blue" },
      { text: "Powolny", description: "Wolniejszy niż inni\nPracuje powoli\nZwlekający", color: "green" },
      { text: "Zamartwiający się", description: "Lękliwy\nPełen obaw\nZmartwiony", color: "yellow" }
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
      { text: "Niestały", description: "Nieodpowiedzialny\nNie można polegać\nNiepunktualny", color: "red" },
      { text: "Zależny", description: "Polega na innych\nNiepewny siebie\nChwiejny", color: "blue" },
      { text: "Surowy", description: "Narzuca reguły\nNiecierpliwy\nKarzący", color: "green" },
      { text: "Nietaktowny", description: "Nieokrzesany\nNiedelikatny\nDepczący po odciskach", color: "yellow" }
    ]
  },
  {
    id: 11,
    options: [
      { text: "Planujący", description: "Bada za i przeciw\nPrecyzyjny\nRozważny", color: "red" },
      { text: "Godny zaufania", description: "Można na nim polegać\nUczciwy\nMożna mu wierzyć", color: "blue" },
      { text: "Otwarty", description: "Szczery\nKomunikatywny\nEkspresyjny", color: "green" },
      { text: "Śmiały", description: "Odważny\nDziała z rozmachem\nNieustraszony", color: "yellow" }
    ]
  },
  {
    id: 12,
    options: [
      { text: "Niezdecydowany", description: "Zbierający dane\nNiewyraźny\nWahający się", color: "red" },
      { text: "Ostrożny", description: "Nieufny\nDokładny\nRozważny", color: "blue" },
      { text: "Twardy", description: "Logiczny\nNieugięty\nDopnie swego", color: "green" },
      { text: "Niekonsekwentny", description: "Nielogiczny\nPełen sprzeczności\nKreatywny", color: "yellow" }
    ]
  },
  {
    id: 13,
    options: [
      { text: "Tolerancyjny", description: "Cierpliwy\nSzanujący\nAkceptujący", color: "red" },
      { text: "Wszechstronny", description: "Elastyczny\nTwórczy\nPomysłowy", color: "blue" },
      { text: "Zdecydowany", description: "Ambitny\nStanowczy\nNieustępliwy", color: "green" },
      { text: "Precyzyjny", description: "Dokładny\nKonkretny\nOdpowiedzialny", color: "yellow" }
    ]
  },
  {
    id: 14,
    options: [
      { text: "Drażliwy", description: "Szybko się obraża\nWrażliwy\nŁatwo urazić", color: "red" },
      { text: "Dominujący", description: "Nieelastyczny\nAgresywny\nRywalizujący", color: "blue" },
      { text: "Wyszczekany", description: "Gaduła\nMówi, co myśli\nAsertywny", color: "green" },
      { text: "Wycofany", description: "Łatwy w kontakcie\nBierny\nNiegroźny", color: "yellow" }
    ]
  },
  {
    id: 15,
    options: [
      { text: "Wspaniałomyślny", description: "Niesamolubny\nPotrafi dawać\nLubi się dzielić", color: "red" },
      { text: "Bezpośredni", description: "Przywódczy\nZdecydowany\nSilny", color: "blue" },
      { text: "Spostrzegawczy", description: "Otwarty na informacje\nObserwujący\nRozróżniający", color: "green" },
      { text: "Tolerancyjny", description: "Cierpliwy\nŁatwo się przystosowuje\nDostosowuje się", color: "yellow" }
    ]
  },
  {
    id: 16,
    options: [
      { text: "Kontrolujący", description: "Manipulujący\nWymuszający\nDyrygujący", color: "red" },
      { text: "Nadgorliwy", description: "Pochopny\nImpulsywny\nNiespokojny", color: "blue" },
      { text: "Uczuciowy", description: "Wrażliwy\nGłęboko przeżywający\nDelikatny", color: "green" },
      { text: "Nieufny", description: "Podejrzliwy\nBaczny\nNastawiony obronnie", color: "yellow" }
    ]
  }
];

const colorNames = {
  red: "Czerwony - Dominujący",
  blue: "Niebieski - Analityczny", 
  green: "Zielony - Wspierający",
  yellow: "Żółty - Ekspresyjny"
};
