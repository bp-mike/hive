function printError(elemId, hintMsg){
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validate_purchases_form(){
    var name = document.add_purchase.customer_name.value;
    var phone = document.add_purchase.phone_number.value;
    var email = document.add_purchase.email.value;
    var nin = document.add_purchase.nin.value;
    var ref_no = document.add_purchase.referee_number.value;
    var location = document.add_purchase.location.value;
    var product = document.add_purchase.item_name.value;
    var serial_no = document.add_purchase.item_serialnumber.value;
    var initial_pay = document.add_purchase.initial_pay.value;
    var date = document.add_purchase.date.value;
    var next_instalment_date = document.add_purchase.next_payment_date.value;
    var next_instalment = document.add_purchase.next_instalment.value;
    var receipt = document.add_purchase.purchase_receipt.value;

    // ___ Defining error varriables with defaul value
    var customer_err = phone_err = email_err = nin_err = ref_no_err = 
    location_err = product_err = serial_no_err = initial_pay_err = date_err =  
    instalment_date_err = next_instalment_err = receipt_err = true;

    // _______ validating customer name
    if(name == ""){
        printError("customer_err", "please enter customer name");
    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false){
            printError("customer_err", "please enter a valid name")
        }else{
            printError("customer_err", "");
            customer_err = false;
        }
    }
    // __________ Validating customer phone number
    if(phone == ""){
        printError("phone_err", "please enter tel number");
    }/*else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(phone) === false){
            printError("phone_err", "please enter a valid phone number")
        }else{
            printError("phone_err", "");
            phone_err = false;
        }
    }*/

    // _________ Validate email address
    if(email == ""){
        printError("email_err", "please enter customer Email Address");
    }else{
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false){
            printError("email_err", "please enter a valid Email")
        }else{
            printError("email_err", "");
            email_err = false;
        }
    }

    // _________ Validating nin
    if(nin == ""){
        printError("nin_err", "please enter Customer NIN");
    }else{
        printError("nin_err", "");
        nin_err = false;
    }

    // __________ Validating customer refrence number
    if(ref_no == ""){
        printError("ref_no_err", "please enter tel number");
    }/*else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(ref_no) === false){
            printError("ref_no_err", "please enter a valid phone number")
        }else{
            printError("ref_no_err", "");
            ref_no_err = false;
        }
    }*/

    // _______ validating customer location
    if(location == ""){
    printError("location_err", " customer location required");
    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(location) === false){
            printError("location_err", "please enter a valid name")
        }else{
            printError("location_err", "");
            location_err = false;
        }
    }

    // _______ validating product name
    if(product == ""){
        printError("product_err", "please enter product name");
    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false){
            printError("product_err", "please enter a product name")
        }else{
            printError("product_err", "");
            product_err = false;
        }
    }


    // _______ Validating product serial number
    // look for more validations on serial number
    if(serial_no == ""){
        printError("serial_err", "please enter product serial number");
    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(serial_no) === false){
            printError("serial_err", "please enter a valid Serial number")
        }else{
            printError("serial_err", "");
            serial_err = false;
        }
    }

    // _________ Validate initial pay
    if(initial_pay == ""){
        printError("initial_pay_err", "please enter initial pay");
    }else{
        printError("initial_pay_err", "");
        initial_pay_err = false;
    }

    // _________ Validating date of entry
    if(date == ""){
        printError("date_err", "Date of purchase is required");
    }else{
        printError("date_err", "");
        date_err = false;
    }

    // _________ Validating next instalment date of entry
    if(next_instalment_date == ""){
        printError("instalment_date_err", "Date for next instalment is required");
    }else{
        printError("instalment_date_err", "");
        instalment_date_err = false;
    }

    // _________ Validate  next instalment 
    if(next_instalment == ""){
        printError("next_instalment_err", "please enter next instalment");
    }else{
        printError("next_instalment_err", "");
        next_instalment_err = false;
    }

    // ___________ validating receipt
    if(receipt == ""){
        printError("receipt_err", "receipt required");
    }else{
        printError("receipt_err", "");
        receipt_err = false;
    }
    // _________ Validate  pay intervals
    // if(Pay_Interval == ""){
    //     printError("pay_interval_err", "please enter pay interval");
    // }else{
    //     printError("pay_interval_err", "");
    //     pay_interval_err = false;
    // }


    // _______ Preventing the form from being submited if their are any errors
    if((customer_err || phone_err || email_err || nin_err || ref_no_err || 
        location_err || product_err || serial_no_err || initial_pay_err || date_err ||  
        instalment_date_err || next_instalment_err || receipt_err ) == true){
        // return false
        event.preventDefault()
    }else{
        // return true
        event.currentTarget.submit()
        alert("new purchase recorded")
    }     
}
