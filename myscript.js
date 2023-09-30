const populate = async (base, value, target) => {
  let elem = document.getElementsByClassName("other");
  for(let i of elem) {
    i.style.display = "block";
  }

  const url =
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_sGXjfx1tGzZRGVtZ8bZM3c4rdeelCGgZGYjWYIY1&base_currency=" +
    base;

  const countryListurl =
    "https://api.currencyapi.com/v3/currencies?apikey=cur_live_sGXjfx1tGzZRGVtZ8bZM3c4rdeelCGgZGYjWYIY1";

  //  saving the list of countries supported by currencyapi. Used countryListurl to get this data.
  const countryList = {
    data: {
      AED: {
        symbol: "AED",
        name: "United Arab Emirates Dirham",
        symbol_native: "\u062F.\u0625",
        decimal_digits: 2,
        rounding: 0,
        code: "AED",
        name_plural: "UAE dirhams",
      },

      AFN: {
        symbol: "Af",
        name: "Afghan Afghani",
        symbol_native: "\u060B",
        decimal_digits: 0,
        rounding: 0,
        code: "AFN",
        name_plural: "Afghan Afghanis",
      },
      ALL: {
        symbol: "ALL",
        name: "Albanian Lek",
        symbol_native: "Lek",
        decimal_digits: 0,
        rounding: 0,
        code: "ALL",
        name_plural: "Albanian lek\u00EB",
      },
      AMD: {
        symbol: "AMD",
        name: "Armenian Dram",
        symbol_native: "\u0564\u0580.",
        decimal_digits: 0,
        rounding: 0,
        code: "AMD",
        name_plural: "Armenian drams",
      },
      ANG: {
        symbol: "\u0192",
        name: "NL Antillean Guilder",
        symbol_native: "NA\u0192",
        decimal_digits: 2,
        rounding: 0,
        code: "ANG",
        icon_name: "ang",
        name_plural: "NL Antillean Guilders",
      },
      AOA: {
        symbol: "Kz",
        name: "Angolan Kwanza",
        symbol_native: "Kz",
        decimal_digits: 2,
        rounding: 0,
        code: "AOA",
        icon_name: "aoa",
        name_plural: "Angolan Kwanza",
      },
      ARS: {
        symbol: "AR$",
        name: "Argentine Peso",
        symbol_native: "$",
        decimal_digits: 2,
        rounding: 0,
        code: "ARS",
        name_plural: "Argentine pesos",
      },
      AUD: {
        symbol: "AU$",
        name: "Australian Dollar",
        symbol_native: "$",
        decimal_digits: 2,
        rounding: 0,
        code: "AUD",
        name_plural: "Australian dollars",
      },
      AWG: {
        symbol: "Afl.",
        name: "Aruban Florin",
        symbol_native: "Afl.",
        decimal_digits: 2,
        rounding: 0,
        code: "AWG",
        icon_name: "awg",
        name_plural: "Aruban Florin",
      },
      AZN: {
        symbol: "man.",
        name: "Azerbaijani Manat",
        symbol_native: "\u043C\u0430\u043D.",
        decimal_digits: 2,
        rounding: 0,
        code: "AZN",
        name_plural: "Azerbaijani manats",
      },
      BAM: {
        symbol: "KM",
        name: "Bosnia-Herzegovina Convertible Mark",
        symbol_native: "KM",
        decimal_digits: 2,
        rounding: 0,
        code: "BAM",
        name_plural: "Bosnia-Herzegovina convertible marks",
      },
      BBD: {
        symbol: "Bds$",
        name: "Barbadian Dollar",
        symbol_native: "$",
        decimal_digits: 2,
        rounding: 0,
        code: "BBD",
        icon_name: "bbd",
        name_plural: "Barbadian Dollars",
      },
      BDT: {
        symbol: "Tk",
        name: "Bangladeshi Taka",
        symbol_native: "\u09F3",
        decimal_digits: 2,
        rounding: 0,
        code: "BDT",
        name_plural: "Bangladeshi takas",
      },
      BGN: {
        symbol: "BGN",
        name: "Bulgarian Lev",
        symbol_native: "\u043B\u0432.",
        decimal_digits: 2,
        rounding: 0,
        code: "BGN",
        name_plural: "Bulgarian leva",
      },
      BHD: {
        symbol: "BD",
        name: "Bahraini Dinar",
        symbol_native: "\u062F.\u0628.\u200F",
        decimal_digits: 3,
        rounding: 0,
        code: "BHD",
        name_plural: "Bahraini dinars",
      },
      BIF: {
        symbol: "FBu",
        name: "Burundian Franc",
        symbol_native: "FBu",
        decimal_digits: 0,
        rounding: 0,
        code: "BIF",
        name_plural: "Burundian francs",
      },
      BMD: {
        symbol: "BD$",
        name: "Bermudan Dollar",
        symbol_native: "$",
        decimal_digits: 2,
        rounding: 0,
        code: "BMD",
        icon_name: "bmd",
        name_plural: "Bermudan Dollars",
      },
      BND: {
        symbol: "BN$",
        name: "Brunei Dollar",
        symbol_native: "$",
        decimal_digits: 2,
        rounding: 0,
        code: "BND",
        name_plural: "Brunei dollars",
      },
      BOB: {
        symbol: "Bs",
        name: "Bolivian Boliviano",
        symbol_native: "Bs",
        decimal_digits: 2,
        rounding: 0,
        code: "BOB",
        name_plural: "Bolivian bolivianos",
      },
      BRL: {
        symbol: "R$",
        name: "Brazilian Real",
        symbol_native: "R$",
        decimal_digits: 2,
        rounding: 0,
        code: "BRL",
        name_plural: "Brazilian reals",
      },
      BSD: {
        symbol: "B$",
        name: "Bahamian Dollar",
        symbol_native: "$",
        decimal_digits: 2,
        rounding: 0,
        code: "BSD",
        icon_name: "bsd",
        name_plural: "Bahamian Dollars",
      },
      BTN: {
        symbol: "Nu.",
        name: "Bhutanese Ngultrum",
        symbol_native: "Nu.",
        decimal_digits: 2,
        rounding: 0,
        code: "BTN",
        icon_name: "btn",
        name_plural: "Bhutanese Ngultrum",
      },
      BWP: {
        symbol: "BWP",
        name: "Botswanan Pula",
        symbol_native: "P",
        decimal_digits: 2,
        rounding: 0,
        code: "BWP",
        name_plural: "Botswanan pulas",
      },
      BYN: {
        symbol: "Br",
        name: "Belarusian ruble",
        symbol_native: "Br",
        decimal_digits: 2,
        rounding: 0,
        code: "BYN",
        name_plural: "Belarusian rubles",
      },
      BYR: {
        symbol: "BYR",
        name: "Belarusian Ruble",
        symbol_native: "BYR",
        decimal_digits: 0,
        rounding: 0,
        code: "BYR",
        name_plural: "Belarusian rubles",
      },
      BZD: {
        symbol: "BZ$",
        name: "Belize Dollar",
        symbol_native: "$",
        decimal_digits: 2,
        rounding: 0,
        code: "BZD",
        name_plural: "Belize dollars",
      },
      CAD: {
        symbol: "CA$",
        name: "Canadian Dollar",
        symbol_native: "$",
        decimal_digits: 2,
        rounding: 0,
        code: "CAD",
        name_plural: "Canadian dollars",
      },
      CDF: {
        symbol: "CDF",
        name: "Congolese Franc",
        symbol_native: "FrCD",
        decimal_digits: 2,
        rounding: 0,
        code: "CDF",
        name_plural: "Congolese francs",
      },
      CHF: {
        symbol: "CHF",
        name: "Swiss Franc",
        symbol_native: "CHF",
        decimal_digits: 2,
        rounding: 0,
        code: "CHF",
        name_plural: "Swiss francs",
      },
      CLF: {
        symbol: "UF",
        name: "Unidad de Fomento",
        symbol_native: "UF",
        decimal_digits: 2,
        rounding: 0,
        code: "CLF",
        name_plural: "Unidad de Fomentos",
      },
      CLP: {
        symbol: "CL$",
        name: "Chilean Peso",
        symbol_native: "$",
        decimal_digits: 0,
        rounding: 0,
        code: "CLP",
        name_plural: "Chilean pesos",
      },
      CNY: {
        symbol: "CN\u00A5",
        name: "Chinese Yuan",
        symbol_native: "CN\u00A5",
        decimal_digits: 2,
        rounding: 0,
        code: "CNY",
        name_plural: "Chinese yuan",
      },
      COP: {
        symbol: "CO$",
        name: "Coombian Peso",
        symbol_native: "$",
        decimal_digits: 0,
        rounding: 0,
        code: "COP",
        name_plural: "Colombian pesos",
      },
      CRC: {
        symbol: "\u20A1",
        name: "Costa Rican Col\u00F3n",
        symbol_native: "\u20A1",
        decimal_digits: 0,
        rounding: 0,
        code: "CRC",
        name_plural: "Costa Rican col\u00F3ns",
      },
      CUC: {
        symbol: "CUC$",
        name: "Cuban Convertible Peso",
        symbol_native: "$",
        decimal_digits: 2,
        rounding: 0,
        code: "CUC",
        icon_name: "cuc",
        name_plural: "Cuban Convertible Peso",
      },
      CUP: {
        symbol: "$MN",
        name: "Cuban Peso",
        symbol_native: "$",
        decimal_digits: 2,
        rounding: 0,
        code: "CUP",
        icon_name: "cup",
        name_plural: "Cuban Peso",
      },
      CVE: {
        symbol: "CV$",
        name: "Cape Verdean Escudo",
        symbol_native: "CV$",
        decimal_digits: 2,
        rounding: 0,
        code: "CVE",
        name_plural: "Cape Verdean escudos",
      },
      CZK: {
        symbol: "K\u010D",
        name: "Czech Republic Koruna",
        symbol_native: "K\u010D",
        decimal_digits: 2,
        rounding: 0,
        code: "CZK",
        name_plural: "Czech Republic korunas",
      },
      DJF: {
        symbol: "Fdj",
        name: "Djiboutian Franc",
        symbol_native: "Fdj",
        decimal_digits: 0,
        rounding: 0,
        code: "DJF",
        name_plural: "Djiboutian francs",
      },
      DKK: {
        symbol: "Dkr",
        name: "Danish Krone",
        symbol_native: "kr",
        decimal_digits: 2,
        rounding: 0,
        code: "DKK",
        name_plural: "Danish kroner",
      },
      DOP: {
        symbol: "RD$",
        name: "Dominican Peso",
        symbol_native: "RD$",
        decimal_digits: 2,
        rounding: 0,
        code: "DOP",
        name_plural: "Dominican pesos",
      },
      DZD: {
        symbol: "DA",
        name: "Algerian Dinar",
        symbol_native: "\u062F.\u062C.\u200F",
        decimal_digits: 2,
        rounding: 0,
        code: "DZD",
        name_plural: "Algerian dinars",
      },
      EGP: {
        symbol: "EGP",
        name: "Egyptian Pound",
        symbol_native: "\u062C.\u0645.\u200F",
        decimal_digits: 2,
        rounding: 0,
        code: "EGP",
        name_plural: "Egyptian pounds",
      },
      ERN: {
        symbol: "Nfk",
        name: "Eritrean Nakfa",
        symbol_native: "Nfk",
        decimal_digits: 2,
        rounding: 0,
        code: "ERN",
        name_plural: "Eritrean nakfas",
      },
      ETB: {
        symbol: "Br",
        name: "Ethiopian Birr",
        symbol_native: "Br",
        decimal_digits: 2,
        rounding: 0,
        code: "ETB",
        name_plural: "Ethiopian birrs",
      },
      EUR: {
        symbol: "\u20AC",
        name: "Euro",
        symbol_native: "\u20AC",
        decimal_digits: 2,
        rounding: 0,
        code: "EUR",
        name_plural: "Euros",
      },
      FJD: {
        symbol: "FJ$",
        name: "Fijian Dollar",
        symbol_native: "$",
        decimal_digits: 2,
        rounding: 0,
        code: "FJD",
        icon_name: "fjd",
        name_plural: "Fijian Dollar",
      },
      FKP: {
        symbol: "FK\u00A3",
        name: "Falkland Islands Pound",
        symbol_native: "\u00A3",
        decimal_digits: 2,
        rounding: 0,
        code: "FKP",
        icon_name: "fkp",
        name_plural: "Falkland Islands Pound",
      },
      GBP: {
        symbol: "\u00A3",
        name: "British Pound Sterling",
        symbol_native: "\u00A3",
        decimal_digits: 2,
        rounding: 0,
        code: "GBP",
        name_plural: "British pounds sterling",
      },
      GEL: {
        symbol: "GEL",
        name: "Georgian Lari",
        symbol_native: "GEL",
        decimal_digits: 2,
        rounding: 0,
        code: "GEL",
        name_plural: "Georgian laris",
      },
      GGP: {
        symbol: "\u00A3",
        name: "Guernsey pound",
        symbol_native: "\u00A3",
        decimal_digits: 2,
        rounding: 0,
        code: "GGP",
        name_plural: "Guernsey pounds",
      },
      GHS: {
        symbol: "GH\u20B5",
        name: "Ghanaian Cedi",
        symbol_native: "GH\u20B5",
        decimal_digits: 2,
        rounding: 0,
        code: "GHS",
        name_plural: "Ghanaian cedis",
      },
      GIP: {
        symbol: "\u00A3",
        name: "Gibraltar Pound",
        symbol_native: "\u00A3",
        decimal_digits: 2,
        rounding: 0,
        code: "GIP",
        icon_name: "gip",
        name_plural: "Gibraltar Pounds",
      },
      GMD: {
        symbol: "D",
        name: "Gambian Dalasi",
        symbol_native: "D",
        decimal_digits: 2,
        rounding: 0,
        code: "GMD",
        icon_name: "gmd",
        name_plural: "Gambian Dalasi",
      },
      GNF: {
        symbol: "FG",
        name: "Guinean Franc",
        symbol_native: "FG",
        decimal_digits: 0,
        rounding: 0,
        code: "GNF",
        name_plural: "Guinean francs",
      },
      GTQ: {
        symbol: "GTQ",
        name: "Guatemalan Quetzal",
        symbol_native: "Q",
        decimal_digits: 2,
        rounding: 0,
        code: "GTQ",
        name_plural: "Guatemalan quetzals",
      },
      GYD: {
        symbol: "G$",
        name: "Guyanaese Dollar",
        symbol_native: "$",
        decimal_digits: 2,
        rounding: 0,
        code: "GYD",
        icon_name: "gyd",
        name_plural: "Guyanaese Dollar",
      },
      HKD: {
        symbol: "HK$",
        name: "Hong Kong Dollar",
        symbol_native: "$",
        decimal_digits: 2,
        rounding: 0,
        code: "HKD",
        name_plural: "Hong Kong dollars",
      },
      HNL: {
        symbol: "HNL",
        name: "Honduran Lempira",
        symbol_native: "L",
        decimal_digits: 2,
        rounding: 0,
        code: "HNL",
        name_plural: "Honduran lempiras",
      },
      HRK: {
        symbol: "kn",
        name: "Croatian Kuna",
        symbol_native: "kn",
        decimal_digits: 2,
        rounding: 0,
        code: "HRK",
        name_plural: "Croatian kunas",
      },
      HTG: {
        symbol: "G",
        name: "Haitian Gourde",
        symbol_native: "G",
        decimal_digits: 2,
        rounding: 0,
        code: "HTG",
        icon_name: "htg",
        name_plural: "Haitian Gourde",
      },
      HUF: {
        symbol: "Ft",
        name: "Hungarian Forint",
        symbol_native: "Ft",
        decimal_digits: 0,
        rounding: 0,
        code: "HUF",
        name_plural: "Hungarian forints",
      },
      IDR: {
        symbol: "Rp",
        name: "Indonesian Rupiah",
        symbol_native: "Rp",
        decimal_digits: 0,
        rounding: 0,
        code: "IDR",
        name_plural: "Indonesian rupiahs",
      },
      ILS: {
        symbol: "\u20AA",
        name: "Israeli New Sheqel",
        symbol_native: "\u20AA",
        decimal_digits: 2,
        rounding: 0,
        code: "ILS",
        name_plural: "Israeli new sheqels",
      },
      IMP: {
        symbol: "\u00A3",
        name: "Manx pound",
        symbol_native: "\u00A3",
        decimal_digits: 2,
        rounding: 0,
        code: "IMP",
        name_plural: "Manx pounds",
      },
      INR: {
        symbol: "Rs",
        name: "Indian Rupee",
        symbol_native: "\u099F\u0995\u09BE",
        decimal_digits: 2,
        rounding: 0,
        code: "INR",
        name_plural: "Indian rupees",
      },
      IQD: {
        symbol: "IQD",
        name: "Iraqi Dinar",
        symbol_native: "\u062F.\u0639.\u200F",
        decimal_digits: 0,
        rounding: 0,
        code: "IQD",
        name_plural: "Iraqi dinars",
      },
      IRR: {
        symbol: "IRR",
        name: "Iranian Rial",
        symbol_native: "\uFDFC",
        decimal_digits: 0,
        rounding: 0,
        code: "IRR",
        name_plural: "Iranian rials",
      },
      ISK: {
        symbol: "Ikr",
        name: "Icelandic Kr\u00F3na",
        symbol_native: "kr",
        decimal_digits: 0,
        rounding: 0,
        code: "ISK",
        name_plural: "Icelandic kr\u00F3nur",
      },
      JEP: {
        symbol: "\u00A3",
        name: "Jersey pound",
        symbol_native: "\u00A3",
        decimal_digits: 2,
        rounding: 0,
        code: "JEP",
        name_plural: "Jersey pound",
      },
      JMD: {
        symbol: "J$",
        name: "Jamaican Dollar",
        symbol_native: "$",
        decimal_digits: 2,
        rounding: 0,
        code: "JMD",
        name_plural: "Jamaican dollars",
      },
      JOD: {
        symbol: "JD",
        name: "Jordanian Dinar",
        symbol_native: "\u062F.\u0623.\u200F",
        decimal_digits: 3,
        rounding: 0,
        code: "JOD",
        name_plural: "Jordanian dinars",
      },
      JPY: {
        symbol: "\u00A5",
        name: "Japanese Yen",
        symbol_native: "\uFFE5",
        decimal_digits: 0,
        rounding: 0,
        code: "JPY",
        name_plural: "Japanese yen",
      },
      KES: {
        symbol: "Ksh",
        name: "Kenyan Shilling",
        symbol_native: "Ksh",
        decimal_digits: 2,
        rounding: 0,
        code: "KES",
        name_plural: "Kenyan shillings",
      },
      KGS: {
        symbol: "KGS",
        name: "Kyrgystani Som",
        symbol_native: "KGS",
        decimal_digits: 2,
        rounding: 0,
        code: "KGS",
        icon_name: "kgs",
        name_plural: "Kyrgystani Som",
      },
      KHR: {
        symbol: "KHR",
        name: "Cambodian Riel",
        symbol_native: "\u17DB",
        decimal_digits: 2,
        rounding: 0,
        code: "KHR",
        name_plural: "Cambodian riels",
      },
      KMF: {
        symbol: "CF",
        name: "Comorian Franc",
        symbol_native: "FC",
        decimal_digits: 0,
        rounding: 0,
        code: "KMF",
        name_plural: "Comorian francs",
      },
      KPW: {
        symbol: "\u20A9",
        name: "North Korean Won",
        symbol_native: "\u20A9",
        decimal_digits: 2,
        rounding: 0,
        code: "KPW",
        icon_name: "kpw",
        name_plural: "North Korean Won",
      },
      KRW: {
        symbol: "\u20A9",
        name: "South Korean Won",
        symbol_native: "\u20A9",
        decimal_digits: 0,
        rounding: 0,
        code: "KRW",
        name_plural: "South Korean won",
      },
      KWD: {
        symbol: "KD",
        name: "Kuwaiti Dinar",
        symbol_native: "\u062F.\u0643.\u200F",
        decimal_digits: 3,
        rounding: 0,
        code: "KWD",
        name_plural: "Kuwaiti dinars",
      },
      KYD: {
        symbol: "CI$",
        name: "Cayman Islands Dollar",
        symbol_native: "$\u200F",
        decimal_digits: 2,
        rounding: 0,
        code: "KYD",
        icon_name: "kyd",
        name_plural: "Cayman Islands Dollar",
      },
      KZT: {
        symbol: "KZT",
        name: "Kazakhstani Tenge",
        symbol_native: "\u0442\u04A3\u0433.",
        decimal_digits: 2,
        rounding: 0,
        code: "KZT",
        name_plural: "Kazakhstani tenges",
      },
      LAK: {
        symbol: "\u20ADN",
        name: "Laotian Kip",
        symbol_native: "\u20AD\u200F\u200F",
        decimal_digits: 0,
        rounding: 0,
        code: "LAK",
        name_plural: "Laotian Kip",
      },
      LBP: {
        symbol: "LB\u00A3",
        name: "Lebanese Pound",
        symbol_native: "\u0644.\u0644.\u200F",
        decimal_digits: 0,
        rounding: 0,
        code: "LBP",
        name_plural: "Lebanese pounds",
      },
      LKR: {
        symbol: "SLRs",
        name: "Sri Lankan Rupee",
        symbol_native: "SL Re",
        decimal_digits: 2,
        rounding: 0,
        code: "LKR",
        name_plural: "Sri Lankan rupees",
      },
      LRD: {
        symbol: "LD$",
        name: "Liberian Dollar",
        symbol_native: "L$",
        decimal_digits: 2,
        rounding: 0,
        code: "LRD",
        icon_name: "lrd",
        name_plural: "Liberian Dollar",
      },
      LSL: {
        symbol: "L",
        name: "Lesotho Loti",
        symbol_native: "M",
        decimal_digits: 2,
        rounding: 0,
        code: "LSL",
        icon_name: "lsl",
        name_plural: "Lesotho Loti",
      },
      LTL: {
        symbol: "Lt",
        name: "Lithuanian Litas",
        symbol_native: "Lt",
        decimal_digits: 2,
        rounding: 0,
        code: "LTL",
        name_plural: "Lithuanian litai",
      },
      LVL: {
        symbol: "Ls",
        name: "Latvian Lats",
        symbol_native: "Ls",
        decimal_digits: 2,
        rounding: 0,
        code: "LVL",
        name_plural: "Latvian lati",
      },
      LYD: {
        symbol: "LD",
        name: "Libyan Dinar",
        symbol_native: "\u062F.\u0644.\u200F",
        decimal_digits: 3,
        rounding: 0,
        code: "LYD",
        name_plural: "Libyan dinars",
      },
      MAD: {
        symbol: "MAD",
        name: "Moroccan Dirham",
        symbol_native: "\u062F.\u0645.\u200F",
        decimal_digits: 2,
        rounding: 0,
        code: "MAD",
        name_plural: "Moroccan dirhams",
      },
      MDL: {
        symbol: "MDL",
        name: "Moldovan Leu",
        symbol_native: "MDL",
        decimal_digits: 2,
        rounding: 0,
        code: "MDL",
        name_plural: "Moldovan lei",
      },
      MGA: {
        symbol: "MGA",
        name: "Malagasy Ariary",
        symbol_native: "MGA",
        decimal_digits: 0,
        rounding: 0,
        code: "MGA",
        name_plural: "Malagasy Ariaries",
      },
      MKD: {
        symbol: "MKD",
        name: "Macedonian Denar",
        symbol_native: "MKD",
        decimal_digits: 2,
        rounding: 0,
        code: "MKD",
        name_plural: "Macedonian denari",
      },
      MMK: {
        symbol: "MMK",
        name: "Myanma Kyat",
        symbol_native: "K",
        decimal_digits: 0,
        rounding: 0,
        code: "MMK",
        name_plural: "Myanma kyats",
      },
      MNT: {
        symbol: "\u20AE",
        name: "Mongolian Tugrik",
        symbol_native: "\u20AE",
        decimal_digits: 2,
        rounding: 0,
        code: "MNT",
        icon_name: "mnt",
        name_plural: "Mongolian Tugrik",
      },
      MOP: {
        symbol: "MOP$",
        name: "Macanese Pataca",
        symbol_native: "MOP$",
        decimal_digits: 2,
        rounding: 0,
        code: "MOP",
        name_plural: "Macanese patacas",
      },
      MRO: {
        symbol: "UM",
        name: "Mauritanian ouguiya",
        symbol_native: "UM",
        decimal_digits: 2,
        rounding: 0,
        code: "MRO",
        name_plural: "Mauritanian ouguiyas",
      },
      MUR: {
        symbol: "MURs",
        name: "Mauritian Rupee",
        symbol_native: "MURs",
        decimal_digits: 0,
        rounding: 0,
        code: "MUR",
        name_plural: "Mauritian rupees",
      },
      MVR: {
        symbol: "MRf",
        name: "Maldivian Rufiyaa",
        symbol_native: "Rf",
        decimal_digits: 2,
        rounding: 0,
        code: "MVR",
        name_plural: "Maldivian Rufiyaa",
      },
      MWK: {
        symbol: "MK",
        name: "Malawian Kwacha",
        symbol_native: "MK",
        decimal_digits: 2,
        rounding: 0,
        code: "MWK",
        icon_name: "mwk",
        name_plural: "Malawian Kwacha",
      },
      MXN: {
        symbol: "MX$",
        name: "Mexican Peso",
        symbol_native: "$",
        decimal_digits: 2,
        rounding: 0,
        code: "MXN",
        name_plural: "Mexican pesos",
      },
      MYR: {
        symbol: "RM",
        name: "Malaysian Ringgit",
        symbol_native: "RM",
        decimal_digits: 2,
        rounding: 0,
        code: "MYR",
        name_plural: "Malaysian ringgits",
      },
      MZN: {
        symbol: "MTn",
        name: "Mozambican Metical",
        symbol_native: "MTn",
        decimal_digits: 2,
        rounding: 0,
        code: "MZN",
        name_plural: "Mozambican meticals",
      },
      NAD: {
        symbol: "N$",
        name: "Namibian Dollar",
        symbol_native: "N$",
        decimal_digits: 2,
        rounding: 0,
        code: "NAD",
        name_plural: "Namibian dollars",
      },
      NGN: {
        symbol: "\u20A6",
        name: "Nigerian Naira",
        symbol_native: "\u20A6",
        decimal_digits: 2,
        rounding: 0,
        code: "NGN",
        name_plural: "Nigerian nairas",
      },
      NIO: {
        symbol: "C$",
        name: "Nicaraguan C\u00F3rdoba",
        symbol_native: "C$",
        decimal_digits: 2,
        rounding: 0,
        code: "NIO",
        name_plural: "Nicaraguan c\u00F3rdobas",
      },
      NOK: {
        symbol: "Nkr",
        name: "Norwegian Krone",
        symbol_native: "kr",
        decimal_digits: 2,
        rounding: 0,
        code: "NOK",
        name_plural: "Norwegian kroner",
      },
      NPR: {
        symbol: "NPRs",
        name: "Nepalese Rupee",
        symbol_native: "\u0928\u0947\u0930\u0942",
        decimal_digits: 2,
        rounding: 0,
        code: "NPR",
        name_plural: "Nepalese rupees",
      },
      NZD: {
        symbol: "NZ$",
        name: "New Zealand Dollar",
        symbol_native: "$",
        decimal_digits: 2,
        rounding: 0,
        code: "NZD",
        name_plural: "New Zealand dollars",
      },
      OMR: {
        symbol: "OMR",
        name: "Omani Rial",
        symbol_native: "\u0631.\u0639.\u200F",
        decimal_digits: 3,
        rounding: 0,
        code: "OMR",
        name_plural: "Omani rials",
      },
      PAB: {
        symbol: "B/.",
        name: "Panamanian Balboa",
        symbol_native: "B/.",
        decimal_digits: 2,
        rounding: 0,
        code: "PAB",
        name_plural: "Panamanian balboas",
      },
      PEN: {
        symbol: "S/.",
        name: "Peruvian Nuevo Sol",
        symbol_native: "S/.",
        decimal_digits: 2,
        rounding: 0,
        code: "PEN",
        name_plural: "Peruvian nuevos soles",
      },
      PGK: {
        symbol: "K",
        name: "Papua New Guinean Kina",
        symbol_native: "K",
        decimal_digits: 2,
        rounding: 0,
        code: "PGK",
        icon_name: "pgk",
        name_plural: "Papua New Guinean Kina",
      },
      PHP: {
        symbol: "\u20B1",
        name: "Philippine Peso",
        symbol_native: "\u20B1",
        decimal_digits: 2,
        rounding: 0,
        code: "PHP",
        name_plural: "Philippine pesos",
      },
      PKR: {
        symbol: "PKRs",
        name: "Pakistani Rupee",
        symbol_native: "\u20A8",
        decimal_digits: 0,
        rounding: 0,
        code: "PKR",
        name_plural: "Pakistani rupees",
      },
      PLN: {
        symbol: "z\u0142",
        name: "Polish Zloty",
        symbol_native: "z\u0142",
        decimal_digits: 2,
        rounding: 0,
        code: "PLN",
        name_plural: "Polish zlotys",
      },
      PYG: {
        symbol: "\u20B2",
        name: "Paraguayan Guarani",
        symbol_native: "\u20B2",
        decimal_digits: 0,
        rounding: 0,
        code: "PYG",
        name_plural: "Paraguayan guaranis",
      },
      QAR: {
        symbol: "QR",
        name: "Qatari Rial",
        symbol_native: "\u0631.\u0642.\u200F",
        decimal_digits: 2,
        rounding: 0,
        code: "QAR",
        name_plural: "Qatari rials",
      },
      RON: {
        symbol: "RON",
        name: "Romanian Leu",
        symbol_native: "RON",
        decimal_digits: 2,
        rounding: 0,
        code: "RON",
        name_plural: "Romanian lei",
      },
      RSD: {
        symbol: "din.",
        name: "Serbian Dinar",
        symbol_native: "\u0434\u0438\u043D.",
        decimal_digits: 0,
        rounding: 0,
        code: "RSD",
        name_plural: "Serbian dinars",
      },
      RUB: {
        symbol: "RUB",
        name: "Russian Ruble",
        symbol_native: "\u0440\u0443\u0431.",
        decimal_digits: 2,
        rounding: 0,
        code: "RUB",
        name_plural: "Russian rubles",
      },
      RWF: {
        symbol: "RWF",
        name: "Rwandan Franc",
        symbol_native: "FR",
        decimal_digits: 0,
        rounding: 0,
        code: "RWF",
        name_plural: "Rwandan francs",
      },
      SAR: {
        symbol: "SR",
        name: "Saudi Riyal",
        symbol_native: "\u0631.\u0633.\u200F",
        decimal_digits: 2,
        rounding: 0,
        code: "SAR",
        name_plural: "Saudi riyals",
      },
      SBD: {
        symbol: "SI$",
        name: "Solomon Islands Dollar",
        symbol_native: "$",
        decimal_digits: 2,
        rounding: 0,
        code: "SBD",
        icon_name: "sbd",
        name_plural: "Solomon Islands Dollars",
      },
      SCR: {
        symbol: "SRe",
        name: "Seychellois Rupee",
        symbol_native: "SR",
        decimal_digits: 2,
        rounding: 0,
        code: "SCR",
        icon_name: "scr",
        name_plural: "Seychellois Rupees",
      },
      SDG: {
        symbol: "SDG",
        name: "Sudanese Pound",
        symbol_native: "SDG",
        decimal_digits: 2,
        rounding: 0,
        code: "SDG",
        name_plural: "Sudanese pounds",
      },
      SEK: {
        symbol: "Skr",
        name: "Swedish Krona",
        symbol_native: "kr",
        decimal_digits: 2,
        rounding: 0,
        code: "SEK",
        name_plural: "Swedish kronor",
      },
      SGD: {
        symbol: "S$",
        name: "Singapore Dollar",
        symbol_native: "$",
        decimal_digits: 2,
        rounding: 0,
        code: "SGD",
        name_plural: "Singapore dollars",
      },
      SHP: {
        symbol: "\u00A3",
        name: "Saint Helena Pound",
        symbol_native: "\u00A3",
        decimal_digits: 2,
        rounding: 0,
        code: "SHP",
        icon_name: "shp",
        name_plural: "Saint Helena Pounds",
      },
      SLL: {
        symbol: "Le",
        name: "Sierra Leonean Leone",
        symbol_native: "Le",
        decimal_digits: 2,
        rounding: 0,
        code: "SLL",
        icon_name: "sll",
        name_plural: "Sierra Leonean Leone",
      },
      SOS: {
        symbol: "Ssh",
        name: "Somali Shilling",
        symbol_native: "Ssh",
        decimal_digits: 0,
        rounding: 0,
        code: "SOS",
        name_plural: "Somali shillings",
      },
      SRD: {
        symbol: "$",
        name: "Surinamese Dollar",
        symbol_native: "$",
        decimal_digits: 2,
        rounding: 0,
        code: "SRD",
        icon_name: "srd",
        name_plural: "Surinamese Dollar",
      },
      STD: {
        symbol: "Db",
        name: "S\u00E3o Tom\u00E9 and Pr\u00EDncipe dobra",
        symbol_native: "Db",
        decimal_digits: 2,
        rounding: 0,
        code: "STD",
        name_plural: "S\u00E3o Tom\u00E9 and Pr\u00EDncipe dobras",
      },
      SVC: {
        symbol: "\u20A1",
        name: "Salvadoran Col\u00F3n",
        symbol_native: "\u20A1",
        decimal_digits: 2,
        rounding: 0,
        code: "SVC",
        icon_name: "svc",
        name_plural: "Salvadoran Col\u00F3n",
      },
      SYP: {
        symbol: "SY\u00A3",
        name: "Syrian Pound",
        symbol_native: "\u0644.\u0633.\u200F",
        decimal_digits: 0,
        rounding: 0,
        code: "SYP",
        name_plural: "Syrian pounds",
      },
      SZL: {
        symbol: "L",
        name: "Swazi Lilangeni",
        symbol_native: "E\u200F",
        decimal_digits: 2,
        rounding: 0,
        code: "SZL",
        icon_name: "szl",
        name_plural: "Swazi Lilangeni",
      },
      THB: {
        symbol: "\u0E3F",
        name: "Thai Baht",
        symbol_native: "\u0E3F",
        decimal_digits: 2,
        rounding: 0,
        code: "THB",
        name_plural: "Thai baht",
      },
      TJS: {
        symbol: "TJS",
        name: "Tajikistani Somoni",
        symbol_native: "TJS",
        decimal_digits: 2,
        rounding: 0,
        code: "TJS",
        icon_name: "tjs",
        name_plural: "Tajikistani Somoni",
      },
      TMT: {
        symbol: "T",
        name: "Turkmenistani Manat",
        symbol_native: "T\u200F",
        decimal_digits: 2,
        rounding: 0,
        code: "TMT",
        icon_name: "tmt",
        name_plural: "Turkmenistani Manat",
      },
      TND: {
        symbol: "DT",
        name: "Tunisian Dinar",
        symbol_native: "\u062F.\u062A.\u200F",
        decimal_digits: 3,
        rounding: 0,
        code: "TND",
        name_plural: "Tunisian dinars",
      },
      TOP: {
        symbol: "T$",
        name: "Tongan Pa\u02BBanga",
        symbol_native: "T$",
        decimal_digits: 2,
        rounding: 0,
        code: "TOP",
        name_plural: "Tongan pa\u02BBanga",
      },
      TRY: {
        symbol: "TL",
        name: "Turkish Lira",
        symbol_native: "TL",
        decimal_digits: 2,
        rounding: 0,
        code: "TRY",
        name_plural: "Turkish Lira",
      },
      TTD: {
        symbol: "TT$",
        name: "Trinidad and Tobago Dollar",
        symbol_native: "$",
        decimal_digits: 2,
        rounding: 0,
        code: "TTD",
        name_plural: "Trinidad and Tobago dollars",
      },
      TWD: {
        symbol: "NT$",
        name: "New Taiwan Dollar",
        symbol_native: "NT$",
        decimal_digits: 2,
        rounding: 0,
        code: "TWD",
        name_plural: "New Taiwan dollars",
      },
      TZS: {
        symbol: "TSh",
        name: "Tanzanian Shilling",
        symbol_native: "TSh",
        decimal_digits: 0,
        rounding: 0,
        code: "TZS",
        name_plural: "Tanzanian shillings",
      },
      UAH: {
        symbol: "\u20B4",
        name: "Ukrainian Hryvnia",
        symbol_native: "\u20B4",
        decimal_digits: 2,
        rounding: 0,
        code: "UAH",
        name_plural: "Ukrainian hryvnias",
      },
      UGX: {
        symbol: "USh",
        name: "Ugandan Shilling",
        symbol_native: "USh",
        decimal_digits: 0,
        rounding: 0,
        code: "UGX",
        name_plural: "Ugandan shillings",
      },
      USD: {
        symbol: "$",
        name: "US Dollar",
        symbol_native: "$",
        decimal_digits: 2,
        rounding: 0,
        code: "USD",
        name_plural: "US dollars",
      },
      UYU: {
        symbol: "$U",
        name: "Uruguayan Peso",
        symbol_native: "$",
        decimal_digits: 2,
        rounding: 0,
        code: "UYU",
        name_plural: "Uruguayan pesos",
      },
      UZS: {
        symbol: "UZS",
        name: "Uzbekistan Som",
        symbol_native: "UZS",
        decimal_digits: 0,
        rounding: 0,
        code: "UZS",
        name_plural: "Uzbekistan som",
      },
      VEF: {
        symbol: "Bs.F.",
        name: "Venezuelan Bol\u00EDvar",
        symbol_native: "Bs.F.",
        decimal_digits: 2,
        rounding: 0,
        code: "VEF",
        name_plural: "Venezuelan bol\u00EDvars",
      },
      VND: {
        symbol: "\u20AB",
        name: "Vietnamese Dong",
        symbol_native: "\u20AB",
        decimal_digits: 0,
        rounding: 0,
        code: "VND",
        name_plural: "Vietnamese dong",
      },
      VUV: {
        symbol: "VUV",
        name: "Vanuatu Vatu",
        symbol_native: "VT",
        decimal_digits: 0,
        rounding: 0,
        code: "VUV",
        icon_name: "vuv",
        name_plural: "Vanuatu Vatu",
      },
      WST: {
        symbol: "WS$",
        name: "Samoan Tala",
        symbol_native: "T",
        decimal_digits: 2,
        rounding: 0,
        code: "WST",
        icon_name: "wst",
        name_plural: "Samoan Tala",
      },
      XAF: {
        symbol: "FCFA",
        name: "CFA Franc BEAC",
        symbol_native: "FCFA",
        decimal_digits: 0,
        rounding: 0,
        code: "XAF",
        name_plural: "CFA francs BEAC",
      },
      XAG: {
        symbol: "XAG",
        name: "Silver Ounce",
        symbol_native: "XAG",
        decimal_digits: 2,
        rounding: 0,
        code: "XAG",
        name_plural: "Silver Ounces",
      },
      XAU: {
        symbol: "XAU",
        name: "Gold Ounce",
        symbol_native: "XAU",
        decimal_digits: 2,
        rounding: 0,
        code: "XAU",
        name_plural: "Gold Ounces",
      },
      XCD: {
        symbol: "EC$",
        name: "East Caribbean Dollar",
        symbol_native: "$",
        decimal_digits: 2,
        rounding: 0,
        code: "XCD",
        icon_name: "xcd",
        name_plural: "East Caribbean Dollars",
      },
      XDR: {
        symbol: "SDR",
        name: "Special drawing rights",
        symbol_native: "SDR",
        decimal_digits: 2,
        rounding: 0,
        code: "XDR",
        name_plural: "Special drawing rights",
      },
      XOF: {
        symbol: "CFA",
        name: "CFA Franc BCEAO",
        symbol_native: "CFA",
        decimal_digits: 0,
        rounding: 0,
        code: "XOF",
        name_plural: "CFA francs BCEAO",
      },
      XPF: {
        symbol: "CFP",
        name: "CFP Franc",
        symbol_native: "CFP",
        decimal_digits: 0,
        rounding: 0,
        code: "XPF",
        icon_name: "xpf",
        name_plural: "CFP francs",
      },
      YER: {
        symbol: "YR",
        name: "Yemeni Rial",
        symbol_native: "\u0631.\u064A.\u200F",
        decimal_digits: 0,
        rounding: 0,
        code: "YER",
        name_plural: "Yemeni rials",
      },
      ZAR: {
        symbol: "R",
        name: "South African Rand",
        symbol_native: "R",
        decimal_digits: 2,
        rounding: 0,
        code: "ZAR",
        name_plural: "South African rand",
      },
      ZMK: {
        symbol: "ZK",
        name: "Zambian Kwacha",
        symbol_native: "ZK",
        decimal_digits: 0,
        rounding: 0,
        code: "ZMK",
        name_plural: "Zambian kwachas",
      },
      ZMW: {
        symbol: "ZK",
        name: "Zambian Kwacha",
        symbol_native: "ZK",
        decimal_digits: 0,
        rounding: 0,
        code: "ZMW",
        name_plural: "Zambian kwachas",
      },
      ZWL: {
        symbol: "ZWL",
        name: "Zimbabwean dollar",
        symbol_native: "$",
        decimal_digits: 2,
        rounding: 0,
        code: "ZWL",
        name_plural: "Zimbabwean dollars",
      },
      XPT: {
        symbol: "XPT",
        name: "Platinum Ounce",
        symbol_native: "XPT",
        decimal_digits: 6,
        rounding: 0,
        code: "XPT",
        name_plural: "Platinum Ounces",
      },
      XPD: {
        symbol: "XPD",
        name: "Palladium Ounce",
        symbol_native: "XPD",
        decimal_digits: 6,
        rounding: 0,
        code: "XPD",
        name_plural: "Palladium Ounces",
      },
      BTC: {
        symbol: "\u20BF",
        name: "Bitcoin",
        symbol_native: "\u20BF",
        decimal_digits: 8,
        rounding: 0,
        code: "BTC",
        name_plural: "Bitcoins",
      },
      ETH: {
        symbol: "\u039E",
        name: "Ethereum",
        symbol_native: "\u039E",
        decimal_digits: 18,
        rounding: 0,
        code: "ETH",
        name_plural: "Ethereum",
      },
      BNB: {
        symbol: "BNB",
        name: "Binance",
        symbol_native: "BNB",
        decimal_digits: 8,
        rounding: 0,
        code: "BNB",
        name_plural: "Binance",
      },
      XRP: {
        symbol: "XRP",
        name: "Ripple",
        symbol_native: "XRP",
        decimal_digits: 6,
        rounding: 0,
        code: "XRP",
        name_plural: "Ripple",
      },
      SOL: {
        symbol: "SOL",
        name: "Solana",
        symbol_native: "SOL",
        decimal_digits: 9,
        rounding: 0,
        code: "SOL",
        name_plural: "Solana",
      },
      DOT: {
        symbol: "DOT",
        name: "Polkadot",
        symbol_native: "DOT",
        decimal_digits: 10,
        rounding: 0,
        code: "DOT",
        name_plural: "Polkadot",
      },
      AVAX: {
        symbol: "AVAX",
        name: "Avalanche",
        symbol_native: "AVAX",
        decimal_digits: 18,
        rounding: 0,
        code: "AVAX",
        name_plural: "Avalanche",
      },
      MATIC: {
        symbol: "MATIC",
        name: "Matic Token",
        symbol_native: "MATIC",
        decimal_digits: 18,
        rounding: 0,
        code: "MATIC",
        name_plural: "Matic Tokens",
      },
      LTC: {
        symbol: "\u0141",
        name: "Litecoin",
        symbol_native: "\u0141",
        decimal_digits: 8,
        rounding: 0,
        code: "LTC",
        name_plural: "Litecoins",
      },
      ADA: {
        symbol: "ADA",
        name: "Cardano",
        symbol_native: "ADA",
        decimal_digits: 6,
        rounding: 0,
        code: "ADA",
        name_plural: "Cardanos",
      },
      USDT: {
        symbol: "USDT",
        name: "Tether",
        symbol_native: "USDT",
        decimal_digits: 2,
        rounding: 0,
        code: "USDT",
        name_plural: "Tethers",
      },
      USDC: {
        symbol: "USDC",
        name: "USD Coin",
        symbol_native: "USDC",
        decimal_digits: 2,
        rounding: 0,
        code: "USDC",
        name_plural: "USD Coins",
      },
      DAI: {
        symbol: "DAI",
        name: "Dai",
        symbol_native: "DAI",
        decimal_digits: 2,
        rounding: 0,
        code: "DAI",
        name_plural: "Dais",
      },
      BUSD: {
        symbol: "BUSD",
        name: "Binance USD",
        symbol_native: "BUSD",
        decimal_digits: 8,
        rounding: 0,
        code: "BUSD",
        name_plural: "Binance USD",
      },
      ARB: {
        symbol: "ARB",
        name: "Arbitrum",
        symbol_native: "ARB",
        decimal_digits: 8,
        rounding: 0,
        code: "ARB",
        name_plural: "Arbitrums",
      },
      OP: {
        symbol: "OP",
        name: "Optimism",
        symbol_native: "OP",
        decimal_digits: 8,
        rounding: 0,
        code: "OP",
        name_plural: "Optimism",
      },
    },
  };

  let mystring = "";

  let response = await fetch(url);
  let rjson = await response.json();

  // const rjson = 
  // {
  //     "data": {
  //       "ADA": {
  //         "code": "ADA",
  //         "value": 4.0288552181
  //       },
  //       "AED": {
  //         "code": "AED",
  //         "value": 3.6721704931
  //       },
  //       "AFN": {
  //         "code": "AFN",
  //         "value": 77.9836485971
  //       },
  //       "ALL": {
  //         "code": "ALL",
  //         "value": 101.1734797428
  //       },
  //       "AMD": {
  //         "code": "AMD",
  //         "value": 390.5443530321
  //       },
  //       "ANG": {
  //         "code": "ANG",
  //         "value": 1.787030234
  //       },
  //       "AOA": {
  //         "code": "AOA",
  //         "value": 826.3653320933
  //       },
  //       "ARB": {
  //         "code": "ARB",
  //         "value": 1.1235625593
  //       },
  //       "ARS": {
  //         "code": "ARS",
  //         "value": 350.1123295345
  //       },
  //       "AUD": {
  //         "code": "AUD",
  //         "value": 1.5562502553
  //       },
  //       "AVAX": {
  //         "code": "AVAX",
  //         "value": 0.1082040803
  //       },
  //       "AWG": {
  //         "code": "AWG",
  //         "value": 1.79
  //       },
  //       "AZN": {
  //         "code": "AZN",
  //         "value": 1.7
  //       },
  //       "BAM": {
  //         "code": "BAM",
  //         "value": 1.8544903182
  //       },
  //       "BBD": {
  //         "code": "BBD",
  //         "value": 2
  //       },
  //       "BDT": {
  //         "code": "BDT",
  //         "value": 110.1424420071
  //       },
  //       "BGN": {
  //         "code": "BGN",
  //         "value": 1.8503303311
  //       },
  //       "BHD": {
  //         "code": "BHD",
  //         "value": 0.376
  //       },
  //       "BIF": {
  //         "code": "BIF",
  //         "value": 2836.0271703479
  //       },
  //       "BMD": {
  //         "code": "BMD",
  //         "value": 1
  //       },
  //       "BNB": {
  //         "code": "BNB",
  //         "value": 0.0046545857
  //       },
  //       "BND": {
  //         "code": "BND",
  //         "value": 1.3651102648
  //       },
  //       "BOB": {
  //         "code": "BOB",
  //         "value": 6.9361511868
  //       },
  //       "BRL": {
  //         "code": "BRL",
  //         "value": 5.0342509464
  //       },
  //       "BSD": {
  //         "code": "BSD",
  //         "value": 1
  //       },
  //       "BTC": {
  //         "code": "BTC",
  //         "value": 0.0000370049
  //       },
  //       "BTN": {
  //         "code": "BTN",
  //         "value": 83.3297946324
  //       },
  //       "BUSD": {
  //         "code": "BUSD",
  //         "value": 1.0020596916
  //       },
  //       "BWP": {
  //         "code": "BWP",
  //         "value": 13.779342419
  //       },
  //       "BYN": {
  //         "code": "BYN",
  //         "value": 2.4996268992
  //       },
  //       "BYR": {
  //         "code": "BYR",
  //         "value": 24996.260356759
  //       },
  //       "BZD": {
  //         "code": "BZD",
  //         "value": 2
  //       },
  //       "CAD": {
  //         "code": "CAD",
  //         "value": 1.3491401435
  //       },
  //       "CDF": {
  //         "code": "CDF",
  //         "value": 2482.9720400109
  //       },
  //       "CHF": {
  //         "code": "CHF",
  //         "value": 0.9148201253
  //       },
  //       "CLF": {
  //         "code": "CLF",
  //         "value": 0.024630003
  //       },
  //       "CLP": {
  //         "code": "CLP",
  //         "value": 906.1805172196
  //       },
  //       "CNY": {
  //         "code": "CNY",
  //         "value": 7.3030613499
  //       },
  //       "COP": {
  //         "code": "COP",
  //         "value": 4061.1075215252
  //       },
  //       "CRC": {
  //         "code": "CRC",
  //         "value": 533.4434804308
  //       },
  //       "CUC": {
  //         "code": "CUC",
  //         "value": 1
  //       },
  //       "CUP": {
  //         "code": "CUP",
  //         "value": 24
  //       },
  //       "CVE": {
  //         "code": "CVE",
  //         "value": 104.3996858504
  //       },
  //       "CZK": {
  //         "code": "CZK",
  //         "value": 23.0361727149
  //       },
  //       "DAI": {
  //         "code": "DAI",
  //         "value": 1.0082970268
  //       },
  //       "DJF": {
  //         "code": "DJF",
  //         "value": 177.721
  //       },
  //       "DKK": {
  //         "code": "DKK",
  //         "value": 7.0597010037
  //       },
  //       "DOP": {
  //         "code": "DOP",
  //         "value": 56.7884813256
  //       },
  //       "DOT": {
  //         "code": "DOT",
  //         "value": 0.2461166423
  //       },
  //       "DZD": {
  //         "code": "DZD",
  //         "value": 138.3530641245
  //       },
  //       "EGP": {
  //         "code": "EGP",
  //         "value": 30.9132938692
  //       },
  //       "ERN": {
  //         "code": "ERN",
  //         "value": 15
  //       },
  //       "ETB": {
  //         "code": "ETB",
  //         "value": 55.2618260962
  //       },
  //       "ETH": {
  //         "code": "ETH",
  //         "value": 0.0006049972
  //       },
  //       "EUR": {
  //         "code": "EUR",
  //         "value": 0.9468501578
  //       },
  //       "FJD": {
  //         "code": "FJD",
  //         "value": 2.2946503321
  //       },
  //       "FKP": {
  //         "code": "FKP",
  //         "value": 0.8193561488
  //       },
  //       "GBP": {
  //         "code": "GBP",
  //         "value": 0.819460138
  //       },
  //       "GEL": {
  //         "code": "GEL",
  //         "value": 2.661380469
  //       },
  //       "GGP": {
  //         "code": "GGP",
  //         "value": 0.8193559426
  //       },
  //       "GHS": {
  //         "code": "GHS",
  //         "value": 11.5772913366
  //       },
  //       "GIP": {
  //         "code": "GIP",
  //         "value": 0.8193557769
  //       },
  //       "GMD": {
  //         "code": "GMD",
  //         "value": 60.7005592411
  //       },
  //       "GNF": {
  //         "code": "GNF",
  //         "value": 8528.5023600997
  //       },
  //       "GTQ": {
  //         "code": "GTQ",
  //         "value": 7.8526508324
  //       },
  //       "GYD": {
  //         "code": "GYD",
  //         "value": 208.9640681803
  //       },
  //       "HKD": {
  //         "code": "HKD",
  //         "value": 7.8275713363
  //       },
  //       "HNL": {
  //         "code": "HNL",
  //         "value": 24.6590227465
  //       },
  //       "HRK": {
  //         "code": "HRK",
  //         "value": 7.0434607639
  //       },
  //       "HTG": {
  //         "code": "HTG",
  //         "value": 135.5308571611
  //       },
  //       "HUF": {
  //         "code": "HUF",
  //         "value": 371.0052178631
  //       },
  //       "IDR": {
  //         "code": "IDR",
  //         "value": 15505.361284552
  //       },
  //       "ILS": {
  //         "code": "ILS",
  //         "value": 3.8406204266
  //       },
  //       "IMP": {
  //         "code": "IMP",
  //         "value": 0.8193559186
  //       },
  //       "INR": {
  //         "code": "INR",
  //         "value": 83.0855909618
  //       },
  //       "IQD": {
  //         "code": "IQD",
  //         "value": 1308.0095382715
  //       },
  //       "IRR": {
  //         "code": "IRR",
  //         "value": 42020.950465447
  //       },
  //       "ISK": {
  //         "code": "ISK",
  //         "value": 137.0706219863
  //       },
  //       "JEP": {
  //         "code": "JEP",
  //         "value": 0.8193558338
  //       },
  //       "JMD": {
  //         "code": "JMD",
  //         "value": 155.5354548463
  //       },
  //       "JOD": {
  //         "code": "JOD",
  //         "value": 0.71
  //       },
  //       "JPY": {
  //         "code": "JPY",
  //         "value": 149.366587597
  //       },
  //       "KES": {
  //         "code": "KES",
  //         "value": 147.7735570266
  //       },
  //       "KGS": {
  //         "code": "KGS",
  //         "value": 88.5964410281
  //       },
  //       "KHR": {
  //         "code": "KHR",
  //         "value": 4117.5270177491
  //       },
  //       "KMF": {
  //         "code": "KMF",
  //         "value": 467.570864441
  //       },
  //       "KPW": {
  //         "code": "KPW",
  //         "value": 900.0039069467
  //       },
  //       "KRW": {
  //         "code": "KRW",
  //         "value": 1346.4339096853
  //       },
  //       "KWD": {
  //         "code": "KWD",
  //         "value": 0.3078300449
  //       },
  //       "KYD": {
  //         "code": "KYD",
  //         "value": 0.83333
  //       },
  //       "KZT": {
  //         "code": "KZT",
  //         "value": 473.7077981171
  //       },
  //       "LAK": {
  //         "code": "LAK",
  //         "value": 20311.232815924
  //       },
  //       "LBP": {
  //         "code": "LBP",
  //         "value": 15017.620232253
  //       },
  //       "LKR": {
  //         "code": "LKR",
  //         "value": 322.886659865
  //       },
  //       "LRD": {
  //         "code": "LRD",
  //         "value": 186.7125200532
  //       },
  //       "LSL": {
  //         "code": "LSL",
  //         "value": 19.0889319801
  //       },
  //       "LTC": {
  //         "code": "LTC",
  //         "value": 0.0153376978
  //       },
  //       "LTL": {
  //         "code": "LTL",
  //         "value": 3.2690947517
  //       },
  //       "LVL": {
  //         "code": "LVL",
  //         "value": 0.6654076754
  //       },
  //       "LYD": {
  //         "code": "LYD",
  //         "value": 4.8865508509
  //       },
  //       "MAD": {
  //         "code": "MAD",
  //         "value": 10.3073017969
  //       },
  //       "MATIC": {
  //         "code": "MATIC",
  //         "value": 1.9292566895
  //       },
  //       "MDL": {
  //         "code": "MDL",
  //         "value": 18.1281130797
  //       },
  //       "MGA": {
  //         "code": "MGA",
  //         "value": 4518.9464690982
  //       },
  //       "MKD": {
  //         "code": "MKD",
  //         "value": 57.9585761191
  //       },
  //       "MMK": {
  //         "code": "MMK",
  //         "value": 2095.2049200178
  //       },
  //       "MNT": {
  //         "code": "MNT",
  //         "value": 3479.4384146403
  //       },
  //       "MOP": {
  //         "code": "MOP",
  //         "value": 8.0922315231
  //       },
  //       "MRO": {
  //         "code": "MRO",
  //         "value": 356.999828
  //       },
  //       "MUR": {
  //         "code": "MUR",
  //         "value": 44.5575870557
  //       },
  //       "MVR": {
  //         "code": "MVR",
  //         "value": 15.4548829
  //       },
  //       "MWK": {
  //         "code": "MWK",
  //         "value": 1083.986342678
  //       },
  //       "MXN": {
  //         "code": "MXN",
  //         "value": 17.5377022382
  //       },
  //       "MYR": {
  //         "code": "MYR",
  //         "value": 4.708120928
  //       },
  //       "MZN": {
  //         "code": "MZN",
  //         "value": 63.6999419503
  //       },
  //       "NAD": {
  //         "code": "NAD",
  //         "value": 19.0706529764
  //       },
  //       "NGN": {
  //         "code": "NGN",
  //         "value": 778.2500739475
  //       },
  //       "NIO": {
  //         "code": "NIO",
  //         "value": 36.5609510454
  //       },
  //       "NOK": {
  //         "code": "NOK",
  //         "value": 10.7286618996
  //       },
  //       "NPR": {
  //         "code": "NPR",
  //         "value": 132.8397725115
  //       },
  //       "NZD": {
  //         "code": "NZD",
  //         "value": 1.6766702891
  //       },
  //       "OMR": {
  //         "code": "OMR",
  //         "value": 0.3841700573
  //       },
  //       "OP": {
  //         "code": "OP",
  //         "value": 0.7573475471
  //       },
  //       "PAB": {
  //         "code": "PAB",
  //         "value": 0.9991301671
  //       },
  //       "PEN": {
  //         "code": "PEN",
  //         "value": 3.7755705604
  //       },
  //       "PGK": {
  //         "code": "PGK",
  //         "value": 3.6539003873
  //       },
  //       "PHP": {
  //         "code": "PHP",
  //         "value": 56.7082495601
  //       },
  //       "PKR": {
  //         "code": "PKR",
  //         "value": 287.7524220608
  //       },
  //       "PLN": {
  //         "code": "PLN",
  //         "value": 4.3904307889
  //       },
  //       "PYG": {
  //         "code": "PYG",
  //         "value": 7318.2704253521
  //       },
  //       "QAR": {
  //         "code": "QAR",
  //         "value": 3.6407805129
  //       },
  //       "RON": {
  //         "code": "RON",
  //         "value": 4.7083906331
  //       },
  //       "RSD": {
  //         "code": "RSD",
  //         "value": 110.6382046822
  //       },
  //       "RUB": {
  //         "code": "RUB",
  //         "value": 96.6738385647
  //       },
  //       "RWF": {
  //         "code": "RWF",
  //         "value": 1210.2893208872
  //       },
  //       "SAR": {
  //         "code": "SAR",
  //         "value": 3.7459807171
  //       },
  //       "SBD": {
  //         "code": "SBD",
  //         "value": 8.4478511168
  //       },
  //       "SCR": {
  //         "code": "SCR",
  //         "value": 14.1924221055
  //       },
  //       "SDG": {
  //         "code": "SDG",
  //         "value": 601.5
  //       },
  //       "SEK": {
  //         "code": "SEK",
  //         "value": 10.9228721561
  //       },
  //       "SGD": {
  //         "code": "SGD",
  //         "value": 1.3659602302
  //       },
  //       "SHP": {
  //         "code": "SHP",
  //         "value": 0.8194601215
  //       },
  //       "SLL": {
  //         "code": "SLL",
  //         "value": 22482.875923129
  //       },
  //       "SOL": {
  //         "code": "SOL",
  //         "value": 0.0502436346
  //       },
  //       "SOS": {
  //         "code": "SOS",
  //         "value": 569.5433350948
  //       },
  //       "SRD": {
  //         "code": "SRD",
  //         "value": 38.1369671129
  //       },
  //       "STD": {
  //         "code": "STD",
  //         "value": 23405.748488374
  //       },
  //       "SVC": {
  //         "code": "SVC",
  //         "value": 8.75
  //       },
  //       "SYP": {
  //         "code": "SYP",
  //         "value": 13001.875362454
  //       },
  //       "SZL": {
  //         "code": "SZL",
  //         "value": 18.9560924434
  //       },
  //       "THB": {
  //         "code": "THB",
  //         "value": 36.5799138867
  //       },
  //       "TJS": {
  //         "code": "TJS",
  //         "value": 10.8933721715
  //       },
  //       "TMT": {
  //         "code": "TMT",
  //         "value": 3.5
  //       },
  //       "TND": {
  //         "code": "TND",
  //         "value": 3.1633804609
  //       },
  //       "TOP": {
  //         "code": "TOP",
  //         "value": 2.3672304527
  //       },
  //       "TRY": {
  //         "code": "TRY",
  //         "value": 27.450423035
  //       },
  //       "TTD": {
  //         "code": "TTD",
  //         "value": 6.7723209507
  //       },
  //       "TWD": {
  //         "code": "TWD",
  //         "value": 32.1275641476
  //       },
  //       "TZS": {
  //         "code": "TZS",
  //         "value": 2503.3846348351
  //       },
  //       "UAH": {
  //         "code": "UAH",
  //         "value": 36.7084961443
  //       },
  //       "UGX": {
  //         "code": "UGX",
  //         "value": 3755.8678002934
  //       },
  //       "USD": {
  //         "code": "USD",
  //         "value": 1
  //       },
  //       "USDC": {
  //         "code": "USDC",
  //         "value": 1.0040612325
  //       },
  //       "USDT": {
  //         "code": "USDT",
  //         "value": 1.0026793725
  //       },
  //       "UYU": {
  //         "code": "UYU",
  //         "value": 38.5049061084
  //       },
  //       "UZS": {
  //         "code": "UZS",
  //         "value": 12197.539608113
  //       },
  //       "VEF": {
  //         "code": "VEF",
  //         "value": 3425794.3807803
  //       },
  //       "VND": {
  //         "code": "VND",
  //         "value": 24386.147739405
  //       },
  //       "VUV": {
  //         "code": "VUV",
  //         "value": 122.0009344825
  //       },
  //       "WST": {
  //         "code": "WST",
  //         "value": 2.7759957184
  //       },
  //       "XAF": {
  //         "code": "XAF",
  //         "value": 620.9536272958
  //       },
  //       "XAG": {
  //         "code": "XAG",
  //         "value": 0.044119681
  //       },
  //       "XAU": {
  //         "code": "XAU",
  //         "value": 0.0005357505
  //       },
  //       "XCD": {
  //         "code": "XCD",
  //         "value": 2.7
  //       },
  //       "XDR": {
  //         "code": "XDR",
  //         "value": 0.7610701298
  //       },
  //       "XOF": {
  //         "code": "XOF",
  //         "value": 620.9535879612
  //       },
  //       "XPD": {
  //         "code": "XPD",
  //         "value": 0.000796331
  //       },
  //       "XPF": {
  //         "code": "XPF",
  //         "value": 112.8835214359
  //       },
  //       "XPT": {
  //         "code": "XPT",
  //         "value": 0.0010979124
  //       },
  //       "XRP": {
  //         "code": "XRP",
  //         "value": 1.9670696714
  //       },
  //       "YER": {
  //         "code": "YER",
  //         "value": 249.8877566534
  //       },
  //       "ZAR": {
  //         "code": "ZAR",
  //         "value": 18.9874823413
  //       },
  //       "ZMK": {
  //         "code": "ZMK",
  //         "value": 9001.2
  //       },
  //       "ZMW": {
  //         "code": "ZMW",
  //         "value": 20.8171621381
  //       },
  //       "ZWL": {
  //         "code": "ZWL",
  //         "value": 5359.2595817284
  //       }
  //     }
  // };

  for (let key of Object.keys(rjson["data"])) {
    mystring += `
    <tr>
        <td>${countryList.data[key]["name"]}</td>
        <td>${rjson["data"][key]["code"]}</td>
        <td>${(rjson["data"][key]["value"] * value).toFixed(3)}</td>
    </tr>
  `;
  }

  let tablebody1 = document.getElementById("table1");
  tablebody1.innerHTML = mystring;

  // setting the amount of target currency
  document.querySelector("#result").value = (rjson["data"][target]["value"] * value).toFixed(3);

};

let mybtn = document.querySelector(".submitbtn");
mybtn.addEventListener("click", (e) => {
  e.preventDefault();
  const value = parseInt(document.querySelector("input[name='amount']").value);
  const base_currency = document.querySelector(
    "select[name='currency_base']"
  ).value;
  
  const target_currency = document.querySelector(
    "select[name='currency_target']"
  ).value;
  
  if(document.getElementById("amount").value == "") {
    alert("Enter amount for the selected currency !");
  }
  else {
    populate(base_currency, value, target_currency);
  }
});

// whenever base currency amount is changed then remove the previous data.
let myinputamount = document.querySelector("#amount");
myinputamount.addEventListener("click", ()=>{
  let elem = document.getElementsByClassName("other");
  for(let i of elem) {
    i.style.display = "none";
  }
  
  document.querySelector("#result").value = "";
});
