function printError(elemId, hintMsg){
    document.getElementById(elemId).innerHTML = hintMsg;
}
    // var letters = /^[A-Za-z]+$/; - only letters
    // /^\d{5}$/ 
    // /^[0-9a-zA-Z]+$/ - Alphanumeric
    // /^[0-9]+$/ - numbers
// ____________ Validating the add agents form
function validate_agent_form(){
    var firstname = document.add_agent.firstname.value;
    var lastname = document.add_agent.lastname.value;
    var username = document.add_agent.username.value;
    var gender = document.add_agent.gender.value;
    var email = document.add_agent.email.value;
    var nin = document.add_agent.nin.value;
    var password = document.add_agent.password.value;
    var city = document.add_agent.city.value;
    var address = document.add_agent.address.value;

    // ___ Defining error varriables with defaul value
    var f_name_err = l_name_err = user_name_err = gender_err = email_err = nin_err = pwd_err = city_err = address_err = true;

    // _______ validating first name
    if(firstname == ""){
        printError("f_name_err", "please enter your name");
    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(firstname) === false){
            printError("f_name_err", "please enter a valid name")
        }else{
            printError("f_name_err", "");
            f_name_err = false;
        }
    }
    // __________ Validating last name
    if(lastname == ""){
        printError("l_name_err", "please enter your name");
    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(lastname) === false){
            printError("f_name_err", "please enter a valid name")
        }else{
            printError("l_name_err", "");
            l_name_err = false;
        }
    }

    // _______ Validating user name
    if(username == ""){
        printError("user_name_err", "please enter your name");
    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(username) === false){
            printError("user_name_err", "please enter a valid name")
        }else{
            printError("user_name_err", "");
            user_name_err = false;
        }
    }

    // _________ Validate email address
    if(email == ""){
        printError("email_err", "please enter your Email Address");
    }else{
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false){
            printError("email_err", "please enter a valid Email")
        }else{
            printError("email_err", "");
            email_err = false;
        }
    }
    // _________ Validating password
    if(password == ""){
        printError("pwd_err", "please enter your password");
    }else{
        printError("pwd_err", "");
        pwd_err = false;
    }

    // _________ Validating nin
    if(nin == ""){
        printError("nin_err", "please enter your NIN");
    }else{
        printError("nin_err", "");
        nin_err = false;
    }

    // _________ validating Address
    if(address == ""){
        printError("address_err", "please enter your Address");
    }else{
        printError("address_err", "");
        address_err = false;
    }

    // ____ Validating city
    if(city == "Choose..."){
        printError("city_err", "please select the city you are From");
    }else{
        printError("city_err", "");
        city_err = false;
    }

    // _____ Validating gender
    if(gender == ""){
        printError("gender_err", "please select your gender");
    }else{
        printError("gender_err", "");
        gender_err = false;
    }
    
    // _______ Preventing the form from being submited if their are any errors
    if((f_name_err || l_name_err || user_name_err || gender_err || email_err || nin_err || pwd_err || city_err || address_err) == true){
        // return false
        event.preventDefault()
    }else{
        // return true
        event.currentTarget.submit()
    }
     
}

// ____________ Validating the add products form
function validate_products_form(){
    var product = document.add_product.product.value;
    var make = document.add_product.make.value;
    var date = document.add_product.date.value;
    var serial_no = document.add_product.serial_no.value;
    var price = document.add_product.price.value;
    var initial_pay = document.add_product.initial_pay.value;
    var Pay_Interval = document.add_product.Pay_Interval.value;
    var category = document.add_product.category.value;
    var stock = document.add_product.stock.value;


    // ___ Defining error varriables with defaul value
    var pdt_err = make_err = date_err = serial_err = px_err = initial_pay_err = pay_interval_err = category_err = stock_err = true;

    // _______ validating product name
    if(product == ""){
        printError("pdt_err", "please enter product name");
    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(product) === false){
            printError("pdt_err", "please enter a valid product name")
        }else{
            printError("pdt_err", "");
            pdt_err = false;
        }
    }
    // __________ Validating product make
    if(make == ""){
        printError("make_err", "please enter product make");
    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(make) === false){
            printError("make_err", "please enter a valid make")
        }else{
            printError("make_err", "");
            make_err = false;
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

    // _________ Validate product price
    if(price == ""){
        printError("px_err", "please enter the price");
    }else{
        printError("px_err", "");
        px_err = false;
    }

    // _________ Validate initial pay
    if(initial_pay == ""){
        printError("initial_pay_err", "please enter initial pay");
    }else{
        printError("initial_pay_err", "");
        initial_pay_err = false;
    }

    // _________ Validate  pay intervals
    if(Pay_Interval == ""){
        printError("pay_interval_err", "please enter pay interval");
    }else{
        printError("pay_interval_err", "");
        pay_interval_err = false;
    }
    
    // _________ Validating date of entry
    if(date == ""){
        printError("date_err", "Date of entry is required");
    }else{
        printError("date_err", "");
        date_err = false;
    }

    // __________ validating stock
    if(stock == ""){
        printError("stock_err", "please provide the available stock");
    }else{
        printError("stock_err", "");
        stock_err = false;
    }
    stock_err

    // ____ Validating category
    if(category == "Choose..."){
        printError("category_err", "please select the category of the product");
    }else{
        printError("category_err", "");
        category_err = false;
    }
    
    // _______ Preventing the form from being submited if their are any errors
    if((pdt_err || make_err || date_err || serial_err || px_err || initial_pay_err || pay_interval_err || category_err || stock_err) == true){
        // return false
        event.preventDefault()
    }else{
        // return true
        event.currentTarget.submit()
    }
     
}

