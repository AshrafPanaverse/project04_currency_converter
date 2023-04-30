#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

console.log(chalk.hex('#cd853f')('ASH Currency Converter'));

let currencyList = [{ "name": "United States Dollar", "abbrev": "USD" }, { "name": "Pakistan Rupee", "abbrev": "PKR" }, { "name": "Albania Lek", "abbrev": "ALL" }, { "name": "Afghanistan Afghani", "abbrev": "AFN" }, { "name": "Argentina Peso", "abbrev": "ARS" }, { "name": "Aruba Guilder", "abbrev": "AWG" }, { "name": "Australia Dollar", "abbrev": "AUD" }, { "name": "Azerbaijan New Manat", "abbrev": "AZN" }, { "name": "Bahamas Dollar", "abbrev": "BSD" }, { "name": "Barbados Dollar", "abbrev": "BBD" }, { "name": "Bangladeshi taka", "abbrev": "BDT" }, { "name": "Belarus Ruble", "abbrev": "BYR" }, { "name": "Belize Dollar", "abbrev": "BZD" }, { "name": "Bermuda Dollar", "abbrev": "BMD" }, { "name": "Bolivia Boliviano", "abbrev": "BOB" }, { "name": "Bosnia and Herzegovina Convertible Marka", "abbrev": "BAM" }, { "name": "Botswana Pula", "abbrev": "BWP" }, { "name": "Bulgaria Lev", "abbrev": "BGN" }, { "name": "Brazil Real", "abbrev": "BRL" }, { "name": "Brunei Darussalam Dollar", "abbrev": "BND" }, { "name": "Cambodia Riel", "abbrev": "KHR" }, { "name": "Canada Dollar", "abbrev": "CAD" }, { "name": "Cayman Islands Dollar", "abbrev": "KYD" }, { "name": "Chile Peso", "abbrev": "CLP" }, { "name": "China Yuan Renminbi", "abbrev": "CNY" }, { "name": "Colombia Peso", "abbrev": "COP" }, { "name": "Costa Rica Colon", "abbrev": "CRC" }, { "name": "Croatia Kuna", "abbrev": "HRK" }, { "name": "Cuba Peso", "abbrev": "CUP" }, { "name": "Czech Republic Koruna", "abbrev": "CZK" }, { "name": "Denmark Krone", "abbrev": "DKK" }, { "name": "Dominican Republic Peso", "abbrev": "DOP" }, { "name": "East Caribbean Dollar", "abbrev": "XCD" }, { "name": "Egypt Pound", "abbrev": "EGP" }, { "name": "El Salvador Colon", "abbrev": "SVC" }, { "name": "Euro Member Countries", "abbrev": "EUR" }, { "name": "Falkland Islands (Malvinas) Pound", "abbrev": "FKP" }, { "name": "Fiji Dollar", "abbrev": "FJD" }, { "name": "Ghana Cedis", "abbrev": "GHC" }, { "name": "Gibraltar Pound", "abbrev": "GIP" }, { "name": "Guatemala Quetzal", "abbrev": "GTQ" }, { "name": "Guernsey Pound", "abbrev": "GGP" }, { "name": "Guyana Dollar", "abbrev": "GYD" }, { "name": "Honduras Lempira", "abbrev": "HNL" }, { "name": "Hong Kong Dollar", "abbrev": "HKD" }, { "name": "Hungary Forint", "abbrev": "HUF" }, { "name": "Iceland Krona", "abbrev": "ISK" }, { "name": "India Rupee", "abbrev": "INR" }, { "name": "Indonesia Rupiah", "abbrev": "IDR" }, { "name": "Iran Rial", "abbrev": "IRR" }, { "name": "Isle of Man Pound", "abbrev": "IMP" }, { "name": "Israel Shekel", "abbrev": "ILS" }, { "name": "Jamaica Dollar", "abbrev": "JMD" }, { "name": "Japan Yen", "abbrev": "JPY" }, { "name": "Jersey Pound", "abbrev": "JEP" }, { "name": "Kazakhstan Tenge", "abbrev": "KZT" }, { "name": "Korea (North) Won", "abbrev": "KPW" }, { "name": "Korea (South) Won", "abbrev": "KRW" }, { "name": "Kyrgyzstan Som", "abbrev": "KGS" }, { "name": "Laos Kip", "abbrev": "LAK" }, { "name": "Lebanon Pound", "abbrev": "LBP" }, { "name": "Liberia Dollar", "abbrev": "LRD" }, { "name": "Macedonia Denar", "abbrev": "MKD" }, { "name": "Malaysia Ringgit", "abbrev": "MYR" }, { "name": "Mauritius Rupee", "abbrev": "MUR" }, { "name": "Mexico Peso", "abbrev": "MXN" }, { "name": "Mongolia Tughrik", "abbrev": "MNT" }, { "name": "Mozambique Metical", "abbrev": "MZN" }, { "name": "Namibia Dollar", "abbrev": "NAD" }, { "name": "Nepal Rupee", "abbrev": "NPR" }, { "name": "Netherlands Antilles Guilder", "abbrev": "ANG" }, { "name": "New Zealand Dollar", "abbrev": "NZD" }, { "name": "Nicaragua Cordoba", "abbrev": "NIO" }, { "name": "Nigeria Naira", "abbrev": "NGN" }, { "name": "Norway Krone", "abbrev": "NOK" }, { "name": "Oman Rial", "abbrev": "OMR" }, { "name": "Panama Balboa", "abbrev": "PAB" }, { "name": "Paraguay Guarani", "abbrev": "PYG" }, { "name": "Peru Nuevo Sol", "abbrev": "PEN" }, { "name": "Philippines Peso", "abbrev": "PHP" }, { "name": "Poland Zloty", "abbrev": "PLN" }, { "name": "Qatar Riyal", "abbrev": "QAR" }, { "name": "Romania New Leu", "abbrev": "RON" }, { "name": "Russia Ruble", "abbrev": "RUB" }, { "name": "Saint Helena Pound", "abbrev": "SHP" }, { "name": "Saudi Arabia Riyal", "abbrev": "SAR" }, { "name": "Serbia Dinar", "abbrev": "RSD" }, { "name": "Seychelles Rupee", "abbrev": "SCR" }, { "name": "Singapore Dollar", "abbrev": "SGD" }, { "name": "Solomon Islands Dollar", "abbrev": "SBD" }, { "name": "Somalia Shilling", "abbrev": "SOS" }, { "name": "South Africa Rand", "abbrev": "ZAR" }, { "name": "Sri Lanka Rupee", "abbrev": "LKR" }, { "name": "Sweden Krona", "abbrev": "SEK" }, { "name": "Switzerland Franc", "abbrev": "CHF" }, { "name": "Suriname Dollar", "abbrev": "SRD" }, { "name": "Syria Pound", "abbrev": "SYP" }, { "name": "Taiwan New Dollar", "abbrev": "TWD" }, { "name": "Thailand Baht", "abbrev": "THB" }, { "name": "Trinidad and Tobago Dollar", "abbrev": "TTD" }, { "name": "Turkey Lira", "abbrev": "TRY" }, { "name": "Turkey Lira", "abbrev": "TRL" }, { "name": "Tuvalu Dollar", "abbrev": "TVD" }, { "name": "Ukraine Hryvna", "abbrev": "UAH" }, { "name": "United Kingdom Pound", "abbrev": "GBP" }, { "name": "Uganda Shilling", "abbrev": "UGX" }, { "name": "Uruguay Peso", "abbrev": "UYU" }, { "name": "Uzbekistan Som", "abbrev": "UZS" }, { "name": "Venezuela Bolivar", "abbrev": "VEF" }, { "name": "Viet Nam Dong", "abbrev": "VND" }, { "name": "Yemen Rial", "abbrev": "YER" }, { "name": "Zimbabwe Dollar", "abbrev": "ZWD" }]

