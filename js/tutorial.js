let usrname = document.querySelector("#name");
let usrage = document.querySelector("#age");
let btn = document.querySelector("#btn");

let getdatabase = () => {
    let geting = sessionStorage.getItem("personss");
    let object = JSON.parse(geting);
    return object;
} ;

let sentdatabase = (obj)=>{
    let shitman = JSON.stringify(obj);
    sessionStorage.setItem("personss", shitman);
} ; 


let sentdata = (objecty) => {
    let objtest = getdatabase();
    if (objtest == null){
        let objtest = [];
        objtest.push(objecty);
        sentdatabase(objtest);
    }else{
        let ind = objtest.findIndex(user => user.name == objecty.name);
        if(ind == -1){
        objtest.push(objecty);
        sentdatabase(objtest);
        }else{
            alert("ok this is my final test")
        }

    }
};




btn.addEventListener(
    "click",()=>{
        let name = usrname.value;
        let age = usrage.value;

        let person = {
            "name" : name ,
            "age" : age 
        };
        sentdata(person);
    }
);




let deleteurass = document.querySelector("#dafaq");

let deledata = () => {
    sessionStorage.removeItem("personss");
};

deleteurass.addEventListener(
    "click",deledata
)

 let gete = document.querySelector("#getbtn");

 gete.addEventListener(
     "click",()=>{
         console.log(getdatabase());
     }
 );