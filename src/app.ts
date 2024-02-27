const appList = Array<AppDetail>()
let frasesLegaisApp: AppDetail =  {
    id: 1,
    name: "Frases Legais",
    description: " 1- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    iconUrl: "",
    appLanguage: AppLanguage.ENGLISH
}

let dailyBlessApp: AppDetail =  {
    id: 2,
    name: "Daily Blesss",
    description: "2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    iconUrl: "",
    appLanguage: AppLanguage.ENGLISH
}

appList.push(frasesLegaisApp)
appList.push(dailyBlessApp)


const appContentArea = document.querySelector(".container__app_content") as HTMLElement | undefined
const selectedApp = document.querySelectorAll(".main_menu__item") as NodeListOf<Element>

selectedApp.forEach((item, index) => {
    item.addEventListener("click", function(e)  {
        e.preventDefault();
    
        const element = e.currentTarget as HTMLElement
        let appId = Number.parseInt(element.getAttribute("data-id"))
        let app = appList.find(f=> f.id === appId)
     
        if(appContentArea) {
            appContentArea.innerHTML = app.description.toString()
        }
    })
})
    

