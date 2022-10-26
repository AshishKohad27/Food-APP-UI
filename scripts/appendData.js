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
export {append}