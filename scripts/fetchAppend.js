//get Random Meals
//we need to make API call
//append(what & where)-->(data & html location)
async function getData(url) {
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch (error) {
        console.log('error:', error)

    }
}
function append(data, container) {
    data.forEach(({ strMeal,strMealThumb }) => {
        let div = document.createElement('div');
        let p = document.createElement('p');
        let img = document.createElement('img');
        p.innerText = strMeal;
        img.src = strMealThumb;
        div.append(img,p);
        container.append(div);
    });
}

export {getData,append}