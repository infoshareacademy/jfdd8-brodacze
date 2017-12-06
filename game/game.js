function createTable(player, fruitPos) {
    var i, j, domNode, domNode2;
    var table = document.createElement('section');
    table.classList.add('table');
    for (i = 0; i < 10; i += 1) {
        domNode = document.createElement('div');
        for (j = 0; j < 10; j += 1) {
            domNode2 = document.createElement('div');
            // if (i === playerPos.y && j === playerPos.x) {
            //   domNode2.classList.add('player');
            // }
            for (var k = 0; k < player.length; k += 1) {
                if (i === player[k].y && j === player[k].x) {
                    domNode2.classList.add('player');
                }
            }

            if (i === fruitPos.y && j === fruitPos.x) {
                domNode2.classList.add('fruit');
            }
            domNode.appendChild(domNode2);
        }
        table.appendChild(domNode);
    }

    return table;
}

function showElement(parentId, element) {
    document.getElementById(parentId).innerHTML = "";
    document.getElementById(parentId).appendChild(element);
}

function getRandomPos(maxX, maxY) {
    return {
        x: Math.floor(Math.random() * maxX),
        y: 0
    }
}