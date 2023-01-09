{
    const welcome = () => {

        console.log("Hello");

    }
    const recalculate = (contant, currency) => {

        const GBP = 5.05;
        const EUR = 4.78;
        const USD = 4.82;
        switch (currency) {

            case "GBP": return contant / GBP;

            case "EUR": return contant / EUR;

            case "USD": return contant / USD;

        }
    }
    const currentRate = (currency) => {
        const GBP = 5.05;
        const EUR = 4.78;
        const USD = 4.82;
        switch (currency) {

            case "GBP": return GBP;

            case "EUR": return EUR;

            case "USD": return USD;

        }
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        const PLNElement = document.querySelector(".js-PLN");
        const currencyElement = document.querySelector(".js-currency");
        const rate = document.querySelector(".js-rate");
        const amountElement = document.querySelector(".js-amount");
        const contant = +PLNElement.value;
        const currency = currencyElement.value;
        const result = recalculate(contant, currency);
        const dayRate = currentRate(currency);
        rate.innerText = `${" " + dayRate + " " + currency}`
        amountElement.innerText = `${result.toFixed(2)} ${currency}`
        document.querySelector(".js-formCurrency").reset()
    };

    const init = () => {

        const formCurrencyElement = document.querySelector(".js-formCurrency");
        formCurrencyElement.addEventListener("submit", onFormSubmit);
        welcome();
    }

    init();

}