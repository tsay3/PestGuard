var solution_ids = [];
var pest_id = 1;
// var pest_id = parseInt(getUrlParameter("id"));
// if (isNaN(pest_id) || pest_id > solutions.length || pest_id <= 0) {
//     pest_id = 1;
// }
function loadInfo() {
    console.log(pageInfo);
    document.getElementById("pestTitle").innerHTML = pageInfo.name;
    document.getElementById("pestImage").lastElementChild.src = pageInfo.image;
    document.getElementById("pestDescription").children[0].innerHTML = pageInfo.description1;
    document.getElementById("pestDescription").children[2].innerHTML = pageInfo.description2;
    document.getElementById("pestDescription").children[4].innerHTML = pageInfo.description3;
    pest_id = parseInt(pestsData[pageInfo.index]['id']);
}

function populateResults() {
    const resultBox = document.getElementById("resultsBox");
    pests_to_solutions.forEach(entry => {
        if (pest_id == parseInt(entry['pest_id'])) {
            solution_ids.push(parseInt(entry['solution_id']));
            console.log(solution_ids);
        }
    });

    solution_ids.forEach(solution => {
        const linkBase = document.createElement("a");
        linkBase.setAttribute('href', "solution_results.html?id=" + solution);

        const resultBase = document.createElement("div");
        resultBase.classList.add('result');
    
        const resultPic        = document.createElement("div");
        resultPic.classList.add('resultPicture');
        const resultImg = document.createElement('img');
        resultImg.setAttribute('src', solutions[solution-1]['img']);
        resultImg.setAttribute('width', '85');
        resultPic.appendChild(resultImg);
        resultBase.appendChild(resultPic);
    
        const resultName    = document.createElement("div");
        resultName.classList.add('resultName');
        resultName.innerHTML = solutions[solution-1]['name'];
        resultBase.appendChild(resultName);
    
        linkBase.appendChild(resultBase);
        resultBox.appendChild(linkBase);
    })
}

function updateResults() {
    const resultBox = document.getElementById("resultsBox");
    const naturalBox = document.getElementById('naturalSolution');
    const ecoBox = document.getElementById('ecoSolution');
    const petBox = document.getElementById('petSolution');
    const links = Array.from(resultBox.children);
    var i = 0;
    links.forEach(link => {
        const solution_id = solution_ids[i] - 1;
        if ((!solutions[solution_id]['isNatural'] && naturalBox.checked) ||
            (!solutions[solution_id]['ecoFriendly'] && ecoBox.checked) ||
            (!solutions[solution_id]['petFriendly'] && petBox.checked) ) {
            link.classList.add('hiddenItem');
        } else {
            link.classList.remove('hiddenItem');
        }
        i++;
    })
}