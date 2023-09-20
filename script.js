// Mapeamento de Elementos

const convertButton = document.querySelector(".convert-button");
const currencySelectDe = document.querySelector("#currency-select-de");
const currencySelect = document.querySelector("#currency-select");

// Eventos

convertButton.addEventListener("click", convertValues);
currencySelect.addEventListener("change", changeCurrency);

// Funções

async function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Valor em Real
  const currencyValueConverted = document.querySelector(".currency-value"); // Valor em outras moedas

  const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(response => response.json())

  const dolar = data.USDBRL.high
  const euro = data.EURBRL.high
  const bitcoin = data.BTCBRL.high
  const libra = data.GBPBRL.high

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
}

/* =========================================================================================================== */

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.getElementById("currency-img");

  if (currencySelect.value === "dolar") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImg.src = "./assets/img/usa.svg";
  }

  if (currencySelect.value === "euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/img/euro.svg";
  }

  if (currencySelect.value === "libra") {
    currencyName.innerHTML = "Libra Esterlina";
    currencyImg.src = "./assets/img/libra.svg";
  }

  if (currencySelect.value === "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImg.src = "./assets/img/bitcoin.svg";
  }

  convertValues();
}
