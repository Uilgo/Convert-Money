// Mapeamento de Elementos

const convertButton = document.querySelector("#convert-button");
const currencySelectDe = document.querySelector("#currency-select-de");
const currencySelect = document.querySelector("#currency-select");

// Funções

/* =========================================================================================================== */
// Função - Converter os Valores

const convertValues = async () => {
  const inputCurrencyValue = document.querySelector("#input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); // Valor em Real
  const currencyValueConverted = document.querySelector(".currency-value"); // Valor em outras moedas

  const data = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL"
  ).then((response) => response.json());

  const dolar = data.USDBRL.high;
  const euro = data.EURBRL.high;
  const bitcoin = data.BTCBRL.high;
  const libra = data.GBPBRL.high;

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);

  if (currencySelect.value === "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolar);
  }

  if (currencySelect.value === "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euro);
  }

  if (currencySelect.value === "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libra);
  }

  if (currencySelect.value === "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / bitcoin);
  }
};

/* =========================================================================================================== */
// Função - trocar nome da moeda e bandeira De:

const changeCurrencyDe = () => {
  const currencyName = document.querySelector("#currency-de");
  const currencyImgDe = document.querySelector("#currency-img-de");

  if (currencySelectDe.value === "dolar") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImgDe.src = "./assets/img/dolar.png";
  }

  if (currencySelectDe.value === "euro") {
    currencyName.innerHTML = "Euro";
    currencyImgDe.src = "./assets/img/euro.png";
  }

  if (currencySelectDe.value === "libra") {
    currencyName.innerHTML = "Libra Esterlina";
    currencyImgDe.src = "./assets/img/libra.png";
  }

  if (currencySelectDe.value === "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImgDe.src = "./assets/img/bitcoin.png";
  }

  if (currencySelectDe.value === "real") {
    currencyName.innerHTML = "Real";
    currencyImgDe.src = "./assets/img/brasil.png";
  }

  convertValues();
};

/* =========================================================================================================== */
// Função - trocar nome da moeda e bandeira Para:

const changeCurrencyPara = () => {
  const currencyName = document.querySelector("#currency-para");
  const currencyImgPara = document.querySelector("#currency-img-para");

  if (currencySelect.value === "dolar") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImgPara.src = "./assets/img/dolar.png";
  }

  if (currencySelect.value === "euro") {
    currencyName.innerHTML = "Euro";
    currencyImgPara.src = "./assets/img/euro.png";
  }

  if (currencySelect.value === "libra") {
    currencyName.innerHTML = "Libra Esterlina";
    currencyImgPara.src = "./assets/img/libra.png";
  }

  if (currencySelect.value === "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImgPara.src = "./assets/img/bitcoin.png";
  }

  if (currencySelect.value === "real") {
    currencyName.innerHTML = "Real";
    currencyImgPara.src = "./assets/img/brasil.png";
  }

  convertValues();
};

// Eventos

convertButton.addEventListener("click", convertValues);
currencySelect.addEventListener("change", changeCurrencyPara);
currencySelectDe.addEventListener("change", changeCurrencyDe);
