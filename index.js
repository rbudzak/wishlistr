arrWishlist = [];
objWishItem = {
    title: "Cool Thing",
    image: "https://media.sweetwater.com/m/products/image/ab8e89b8744UO6gPl9ruaLHzPrtjQci7RdwDQ6ud.wm-lw.jpg",
    link: "https://www.sweetwater.com/store/detail/Sub37--moog-subsequent-37-analog-synthesizerlink",
    price: 1899.00,
    quantity: 1,
    timestamp: 1746124827
};

function generateListItem(objItem){
    htmlListItem = document.createElement("tr");
    htmlTitleCell = document.createElement("td");
    htmlImageCell = document.createElement("td");
    htmlPriceCell = document.createElement("td");
    htmlQuantCell = document.createElement("td");
    htmlTimeCell = document.createElement("td");

    htmlTitleCell.appendChild(document.createElement("a"));
    htmlTitleCell.children[0].setAttribute("href", objItem.link);
    htmlTitleCell.children[0].textContent.title = objItem.title;

    htmlImageCell.appendChild(document.createElement("img"));
    htmlImageCell.children[0].setAttribute("src", objItem.image);

    htmlPriceCell.textContent = "$" + objItem.price;

    htmlQuantCell.textContent = objItem.quantity;

    htmlTimeCell.textContent = (new Date(1746124827*1000)).toDateString();

    htmlListItem.append(htmlTitleCell, htmlImageCell, htmlPriceCell, htmlQuantCell, htmlTimeCell);
}