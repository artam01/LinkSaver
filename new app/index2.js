
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const saveBtn = document.getElementById("save-btn")
const ulEl =document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

//localStorage.setItem("myLeads",JSON.stringify(myLeads))
//console.log(JSON.parse(localStorage.getItem("myLeads")))

if(Boolean(leadsFromLocalStorage)){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    console.log(JSON.parse(localStorage.getItem("myLeads")))
})
saveBtn.addEventListener("click", function(){
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function(tabs) {
        // and use that tab to fill in out title and url
        var tab = tabs[0];
        myLeads.push(tab.url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    });
    //chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      //  myLeads.push(tabs[0].url)
        //localStorage.setItem("myLeads", JSON.stringify(myLeads))
       // render(myLeads)
     // });
   })

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)

})

function render(leads){
        let listItems = ""
    for (let i = 0; i < leads.length; i++){
    listItems += `
    <li>
        <a target='_blank' href='#'>${leads[i]} 
        </a>
    </li>
    `
    }

    ulEl.innerHTML = listItems
}