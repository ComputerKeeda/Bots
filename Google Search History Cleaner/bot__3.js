let allRemove = document.getElementsByClassName("sbai");
let deleteConfirm = document.getElementsByClassName("LgbsSe")
setInterval(() => {
    for (let i = 0; i < allRemove.length; i++) {
        allRemove[i].click();
        deleteConfirm[3].click();
        await new Promise(resolve => setTimeout(resolve, 500));
    }
}, 500);