let currencies: string[] = [];
await currencyList.forEach(item => {
    currencies.push(item.abbrev + ' - ' + item.name)
})

let convertor = async () => {

    let convert = await inquirer.prompt([
        {
            name: 'from',
            type: 'list',
            choices: currencies,
            message: chalk.hex('#FFA500').bold(`\n\nSelect Currency to convert from: `)
        },
        {
            name: 'to',
            type: 'list',
            choices: currencies,
            message: chalk.hex('#FFA500').bold(`\n\nConvert into: `)
        }
    ]);


    console.log(`Converting Amount \nfrom ${chalk.hex('#8b008b').bold(convert.from)} to ${chalk.hex('#8b008b').bold(convert.to)}`);

    let amount = await inquirer.prompt([
        {
            name: 'money',
            type: 'number',
            message: chalk.hex('#FFA500').bold(`\n\n Enter Amount: `)
        }
    ])

    const myArray1 = (convert.from).split(" ");
    let fromCurrency = myArray1[0];

    const myArray2 = (convert.to).split(" ");
    let toCurrency = myArray2[0];

    const rainbowTitle = chalkAnimation.rainbow(
        `
                Processing ...       
        `
    );
    rainbowTitle.render();


    await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let rate = data.rates[toCurrency];
            let total = rate * amount.money;
            console.log('\n\n');
            console.log(chalk.bgWhiteBright.black.bold(`${amount.money} ${convert.from} = ${total} ${convert.to}`));
            rainbowTitle.stop();
        });


    // ask user if he/she wants to repeat   
    let operation = await inquirer.prompt([
        {
            name: 'repeat',
            type: 'list',
            choices: ["Continue", chalk.red('Exit')],
            message: chalk.hex('#FFA500').bold(`\n\nSelect Currency to convert from: `)
        },
    ]);

    if (operation.repeat == 'Continue') {
        convertor();
    } else {
        //do nothing i.e: exits
    }

}

await convertor();
