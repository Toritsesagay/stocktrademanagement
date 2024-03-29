require("dotenv").config()
const secret = process.env.SECRET_KEY

module.exports.welcomeTemplate = (name) => {
    return `
<div >
    <h2 style=" margin-bottom: 30px; width: 100%; text-align: center ">----------------------</h2>

    <h2 style=" margin-bottom: 30px; width: 100%; text-align: center ">WELCOME <h2>

    <p style=" margin-bottom: 40px; width: 100%;text-align: center;font-size:1rem"> ${name}! to stocktrademanagements.co.<br><br>
    
    We are happy to welcome you to stocktrademanagements trading community.This is just the beginning of greater things to come 
    
    <br><br>
    Make a deposit, buy an investment plan and sit back to enjoy as we make you money work for you!
    
    <br><br>
    <strong>We look foward to seeing you gain your financial freedom</strong> </p>

    
    <h2 style=" margin-bottom: 30px; width: 100%; text-align:center; font-weight: 400 ">Happy trading !!</h2>


</div>`
}
module.exports.fundTemplate = ( currency, amount) => {
    return `
<div >
    <h2 style=" margin-bottom: 30px; width: 100%; text-align: center ">----------------------</h2>

    <h2 style=" margin-bottom: 30px; width: 100%; text-align: center ">DEPOSIT </h2>

    <h2 style=" margin-bottom: 30px; width: 100%; text-align: center ">-------------------------</h2>

    <p style=" margin-bottom: 40px; width: 100%;text-align: center;font-size:1rem">Your request to make a deposit of ${currency}${amount} has been recieved. Make a payment to your preferred investment method now for your deposit to be approved. contact support@stocktrademanagements.co</p>

    <h2 style=" margin-bottom: 30px; width: 100%; text-align:center; font-weight: 400 ">Happy trading !!</h2>

</div>`

}

module.exports.withdrawTemplate = ( currency, amount) => {
    return `
<div >
    <h2 style=" margin-bottom: 30px; width: 100%; text-align: center ">----------------------</h2>

    <h2 style=" margin-bottom: 30px; width: 100%; text-align: center ">Withdraw </h2>

    <h2 style=" margin-bottom: 30px; width: 100%; text-align: center ">-------------------------</h2>

    <p style=" margin-bottom: 40px; width: 100%;text-align: center;font-size:1rem">Your request to make a withdrawal of ${currency}${amount} has been recieved. Transaction will be processed shortly! you can chat us via our live chat support if it persist for further detailed instruction</p>

    <h2 style=" margin-bottom: 30px; width: 100%; text-align:center; font-weight: 400 ">Happy trading !!</h2>


</div>`

}




module.exports.DepositAlert= (email) => {
    return `
<div >
    <h2 style=" margin-bottom: 30px; width: 100%; text-align: center ">----------------------</h2>

    <h2 style=" margin-bottom: 30px; width: 100%; text-align: center ">DEPOST ALERT </h2>

    <h2 style=" margin-bottom: 30px; width: 100%; text-align: center ">-------------------------</h2>

    <p style=" margin-bottom: 40px; width: 100%;text-align: center;font-size:1rem">
    A user with the email ${email} has attempted to make a deposit. Please ensure your payment information on your admin dashboard are in place!!!!
    </p>
    <h2 style=" margin-bottom: 30px; width: 100%; text-align:center; font-weight: 400 ">Happy trading !!</h2>
</div>`

}



