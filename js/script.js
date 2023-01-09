{
    const showWelcomeMessage = () => {

        console.log("Hello");

    }
    const calculateResult = (contant, currency) => {

        const GBP = 5.05;
        const EUR = 4.78;
        const USD = 4.82;
        switch (currency) {

            case "GBP": return contant / GBP;

            case "EUR": return contant / EUR;

            case "USD": return contant / USD;

        }
    }
    const showCurrentRate = (currency) => {
        const GBP = 5.05;
        const EUR = 4.78;
        const USD = 4.82;
        switch (currency) {

            case "GBP": return GBP;

            case "EUR": return EUR;

            case "USD": return USD;

        }
    }

    const updateResultText=(result,currency)=>{
        const amountElement = document.querySelector(".js-amount");
        amountElement.innerText = `${result.toFixed(2)} ${currency}`;
    }

    const updateRateText=(dayRate,currency,)=>{
        const rate = document.querySelector(".js-rate");
        rate.innerText = `${" " + dayRate + " " + currency}`;
        
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const plnElement = document.querySelector(".js-pln");
        const currencyElement = document.querySelector(".js-currency");
        const contant = +plnElement.value;
        const currency = currencyElement.value;
        const result = calculateResult(contant, currency);
        const dayRate = showCurrentRate(currency);
        updateRateText(dayRate,currency);
        updateResultText(result,currency);
        document.querySelector(".js-formCurrency").reset();
    };

    const init = () => {

        const formCurrencyElement = document.querySelector(".js-formCurrency");
        formCurrencyElement.addEventListener("submit", onFormSubmit);
        showWelcomeMessage();
    }

    init();

}