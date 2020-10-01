class Mobile{
    constructor(_name) {
        this.battery = 100;
        this.name = _name;
        this.msg = "";
        this.inbox = [];
        this.outbox = [];
    }

    writeMsg(msg){
        if(this.battery > 0){
            this.msg = msg;
        }else{
            alert("Da het pin");
        }

    }

    sendMsg(mobile){
        if(this.battery > 0){
            mobile.receiveMsg(this.name,this.msg);
            this.outbox.push(this.msg);
            this.battery -= 10;
            console.log(this.battery);
        }else{
            alert("Da het pin");
        }

    }

    receiveMsg(name,msg){
        this.inbox.push(msg)
    }
}

let mobile1 = new Mobile("iphone");
let mobile2 = new Mobile("nokia");

function writeMess(mobile,mess) {
    mobile.writeMsg(mess);
}

function sendMess(mobile1,mobile2) {
    mobile1.sendMsg(mobile2);
    display();
}

function display() {
    displayMobile(mobile1);
    displayMobile(mobile2);
}

function displayMobile(mobile) {
    document.getElementById(mobile.name+"-name").innerHTML = mobile.name;
    document.getElementById(mobile.name+"-inbox").innerHTML = mobile.inbox;
    document.getElementById(mobile.name+"-outbox").innerHTML = mobile.outbox;

    document.getElementById(mobile.name+"-msg").value = "";
}

display();